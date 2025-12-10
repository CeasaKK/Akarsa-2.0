// app/services/branding-and-strategy/page.tsx

import Navbar from "@/components/Navbar";
import BrandingHero from "../../../components/BrandingHero";
import BrandingContent from "../../../components/BrandingContent";
import BrandingSidebar from "../../../components/BrandingSidebar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Branding & Strategy — Akarsa",
  description:
    "Branding & Strategy services by Akarsa — strategy-led identities, positioning, and design systems that make brands unforgettable.",
};

export default function BrandingPage() {
  return (
    <main className="page">
      <Navbar />
      <BrandingHero />

      <section className="branding-section">
        <div className="branding-grid">
          {/* LEFT COLUMN – main content */}
          <div className="branding-left">
            <BrandingContent />
          </div>

          {/* RIGHT COLUMN – custom sidebar */}
          <aside className="branding-right">
            <BrandingSidebar />
          </aside>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}