import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import FeelFree from "@/components/Contact/FeelFree";
import ContactMap from "@/components/Contact/ContactMap";
import CommitmentBanner from "@/components/Home/CommitmentBanner";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactHero />
        <FeelFree />
        <ContactMap />
        <CommitmentBanner />
      </main>
      <Footer />
    </div>
  );
}
