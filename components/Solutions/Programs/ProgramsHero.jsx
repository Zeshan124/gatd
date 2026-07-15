"use client";

import { useState } from "react";
import Image from "next/image";
import BrochureModal from "./BrochureModal";

export default function ProgramsHero({ program }) {
  const {
    eyebrow = "Our Programs",
    title,
    description,
    banner,
    bannerAlt,
    // used for modal
    parentSlug,
    slug: programSlug,
  } = program;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-12 border-b border-slate-200">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-bold tracking-widest text-[#414143] uppercase mb-4">
          {eyebrow}
        </p>

        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          {/* Left — Title */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-[#414143] leading-tight">
            {title}
          </h1>

          {/* Right — Description + CTA */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {/* Download button — opens modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                  </svg>
                </span>
                Download Programme Brochure
              </button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#414143] text-[#414143] hover:bg-[#414143] hover:text-white text-sm font-bold rounded-lg transition-all duration-200"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        {banner && (
          <div className="relative w-full rounded-2xl overflow-hidden mb-12 sm:mb-4" style={{ height: "clamp(240px, 38vw, 500px)" }}>
            <Image
              src={banner}
              alt={bannerAlt || title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}

      </div>

      {/* Brochure Modal */}
      <BrochureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        currentSlug={programSlug}
        parentSlug={parentSlug}
        brochure={program.brochure}
      />
    </section>
  );
}
