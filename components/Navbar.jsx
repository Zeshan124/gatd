"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    children: [
      { label: "Executive Educational Program", href: "/solutions/executive-educational" },
      { label: "Consulting Service", href: "/solutions/consulting" },
      { label: "Customized Programs", href: "/solutions/customized-programs" },
      { label: "Certified Programs", href: "/solutions/certified-programs" },
      { label: "Executive Retreats", href: "/solutions/executive-retreats" },
      { label: "Incubators — Regional & International", href: "/solutions/incubators" },
      { label: "Event Management", href: "/solutions/event-management" },
      { label: "Global Conferences", href: "/solutions/global-conferences" },
      { label: "Industry Specific", href: "/solutions/industry-specific" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-800 hover:text-[#D52029] transition-colors duration-200 rounded-md hover:bg-red-50"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                        <Link
                          href="/solutions"
                          className="text-xs font-bold text-[#D52029] uppercase tracking-wider hover:underline"
                          onClick={() => setDropdownOpen(false)}
                        >
                          View All Solutions →
                        </Link>
                      </div>
                      {link.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] transition-colors shrink-0" />
                          {child.label}
                        </Link>
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

      {/* Mobile Menu — full-height slide-in panel */}
      <div
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Nav links */}
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
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180 text-[#D52029]" : ""}`}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="ml-4 mt-1 border-l-2 border-red-100 pl-3 space-y-0.5">
                        <Link
                          href="/solutions"
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-xs font-bold text-[#D52029] uppercase tracking-wider"
                        >
                          View All Solutions →
                        </Link>
                        {link.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D52029] transition-colors shrink-0" />
                            {child.label}
                          </Link>
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

          {/* Bottom CTA */}
          <div className="px-4 py-6 border-t border-slate-100">
            <Link
              href="/company-profile"
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
