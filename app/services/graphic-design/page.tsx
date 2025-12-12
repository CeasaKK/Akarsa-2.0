// app/services/graphic-design/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import GraphicHero from "@/components/GraphicDesignHero";
import GraphicContent from "@/components/GraphicDesignContent";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function GraphicDesignPage() {
  return (
    <main className="page">
      <Navbar />
      <GraphicHero />

      <section className="service-section">
        <div className="service-grid">
          <div className="service-left">
            <GraphicContent />
          </div>
          <div className="service-right">
            <ServicesSidebar />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}