import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Field wajib tidak lengkap." }, { status: 400 });
    }

    // Save to Neon so it appears in the admin "Pesan Masuk"
    try {
      const sql = getDb();
      await sql`
        INSERT INTO contact_messages (name, email, phone, message)
        VALUES (${name}, ${email}, ${phone ?? null}, ${message})
      `;
    } catch (e) {
      console.error("Failed to save message to DB:", e);
    }

    // Best-effort email notification (only if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Alvin Dio Prakosa <noreply@alvindioprakosa.com>",
          to: process.env.CONTACT_EMAIL ?? "mail.alanari@gmail.com",
          subject: `Pesan baru dari ${name}`,
          html: `
            <h2>Pesan Baru dari Website</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>No. HP:</strong> ${phone ?? "-"}</p>
            <p><strong>Pesan:</strong><br/>${message}</p>
          `,
        });
      } catch (e) {
        console.error("Failed to send email:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}
