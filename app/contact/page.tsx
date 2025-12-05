// app/contact/page.tsx
import Navbar from "@/components/Navbar";
import ContactHero from "../../components/ContactHero";
import ContactDetails from "../../components/ContactDetails";
import ContactForm from "../../components/ContactForm";
import ContactMap from "../../components/ContactMap";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Akarsa",
};

export default function ContactPage() {
  return (
    <main className="page contact-page">
      <Navbar />
      <ContactHero />

      {/* DETAILS + FORM (one wrapper so grid works predictably) */}
      <section className="contact-bodies">
        <div className="page-inner contact-two-col">
          <div className="col col--details">
            <ContactDetails />
          </div>
          <div className="col col--form">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP (full width inside wrapper) */}
      <section className="contact-map-section">
        <div className="page-inner">
          <ContactMap />
        </div>
        <Cta />
        <Footer />
      </section>
    </main>
  );
}