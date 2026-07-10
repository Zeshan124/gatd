"use client";

import Image from "next/image";

export default function RecognizedSpeaker() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Certificate Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-full">
              <Image
                src="/images/solutions/strategic-hr/certificate_image.jpg"
                alt="Certification on Successful Completion"
                width={480}
                height={620}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <span className="inline-block self-start px-4 py-2 text-sm font-semibold text-slate-700 bg-[#E8E8E8] rounded-lg mb-6">
              Recognised Speaker Credentials
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
              Certification<br />on Successful<br />Completion
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              When you complete the program, you will receive the Strategic HR Business Partner Certification from EIU Paris and the Global Association for Training & Development (GATD).
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              This certification recognizes your expertise in boardroom-level HR strategy. It shows your commitment to global standards, innovative leadership, and your ability to drive business success through strategic HR management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
