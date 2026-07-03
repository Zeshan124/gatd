"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProgramOverview() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src="/images/solutions/Programs/program-overview.jpg"
              alt="GATD team collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right — Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-2 text-sm font-semibold text-slate-800 bg-[#E8E8E8] rounded-lg mb-5">
             Programme Overview
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Strategic HR
Business Partner
Certification
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              This program is a strategic initiative designed to equip you with the financial acumen, consulting frameworks, and organisational models needed to sit at the table with the CEO and CFO as an equal, reinforcing your vital role in leadership discussions.
            </p>

            {/* CTA */}
            {/* <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore More
            </Link> */}
          </div>

        </div>
      </div>
    </section>
  );
}