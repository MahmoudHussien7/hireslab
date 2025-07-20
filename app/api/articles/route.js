import { NextResponse } from "next/server"
import connectDB from "../../../node-server/config/mongodb"
import Article from "../../../node-server/models/article"
import { verifyToken } from "../../../node-server/middleware/auth"
import { uploadFileToFirebase } from "../../../node-server/utils/firebaseUpload"

export async function GET() {
  await connectDB()
  try {
    const articles = await Article.find()
    return NextResponse.json({ success: true, data: articles })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 })
  }
}

export async function POST(request) {
  await connectDB()
  try {
    await verifyToken(request) // Protect this route

    const formData = await request.formData()
    const name = formData.get("name")
    const date = formData.get("date")
    const readingTime = formData.get("readingTime")
    const content = formData.get("content")
    const writer = formData.get("writer") // This might be a JSON string
    const tags = formData.get("tags") // This might be a JSON string
    const category = formData.get("category")
    const imageFile = formData.get("image") // This is the File object

    let imageUrl = null
    if (imageFile instanceof Blob) {
      imageUrl = await uploadFileToFirebase(imageFile, "articles")
    }

    const parsedWriter = typeof writer === "string" ? JSON.parse(writer) : writer
    const parsedTags = typeof tags === "string" ? JSON.parse(tags) : tags

    if (
      !name ||
      !date ||
      !readingTime ||
      !imageUrl ||
      !content ||
      !parsedWriter?.name ||
      !parsedWriter?.image ||
      !parsedWriter?.about
    ) {
      return NextResponse.json({ success: false, message: "All article fields are required." }, { status: 400 })
    }

    const newArticle = new Article({
      name,
      date,
      readingTime,
      image: imageUrl,
      content,
      writer: parsedWriter,
      tags: parsedTags,
      category,
    })

    await newArticle.save()

    return NextResponse.json({ success: true, data: newArticle }, { status: 201 })
  } catch (error) {
    console.error("Error creating article:", error.message)
    return NextResponse.json({ success: false, message: error.message || "Server Error" }, { status: 500 })
  }
}
