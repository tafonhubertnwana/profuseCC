import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectToDatabase } from "@/lib/mongodb";
import Consultation from "@/models/consultation"; // Ensure the model is correct

export async function POST(req) {
  try {
    const { firstName, lastName, email, phoneNumber, company, interest, date, time, comments } = await req.json();

    // 1️ Connect to MongoDB
    await connectToDatabase();

    // 2️Store consultation data in MongoDB
    const newConsultation = new Consultation({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      interest,
      date,
      time,
      comments,
    });
    await newConsultation.save();

    // 3️ Setup Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Company Email (e.g., info@profusecc.com)
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // 4️ Send email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@profusecc.com",
      subject: "New Consultation Request",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Company: ${company || "N/A"}
        Interest: ${interest}
        Date: ${date}
        Time: ${time}
        Comments: ${comments || "N/A"}
      `,
    };

    await transporter.sendMail(mailOptions);

    // 5️ Send Success Response
    return NextResponse.json({ message: "Consultation request submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing consultation:", error);
    return NextResponse.json({ message: "Failed to submit consultation.", error: error.message }, { status: 500 });
  }
}
