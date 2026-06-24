// import Footer from "@/components/Home/Footer";
import EnvisionedFuture from "@/components/Home/EnvisionedFuture";
import OurSolutions from "@/components/Home/OurSolutions";
import OurServices from "@/components/Home/OurServices";
import MissionStatement from "@/components/Home/MissionStatement";
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
       <EnvisionedFuture />
       <OurSolutions />
       <OurServices />
       <MissionStatement />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
