// components/Testimonials.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Testimonial = {
  id: string;
  quote: string;
  client: string;
  location?: string;
  logo?: string; // path in /public
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "decathlon",
    quote:
      "Akarsa didn’t just make an ad, they created motion. They captured the joy, the sweat, the laughter, and the teamwork that lives inside our stores. From script to screen, everything felt natural and real. The video still gives us goosebumps.",
    client: "Decathlon",
    location: "Indore",
    logo: "/testimonials/decathlon.png",
  },
  {
    id: "adidas",
    quote:
      "The team understood our brief quickly and delivered a campaign that outperformed our expectations. Creative, data-driven, and reliable — exactly what we needed.",
    client: "Adidas",
    location: "Berlin",
    logo: "/testimonials/adidas.png",
  },
  {
    id: "localco",
    quote:
      "Working with Akarsa felt like adding creative teammates to our in-house group. Fast turnaround, excellent craft, and measurable results.",
    client: "LocalCo",
    location: "Mumbai",
    logo: "/testimonials/localco.png",
  },
  {
    id: "startupx",
    quote:
      "Amazing storytelling and a seamless production process. Akarsa helped us position our product with clarity and personality.",
    client: "StartupX",
    location: "Bengaluru",
    logo: "/testimonials/startupx.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const mountedRef = useRef(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    mountedRef.current = true;

    // autoplay switching every 1000ms (1 second)
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    },3000);

    return () => {
      mountedRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // pause on hover/focus to let users read
  function pause() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
  function resume() {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % TESTIMONIALS.length);
      }, 5000);
    }
  }

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="testimonials-section">
      <p className="section-heading-eyebrow">Our Testimonials</p>
      <h2 className="section-heading-title">Trusted By Clients Worldwide</h2>

      <article className="card-dark testimonials-card">
      <div className="testimonials-grid">
        <div className="testimonials-left">
          <div className="testimonials-illustration">
            <Image
              src="/testimonials/Our Testimonials.gif"
              alt="testimonial illustration"
              width={900}
              height={380}
              className="testimonials-illustration-img"
            />
          </div>
        </div>

        <div className="testimonials-right">
          <blockquote className="testimonials-quote">
            “{current.quote}”
          </blockquote>

          <div className="testimonials-meta">
            <div className="testimonial-client">
              {current.logo && (
                <div className="testimonial-logo">
                  <Image
                    src={current.logo}
                    alt={current.client}
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <div>
                <div className="testimonial-client-name">
                  {current.client}
                </div>
                {current.location && (
                  <div className="testimonial-client-location">
                    {current.location}
                  </div>
                )}
              </div>
            </div>

            {/* rotating clickable banner — links to /testimonials */}
            <div
              className="testimonial-rotator"
              onMouseEnter={pause}
              onMouseLeave={resume}
              onFocus={pause}
              onBlur={resume}
            >
              <Link href="/testimonials" className="testimonial-rotator-link">
                <div className="testimonial-rotator-inner">
                  <div className="testimonial-rotator-logo">
                    {current.logo ? (
                      <Image
                        src={current.logo}
                        alt={`${current.client} logo`}
                        width={36}
                        height={36}
                      />
                    ) : (
                      <div className="testimonial-rotator-dot" />
                    )}
                  </div>
                  <div className="testimonial-rotator-text">
                    {current.client} — {current.location ?? ""}
                  </div>
                  <div className="testimonial-rotator-cta">›</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </article>
    </section>
  );
}