export default function GraphicDesignSidebar() {
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
    <div className="gd-sidebar card-dark">
      <h3 className="sidebar-title">All Services</h3>

      <ul className="gd-sidebar-list">
        {services.map((s) => (
          <li
            key={s}
            className={`gd-sidebar-item ${
              s === "Graphic Design" ? "active" : ""
            }`}
          >
            <a href={`/services/${s.toLowerCase().replace(/ /g, "-")}`}>
              {s}
              <span className="gd-arrow">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}