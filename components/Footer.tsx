// components/Footer.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder behavior — no backend. Replace with real submit later.
    if (!agree) {
      alert("Please agree to the privacy policy before subscribing.");
      return;
    }
    if (!email) {
      alert("Enter a valid email address.");
      return;
    }
    alert(`Subscribed: ${email}`);
    setEmail("");
  }

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-inner">
        {/* Column 1: Logo, blurb, social */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            {/* replace with img/logo if you have one */}
            <img src="/logo-white.png" alt="Akarsa" className="footer-logo-img" />
          </div>

          <p className="footer-blurb">
            Akarsa is your trusted partner for graphic design, branding, web development,
            digital marketing, and AI-powered creativity. Let’s shape the future together.
          </p>

          <div className="footer-socials" aria-label="Akarsa social links">
            <Link href="#" className="social-btn" aria-label="Facebook">
              {/* facebook svg */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M22 12.073C22 6.485 17.523 2 12 2S2 6.485 2 12.073c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.773-1.63 1.565v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.2 22 17.064 22 12.073z" fill="#FF3366"/>
              </svg>
            </Link>

            <Link href="#" className="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#FF3366" strokeWidth="1.6" fill="none"/>
                <circle cx="12" cy="12" r="3.2" stroke="#FF3366" strokeWidth="1.6" fill="none" />
                <circle cx="18.2" cy="5.8" r=".6" fill="#FF3366" />
              </svg>
            </Link>

            <Link href="#" className="social-btn" aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M23 3.2c-.8.35-1.65.6-2.54.72a4.36 4.36 0 0 0-7.44 3v.43A12.4 12.4 0 0 1 3 4.6s-4 9 7 13a13 13 0 0 1-7 2c9 5 20 0 20-11.5v-.5A8.2 8.2 0 0 0 23 3.2z" fill="#FF3366"/>
              </svg>
            </Link>

            <Link href="#" className="social-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M22 7.2s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1-2.6-.2-6.5-.2-6.5-.2h-.1s-3.9 0-6.5.2c-.4 0-1.2.1-1.9 1C2.2 5.6 2 7.2 2 7.2S2 9 2 10.7v2.5C2 17 4 19 4 19s1.4.7 3 .6c2.2.2 6.5.2 6.5.2s3.9 0 6.5-.2c.4 0 1.2-.1 1.9-1 .6-.6.8-2.3.8-2.3S22 14 22 12.7v-2.5C22 9 22 7.2 22 7.2z" fill="#FF3366"/>
                <path d="M10 14V10l4 2-4 2z" fill="#fff"/>
              </svg>
            </Link>

            <Link href="#" className="social-btn" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2C7.03 2 3 6.03 3 11c0 4 2.5 7.3 6.1 8-.1-.7-.2-1.8 0-2.5.2-.6 1.5-3.9 1.5-3.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.4.7 1.4 1.6 0 1-.6 2.6-1 3.9-.3 1 .7 1.9 1.6 1.9 1.9 0 3.3-2.3 3.3-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.1 0 1 .3 1.8.8 2.4.2.2.2.3.1.6-.1.2-.4.7-.5.9-.1.2-.4.3-.7.2-2.2-.8-3.3-3-3.3-5.4C3 6 7 2 12 2z" fill="#FF3366"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <nav className="footer-col footer-links" aria-label="Quick links">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#why-us">Why Choose Akarsa</Link></li>
            <li><Link href="#portfolio">Porolio</Link></li>
            <li><Link href="#team">Our Team</Link></li>
            <li><Link href="#careers">Careers</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#faqs">FAQs</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Column 3: Our Services */}
        <nav className="footer-col footer-services" aria-label="Our services">
          <h4 className="footer-col-title">Our Services</h4>
          <ul>
            <li><Link href="#graphic-design">Graphic Design</Link></li>
            <li><Link href="#web-development">Web Development</Link></li>
            <li><Link href="#web-maintenance">Web Maintenance</Link></li>
            <li><Link href="#branding-strategy">Branding & Strategy</Link></li>
            <li><Link href="#digital-marketing">Digital Marketing</Link></li>
            <li><Link href="#video-composition">Video Composition</Link></li>
            <li><Link href="#ai-collaboration">Creative AI Collaboration</Link></li>
            <li><Link href="#cultural-strategy">Cultural Strategy</Link></li>
            <li><Link href="#surprise">Surprise Projects</Link></li>
          </ul>
        </nav>

        {/* Column 4: Contact / Newsletter / Addresses */}
        <div className="footer-col footer-contact">
          <h4 className="footer-col-title">Headquarter</h4>

          <div className="footer-contact-line">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path d="M21 16.5a16 16 0 0 1-7 2.5 16 16 0 0 1-7-2.5c-1.1-.7-1.1-1.7-.2-2.5L9 11c.8-.7 2-.5 2.6.4l1.2 1.8c.6.9 1.8 1.2 2.6.5l3.2-2.4c.9-.7 2-.6 2.6.2.7.9.7 2 .1 2.9z" fill="#FF3366"/></svg>
            <a href="tel:+918109801383">+91 8109801383</a>
          </div>

          <div className="footer-contact-line">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden><path d="M4 4h16v16H4z" fill="none"/><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1l-10 6L3 7V6zM3 9v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9l-10 6L3 9z" fill="#FF3366"/></svg>
            <a href="mailto:beakarsa@gmail.com">beakarsa@gmail.com</a>
          </div>

          <form className="footer-newsletter" onSubmit={handleSubmit}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="footer-newsletter-row">
              <input
                id="footer-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                {/* mail icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path d="M2 4h20v16H2z" fill="none"/><path d="M20 6H4v12h16V6zm-8 6L4 7h16l-8 5z" fill="#ff3366"/></svg>
              </button>
            </div>

            <label className="footer-privacy">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree((s) => !s)}
              />{" "}
              I agree to the <Link href="/privacy">Privacy Policy</Link>
            </label>
          </form>

          <div className="footer-addresses">
            <div className="addr">
              <img src="/flag-uae.png" alt="UAE flag" className="addr-flag" />
              <div>Dubai, United Arab Emirates</div>
            </div>

            <div className="addr">
              <img src="/flag-in.png" alt="India flag" className="addr-flag" />
              <div>Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore</div>
            </div>

            <div className="addr">
              <img src="/flag-in.png" alt="India flag" className="addr-flag" />
              <div>17/2, New Palasia, Indore, Madhya Pradesh 452001</div>
            </div>

            <div className="addr">
              <img src="/flag-in.png" alt="India flag" className="addr-flag" />
              <div>HR26+M6V, Bhadoriya Nagar, Rekha Nagar, Bhind, Manpura, Madhya Pradesh 477001</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom copyright row */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div>© {new Date().getFullYear()} Akarsa. All Rights Reserved.</div>
          <div>Created with ❤️ by Akarsa Creative Team</div>
        </div>

        <div className="footer-bottom-right">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/cookies">Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
}