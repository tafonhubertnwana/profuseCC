import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import TestimonialEmailTemplate from './template';

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

    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.review || !body.rating) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Testimonial Submission <onboarding@resend.dev>',
      to: ['Info@profusecc.ai'],
      reply_to: body.email || 'no-reply@example.com',
      subject: `New Testimonial from ${body.name}`,
      react: TestimonialEmailTemplate(body),
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