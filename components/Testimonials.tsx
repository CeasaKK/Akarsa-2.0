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
      "Akarsa didn’t just make an ad, they created motion. They captured the joy, the sweat, the laughter, and the teamwork that lives inside our stores. From script to screen, everything felt natural and real. The video still gives us goosebumps. It’s not marketing, it’s storytelling with soul.",
    client: "Decathlon Indore",
    location: "Indore",
    logo: "/testimonials/decathlon.png",
  },
  {
    id: "adidas",
    quote:
      "We expected good visuals. Akarsa gave us a vibe. Every shot had intensity, energy, and emotion. The team worked like athletes — focused, passionate, and obsessed with details. They didn’t just make an ad, they created a statement. That’s what makes Akarsa different",
    client: "Adidas Indore",
    location: "Berlin",
    logo: "/testimonials/adidas.png",
  },
  {
    id: "bake-affair",
    quote:
      "Working with Akarsa felt like adding creative teammates to our in-house group. Fast turnaround, excellent craft, and measurable results.",
    client: "BakeAffair",
    location: "Mumbai",
    logo: "/testimonials/bake.png",
  },
  {
    id: "starbucks",
    quote:
      "They walked into our bakery and instantly felt what we stood for — love, comfort, and a touch of sweetness. The ad they made for us looked like a dream. Every smile, every glaze, every soft frame carried emotion. It wasn’t a commercial, it was warmth in motion.",
    client: "Starbucks",
    location: "Bengaluru",
    logo: "/testimonials/starbucks.png",
  },
  {
    id: "gym",
    quote:
      "The Akarsa team worked out with us before they shot with us. That says everything. They didn’t come with a plan, they came with passion. The final ad captured our energy, our community, and our drive. It went viral for a reason, it was real, raw, and powerful.",
    client: "Olympia Gym",
    location: "Bengaluru",
    logo: "/testimonials/gym.png",
  },
  {
    id: "nomad",
    quote:
      "Nomad is about stories told through slices, and Akarsa told ours perfectly. They captured the art of wandering, the joy of food, the emotion of taste. Their film had this cinematic stillness and energy at once. It didn’t just go viral, it made people feel hungry in their hearts.",
    client: "Nomad Pizza",
    location: "Bengaluru",
    logo: "/testimonials/nomad.png",
  },
  {
    id: "crush",
    quote:
      "Our ad with Akarsa still gets shared, not because it was trendy, but because it was true. They understood our people, our vibe, our culture. The way they wrote the script, shot the film, and edited the mood — it was pure emotion brewed into every second.",
    client: "The Crush Coffee",
    location: "Bengaluru",
    logo: "/testimonials/crush.png",
  },
  {
    id: "nbc",
    quote:
      "Akarsa didn’t come to sell coffee, they came to feel it. They created an ad that perfectly captured the chaos and calm that lives inside our café. From scriptwriting to editing, everything flowed like a song. Real stories, real smiles, real connection.",
    client: "Nothing Before Coffee",
    location: "Bengaluru",
    logo: "/testimonials/nbc.png",
  },
  {
    id: "kunafa",
    quote:
      "When we saw the final cut, we were speechless. Akarsa had turned our dessert story into emotion. Every frame felt handcrafted, dripping with sweetness and soul. The ad didn’t just show our product, it made people crave the feeling of sharing it.",
    client: "Kunafa Bites",
    location: "Bengaluru",
    logo: "/testimonials/kunafa.png",
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
              <Link href="#testimonials" className="testimonial-rotator-link">
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