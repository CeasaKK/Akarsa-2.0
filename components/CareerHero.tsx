// components/CareerHero.tsx
import Image from "next/image";
import React from "react";

export default function CareerHero() {
  return (
    <header className="career-hero">
      <div className="career-hero-banner">
        {/* put a wide hero image at public/career/career-hero.jpg */}
        <Image
          src="/BG Gradient.png"
          alt="Career hero"
          fill
          priority
          className="career-hero-bg"
        />
        <div className="career-hero-overlay" />
        <div className="career-hero-content">
          <h1 className="career-hero-title">Career</h1>
          <p className="career-hero-sub">
            Our career isn’t just a job — it’s a journey of growth, creativity, and impact.
            Together, we shape ideas that redefine the future.
          </p>
        </div>
      </div>
    </header>
  );
}