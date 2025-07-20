import { bucket } from "../config/firebase"
import { v4 as uuidv4 } from "uuid"
import { Buffer } from "buffer"

export const uploadFileToFirebase = async (file, folder = "") => {
  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${folder ? folder + "/" : ""}${uuidv4()}-${file.name}`
  const fileUpload = bucket.file(filename)

  const stream = fileUpload.createWriteStream({
    metadata: {
      contentType: file.type,
    },
  })

  return new Promise((resolve, reject) => {
    stream.on("error", (error) => reject(error))

    stream.on("finish", async () => {
      await fileUpload.makePublic()
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`
      resolve(publicUrl)
    })

    stream.end(buffer)
  })
}
