import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/Solutions/SolutionHero";
import CommitmentToExcellence from "@/components/Solutions/CommitmentToExcellence";
import SolutionProgrammes from "@/components/Solutions/SolutionProgrammes";
import WhatYoullGain from "@/components/Solutions/WhatYoullGain";
import ProgrammeSuiteFor from "@/components/Solutions/ProgrammeSuiteFor";
import WhyWorthInvestment from "@/components/Solutions/WhyWorthInvestment";
import { solutionsData } from "@/lib/solutionsData";
import CommitmentBanner from "@/components/Home/CommitmentBanner";

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const solution = solutionsData[params.slug];
  if (!solution) return {};
  return {
    title: `${solution.title} — GATD`,
    description: solution.description,
  };
}

export default function SolutionPage({ params }) {
  const solution = solutionsData[params.slug];
  if (!solution) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <SolutionHero solution={solution} />
        <CommitmentToExcellence mapImage={solution.mapImage} />
        {solution.programmes?.length > 0 && (
          <SolutionProgrammes programmes={solution.programmes} />
        )}
        {solution.gains && (
          <WhatYoullGain heading={solution.gainsHeading} gains={solution.gains} />
        )}
       
        {solution.audience && (
          <ProgrammeSuiteFor
            badge={solution.audienceBadge}
            heading={solution.audienceHeading}
            audience={solution.audience}
            backgroundImage={solution.audienceImage}
          />
        )}

         {solution.whyImage && (
          <WhyWorthInvestment
            heading={solution.whyHeading}
            badge={solution.whyBadge}
            centerImage={solution.whyImage}
          />
        )}

        <CommitmentBanner />
        
      </main>
      <Footer />
    </div>
  );
}
