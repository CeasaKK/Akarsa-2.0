// app/company/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import CompanyHero from "@/components/CompanyHero";
import CompanyContent from "@/components/CompanyContent";

export const metadata = {
  title: "Why Choose Akarsa — Company",
  description: "Why Akarsa is the partner your brand deserves — creative strategy and technology.",
};

export default function CompanyPage() {
  return (
    <main className="page">
      <Navbar />
      <CompanyHero />

      <section className="company-main">
        <CompanyContent />
      </section>

      <Cta />
      <Footer />
    </main>
  );
}