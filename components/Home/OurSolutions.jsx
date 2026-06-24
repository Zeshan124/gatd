"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "executive-educational",
    label: "Executive Educational Program",
    badge: "Solutions",
    title: "Executive Educational Program",
    description:
      "Global ATD's Executive Education Programs are crafted to equip senior leaders and high-potential executives with the strategic insight and leadership capabilities needed to navigate today's fast-changing business environment. Grounded in real-world application and future-forward thinking, our programs support leaders in translating learning into measurable organizational impact.",
    image: "/images/home/executive-educational.jpg",
    href: "/solutions/executive-educational",
  },
  {
    id: "consulting-service",
    label: "Consulting Service",
    badge: "Solutions",
    title: "Consulting Service",
    description:
      "GATD's consulting services help organisations identify performance gaps and implement targeted strategies for sustainable growth. Our expert consultants partner with you to co-create solutions that align with your unique business goals and culture.",
    image: "/images/solutions/consulting-service.jpg",
    href: "/solutions/consulting-service",
  },
  {
    id: "customized-programs",
    label: "Customized Programs",
    badge: "Solutions",
    title: "Customized Programs",
    description:
      "We design bespoke learning journeys tailored to your organisation's specific challenges, industry, and vision. Every program is built around real business outcomes, ensuring maximum relevance and impact for your teams.",
    image: "/images/solutions/customized-programs.jpg",
    href: "/solutions/customized-programs",
  },
  {
    id: "certified-programs",
    label: "Certified Programs",
    badge: "Solutions",
    title: "Certified Programs",
    description:
      "Our internationally recognised certification programs equip professionals with credentials that validate their expertise and open doors to new career opportunities across the globe.",
    image: "/images/solutions/certified-programs.jpg",
    href: "/solutions/certified-programs",
  },
  {
    id: "executive-retreats",
    label: "Executive Retreats",
    badge: "Solutions",
    title: "Executive Retreats",
    description:
      "Immersive retreat experiences designed to inspire strategic thinking, strengthen leadership cohesion, and renew executive focus — held in carefully curated environments that foster deep reflection and bold decision-making.",
    image: "/images/solutions/executive-retreats.jpg",
    href: "/solutions/executive-retreats",
  },
  {
    id: "incubators",
    label: "Incubators - Regional and International",
    badge: "Solutions",
    title: "Incubators — Regional and International",
    description:
      "GATD's incubator programs nurture emerging business ideas and entrepreneurial talent, connecting regional innovators with international networks, mentorship, and the resources needed to scale.",
    image: "/images/solutions/incubators.jpg",
    href: "/solutions/incubators",
  },
  {
    id: "event-management",
    label: "Event Management",
    badge: "Solutions",
    title: "Event Management",
    description:
      "From high-impact conferences to intimate leadership summits, GATD delivers end-to-end event management solutions that create memorable, purpose-driven experiences aligned with your organisational objectives.",
    image: "/images/solutions/event-management.jpg",
    href: "/solutions/event-management",
  },
];

export default function OurSolutions() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((s) => s.id === activeId);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#414143] mb-8">
          Our Solutions
        </h2>

        {/* Tab Bar */}
        <div className="flex items-start gap-0 border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-0 flex-1 min-w-0">
            {solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`relative flex-shrink-0 px-4 py-3 text-sm text-left leading-snug transition-colors duration-200 max-w-[140px] ${
                  activeId === s.id
                    ? "font-bold text-[#414143]"
                    : "font-medium text-slate-500 hover:text-slate-800"
                }`}
              >
                {s.label}
                {activeId === s.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D52029] rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* View All */}
          <div className="flex-shrink-0 pb-2 pl-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-md transition-all duration-200 whitespace-nowrap"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* Left — Text card */}
          <div className="bg-[#F5F5F5] rounded-3xl px-8 sm:px-10 py-10 sm:py-12 flex flex-col justify-center">
            <span className="inline-block self-start px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg mb-6 shadow-sm">
              {active.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] mb-6 leading-tight">
              {active.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {active.description}
            </p>
            <Link
              href={active.href}
              className="inline-flex items-center justify-center self-start px-6 py-3 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore More
            </Link>
          </div>

          {/* Right — Image */}
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: "clamp(280px, 35vw, 520px)" }}>
            <Image
              key={active.id}
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
