// import Footer from "@/components/Home/Footer";
import GATDHero from "@/components/Home/HeroSection";
import KeyFeatures from "@/components/Home/KeyFeatures";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
       <GATDHero />
       <WhoWeAre />
       <KeyFeatures />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
