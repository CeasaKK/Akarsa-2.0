// app/services/something-undefined/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import UndefinedHero from "@/components/UndefinedHero";
import UndefinedContent from "@/components/UndefinedContent";
import UndefinedSidebar from "@/components/UndefinedSidebar";

export const metadata = {
  title: "Something Undefined — Akarsa",
  description: "Experimental & pro-bono creative work from Akarsa.",
};

export default function SomethingUndefinedPage() {
  return (
    <main className="page">
      <Navbar />
      <UndefinedHero />

      <section className="service-section">
        <div className="service-grid">
          <div className="service-left">
            <UndefinedContent />
          </div>
          <div className="service-right">
            <UndefinedSidebar />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}