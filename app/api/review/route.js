import { NextResponse } from "next/server"
import connectDB from "../../../node-server/config/mongodb"
import Review from "../../../node-server/models/reviews"

export async function POST(request) {
  await connectDB()
  try {
    const { name, review } = await request.json()

    if (!name || !review) {
      return NextResponse.json({ error: "Name and review are required" }, { status: 400 })
    }

    const newReview = await Review.create({ name, review })
    return NextResponse.json({ message: "Review submitted", data: newReview }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 })
  }
}

export async function GET() {
  await connectDB()
  try {
    const reviews = await Review.find().sort({ createdAt: -1 })
    return NextResponse.json(reviews)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 })
  }
}
