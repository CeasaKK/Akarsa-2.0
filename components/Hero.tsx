
// components/Hero.tsx
import Link from "next/link";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-logo">
  <img src="/akarsa.png" alt="Akarsa Logo" />
</div>

        <h1 className="hero-title">
          Crafting Digital Experiences
          <br />
          That Inspire Growth
        </h1>

        <p className="hero-text">
          At Akarsa, we blend creativity, technology, and strategy to design powerful
          digital solutions that inspire growth. From graphic design and branding to
          web development, digital marketing, and AI-powered collaborations, we help
          brands evolve, connect, and thrive in today&apos;s fast-changing world.
        </p>

        <div className="hero-actions">
  <Link href="#services">
    <button className="btn btn-primary">Explore Services</button>
  </Link>

  <Link href="#portfolio">
    <button className="btn btn-outline">View Portfolios</button>
  </Link>
</div>

        <div className="hero-social-proof">
          <div className="hero-avatars">
            <div className="avatar-circle" ><img src="/hero/Careers 1.svg" alt="User 1" /></div>
            <div className="avatar-circle" ><img src="/hero/Careers 2.svg" alt="User 2" /></div>
            <div className="avatar-circle" ><img src="/hero/Careers 3.svg" alt="User 3" /></div>
            <div className="avatar-badge">+90</div>
          </div>
          <p className="hero-social-text">
            Powering Growth For 100+ Businesses
          </p>
        </div>
      </div>
    </section>
  );
}