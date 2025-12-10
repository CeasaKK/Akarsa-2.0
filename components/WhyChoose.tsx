// components/WhyChoose.tsx
import Image from "next/image";

type Benefit = {
  id: string;
  color: "red" | "pink" | "blue";
  titleLines: string[];
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    id: "human-centered",
    color: "red",
    titleLines: ["Human Centered", "Approach"],
    description:
      "Every design and strategy is built around real audience needs. We ensure every idea is both visually impactful and aligned with your business goals.",
  },
  {
    id: "tech-driven",
    color: "pink",
    titleLines: ["Tech-Driven", "Solutions"],
    description:
      "Leveraging the latest tools and AI innovations, our team integrates cutting-edge technology to deliver future-ready digital experiences.",
  },
  {
    id: "tailored-brand",
    color: "blue",
    titleLines: ["Tailored For Your", "Brand"],
    description:
      "Every project is custom, not cookie-cutter. We create unique solutions that reflect your brand’s identity and vision so every detail is designed to make your brand stand out.",
  },
  {
    id: "global-local",
    color: "red",
    titleLines: ["Global Perspective,", "Local Relevance"],
    description:
      "Strategies that connect with real audiences. Our insights help you resonate with diverse markets while staying authentic to your roots.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="why-choose">
      <article className="card-dark">
        <div className="whychoose-grid">
          <div className="whychoose-left">
            <div className="why-choose-image-wrapper">
              <div className="why-choose-image-wrapper">
  <Image
    src="/testimonials/Our Testimonials.gif"
    alt="Collage of people collaborating"
    fill
    className="why-choose-image"
  />
</div>
            </div>
          </div>

          <div className="whychoose-right">
            <p className="section-heading-eyebrow">Why Choose Akarsa</p>

            <h2 className="section-heading-title">
              Discover The Benefits Of
              <br />
              Working With Akarsa
            </h2>

            <div className="why-choose-content">
              <ul className="why-choose-list">
                {BENEFITS.map((item) => (
                  <li key={item.id} className="why-choose-item">
                    <div className="why-choose-left">
                      <span
                        className={`why-choose-arrow why-choose-arrow-${item.color}`}
                      >
                        {">>"}
                      </span>
                      <div className="why-choose-left-text">
                        {item.titleLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </div>
                    </div>

                    <p className="why-choose-right">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}