import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/contact';
import { Resend } from 'resend';
import EmailTemplate from './template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Parse the request body
    const body = await request.json();
    const { name, email, phone, address = '', message = '' } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    // Create new contact document
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      address: address.trim(),
      message: message.trim(),
    });

    // Save to database
    const savedContact = await newContact.save();

    // Send confirmation email to the user
    const userEmail = await resend.emails.send({
      from: 'Your Company <contact@yourdomain.com>',
      to: [savedContact.email],
      subject: `Thank you for contacting us, ${savedContact.name}!`,
      react: EmailTemplate({
        name: savedContact.name,
        email: savedContact.email,
        phone: savedContact.phone,
        address: savedContact.address,
        message: savedContact.message,
      }),
    });

    // Send notification email to your team
    const { data, error } = await resend.emails.send({
      from: "Consultation Form <onboarding@resend.dev>",
      to: "tafonsoftwarespecialist@gmail.com",  // Replace with your team email
      subject: `New contact form submission from ${savedContact.name}`,
      react: EmailTemplate({
        name: savedContact.name,
        email: savedContact.email,
        phone: savedContact.phone,
        address: savedContact.address,
        message: savedContact.message,
      }),
    });

    if (error) {
      console.error("Error sending team notification email:", error);
      return NextResponse.json(
        { success: false, message: 'Failed to send notification email to the team.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: savedContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: 'Email already exists in our system' },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
