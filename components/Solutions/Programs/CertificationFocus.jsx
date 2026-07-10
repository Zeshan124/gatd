"use client";

import { useState } from "react";
import Image from "next/image";

const defaultFocusAreas = [
  {
    id: 1,
    image: "/images/solutions/Programs/focus-1.jpg",
    title: "Strategic HR Alignment",
    description: "Strategic thinking aligned with business priorities",
    isHighlighted: true,
  },
  {
    id: 2,
    image: "/images/solutions/Programs/focus-2.jpg",
    title: "Data-Driven Decision Making",
    description: "Data-driven HR decision-making for measurable outcomes",
    isHighlighted: false,
  },
  {
    id: 3,
    image: "/images/solutions/Programs/focus-3.jpg",
    title: "Influential Leadership & Stakeholders",
    description: "Leadership influence and effective stakeholder management",
    isHighlighted: false,
  },
  {
    id: 4,
    image: "/images/solutions/Programs/focus-4.jpg",
    title: "Performance-Focused Workforce Strategy",
    description: "Workforce strategies are directly tied to organisational performance.",
    isHighlighted: false,
  },
  {
    id: 5,
    image: "/images/solutions/Programs/focus-1.jpg",
    title: "Change & Culture Management",
    description: "Driving sustainable change through people-centric culture transformation.",
    isHighlighted: false,
  },
];

function FocusCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const isActive = hovered;

  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Top accent bar */}
        <div className={`absolute top-0 inset-x-0 h-1 bg-[#D52029] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Card footer */}
      <div className={`transition-colors duration-300 ${isActive ? "bg-[#D52029]" : "bg-white"}`}>
        <div className="px-5 pt-4 pb-2">
          <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${isActive ? "text-white" : "text-[#414143]"}`}>
            {item.title}
          </h3>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-24 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"}`}>
          <p className="px-5 text-sm text-white/90 leading-relaxed">{item.description}</p>
        </div>
        {!isActive && <div className="pb-4" />}
      </div>
    </div>
  );
}

export default function CertificationFocus({
  heading = "This Certification Focuses on Developing",
  focusAreas,
}) {
  const items = focusAreas || defaultFocusAreas;
  const topRow = items.slice(0, 3);
  const bottomRow = items.slice(3, 5);

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] leading-tight mb-10 max-w-2xl">
          {heading}
        </h2>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          {topRow.map((item) => (
            <FocusCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom row — 2 cards, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:w-2/3 md:mx-auto">
          {bottomRow.map((item) => (
            <FocusCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
