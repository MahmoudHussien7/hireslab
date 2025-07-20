import { NextResponse } from "next/server"
import connectDB from "../../../node-server/config/mongodb"
import Subscriber from "../../../node-server/models/subscribe"

export async function POST(request) {
  await connectDB()
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const exists = await Subscriber.findOne({ email })
    if (exists) {
      return NextResponse.json({ error: "Already subscribed" }, { status: 400 })
    }

    await Subscriber.create({ email })
    return NextResponse.json({ message: "Subscribed successfully" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 })
  }
}
