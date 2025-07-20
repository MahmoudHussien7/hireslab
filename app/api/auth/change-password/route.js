import { NextResponse } from "next/server"
import User from "@/node-server/models/user"
import { verifyToken } from "@/node-server/middleware/auth"
import connectDB from "@/node-server/config/mongodb"

export async function POST(request) {
  await connectDB()
  try {
    const decodedUser = await verifyToken(request) // Verify token and get user info
    const { oldPassword, newPassword } = await request.json()

    const user = await User.findById(decodedUser.id)
    if (!user || !(await user.comparePassword(oldPassword))) {
      return NextResponse.json({ message: "Old password is incorrect" }, { status: 400 })
    }

    user.password = newPassword
    await user.save()

    return NextResponse.json({ message: "Password changed successfully" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: err.message || "Server error" }, { status: 500 })
  }
}
