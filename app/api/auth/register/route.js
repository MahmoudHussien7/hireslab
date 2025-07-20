import { NextResponse } from "next/server"
import connectDB from "../../../config/mongodb"
import User from "../../../models/user"
import jwt from "jsonwebtoken"

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })
}

export async function POST(request) {
  await connectDB()
  try {
    const { email, password } = await request.json()
    const existing = await User.findOne({ email })
    if (existing) {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 })
    }

    const user = await User.create({ email, password })
    return NextResponse.json({ token: generateToken(user) }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
