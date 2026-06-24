"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "human-capital",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="5" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <circle cx="30" cy="14" r="5" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M6 36c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="36" cy="30" r="3" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M42 40c0-3.314-2.686-5-6-5" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="36" r="4" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M28 42v-1a4 4 0 00-8 0v1" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Human capital Management",
    subtitle: "At Global ATD, people are the core of success.",
    description:
      "We align talent strategy with business goals through recruitment, performance, and development—building motivated, future-ready teams for sustainable growth.",
  },
  {
    id: "customized-training",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="28" height="20" rx="2" stroke="#8B5CF6" strokeWidth="2" fill="none" />
        <path d="M10 34l4-4h16l4 4" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="36" cy="34" r="6" stroke="#8B5CF6" strokeWidth="2" fill="none" />
        <circle cx="36" cy="34" r="2" fill="#8B5CF6" />
        <path d="M14 18h12M14 22h8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Customized Training Solutions",
    subtitle: "GATD delivers customized training solutions",
    description:
      "Tailored to each client's goals, challenges, and industry needs creating relevant programs and case studies aligned with their vision.",
  },
  {
    id: "train-trainers",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="12" r="5" stroke="#10B981" strokeWidth="2" fill="none" />
        <circle cx="12" cy="30" r="4" stroke="#10B981" strokeWidth="2" fill="none" />
        <circle cx="36" cy="30" r="4" stroke="#10B981" strokeWidth="2" fill="none" />
        <path d="M24 18v6M20 26l-6 6M28 26l6 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 40c0-3.314 2.686-5 6-5s6 1.686 6 5M30 40c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Train the Trainers Program",
    subtitle: "GATD empowers organizations to build internal training teams.",
    description:
      "Our Train-the-Trainer program enhances facilitation, customization, and learning culture—enabling scalable, high-quality employee development.",
  },
  {
    id: "sales-training",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M8 36c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="20" r="5" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <path d="M26 36c0-3.866 2.686-6 6-6s6 2.134 6 6" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M30 14l2 2 4-4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sales and Customer Service Training",
    subtitle: "Great customer experiences stem from knowledge and communication.",
    description:
      "Our targeted training enhances selling, engagement, and negotiation skills building stronger client relationships and driving business growth.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Top Row — heading + description + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#414143] leading-tight">
            Our Services
          </h2>
          <div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              At GATD, we deliver customised training and development solutions designed to empower individuals and organisations to excel. Our leadership development and corporate training programmes combine interactive workshops, e-learning, and virtual classrooms to create engaging, results-driven learning experiences.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-12" style={{ height: "clamp(220px, 30vw, 420px)" }}>
          <Image
            src="/images/home/banner.jpg"
            alt="GATD Services"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Four Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col px-6 lg:px-8 py-6 ${
                index !== services.length - 1 ? "border-b sm:border-b-0 sm:border-r border-slate-200" : ""
              }`}
            >
              {/* Icon */}
              <div className="mb-5">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#414143] mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-bold text-slate-800 mb-2 leading-snug">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
