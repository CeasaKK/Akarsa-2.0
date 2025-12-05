// components/ContactDetails.tsx
export default function ContactDetails() {
  return (
    <div className="contact-details card-dark">
      <p className="section-heading-eyebrow">Our Contacts</p>
      <h2 className="section-heading-title">Let’s Create Beyond Noise</h2>

      <p className="section-heading-sub">
        Whether you’re a brand, artist, or seeker, Akarsa is open to collaborations that are soulful,
        intelligent, and disruptive. Tell us your idea — or your problem — and let's reimagine it together.
      </p>

      <ul className="contact-info-list">
        <li>
          <div className="contact-icon-box">📍</div>
          <div>
            <div className="contact-label">Our Headquarter</div>
            <div className="contact-text">Shagun Arcade (Vijay Nagar), 7th Floor, Cabin No. 2 (702), Indore</div>
          </div>
        </li>

        <li>
          <div className="contact-icon-box">📞</div>
          <div>
            <div className="contact-label">Head Office Line</div>
            <div className="contact-text">+91 8109801383</div>
          </div>
        </li>

        <li>
          <div className="contact-icon-box">✉️</div>
          <div>
            <div className="contact-label">HQ Mail</div>
            <div className="contact-text">beakarsa@gmail.com</div>
          </div>
        </li>

        <li>
          <div className="contact-icon-box">⏰</div>
          <div>
            <div className="contact-label">Active Hours</div>
            <div className="contact-text">
              Weekdays: 10:00 – 19:00 IST (India) / 08:30 – 17:30 GST (Dubai)<br />
              Weekends: Experimental mode only
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}