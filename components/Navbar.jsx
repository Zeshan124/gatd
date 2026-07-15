"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const solutionsMenu = [
  {
    category: "Executive Educational Program",
    items: [
      {
        label: "Singapore Potential Leadership Development Program",
        href: "/solutions/spldp",
        children: [
          { label: "Strategic Leadership Foundations", href: "/solutions/spldp" },
          { label: "Executive Presence & Communication", href: "/solutions/spldp" },
          { label: "Cross-Sector Leadership Immersion", href: "/solutions/spldp" },
          { label: "Innovation & Transformation Leadership", href: "/solutions/spldp" },
        ],
      },
      {
        label: "Women in Leadership",
        href: "/solutions/women-in-leadership",
        children: [
          { label: "Leadership Identity & Presence", href: "/solutions/women-in-leadership" },
          { label: "Strategic Influence & Negotiation", href: "/solutions/women-in-leadership" },
          { label: "Executive Career Acceleration", href: "/solutions/women-in-leadership" },
          { label: "Inclusive Leadership in Practice", href: "/solutions/women-in-leadership" },
        ],
      },
      {
        label: "Next-Gen Strategic Leadership for CxOs",
        href: "/solutions/next-gen-cxo",
        children: [
          { label: "Enterprise Strategy & Innovation", href: "/solutions/next-gen-cxo" },
          { label: "Digital Leadership & Transformation", href: "/solutions/next-gen-cxo" },
          { label: "Boardroom Governance & Communication", href: "/solutions/next-gen-cxo" },
          { label: "Leading Organisational Resilience", href: "/solutions/next-gen-cxo" },
        ],
      },
      {
        label: "Global CEO Executive Leadership Mastery Program",
        href: "/solutions/ceo-mastery",
        children: [
          { label: "CEO Strategy & Value Creation", href: "/solutions/ceo-mastery" },
          { label: "Culture, People & Performance Leadership", href: "/solutions/ceo-mastery" },
          { label: "Board Relations & Corporate Governance", href: "/solutions/ceo-mastery" },
          { label: "Global CEO Executive Peer Forum", href: "/solutions/ceo-mastery" },
        ],
      },
    ],
  },
  {
    category: "Consulting Service",
    items: [
      {
        label: "Ministries Regional & International",
        href: "/solutions/ministries",
        children: [
          { label: "Public Sector Leadership Development", href: "/solutions/ministries" },
          { label: "Policy Execution & Delivery Excellence", href: "/solutions/ministries" },
          { label: "Cross-Ministry Collaboration Frameworks", href: "/solutions/ministries" },
          { label: "Regional Leadership Benchmarking", href: "/solutions/ministries" },
        ],
      },
      {
        label: "Talent Development & Succession Planning",
        href: "/solutions/talent-development",
        children: [
          { label: "High-Potential Identification & Assessment", href: "/solutions/talent-development" },
          { label: "Individual Development Planning", href: "/solutions/talent-development" },
          { label: "Leadership Pipeline Architecture", href: "/solutions/talent-development" },
          { label: "Succession Readiness & Risk Management", href: "/solutions/talent-development" },
        ],
      },
      {
        label: "Strategic Workforce Planning and Development",
        href: "/solutions/workforce-planning",
        children: [
          { label: "Workforce Demand & Supply Modelling", href: "/solutions/workforce-planning" },
          { label: "Capability Gap Analysis & Roadmap", href: "/solutions/workforce-planning" },
          { label: "Workforce Scenario Planning", href: "/solutions/workforce-planning" },
          { label: "Strategic Workforce Dashboard Design", href: "/solutions/workforce-planning" },
        ],
      },
      {
        label: "Balanced Scorecard & Performance Management",
        href: "/solutions/balanced-scorecard",
        children: [
          { label: "Strategy Map & Balanced Scorecard Design", href: "/solutions/balanced-scorecard" },
          { label: "KPI Framework Development", href: "/solutions/balanced-scorecard" },
          { label: "Performance Culture Embedding", href: "/solutions/balanced-scorecard" },
          { label: "Executive Performance Review Facilitation", href: "/solutions/balanced-scorecard" },
        ],
      },
    ],
  },
  {
    category: "Customized Programs",
    items: [
      {
        label: "Risk & Crisis Management Leadership",
        href: "/solutions/risk-crisis",
        children: [
          { label: "Enterprise Risk Assessment & Framework", href: "/solutions/risk-crisis" },
          { label: "Crisis Leadership & Decision-Making", href: "/solutions/risk-crisis" },
          { label: "Business Continuity Planning", href: "/solutions/risk-crisis" },
          { label: "Crisis Communication & Reputation Management", href: "/solutions/risk-crisis" },
        ],
      },
      {
        label: "Strategic Rightsizing",
        href: "/solutions/strategic-rightsizing",
        children: [
          { label: "Workforce Diagnostic & Rightsizing Strategy", href: "/solutions/strategic-rightsizing" },
          { label: "People-Centred Transition Management", href: "/solutions/strategic-rightsizing" },
          { label: "Talent Retention During Restructuring", href: "/solutions/strategic-rightsizing" },
          { label: "Post-Restructuring Culture Rebuild", href: "/solutions/strategic-rightsizing" },
        ],
      },
      {
        label: "Transformation Leadership in M&A",
        href: "/solutions/mergers-acquisitions",
        children: [
          { label: "M&A Leadership & Integration Strategy", href: "/solutions/mergers-acquisitions" },
          { label: "Cultural Due Diligence & Integration", href: "/solutions/mergers-acquisitions" },
          { label: "Change Communication in M&A", href: "/solutions/mergers-acquisitions" },
          { label: "Post-Merger Performance Acceleration", href: "/solutions/mergers-acquisitions" },
        ],
      },
      {
        label: "Global Operations in Excellence (GOiE)",
        href: "/solutions/goie",
        children: [
          { label: "Operational Excellence Foundations", href: "/solutions/goie" },
          { label: "Lean & Process Optimisation", href: "/solutions/goie" },
          { label: "Global Quality Management Systems", href: "/solutions/goie" },
          { label: "Continuous Improvement Leadership", href: "/solutions/goie" },
        ],
      },
    ],
  },
  {
    category: "Certified Programs",
    items: [
      {
        label: "Strategic Human Resources, Business Leadership",
        href: "/solutions/strategic-hr",
        children: [
          { label: "Strategic HR Business Partnership & Beyond", href: "/solutions/strategic-hr/strategic-hr-business-partnership" },
          { label: "Impactful Business and People Leadership", href: "/solutions/strategic-hr/business-people-leadership" },
          { label: "Performance Development and Rewards Management", href: "/solutions/strategic-hr/performance-rewards" },
          { label: "Resourcing, Talent and Learning Management", href: "/solutions/strategic-hr/resourcing-talent-learning" },
          { label: "HR Analytics and Digital Transformation", href: "/solutions/strategic-hr/hr-analytics" },
          { label: "Employment Law and Compliance", href: "/solutions/strategic-hr/employment-law" },
          { label: "Organisational Design and Change", href: "/solutions/strategic-hr/org-design-change" },
          { label: "Executive Compensation and Benefits Strategy", href: "/solutions/strategic-hr/compensation-benefits" },
          { label: "Impactive HR for the Uninitiated", href: "/solutions/strategic-hr/impactive-hr" },
          { label: "Progressing Organization Development", href: "/solutions/strategic-hr/progressing-org-development" },
          { label: "Advancing Trainer Development (ToT)", href: "/solutions/strategic-hr/advancing-trainer-development" },
          { label: "Management: Best Practices for Best Results", href: "/solutions/strategic-hr/management-best-practices" },
        ],
      },
      {
        label: "Change Management",
        href: "/solutions/change-management",
        children: [
          { label: "Change Management Foundations", href: "/solutions/change-management" },
          { label: "Stakeholder Engagement & Communication", href: "/solutions/change-management" },
          { label: "Leading Organisational Transitions", href: "/solutions/change-management" },
          { label: "Sustaining Change & Building Resilience", href: "/solutions/change-management" },
        ],
      },
      {
        label: "Public Private Partnerships",
        href: "/solutions/ppp",
        children: [
          { label: "PPP Frameworks & Legal Structures", href: "/solutions/ppp" },
          { label: "PPP Financial Structuring & Risk", href: "/solutions/ppp" },
          { label: "PPP Negotiation & Contract Management", href: "/solutions/ppp" },
          { label: "PPP Stakeholder & Governance Management", href: "/solutions/ppp" },
        ],
      },
      {
        label: "Key Performance Indicators (KPIs)",
        href: "/solutions/kpis",
        children: [
          { label: "KPI Design Principles & Frameworks", href: "/solutions/kpis" },
          { label: "Performance Dashboard Development", href: "/solutions/kpis" },
          { label: "KPI Data Collection & Governance", href: "/solutions/kpis" },
          { label: "Building a High-Performance Culture", href: "/solutions/kpis" },
        ],
      },
    ],
  },
  {
    category: "Executive Retreats",
    items: [
      {
        label: "Strategic Reset Retreat",
        href: "/solutions/strategic-reset",
        children: [
          { label: "Strategic Reflection & Horizon Planning", href: "/solutions/strategic-reset" },
          { label: "Leadership Team Alignment Workshop", href: "/solutions/strategic-reset" },
          { label: "Outdoor Leadership Experience", href: "/solutions/strategic-reset" },
          { label: "Strategic Commitments & Action Planning", href: "/solutions/strategic-reset" },
        ],
      },
      {
        label: "The Great Gatsby Gala",
        href: "/solutions/gatsby-gala",
        children: [
          { label: "Gatsby-Themed Gala Dinner", href: "/solutions/gatsby-gala" },
          { label: "Executive Awards & Recognition Ceremony", href: "/solutions/gatsby-gala" },
          { label: "Curated Networking Experience", href: "/solutions/gatsby-gala" },
          { label: "Leadership Inspiration Keynote", href: "/solutions/gatsby-gala" },
        ],
      },
      {
        label: "The All-Star Carnival",
        href: "/solutions/all-star-carnival",
        children: [
          { label: "Team Competition & Games", href: "/solutions/all-star-carnival" },
          { label: "Creative Collaboration Challenges", href: "/solutions/all-star-carnival" },
          { label: "Team Awards & Recognition", href: "/solutions/all-star-carnival" },
          { label: "Carnival Gala Celebration", href: "/solutions/all-star-carnival" },
        ],
      },
    ],
  },
  {
    category: "Incubators — Regional & International",
    items: [
      {
        label: "Global HealthTech",
        href: "/solutions/global-healthtech",
        children: [
          { label: "HealthTech Validation & Market Entry", href: "/solutions/global-healthtech" },
          { label: "Healthcare Regulatory Navigation", href: "/solutions/global-healthtech" },
          { label: "HealthTech Investment Readiness", href: "/solutions/global-healthtech" },
          { label: "Global HealthTech Partnership Programme", href: "/solutions/global-healthtech" },
        ],
      },
      {
        label: "Net Zero Innovation Lab",
        href: "/solutions/net-zero",
        children: [
          { label: "Clean-Tech Validation & Scaling", href: "/solutions/net-zero" },
          { label: "Green Finance & Carbon Market Navigation", href: "/solutions/net-zero" },
          { label: "Corporate Sustainability Partnership", href: "/solutions/net-zero" },
          { label: "Net Zero Investment Readiness", href: "/solutions/net-zero" },
        ],
      },
      {
        label: "GovTech Catalyst Hub",
        href: "/solutions/govtech",
        children: [
          { label: "Government Problem-Solving Sprint", href: "/solutions/govtech" },
          { label: "Public Sector Procurement Navigation", href: "/solutions/govtech" },
          { label: "GovTech Pilot & Deployment Programme", href: "/solutions/govtech" },
          { label: "Smart City Innovation Lab", href: "/solutions/govtech" },
        ],
      },
      {
        label: "EdTech Skills",
        href: "/solutions/edtech",
        children: [
          { label: "EdTech Product Validation & Design", href: "/solutions/edtech" },
          { label: "Learning Science & Pedagogy Integration", href: "/solutions/edtech" },
          { label: "EdTech Go-to-Market Strategy", href: "/solutions/edtech" },
          { label: "EdTech Investment & Partnership Programme", href: "/solutions/edtech" },
        ],
      },
    ],
  },
  {
    category: "Event Management",
    items: [
      {
        label: "Program Management",
        href: "/solutions/program-management",
        children: [
          { label: "End-to-End Programme Planning", href: "/solutions/program-management" },
          { label: "Logistics & Vendor Management", href: "/solutions/program-management" },
          { label: "Stakeholder & Communications Management", href: "/solutions/program-management" },
          { label: "On-Site Delivery & Post-Event Reporting", href: "/solutions/program-management" },
        ],
      },
      {
        label: "CSR Events",
        href: "/solutions/csr-events",
        children: [
          { label: "Community Engagement Events", href: "/solutions/csr-events" },
          { label: "Charity Partnership Programmes", href: "/solutions/csr-events" },
          { label: "Employee Volunteering Initiatives", href: "/solutions/csr-events" },
          { label: "CSR Impact Reporting & Communications", href: "/solutions/csr-events" },
        ],
      },
      {
        label: "Product Launches & Brand Activation",
        href: "/solutions/product-launches",
        children: [
          { label: "Product Launch Strategy & Concept", href: "/solutions/product-launches" },
          { label: "Brand Activation Experience Design", href: "/solutions/product-launches" },
          { label: "Media & Influencer Engagement", href: "/solutions/product-launches" },
          { label: "Launch Event Production & Delivery", href: "/solutions/product-launches" },
        ],
      },
      {
        label: "Trade Shows and Expo Management",
        href: "/solutions/trade-shows",
        children: [
          { label: "Trade Show Strategy & Planning", href: "/solutions/trade-shows" },
          { label: "Exhibition Design & Build", href: "/solutions/trade-shows" },
          { label: "On-Floor Engagement & Lead Generation", href: "/solutions/trade-shows" },
          { label: "Post-Show Follow-Up & ROI Reporting", href: "/solutions/trade-shows" },
        ],
      },
    ],
  },
  {
    category: "Global Conferences",
    items: [
      {
        label: "Global Marketing Forum",
        href: "/solutions/global-marketing-forum",
        children: [
          { label: "Global Marketing Keynote & Trends", href: "/solutions/global-marketing-forum" },
          { label: "Digital & Brand Strategy Summit", href: "/solutions/global-marketing-forum" },
          { label: "Marketing Innovation Workshop", href: "/solutions/global-marketing-forum" },
          { label: "Executive Marketing Networking Forum", href: "/solutions/global-marketing-forum" },
        ],
      },
      {
        label: "Energy Governance & Leadership Summit",
        href: "/solutions/energy-governance",
        children: [
          { label: "Energy Governance & Policy Dialogue", href: "/solutions/energy-governance" },
          { label: "Energy Transition Leadership Forum", href: "/solutions/energy-governance" },
          { label: "Renewable Energy Investment Summit", href: "/solutions/energy-governance" },
          { label: "Energy Sector CEO & Board Roundtable", href: "/solutions/energy-governance" },
        ],
      },
      {
        label: "The Zero Summit",
        href: "/solutions/zero-summit",
        children: [
          { label: "Net Zero Strategic Dialogues", href: "/solutions/zero-summit" },
          { label: "Climate Finance & Investment Forum", href: "/solutions/zero-summit" },
          { label: "Corporate Net Zero Commitment Sessions", href: "/solutions/zero-summit" },
          { label: "Innovation Showcase & Partnership Lab", href: "/solutions/zero-summit" },
        ],
      },
      {
        label: "PetroForesight 2030",
        href: "/solutions/petroforesight",
        children: [
          { label: "Energy Transition Strategy 2030", href: "/solutions/petroforesight" },
          { label: "Decarbonisation & New Energy Models", href: "/solutions/petroforesight" },
          { label: "Energy Investment & Finance Forum", href: "/solutions/petroforesight" },
          { label: "Oil & Gas Executive Leadership Summit", href: "/solutions/petroforesight" },
        ],
      },
    ],
  },
  {
    category: "Industry Specific",
    items: [
      {
        label: "Advanced Program in Financial Strategy",
        href: "/solutions/financial-strategy",
        children: [
          { label: "Corporate Finance & Capital Allocation", href: "/solutions/financial-strategy" },
          { label: "M&A Valuation & Deal Strategy", href: "/solutions/financial-strategy" },
          { label: "Investor Relations & Board Communication", href: "/solutions/financial-strategy" },
          { label: "Value Creation & Financial Leadership", href: "/solutions/financial-strategy" },
        ],
      },
      {
        label: "Innovation Design into Action",
        href: "/solutions/innovation-design",
        children: [
          { label: "Design Thinking Foundations", href: "/solutions/innovation-design" },
          { label: "Innovation Strategy & Ideation", href: "/solutions/innovation-design" },
          { label: "Rapid Prototyping & Testing", href: "/solutions/innovation-design" },
          { label: "Scaling Innovation Across the Organisation", href: "/solutions/innovation-design" },
        ],
      },
      {
        label: "Global Marketing & Sales Leadership",
        href: "/solutions/marketing-sales",
        children: [
          { label: "Global Marketing Strategy & Brand", href: "/solutions/marketing-sales" },
          { label: "Sales Leadership & Revenue Growth", href: "/solutions/marketing-sales" },
          { label: "Digital Marketing & Customer Experience", href: "/solutions/marketing-sales" },
          { label: "Commercial Growth Planning", href: "/solutions/marketing-sales" },
        ],
      },
      {
        label: "Strategic Leadership Across Healthcare",
        href: "/solutions/healthcare-leadership",
        children: [
          { label: "Healthcare Strategy & System Leadership", href: "/solutions/healthcare-leadership" },
          { label: "Clinical Excellence & Quality Improvement", href: "/solutions/healthcare-leadership" },
          { label: "Healthcare Finance & Resource Management", href: "/solutions/healthcare-leadership" },
          { label: "Digital Health & Innovation Leadership", href: "/solutions/healthcare-leadership" },
        ],
      },
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);
  const [mobileItemOpen, setMobileItemOpen] = useState(null);

  const closeAll = () => {
    setDropdownOpen(false);
    setHoveredCategory(null);
    setHoveredItem(null);
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

                  {/* Level 1 — Category list */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-72 z-50 pt-1">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                        <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                          <Link href="/solutions" onClick={closeAll} className="text-xs font-bold text-[#D52029] uppercase tracking-wider hover:underline">
                            View All Solutions →
                          </Link>
                        </div>

                        {solutionsMenu.map((group) => (
                          <div
                            key={group.category}
                            className="relative"
                            onMouseEnter={() => { setHoveredCategory(group.category); setHoveredItem(null); }}
                            onMouseLeave={() => setHoveredCategory(null)}
                          >
                            <div className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors cursor-default group">
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] transition-colors shrink-0" />
                                {group.category}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-[#D52029]" />
                            </div>

                            {/* Level 2 — Items flyout */}
                            {hoveredCategory === group.category && (
                              <div className="absolute left-full top-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                                {group.items.map((item) => (
                                  <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.label)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={closeAll}
                                      className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors group"
                                    >
                                      <span className="flex items-center gap-2 min-w-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] shrink-0 transition-colors" />
                                        <span className="leading-snug truncate">{item.label}</span>
                                      </span>
                                      {item.children?.length > 0 && (
                                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-[#D52029]" />
                                      )}
                                    </Link>

                                    {/* Level 3 — Children flyout */}
                                    {item.children?.length > 0 && hoveredItem === item.label && (
                                      <div className="absolute left-full top-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 max-h-80 overflow-y-auto">
                                        <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                                          <Link href={item.href} onClick={closeAll} className="text-xs font-bold text-[#D52029] uppercase tracking-wider hover:underline">
                                            View All →
                                          </Link>
                                        </div>
                                        {item.children.map((child, ci) => (
                                          <Link
                                            key={`${child.href}-${ci}`}
                                            href={child.href}
                                            onClick={closeAll}
                                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors group"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] shrink-0 transition-colors" />
                                            <span className="leading-snug">{child.label}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
                            {/* Category */}
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
                                  <div key={item.href}>
                                    {item.children?.length > 0 ? (
                                      <>
                                        <button
                                          onClick={() => setMobileItemOpen(mobileItemOpen === item.label ? null : item.label)}
                                          className="flex items-center justify-between w-full px-3 py-2 text-xs text-slate-500 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors group"
                                        >
                                          <span className="text-left leading-snug">{item.label}</span>
                                          <ChevronDown className={`w-3 h-3 shrink-0 ml-2 transition-transform ${mobileItemOpen === item.label ? "rotate-180 text-[#D52029]" : ""}`} />
                                        </button>
                                        {mobileItemOpen === item.label && (
                                          <div className="ml-4 pl-3 border-l-2 border-red-50 space-y-0.5 mb-1">
                                            {item.children.map((child) => (
                                              <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 py-2 text-xs text-slate-400 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors"
                                              >
                                                {child.label}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-3 py-2 text-xs text-slate-500 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors"
                                      >
                                        {item.label}
                                      </Link>
                                    )}
                                  </div>
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
