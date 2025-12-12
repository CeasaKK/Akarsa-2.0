// components/CreativeAIHero.tsx
import Image from "next/image";

export default function CreativeAIHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        {/* Background image */}
        

        {/* Gradient overlay */}
        <div className="service-hero-overlay" />

        {/* Centered text */}
        <div className="service-hero-content">
          <h1 className="hero-title">Creative AI Collaboration</h1>
          <p className="hero-text">
            We leverage AI to co-create innovative designs and solutions that
            push creative boundaries. Combining technology and imagination, we
            deliver unique, future-ready results tailored to your brand.
          </p>
        </div>
      </div>
    </header>
  );
}