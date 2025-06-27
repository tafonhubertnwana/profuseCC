import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ChatEmailTemplate } from './template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Verify the content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Request must be JSON' },
        { status: 400 }
      );
    }

    // Parse the request body
    const requestBody = await request.json();
    const { email } = requestBody;
    
    // Validate email
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'ProfuseCC Support <onboarding@resend.dev>',
      to: ['tafonsoftwarespecialist@gmail.com'],
      reply_to: email || 'no-reply@example.com', // Changed from body.email to email
      subject: 'Thank you for contacting ProfuseCC',
      react: ChatEmailTemplate({ email }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}