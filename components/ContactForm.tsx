// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      postal: (form.elements.namedItem("postal") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="contact-form-panel card-dark">
      <h3 className="contact-form-title">Quick Contact Form</h3>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name*" required />
        <input name="email" type="email" placeholder="Email*" required />
        <input name="phone" type="tel" placeholder="Phone Number*" required />
        <input name="postal" type="text" placeholder="Postal Code" />
        <input name="subject" type="text" placeholder="Subject*" required />
        <textarea name="message" placeholder="Write Your Messages..." rows={6} required />
        <button type="submit" className="contact-submit-btn">Send Message</button>
      
      </form>

      {sent && <div className="contact-form-success">Thanks — we received your message.</div>}
    </div>
  );
}