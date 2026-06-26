"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SolutionCategoryRow({ title, items }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".sol-card");
    const width = (card?.offsetWidth || 280) + 16;
    scrollRef.current.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <div className="mb-12 sm:mb-16">
      {/* Row header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414143] leading-tight">
          {title}
        </h2>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#D52029] text-[#D52029] hover:bg-[#D52029] hover:text-white transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-[#D52029] text-[#D52029] hover:bg-[#D52029] hover:text-white transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Cards strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-1"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, idx) => (
          <Link
            key={item.id}
            href={item.href || "#"}
            className="sol-card flex-shrink-0 rounded-2xl overflow-hidden flex flex-col group"
            style={{ width: "clamp(220px, calc(25vw - 28px), 300px)", scrollSnapAlign: "start" }}
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title label */}
            <div
              className={`px-5 py-4 flex-1 ${
                idx === 0
                  ? "bg-[#D52029]"
                  : "bg-white border border-slate-100"
              }`}
            >
              <h3
                className={`text-base sm:text-lg font-bold leading-snug ${
                  idx === 0 ? "text-white" : "text-[#414143]"
                }`}
              >
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
