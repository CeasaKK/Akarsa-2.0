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
          src="/Graphic Design (2).jpg"
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

      <div className="gd-slider">
        <div className="gd-slider-track">
          <img src="/G1.svg" className="gd-slide" alt="Graphic Showcase 1" />
          <img src="/G2.svg" className="gd-slide" alt="Graphic Showcase 2" />
          <img src="/G3.jpg" className="gd-slide" alt="Graphic Showcase 3" />
          <img src="/G4.jpg" className="gd-slide" alt="Graphic Showcase 4" />
          <img src="/G5.jpg" className="gd-slide" alt="Graphic Showcase 5" />
          <img src="/G6.jpg" className="gd-slide" alt="Graphic Showcase 6" />
          <img src="/G7.jpg" className="gd-slide" alt="Graphic Showcase 7" />
          <img src="/G8.jpg" className="gd-slide" alt="Graphic Showcase 8" />
        </div>
      </div>
    </div>
  );
}