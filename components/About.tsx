// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <article className="card-dark">
        <div className="about-image-wrapper">
          <Image
            src="/about-illustration.png"
            alt="People collaborating"
            width={400}
            height={250}
            className="about-image"
          />
        </div>

        <p className="section-heading-eyebrow">About Us</p>

        <h2 className="section-heading-title">
          Great Digital Agency For Your Business Solution
        </h2>

        <p className="section-heading-sub">
          Akarsa is a creative and digital solutions agency that believes in
          redefining how brands communicate. With a blend of design, strategy,
          and innovation, we create meaningful experiences that resonate with
          audiences. Whether it&apos;s branding, digital marketing, or AI-driven
          creativity, our team delivers tailored solutions that inspire
          long-term impact.
        </p>

        <ul className="about-list">
          <li>
            <span className="about-arrow about-arrow-red">{">>"}</span>
            <strong> Human Centered Approach</strong> – Every design and
            strategy is built around real audience needs.
          </li>
          <li>
            <span className="about-arrow about-arrow-pink">{">>"}</span>
            <strong> Innovation-Driven Solutions</strong> – Leveraging
            creativity, technology, and AI for impactful results.
          </li>
          <li>
            <span className="about-arrow about-arrow-blue">{">>"}</span>
            <strong> End-to-End Support</strong> – From concept to execution, we
            guide brands through their entire digital journey.
          </li>
        </ul>

        <button className="btn btn-primary about-btn">Read More</button>
      </article>
    </section>
  );
}