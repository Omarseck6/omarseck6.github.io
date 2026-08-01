"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendContactMessage } from "@/actions/contact";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (input: ContactInput) => {
    startTransition(async () => {
      const result = await sendContactMessage(input);
      if (result.success) {
        toast.success("Message sent. I’ll get back to you shortly.");
        reset();
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <label><span>Name</span><input {...register("name")} placeholder="Your name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name ? <small>{errors.name.message}</small> : null}</label>
        <label><span>Email</span><input {...register("email")} placeholder="you@company.com" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email ? <small>{errors.email.message}</small> : null}</label>
      </div>
      <label><span>Subject</span><input {...register("subject")} placeholder="A new product, platform or idea" aria-invalid={Boolean(errors.subject)} />{errors.subject ? <small>{errors.subject.message}</small> : null}</label>
      <label><span>Message</span><textarea {...register("message")} placeholder="Tell me where you are, what you’re building and what success looks like." rows={6} aria-invalid={Boolean(errors.message)} />{errors.message ? <small>{errors.message.message}</small> : null}</label>
      <button className="button button-primary form-submit" disabled={pending} type="submit">{pending ? <LoaderCircle className="spin" size={18} /> : <>Send inquiry <ArrowUpRight size={18} /></>}</button>
    </form>
  );
}
