// app/portfolio/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import FaqsHero from "@/components/FaqsHero";
import Faqs from "@/components/Faqs";

export const metadata = {
  title: "Portfolio — Akarsa",
  description: "Akarsa portfolio: case studies in design, development and marketing.",
};

export default function PortfolioPage() {
  return (
    <main className="page portfolio-page">
      <Navbar />
      <FaqsHero />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}