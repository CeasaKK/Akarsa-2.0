// app/services/web-development/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import WebDevHero from "@/components/WebDevHero";
import WebDevContent from "@/components/WebDevContent";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function WebDevPage() {
  return (
    <main className="page">
      <Navbar />
      <WebDevHero />

      <section className="service-section">
        <div className="service-grid">
          <div className="service-left">
            <WebDevContent />
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