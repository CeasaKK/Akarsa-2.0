// components/DigitalMarketingHero.tsx
import Image from "next/image";

export default function DigitalMarketingHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        {/* Background image */}
       

        {/* Gradient overlay */}
        <div className="service-hero-overlay" />

        {/* Centered text */}
        <div className="service-hero-content">
          <h1 className="hero-title">Digital Marketing</h1>
          <p className="hero-text">
            We create data-driven campaigns that boost your brand&apos;s online
            presence and engagement. From SEO to social media, our strategies
            deliver measurable results and meaningful connections.
          </p>
        </div>
      </div>
    </header>
  );
}