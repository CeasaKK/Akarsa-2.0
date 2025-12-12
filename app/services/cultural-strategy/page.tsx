// app/services/cultural-strategy/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import CulturalHero from "@/components/CulturalHero";
import CulturalContent from "@/components/CulturalContent";
import CulturalSidebar from "@/components/CulturalSidebar";

export const metadata = {
  title: "Cultural Strategy — Akarsa",
  description: "Cultural strategy services — aligning brands with culture and behaviour.",
};

export default function CulturalStrategyPage() {
  return (
    <main className="page">
      <Navbar />
      <CulturalHero />

      <section className="service-section">
        <div className="service-grid">
          <div className="service-left">
            <CulturalContent />
          </div>
          <div className="service-right">
            <CulturalSidebar />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}