// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  const { name, email, phone, postalCode, preferredContact, startDate, services, frequency, message } = await req.json();
  
  try {
    await resend.emails.send({
        from: 'Website Form <onboarding@resend.dev>',
        to: 'info@mynewfriend.ca', // Replace with your email
        subject: 'New Quote Request',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #555;">New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Postal Code:</strong> ${postalCode}</p>
            <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>Services:</strong> ${services.map((service: any) => `<span style="background-color: #f0f0f0; padding: 2px 6px; border-radius: 4px; margin-right: 4px;">${service}</span>`).join('')}</p>
            <p><strong>Frequency:</strong> ${frequency}</p>
            <p><strong>Message:</strong></p>
            <p style="border-left: 4px solid #ccc; padding-left: 8px; margin: 12px 0;">${message}</p>
            <footer style="margin-top: 16px; font-size: 0.9em; color: #777;">
              <p>— Quote Request System (Website Form)</p>
            </footer>
          </div>
        `
      });
      

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}