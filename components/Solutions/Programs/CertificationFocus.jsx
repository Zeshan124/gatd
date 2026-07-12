"use client";

import Image from "next/image";

const defaultFocusAreas = [
  {
    id: 1,
    title: "Strategic HR Alignment",
    description: "Strategic thinking aligned with business priorities",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" stroke="#D52029" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="12" r="5" />
        <path d="M10 32c0-5.523 4.477-9 10-9s10 3.477 10 9" />
        <path d="M28 16l2-2M30 14l2-2M32 18l2-1M33 23l2 1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Data-Driven Decision Making",
    description: "Data-driven HR decision-making for measurable outcomes",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" stroke="#414143" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="24" width="6" height="10" />
        <rect x="14" y="18" width="6" height="16" />
        <rect x="22" y="12" width="6" height="22" />
        <rect x="30" y="20" width="4" height="14" />
        <path d="M8 22l6-6 8-4 8 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Influential Leadership & Stakeholders",
    description: "Leadership influence and effective stakeholder management",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" stroke="#D52029" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="10" r="4" />
        <circle cx="8" cy="28" r="3.5" />
        <circle cx="32" cy="28" r="3.5" />
        <path d="M20 14v6M16 20l-6 5M24 20l6 5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Performance-Focused Workforce Strategy",
    description: "Workforce strategies are directly linked to organisational performance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" stroke="#414143" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="3" />
        <path d="M18 14l-4 8 5-2 2 8" />
        <path d="M14 22l-4 6M22 28l4-4 4 4" />
        <path d="M8 34h24" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Change & Culture Management",
    description: "Driving sustainable change through people-centric culture transformation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" stroke="#D52029" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20a12 12 0 0 1 22-6.5" />
        <path d="M32 20a12 12 0 0 1-22 6.5" />
        <path d="M28 10l2 3.5-3.5 1" />
        <path d="M12 30l-2-3.5 3.5-1" />
        <circle cx="20" cy="20" r="3" />
      </svg>
    ),
  },
];

function NumberBadge({ number, isFirst }) {
  return (
    <div
      className="flex items-center justify-center w-12 h-10 shrink-0 text-white text-sm font-black"
      style={{
        background: isFirst ? "#D52029" : "#1e2027",
        clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
      }}
    >
      {String(number).padStart(2, "0")}
    </div>
  );
}

export default function CertificationFocus({
  heading,
  leftImage = "/images/solutions/strategic-hr/certification_focus.jpg",
  rightImage = "/images/solutions/strategic-hr/steps.jpg",
}) {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Decorative line + label */}
       

        {/* Decorative line + label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#D52029]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#D52029] uppercase">This</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#414143] mb-8 sm:mb-10">
          <span className="text-[#D52029]">Certification</span><br />
          {heading || "Focuses on Developing"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* Left image */}
          <div className="w-full">
            <Image
              src={leftImage}
              alt="Certification Focus"
              width={640}
              height={560}
              className="w-full object-cover rounded-2xl"
              style={{ height: "clamp(260px, 38vw, 680px)" }}
            />
          </div>

          {/* Right image */}
          <div className="w-full">
            <Image
              src={rightImage}
              alt="Certification Steps"
              width={640}
              height={560}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
