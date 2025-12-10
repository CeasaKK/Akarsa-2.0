// components/WebMaintenanceHero.tsx
import Image from "next/image";

export default function WebMaintenanceHero() {
  return (
    <header className="service-hero-wrapper">
      <div className="service-hero-banner">
        {/* Background image */}
        

        {/* Gradient overlay (same style as webdev hero) */}
        <div className="service-hero-overlay" />

        {/* Centered content */}
        <div className="service-hero-content">
          <h1 className="hero-title">Web Maintenance</h1>
          <p className="hero-text">
            Building fast, responsive, and SEO-friendly websites that elevate your digital
            presence. We combine design, functionality, and technology to create seamless
            online experiences for your audience.
          </p>
        </div>
      </div>
    </header>
  );
}