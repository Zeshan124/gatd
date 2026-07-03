"use client";

import { useState } from "react";
import Image from "next/image";

const defaultDays = [
  { label: "DAY 1", id: "day1", image: "/images/solutions/Programs/pillars-day1.jpg" },
  { label: "DAY 2", id: "day2", image: "/images/solutions/Programs/pillars-day1.jpg" },
  { label: "DAY 3", id: "day3", image: "/images/solutions/Programs/pillars-day1.jpg" },
];

export default function StrategicPillars({
  heading = "3 Strategic Pillars",
  badge = "3 Days",
  days,
}) {
  const [activeDay, setActiveDay] = useState("day1");
  const dayList = days || defaultDays;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-block px-5 py-2 text-sm font-semibold text-slate-700 bg-[#E8E8E8] rounded-lg">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] text-center leading-tight mb-10">
          {heading}
        </h2>

        {/* Day tabs */}
        <div className="grid border-b border-slate-200 mb-12" style={{ gridTemplateColumns: `repeat(${dayList.length}, 1fr)` }}>
          {dayList.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`py-3 text-sm sm:text-base font-bold text-center transition-colors duration-200 relative ${
                activeDay === day.id ? "text-[#414143]" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {day.label}
              {activeDay === day.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D52029] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Active day image */}
        {(() => {
          const activeImage = dayList.find((d) => d.id === activeDay)?.image;
          return activeImage ? (
            <div className="w-full max-w-5xl mx-auto">
              <Image
                key={activeDay}
                src={activeImage}
                alt={`${activeDay} strategic pillars diagram`}
                width={1000}
                height={600}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          ) : null;
        })()}

      </div>
    </section>
  );
}
