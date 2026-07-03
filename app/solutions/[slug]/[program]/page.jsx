import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programsData } from "@/lib/programsData";
import ProgramsHero from "@/components/Solutions/Programs/ProgramsHero";
import ProgramOverview from "@/components/Solutions/Programs/ProgramOverview";
import CertificationFocus from "@/components/Solutions/Programs/CertificationFocus";
import StrategicPillars from "@/components/Solutions/Programs/StrategicPillars";
import WhatYoullGain from "@/components/Solutions/WhatYoullGain";

export async function generateStaticParams() {
  return Object.entries(programsData).map(([program, data]) => ({
    slug: data.parentSlug,
    program,
  }));
}

export async function generateMetadata({ params }) {
  const program = programsData[params.program];
  if (!program) return {};
  return {
    title: `${program.title} — GATD`,
    description: program.description,
  };
}

export default function ProgramPage({ params }) {
  const program = programsData[params.program];
  if (!program) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-3">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Link href="/" className="hover:text-[#D52029] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-[#D52029] transition-colors">Solutions</Link>
              <span>/</span>
              <Link href={`/solutions/${program.parentSlug}`} className="hover:text-[#D52029] transition-colors">
                {program.parentTitle}
              </Link>
              <span>/</span>
              <span className="text-[#414143] font-medium truncate max-w-[200px]">{program.title}</span>
            </nav>
          </div>
        </div>

        {/* Components will be added here as you share them */}
          <ProgramsHero program={program} />
          <ProgramOverview />
          <CertificationFocus
            heading={program.focusHeading}
            focusAreas={program.focusAreas}
          />
          <StrategicPillars />
          {program.gains && (
                    <WhatYoullGain heading={program.gainsHeading} gains={program.gains} />
                  )}
      </main>
      <Footer />
    </div>
  );
}
