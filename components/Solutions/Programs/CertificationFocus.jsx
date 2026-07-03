"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

export default function CertificationFocus({
  heading = "This Certification Focuses on Developing",
  focusAreas,
}) {
  const scrollRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const items = focusAreas || defaultFocusAreas;

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".focus-card");
    const width = (card?.offsetWidth || 280) + 16;
    scrollRef.current.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Header row */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] leading-tight max-w-xl">
            {heading}
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#D52029] text-[#D52029] hover:bg-[#D52029] hover:text-white transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#D52029] text-[#D52029] hover:bg-[#D52029] hover:text-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item) => {
            const isActive = hoveredId === item.id || (hoveredId === null && item.isHighlighted);

            return (
              <div
                key={item.id}
                className="focus-card shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{ width: "clamp(240px, 22vw, 300px)", scrollSnapAlign: "start" }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative w-full" style={{ height: "270px" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card bottom */}
                <div className={`transition-all duration-300 ${isActive ? "bg-[#D52029]" : "bg-white"}`}>
                  <div className="px-5 pt-5 pb-2">
                    <h3 className={`text-base sm:text-lg font-bold leading-snug ${isActive ? "text-white" : "text-[#414143]"}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Expandable description */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "max-h-24 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"}`}>
                    <p className="px-5 text-sm text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {!isActive && <div className="pb-5" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
