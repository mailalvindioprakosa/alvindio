import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Field wajib tidak lengkap." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Saraya Website <noreply@saraya.website>",
      to: process.env.CONTACT_EMAIL ?? "info@saraya.website",
      subject: `Pesan baru dari ${name}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No. HP:</strong> ${phone ?? "-"}</p>
        <p><strong>Pesan:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}
