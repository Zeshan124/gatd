import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutWhoWeAre from "@/components/About/AboutWhoWeAre";
import OurStory from "@/components/About/OurStory";
import AboutMissionStatement from "@/components/About/MissionStatement";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutWhoWeAre />
        <OurStory />
        <AboutMissionStatement />
      </main>
      <Footer />
    </div>
  );
}
