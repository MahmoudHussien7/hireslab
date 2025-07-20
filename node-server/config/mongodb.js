import mongoose from "mongoose"

let isConnected = false

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected.")
    return
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Hires-Lab",
    })
    isConnected = true
    console.log("MongoDB connected ✅")
  } catch (err) {
    console.error("MongoDB connection error ❌:", err.message)
    throw new Error("Failed to connect to MongoDB")
  }
}

export default connectDB
