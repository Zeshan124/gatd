"use client";

import Image from "next/image";

export default function ProgramFacilitator() {
  const expertise = [
    "Human Resource Management",
    "Leadership Developement",
    "Managerial Skills Development",
    "Corporate Strategy Creation and",
    "Implementation",
    "Performance Management",
    "Strategic HRM",
  ];

  const biography = [
    "Coach and Consultant",
    "Strategic HR Management",
    "Impactive Leadership",
    "Creating and Implementing",
    "Corporate Strategy",
    "Senior Management Advisor",
  ];

  return (
    <section className="relative bg-red-600 overflow-hidden py-0">

      {/* Subtle wave/line pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.4) 40px,
            rgba(255,255,255,0.4) 42px
          )`
        }}
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">

          {/* Left — Professor Image + Name Card */}
          <div className="relative flex flex-col justify-end pt-8 lg:pt-0">
            {/* Professor Image — cut out, no background */}
            <div className="relative w-full flex items-end justify-center lg:justify-start" style={{ minHeight: "420px" }}>
              <Image
                src="/images/solutions/strategic-hr/prof.jpg"
                alt="Prof. Dr. Joel Farnworth"
                width={500}
                height={560}
                className="object-contain object-bottom w-auto h-full max-h-[480px] sm:max-h-[520px]"
                priority
              />
            </div>

            {/* Name Card — overlays bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 lg:right-auto lg:left-0 mx-4 sm:mx-6 lg:mx-0 mb-0">
              <div className="bg-white rounded-t-2xl px-6 py-5 shadow-xl w-full lg:max-w-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-1">
                  Prof. Dr. Joel Farnworth
                </h3>
                <p className="text-sm sm:text-base text-slate-700">
                  Dean of Business and Management Studies EIU-Paris
                </p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="py-10 sm:py-14 lg:py-16 pl-0 lg:pl-8">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10">
              Program Facilitator
            </h2>

            {/* Area of Expertise */}
            <div className="mb-8">
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4">
                Area of Expertise
              </h4>
              <ul className="space-y-2">
                {expertise.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Biography */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4">
                Biography
              </h4>
              <ul className="space-y-2">
                {biography.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/90">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}