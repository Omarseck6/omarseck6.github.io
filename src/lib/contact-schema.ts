import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email."),
  subject: z.string().trim().min(3, "Please add a subject.").max(120),
  message: z.string().trim().min(20, "Please share a little more detail.").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
