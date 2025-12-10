// components/AboutHero.tsx
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Background image + gradient overlay */}
      <div className="about-hero-bg">
        <Image
          src="/BG Gradient.png" // put your about hero background image here
          alt="Team working together at Akarsa"
          fill
          priority
          className="about-hero-bg-image"
        />
        <div className="about-hero-overlay" />
      </div>

      {/* Centered content */}
      <div className="about-hero-content">
        <p className="section-heading-eyebrow">About Us</p>
        <h1 className="hero-title about-hero-title">About Us</h1>
        <p className="hero-text about-hero-text">
          We don’t just create designs—we build experiences. Akarsa helps
          businesses transform ideas into powerful digital identities that stand
          out in today&apos;s competitive world.
        </p>
      </div>
    </section>
  );
}