"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { portfolio } from "@/data/portfolio";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

// Static hosting (GitHub Pages) has no server: submissions go to a third-party form endpoint.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || portfolio.contactFormEndpoint;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (input: ContactInput) => {
    if (!endpoint) {
      const body = `${input.message}\n\n— ${input.name} (${input.email})`;
      window.location.assign(`mailto:${portfolio.email}?subject=${encodeURIComponent(`[Portfolio] ${input.subject}`)}&body=${encodeURIComponent(body)}`);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...input, _subject: `[Portfolio] ${input.subject}`, _replyto: input.email }),
      });
      if (!response.ok) throw new Error(`Form endpoint responded ${response.status}`);
      toast.success("Message sent. I’ll get back to you shortly.");
      reset();
    } catch {
      toast.error("Your message could not be sent. Please try again or email me directly.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <label><span>Name</span><input {...register("name")} placeholder="Your name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name ? <small>{errors.name.message}</small> : null}</label>
        <label><span>Email</span><input {...register("email")} placeholder="you@company.com" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email ? <small>{errors.email.message}</small> : null}</label>
      </div>
      <label><span>Subject</span><input {...register("subject")} placeholder="A new product, platform or idea" aria-invalid={Boolean(errors.subject)} />{errors.subject ? <small>{errors.subject.message}</small> : null}</label>
      <label><span>Message</span><textarea {...register("message")} placeholder="Tell me where you are, what you’re building and what success looks like." rows={6} aria-invalid={Boolean(errors.message)} />{errors.message ? <small>{errors.message.message}</small> : null}</label>
      <button className="button button-primary form-submit" disabled={isSubmitting} type="submit">{isSubmitting ? <LoaderCircle className="spin" size={18} /> : <>Send inquiry <ArrowUpRight size={18} /></>}</button>
    </form>
  );
}
