// components/Faqs.tsx
"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is Akarsa?",
    a: "Akarsa is a creation studio where art meets intelligence. We build digital experiences, brands, and systems that blend human emotion with artificial precision. Every project begins with curiosity and ends with impact.",
  },
  {
    q: "What kind of work does Akarsa do?",
    a: "We do branding, graphic design, web development, digital marketing, video production, and AI-assisted creative collaboration — all tailored to client needs.",
  },
  {
    q: "How is Akarsa different from a regular agency?",
    a: "We mix studio-level craft with product thinking and AI tooling. That means cinematic storytelling, data-informed decisions, and scalable engineering delivered together.",
  },
  {
    q: "Does Akarsa actually use artificial intelligence in its work?",
    a: "Yes — we use AI to accelerate ideation, generate creative assets, prototype UX, and enhance analytics. But human direction and craft remain central to our output.",
  },
  {
    q: "What does it mean when Akarsa calls itself a Rule Breaking Studio?",
    a: "It means we challenge conventions: we prioritize fresh thinking, strategic risk-taking, and bespoke solutions over formulaic templates.",
  },
  {
    q: "Who does Akarsa collaborate with?",
    a: "Brands of every size — startups, local businesses, and global enterprises — plus agencies and other creative partners.",
  },
  {
    q: "How does Akarsa approach a project from start to finish?",
    a: "Discovery → Concepting → Design & Build → Launch → Learn. Each phase has clear milestones, client checkpoints, and iterative validation.",
  },
  {
    q: "Can Akarsa handle both creative and technical projects?",
    a: "Yes — we combine creative production with full-stack engineering and product strategy to deliver end-to-end solutions.",
  },
  {
    q: "What kind of brands should work with Akarsa?",
    a: "Brands seeking daring creativity, product-quality engineering, and measurable growth — especially those who want authentic storytelling.",
  },
  {
    q: "How can someone start working with Akarsa?",
    a: "Use the Contact link or the Get Started CTA in the header to reach out. We typically begin with a short discovery call.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default first open; set null if none

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faqs" className="faqs-section">
      <p className="section-heading-eyebrow">FAQs</p>
      <h2 className="section-heading-title">Your Top Questions Answered</h2>

      <div className="faqs-card card-dark">
        <div className="faqs-list" role="list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;

            return (
              <div className="faq-item" key={item.q} role="listitem">
                <h3 className="faq-question-wrapper">
                  <button
                    id={btnId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className={`faq-question ${isOpen ? "open" : ""}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-icon" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`faq-panel ${isOpen ? "open" : ""}`}
                >
                  <div className="faq-panel-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}