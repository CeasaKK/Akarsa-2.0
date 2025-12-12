// app/career/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/CareerHero";
import CareerContent from "@/components/CareerContent";
import Cta from "@/components/Cta";

export const metadata = {
  title: "Careers — Akarsa",
  description: "Join Akarsa - careers and open roles",
};

export default function CareerPage() {
  return (
    <main className="page">
      <Navbar />
      <CareerHero />
      <CareerContent />
      <Cta />
      <Footer />
    </main>
  );
}