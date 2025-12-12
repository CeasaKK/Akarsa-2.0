// components/faqsHero.tsx
import Image from "next/image";
import React from "react";

export default function FaqsHero() {
  return (
    <header className="faqs-hero">
      <div className="faqs-hero-banner">
        <Image
          src="/BG Gradient.png"
          alt="faqs hero"
          fill
          priority
          className="faqs-hero-bg"
        />
        <div className="faqs-hero-overlay" />
        <div className="faqs-hero-content">
          <h1 className="faqs-hero-title">Faqs</h1>
          <p className="faqs-hero-sub">
            A showcase of work that blends innovation with functionality. See how we help brands grow
            through design and digital excellence.
          </p>
        </div>
      </div>
    </header>
  );
}