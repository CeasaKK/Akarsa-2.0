// app/services/web-maintenance/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import MaintenanceHero from "@/components/WebMaintainanceHero";
import MaintenanceContent from "@/components/WebMaintainanceContent";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function MaintenancePage() {
  return (
    <main className="page">
      <Navbar />
      <MaintenanceHero />

      <section className="service-section">
        <div className="service-grid">
          <div className="service-left">
            <MaintenanceContent />
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