// components/WebDevSidebar.tsx
export default function WebDevSidebar() {
  const services = [
    "Graphic Design",
    "Web Development",
    "Web Maintenance",
    "Branding & Strategy",
    "Digital Marketing",
    "Video Composition",
    "Creative AI Collaboration",
    "Cultural Strategy",
    "Something Undefined",
  ];

  return (
    <aside className="gd-sidebar card-dark">
      <h3 className="sidebar-title">All Services</h3>

      <ul className="gd-sidebar-list">
        {services.map((s) => (
          <li
            key={s}
            className={`gd-sidebar-item ${s === "Web Development" ? "active" : ""}`}
          >
            <a href={`/services/${s.toLowerCase().replace(/\s+/g, "-")}`}>
              <span>{s}</span>
              <span className="gd-arrow">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="side-cta" style={{ marginTop: 20 }}>
        <div className="cta-card">
          <h4>Any Question? Let’s Talk</h4>
          <p>We're here to answer your questions & explore how we can bring your ideas to life.</p>
          <a className="btn-primary-cta" href="/contact">Let’s Talk</a>
        </div>
      </div>
    </aside>
  );
}