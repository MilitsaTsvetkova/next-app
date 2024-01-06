import { Resend } from 'resend'
import WelcomeTemplate from '../../../emails/WelcomeTemplate'
import { NextResponse } from 'next/server'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST() {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'militsa88@yahoo.com',
    subject: 'Hello World',
    react: <WelcomeTemplate name='Militsa' />,
  })
  return NextResponse.json({})
}
