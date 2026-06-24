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
      { label: "Leadership Development", href: "/solutions/leadership" },
      { label: "Corporate Training", href: "/solutions/corporate-training" },
      { label: "Executive Coaching", href: "/solutions/executive-coaching" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/home/GATD-Logo 1.svg"
              alt="GATD Logo"
              width={120}
              height={50}
              className="object-contain h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-800 hover:text-[#D52029] transition-colors duration-200 rounded-md hover:bg-red-50"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                      {link.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-[#D52029] hover:bg-red-50 transition-colors"
                        >
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
                  className="relative px-4 py-2 text-sm font-medium text-slate-800 hover:text-[#D52029] transition-colors duration-200 rounded-md hover:bg-red-50 group"
                >
                  {link.label}
                  {/* Active underline indicator */}
                  {link.href === "/" && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#D52029] rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/company-profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D52029] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
              </svg>
              Company Profile
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-800 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.hasDropdown && link.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 pr-4 py-2.5 text-sm text-slate-600 hover:text-[#D52029] hover:bg-red-50 rounded-lg transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/company-profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#D52029] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
                </svg>
                Company Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}