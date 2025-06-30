// /api/send-consultation/route.js (App Router) or /pages/api/send-consultation.js (Pages Router)
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ConsultationEmail from './template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Debug: Log the incoming data
    console.log('Received data:', body)

    const { data, error } = await resend.emails.send({
      from: 'Consultation Form <noreply@profusecc.ai>',
       to: ['tabehisaac@gmail.com'],
      reply_to: body.email, // Add reply-to address
      subject: `New Consultation Request from ${body.firstName} ${body.lastName}`,
      react: ConsultationEmail(body),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error }, { status: 400 })
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}