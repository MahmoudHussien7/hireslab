import admin from "firebase-admin"
const serviceAccount = require("./canteen-e3751-firebase-adminsdk-ba15h-9b0addc958.json")


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  })
}

const bucket = admin.storage().bucket()

export { bucket }
