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
    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 })
    }

    return NextResponse.json({ token: generateToken(user) })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
