// components/ServicesOverview.tsx

type Service = {
  title: string;
  text: string;
};

const SERVICES: Service[] = [
  {
    title: "Creative & Strategic Design",
    text: "We cra visually striking and purpose-driven designs that go beyond aesthetics, helping your brand connect and grow.",
  },
  {
    title: "Technology That Delivers",
    text: "From responsive websites to AI-driven innovations, we build solutions that are future-ready and peformance-focused.",
  },
  {
    title: "Tailored For Your Brand",
    text: "Every project is customized to your vision, ensuring unique strategies that resonate with your audience and goals.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="services-overview">
      {SERVICES.map((s) => (
        <article key={s.title} className="card services-card">
          {/* icon placeholder – replace with your hex SVG/image */}
          <div className="services-icon-hex" />

          <h3 className="services-title">{s.title}</h3>
          <p className="services-text">{s.text}</p>

          <div className="card-cta">See More</div>
        </article>
      ))}
    </section>
  );
}