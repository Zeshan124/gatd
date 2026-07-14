"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const solutionsMenu = [
  {
    category: "Executive Educational Program",
    href: "/solutions/executive-educational",
    items: [
      { label: "Singapore Potential Leadership Development Program (SPLDP)", href: "/solutions/spldp" },
      { label: "Women in Leadership", href: "/solutions/women-in-leadership" },
      { label: "Next-Gen Strategic Leadership for CxOs", href: "/solutions/next-gen-cxo" },
      { label: "Global CEO Executive Leadership Mastery Program", href: "/solutions/ceo-mastery" },
    ],
  },
  {
    category: "Consulting Service",
    href: "/solutions/consulting",
    items: [
      { label: "Ministries Regional & International", href: "/solutions/ministries" },
      { label: "Talent Development & Succession Planning", href: "/solutions/talent-development" },
      { label: "Strategic Workforce Planning and Development", href: "/solutions/workforce-planning" },
      { label: "Balanced Scorecard & Performance Management", href: "/solutions/balanced-scorecard" },
    ],
  },
  {
    category: "Customized Programs",
    href: "/solutions/customized-programs",
    items: [
      { label: "Risk & Crisis Management Leadership", href: "/solutions/risk-crisis" },
      { label: "Strategic Rightsizing", href: "/solutions/strategic-rightsizing" },
      { label: "Transformation Leadership in M&A", href: "/solutions/mergers-acquisitions" },
      { label: "Global Operations in Excellence (GOiE)", href: "/solutions/goie" },
    ],
  },
  {
    category: "Certified Programs",
    href: "/solutions/certified-programs",
    items: [
      { label: "Strategic Human Resources, Business Leadership", href: "/solutions/strategic-hr" },
      { label: "Change Management", href: "/solutions/change-management" },
      { label: "Public Private Partnerships", href: "/solutions/ppp" },
      { label: "Key Performance Indicators (KPIs)", href: "/solutions/kpis" },
    ],
  },
  {
    category: "Executive Retreats",
    href: "/solutions/executive-retreats",
    items: [
      { label: "Strategic Reset Retreat", href: "/solutions/strategic-reset" },
      { label: "The Great Gatsby Gala", href: "/solutions/gatsby-gala" },
      { label: "The All-Star Carnival", href: "/solutions/all-star-carnival" },
    ],
  },
  {
    category: "Incubators — Regional & International",
    href: "/solutions/incubators",
    items: [
      { label: "Global HealthTech", href: "/solutions/global-healthtech" },
      { label: "Net Zero Innovation Lab", href: "/solutions/net-zero" },
      { label: "GovTech Catalyst Hub", href: "/solutions/govtech" },
      { label: "EdTech Skills", href: "/solutions/edtech" },
    ],
  },
  {
    category: "Event Management",
    href: "/solutions/event-management",
    items: [
      { label: "Program Management", href: "/solutions/program-management" },
      { label: "CSR Events", href: "/solutions/csr-events" },
      { label: "Product Launches & Brand Activation", href: "/solutions/product-launches" },
      { label: "Trade Shows and Expo Management", href: "/solutions/trade-shows" },
    ],
  },
  {
    category: "Global Conferences",
    href: "/solutions/global-conferences",
    items: [
      { label: "Global Marketing Forum", href: "/solutions/global-marketing-forum" },
      { label: "Energy Governance & Leadership Summit", href: "/solutions/energy-governance" },
      { label: "The Zero Summit", href: "/solutions/zero-summit" },
      { label: "PetroForesight 2030", href: "/solutions/petroforesight" },
    ],
  },
  {
    category: "Industry Specific",
    href: "/solutions/industry-specific",
    items: [
      { label: "Advanced Program in Financial Strategy", href: "/solutions/financial-strategy" },
      { label: "Innovation Design into Action", href: "/solutions/innovation-design" },
      { label: "Global Marketing & Sales Leadership", href: "/solutions/marketing-sales" },
      { label: "Strategic Leadership Across Healthcare", href: "/solutions/healthcare-leadership" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);

  const closeAll = () => {
    setDropdownOpen(false);
    setHoveredCategory(null);
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/home/GATD-Logo 1.svg"
              alt="GATD Logo"
              width={120}
              height={50}
              className="object-contain h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={closeAll}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-800 hover:text-[#D52029] transition-colors duration-200 rounded-md hover:bg-red-50">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                        <Link
                          href="/solutions"
                          onClick={closeAll}
                          className="text-xs font-bold text-[#D52029] uppercase tracking-wider hover:underline"
                        >
                          View All Solutions →
                        </Link>
                      </div>

                      {solutionsMenu.map((group) => (
                        <div
                          key={group.category}
                          className="relative"
                          onMouseEnter={() => setHoveredCategory(group.category)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <div className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors cursor-default group">
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] transition-colors shrink-0" />
                              {group.category}
                            </span>
                            {group.items.length > 0 && (
                              <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-[#D52029]" />
                            )}
                          </div>

                          {/* Flyout sub-menu */}
                          {hoveredCategory === group.category && (
                            <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeAll}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] shrink-0 transition-colors" />
                                  <span className="leading-snug">{item.label}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-800 hover:text-[#D52029] transition-colors duration-200 rounded-md hover:bg-red-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/images/home/GATD-Company-Profile.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D52029] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Company Profile
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-slate-800 hover:text-[#D52029] hover:bg-red-50 rounded-xl transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180 text-[#D52029]" : ""}`} />
                    </button>

                    {mobileDropdownOpen && (
                      <div className="ml-4 mt-1 border-l-2 border-red-100 pl-3 space-y-0.5">
                        <Link href="/solutions" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-xs font-bold text-[#D52029] uppercase tracking-wider">
                          View All Solutions →
                        </Link>
                        {solutionsMenu.map((group) => (
                          <div key={group.category}>
                            <button
                              onClick={() => setMobileCategoryOpen(mobileCategoryOpen === group.category ? null : group.category)}
                              className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors group"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] transition-colors shrink-0" />
                                {group.category}
                              </span>
                              <ChevronDown className={`w-3 h-3 transition-transform ${mobileCategoryOpen === group.category ? "rotate-180 text-[#D52029]" : ""}`} />
                            </button>
                            {mobileCategoryOpen === group.category && (
                              <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-0.5 mb-1">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2 text-xs text-slate-500 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:text-[#D52029] hover:bg-red-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="px-4 py-6 border-t border-slate-100">
            <Link
              href="/images/home/GATD-Company-Profile.pdf"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-xl transition-colors shadow-md"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
