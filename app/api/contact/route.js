import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from './template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Request must be JSON' }, { status: 400 });
    }

    const body = await request.json();

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Resend SDK throws on error, so await send and catch exceptions
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['tafonsoftwarespecialist@gmail.com'],
      reply_to: body.email,
      subject: `New Contact from ${body.name}`,
      react: EmailTemplate(body),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    // Optionally serialize error message for client
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
