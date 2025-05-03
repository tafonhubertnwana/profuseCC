import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Consultation from "@/models/consultation";
import { Resend } from "resend";
import ConsultationEmail from "./template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      interest,
      date,
      time,
      comments,
      recaptchaToken, 
    } = await req.json();

    // Save to MongoDB
    await connectToDatabase();

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
      recaptchaToken,
    });
    await newConsultation.save();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Consultation Form <onboarding@resend.dev>", // Update with your domain
      to: "tafonsoftwarespecialist@gmail.com", // Your company email
      subject: "New Consultation Request",
      react: ConsultationEmail({
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        interest,
        date,
        time,
        comments,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return NextResponse.json(
      { message: "Consultation request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation:", error);
    return NextResponse.json(
      { message: "Failed to submit consultation.", error: error.message },
      { status: 500 }
    );
  }
}