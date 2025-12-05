export default function GraphicDesignContent() {
  return (
    <div className="gd-content">
      <h2 className="section-heading-title">Graphic Design</h2>

      <p className="section-heading-sub">
        We craft compelling visual identities that make an unforgettable
        impression. From brand systems to social campaigns, our designs are
        strategic, creative, and audience-focused.
      </p>

      <div className="gd-image-wrap">
        <img
          src="/services/graphic-sample1.jpg"
          className="gd-image"
          alt="Graphic Design Work"
        />
      </div>

      <p className="gd-text">
        We create visual experiences that speak your brand’s language. Every
        design element is thoughtfully crafted to communicate your message
        clearly and effectively — ensuring your brand stands out in a crowded
        market.
      </p>

      <ul className="gd-expertise-list">
        <li>✔ Logo & Brand Identity Design</li>
        <li>✔ Brochures, Flyers & Print Collateral</li>
        <li>✔ Social Media Graphics & Campaigns</li>
        <li>✔ Complete Brand Design Systems</li>
        <li>✔ Audience-Focused Strategic Visuals</li>
      </ul>

      <div className="gd-sample-2">
        <img
          src="/services/graphic-sample2.jpg"
          className="gd-image"
          alt="Graphic Design Showcase"
        />
      </div>
    </div>
  );
}