// components/WebDevContent.tsx
"use client";
import { useState } from "react";

export default function WebDevContent() {
  const [slide, setSlide] = useState(0);

  const carousel = [
    "/services/webdev-sample1.jpg",
    "/services/webdev-sample2.jpg",
    "/services/webdev-sample3.jpg",
  ];

  return (
    <div className="gd-content">
      <p className="eyebrow small">Services Detail</p>
      <h2 className="section-heading-title">Web Development</h2>

      <p className="section-heading-sub">
        Our responsive and SEO-optimized websites are built for performance and engagement.
        We specialize in custom web development, e-commerce platforms, and interactive web
        experiences that drive conversions and enhance your online presence.
      </p>

      <div className="gd-image-wrap">
        <img src={carousel[slide]} className="gd-image" alt={`screenshot ${slide + 1}`} />
      </div>

      <p className="gd-text">
        We build responsive, fast, and user-friendly websites that combine functionality
        with aesthetics. From corporate websites to e-commerce platforms, we create digital
        experiences that are visually appealing and highly functional.
      </p>

      <h3 className="eyebrow small" style={{ marginTop: 12 }}>Our Expertise</h3>
      <ul className="gd-expertise-list">
        <li>✔ Responsive Website Design & Development</li>
        <li>✔ Fast & SEO-Optimized Pages</li>
        <li>✔ Secure Web Solutions</li>
        <li>✔ E-commerce & Custom Web Applications</li>
        <li>✔ Mobile-Friendly Interfaces</li>
      </ul>

      {/* carousel dots + simple nav */}
      

      
    </div>
  );
}