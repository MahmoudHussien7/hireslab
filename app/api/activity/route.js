import { NextResponse } from "next/server"
import connectDB from "../../../node-server/config/mongodb"
import Activity from "../../../node-server/models/activity"
import Subscriber from "../../../node-server/models/subscribe"
import sendEmail from "../../../node-server/utils/sendEmail"
import { verifyToken } from "../../../node-server/middleware/auth"

export async function POST(request) {
  await connectDB()
  try {
    await verifyToken(request) // Protect this route

    const { title, description } = await request.json()
    const activity = await Activity.create({ title, description })

    const subscribers = await Subscriber.find()

    for (const sub of subscribers) {
      await sendEmail(sub.email, "New Activity Added", `Check out: ${title}`)
    }

    return NextResponse.json(activity, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 })
  }
}
