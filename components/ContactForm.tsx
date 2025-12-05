// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hook to API later
    setSent(true);
    setTimeout(() => setSent(false), 3500);
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