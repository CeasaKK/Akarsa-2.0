// components/BrandingHero.tsx
import Image from "next/image";

export default function BrandingHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        {/* Background image */}
       

        {/* Gradient overlay (same style as other service heroes) */}
        <div className="service-hero-overlay" />

        {/* Centered text */}
        <div className="service-hero-content">
          <h1 className="hero-title">Branding &amp; Strategy</h1>
          <p className="hero-text">
            We create brand strategies that align your vision with your audience’s
            needs, ensuring consistency and impact across every platform.
          </p>
        </div>
      </div>
    </header>
  );
}