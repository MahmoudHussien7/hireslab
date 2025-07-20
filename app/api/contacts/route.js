import { NextResponse } from "next/server"
import connectDB from "../../../node-server/config/mongodb"
import Contact from "../../../node-server/models/contact"
import nodemailer from "nodemailer"
import { uploadFileToFirebase } from "../../../node-server/utils/firebaseUpload"

export const runtime = "nodejs" // Force Node.js runtime if in /app

export async function POST(request) {
  await connectDB()
  try {
    const formData = await request.formData()
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")
    const company = formData.get("company")
    const role = formData.get("role")
    const cvFile = formData.get("cv")

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 })
    }

    let cvUrl = null
    if (cvFile && typeof cvFile.arrayBuffer === "function") {
      cvUrl = await uploadFileToFirebase(cvFile, "cv")
    }

    const newMessage = new Contact({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      company,
      role,
      cv: cvUrl,
    })

    await newMessage.save()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mahmoudabdulhaliem@gmail.com",
      subject: `New Contact Message - ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${role ? `<p><strong>Role:</strong> ${role}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        ${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">Download CV</a></p>` : ""}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Message sent successfully ✅" }, { status: 201 })
  } catch (err) {
    console.error("Error sending message:", err)
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 })
  }
}
