"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Customized Training Program",
    description: "We design bespoke training programmes tailored to each client's specific goals, industry challenges, and organisational culture — ensuring every programme delivers maximum relevance and lasting impact.",
  },
  {
    id: 2,
    title: "Industry Relevant Curriculum",
    description: "Our curriculum is continuously updated to reflect current market trends, emerging technologies, and evolving business needs — keeping participants ahead of industry change.",
  },
  {
    id: 3,
    title: "Expert Trainers",
    description: "All GATD programmes are facilitated by seasoned practitioners and subject-matter experts with deep industry experience, bringing real-world insight and credibility to every session.",
  },
  {
    id: 4,
    title: "Blended Learning Approach",
    description: "GATD embraces a blended learning approach that combines the best of traditional classroom training with modern digital resources. We utilize a variety of learning methods, including instructor-led sessions, hands-on exercises, case studies, group discussions, e-learning modules, and virtual classrooms. This approach ensures a well-rounded learning experience that caters to different learning styles.",
  },
  {
    id: 5,
    title: "Continuous Learning Approach",
    description: "We support learners beyond the classroom with ongoing resources, follow-up coaching, and reinforcement tools that embed knowledge and sustain behaviour change over the long term.",
  },
  {
    id: 6,
    title: "Future Management Consulting",
    description: "Our forward-looking consulting services help organisations build the management capabilities, structures, and cultures needed to navigate complexity and lead confidently into the future.",
  },
  {
    id: 7,
    title: "Flexible Delivery Options",
    description: "GATD programmes are available in-person, virtual, and hybrid formats — designed to fit around your team's schedule, location, and operational requirements without compromising quality.",
  },
];

export default function KeyFeatures() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#414143] leading-tight">
            Key Features
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
            At GATD, we design impactful learning experiences that combine real-world expertise with flexible delivery and long-term development support. Every program is built to meet industry needs, helping professionals gain practical skills, stay future-ready, and achieve measurable results in their careers and organisations.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Accordion */}
          <div className="divide-y divide-slate-200">
            {features.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div key={f.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : f.id)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-[#414143]" : "text-[#414143] group-hover:text-[#D52029]"}`}>
                      {f.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-[#414143] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Sticky image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "clamp(320px, 42vw, 520px)" }}>
              <Image
                src="/images/services/key.jpg"
                alt="Key Features"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
