// app/services/web-maintenance/page.tsx
import Navbar from "@/components/Navbar";
import WebMaintenanceHero from "../../../components/WebMaintainanceHero";
import WebMaintenanceContent from "../../../components/WebMaintainanceContent";
import WebDevSidebar from "../../../components/WebDevSidebar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Web Maintenance — Akarsa",
  description:
    "Web Maintenance — ongoing updates, security monitoring, and performance optimization to keep your website always-on and future-ready.",
};

export default function WebMaintenancePage() {
  return (
    <main className="page webdev-page">
      <Navbar />
      <WebMaintenanceHero />

      <section className="section webdev-section">
        <div className="page-inner webdev-grid">
          <div className="webdev-left">
            <WebMaintenanceContent />
          </div>

          <aside className="webdev-right">
            <WebDevSidebar />
          </aside>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}