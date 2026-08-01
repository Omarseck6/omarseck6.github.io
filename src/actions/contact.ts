"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact-email";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export type ContactResult = { success: true } | { success: false; message: string };

export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) return { success: false, message: "Please check the information provided." };

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  if (!apiKey || !recipient) {
    if (process.env.NODE_ENV === "development") {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return { success: true };
    }
    return { success: false, message: "The email service is not configured yet." };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: recipient,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      react: ContactEmail(parsed.data),
    });
    if (error) return { success: false, message: "Your message could not be sent. Please try again." };
    return { success: true };
  } catch {
    return { success: false, message: "Your message could not be sent. Please try again." };
  }
}
