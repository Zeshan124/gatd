// import Footer from "@/components/Home/Footer";
import EnvisionedFuture from "@/components/Home/EnvisionedFuture";
import OurSolutions from "@/components/Home/OurSolutions";
import OurServices from "@/components/Home/OurServices";
import MissionStatement from "@/components/Home/MissionStatement";
import GATDHero from "@/components/Home/HeroSection";
import KeyFeatures from "@/components/Home/KeyFeatures";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Home/Testimonials";
import LatestUpdates from "@/components/Home/LatestUpdates";
import WhatWillLearningDo from "@/components/Home/WhatWillLearningDo";
import CommitmentBanner from "@/components/Home/CommitmentBanner";
import Footer from "@/components/Footer";

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
       <Testimonials />
       <LatestUpdates />
       <WhatWillLearningDo />
       <CommitmentBanner />
      </main>
      <Footer />
    </div>
  );
}
