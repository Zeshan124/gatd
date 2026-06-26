import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/Solutions/SolutionsHero";
import SolutionsIntro from "@/components/Solutions/SolutionsIntro";
import SolutionsCatalog from "@/components/Solutions/SolutionsCatalog";
import CommitmentBanner from "@/components/Home/CommitmentBanner";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SolutionsHero />
        <SolutionsIntro />
        <SolutionsCatalog />
        <CommitmentBanner />
      </main>
      <Footer />
    </div>
  );
}
