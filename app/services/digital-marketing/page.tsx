// app/services/digital-marketing/page.tsx

import Navbar from "@/components/Navbar";
import DigitalMarketingHero from "../../../components/DigitalMarketingHero";
import DigitalMarketingContent from "../../../components/DigitalMarketingContent";
import DigitalMarketingSidebar from "../../../components/DigitalMarketingSidebar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digital Marketing — Akarsa",
  description:
    "Digital marketing services by Akarsa — data-driven campaigns, SEO, social media, and performance marketing that convert attention into action.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="page">
      <Navbar />
      <DigitalMarketingHero />

      <section className="digital-section">
        <div className="digital-grid">
          {/* LEFT COLUMN – content */}
          <div className="digital-left">
            <DigitalMarketingContent />
          </div>

          {/* RIGHT COLUMN – sidebar */}
          <aside className="digital-right">
            <DigitalMarketingSidebar />
          </aside>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}