// components/CareerContent.tsx
import React from "react";

const BENEFITS = [
  { title: "Innovative Culture", img: "/portfolio/Branding & Strategy.svg" },
  { title: "Career Growth", img: "/portfolio/Creative AI Collaboration.svg" },
  { title: "Collaborative Environment", img: "/portfolio/Cultural Strategy.svg" },
  { title: "Flexible Work Options", img: "/portfolio/Digital Marketing.svg" },
  { title: "Impactful Projects", img: "/portfolio/Graphic Design.svg" },
];

export default function CareerContent() {
  return (
    <section className="career-content">
      <div className="career-container">
        <div className="career-intro">
          <p className="eyebrow">Career</p>
          <h2 className="career-h2">Join Akarsa – Where Creativity Meets Innovation</h2>
          <p className="career-lead">
            At Akarsa, we believe in building teams that inspire, innovate, and create impact. If you’re
            passionate about design, technology, digital strategy, or AI-driven solutions, we want you on our journey.
          </p>
        </div>

        {/* Application form card */}
        <div className="career-form-wrap">
          <form className="career-form" method="post" encType="multipart/form-data">
            <div className="row">
              <input name="first" placeholder="First Name*" required />
              <input name="last" placeholder="Last Name*" required />
              <input name="email" placeholder="Email*" required type="email" />
            </div>

            <div className="row">
              <input name="phone" placeholder="Phone Number*" required />
              <select name="position" required>
                <option value="">Select Position*</option>
                <option>Designer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Product Manager</option>
                <option>Motion Designer</option>
              </select>
            </div>

            <div className="row">
              <label className="file-label">
                Upload CV
                <input type="file" name="cv" accept=".pdf,.doc,.docx" />
              </label>
            </div>

            <button type="submit" className="btn-cta">Send Resume</button>
          </form>
        </div>

        {/* Why Work With Us */}
        <div className="why-wrap">
          <h3 className="why-title">Where creativity meets strategy and ideas turn into impact.</h3>

          <div className="benefits-grid">
            {BENEFITS.map((b) => (
              <div className="benefit" key={b.title}>
                <div className="benefit-icon">
                  <img src={b.img} alt={b.title} />
                </div>
                <p className="benefit-title">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}