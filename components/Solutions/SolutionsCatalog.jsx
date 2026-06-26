"use client";

import { useState, useRef } from "react";
import { Filter, X } from "lucide-react";
import SolutionCategoryRow from "./SolutionCategoryRow";

const catalog = [
  {
    id: "executive-educational",
    title: "Executive Educational Program",
    items: [
      { id: 1, title: "Singapore Potential Leadership Development Program (SPLDP)", image: "/images/solutions/executive-educational/Singapore-Potential.jpg", href: "/solutions/spldp" },
      { id: 2, title: "Women in Leadership", image: "/images/solutions/executive-educational/Women-in-Leadership.jpg", href: "/solutions/women-in-leadership" },
      { id: 3, title: "Next-Gen Strategic Leadership for CxOs", image: "/images/solutions/executive-educational/Next-Gen-Strategic-Leadership.jpg", href: "/solutions/next-gen-cxo" },
      { id: 4, title: "Global CEO Executive Leadership Mastery Program", image: "/images/solutions/executive-educational/Global-CEO-Executive-Leadership-Mastery.jpg", href: "/solutions/ceo-mastery" },
    ],
  },
  {
    id: "consulting-service",
    title: "Consulting Service",
    items: [
      { id: 1, title: "Ministries Regional & International", image: "/images/solutions/consulting-1.jpg", href: "/solutions/ministries" },
      { id: 2, title: "Talent Development & Succession Planning", image: "/images/solutions/consulting-2.jpg", href: "/solutions/talent-development" },
      { id: 3, title: "Strategic Workforce Planning and Development", image: "/images/solutions/consulting-3.jpg", href: "/solutions/workforce-planning" },
      { id: 4, title: "Balanced Scorecard & Performance Management", image: "/images/solutions/consulting-4.jpg", href: "/solutions/balanced-scorecard" },
    ],
  },
  {
    id: "customized-programs",
    title: "Customized Programs",
    items: [
      { id: 1, title: "Risk & Crisis Management Leadership", image: "/images/solutions/custom-1.jpg", href: "/solutions/risk-crisis" },
      { id: 2, title: "Strategic Rightsizing", image: "/images/solutions/custom-2.jpg", href: "/solutions/strategic-rightsizing" },
      { id: 3, title: "Transformation Leadership in Mergers & Acquisitions", image: "/images/solutions/custom-3.jpg", href: "/solutions/mergers-acquisitions" },
      { id: 4, title: "Global Operations in Excellence (GOiE)", image: "/images/solutions/custom-4.jpg", href: "/solutions/goie" },
    ],
  },
  {
    id: "certified-programs",
    title: "Certified Programs",
    items: [
      { id: 1, title: "Strategic Human Resources, Business Leadership and Management", image: "/images/solutions/certified-1.jpg", href: "/solutions/strategic-hr" },
      { id: 2, title: "Change Management", image: "/images/solutions/certified-2.jpg", href: "/solutions/change-management" },
      { id: 3, title: "Public Private Partnerships", image: "/images/solutions/certified-3.jpg", href: "/solutions/ppp" },
      { id: 4, title: "Key Performance Indicators (KPIs)", image: "/images/solutions/certified-4.jpg", href: "/solutions/kpis" },
    ],
  },
  {
    id: "executive-retreats",
    title: "Executive Retreats",
    items: [
      { id: 1, title: "Strategic Reset Retreat", image: "/images/solutions/retreat-1.jpg", href: "/solutions/strategic-reset" },
      { id: 2, title: "The Great Gatsby Gala", image: "/images/solutions/retreat-2.jpg", href: "/solutions/gatsby-gala" },
      { id: 3, title: "The All-Star Carnival", image: "/images/solutions/retreat-3.jpg", href: "/solutions/all-star-carnival" },
    ],
  },
  {
    id: "incubators",
    title: "Incubators - Regional & International",
    items: [
      { id: 1, title: "Global HealthTech", image: "/images/solutions/incubator-1.jpg", href: "/solutions/global-healthtech" },
      { id: 2, title: "Net Zero Innovation lab", image: "/images/solutions/incubator-2.jpg", href: "/solutions/net-zero" },
      { id: 3, title: "GovTech Catalyst Hub", image: "/images/solutions/incubator-3.jpg", href: "/solutions/govtech" },
      { id: 4, title: "EdTech Skills", image: "/images/solutions/incubator-4.jpg", href: "/solutions/edtech" },
    ],
  },
  {
    id: "event-management",
    title: "Event Management",
    items: [
      { id: 1, title: "Program Management", image: "/images/solutions/event-1.jpg", href: "/solutions/program-management" },
      { id: 2, title: "Corporate Social Responsibility (CSR) Events", image: "/images/solutions/event-2.jpg", href: "/solutions/csr-events" },
      { id: 3, title: "Product Launches & Brand Activation Events", image: "/images/solutions/event-3.jpg", href: "/solutions/product-launches" },
      { id: 4, title: "Trade Shows and Expo Management", image: "/images/solutions/event-4.jpg", href: "/solutions/trade-shows" },
    ],
  },
  {
    id: "global-conferences",
    title: "Global Conferences",
    items: [
      { id: 1, title: "Global Marketing Forum", image: "/images/solutions/conference-1.jpg", href: "/solutions/global-marketing-forum" },
      { id: 2, title: "Energy Governance & Leadership Summit", image: "/images/solutions/conference-2.jpg", href: "/solutions/energy-governance" },
      { id: 3, title: "The Zero Summit Strategic Dialogues for a Net Zero World", image: "/images/solutions/conference-3.jpg", href: "/solutions/zero-summit" },
      { id: 4, title: "PetroForesight 2030: The Leadership Blueprint for Energy Transition", image: "/images/solutions/conference-4.jpg", href: "/solutions/petroforesight" },
    ],
  },
  {
    id: "industry-specific",
    title: "Industry Specific",
    items: [
      { id: 1, title: "Advanced Program in Financial Strategy for Executives", image: "/images/solutions/industry-1.jpg", href: "/solutions/financial-strategy" },
      { id: 2, title: "Innovation Design into Action", image: "/images/solutions/industry-2.jpg", href: "/solutions/innovation-design" },
      { id: 3, title: "Global Marketing & Sales Leadership", image: "/images/solutions/industry-3.jpg", href: "/solutions/marketing-sales" },
      { id: 4, title: "Strategic Leadership Across Healthcare Ecosystems", image: "/images/solutions/industry-4.jpg", href: "/solutions/healthcare-leadership" },
    ],
  },
];

export default function SolutionsCatalog() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const displayed = activeFilter
    ? catalog.filter((c) => c.id === activeFilter)
    : catalog;

  return (
    <section className="bg-[#F8F8F8] py-10 sm:py-14 md:py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Filter bar */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => setFilterOpen((p) => !p)}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:border-[#D52029] hover:text-[#D52029] transition-colors duration-200"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#D52029] transition-colors"
            >
              <X className="w-4 h-4" />
              Clear Filter
            </button>
          )}
        </div>

        {/* Filter dropdown */}
        {filterOpen && (
          <div className="flex flex-wrap gap-2 mb-10 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            {catalog.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveFilter(cat.id); setFilterOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? "bg-[#D52029] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-[#D52029] hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Category rows */}
        {displayed.map((category) => (
          <SolutionCategoryRow
            key={category.id}
            title={category.title}
            items={category.items}
          />
        ))}

      </div>
    </section>
  );
}
