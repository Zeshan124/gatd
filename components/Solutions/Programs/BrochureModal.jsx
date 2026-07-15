"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { programsData } from "@/lib/programsData";

const countries = [
  "UAE", "Saudi Arabia", "Singapore", "United Kingdom", "United States",
  "India", "Pakistan", "Malaysia", "Australia", "Canada", "Germany",
  "France", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Egypt",
  "Nigeria", "South Africa", "Kenya", "Philippines", "Indonesia",
  "Turkey", "China", "Japan",
];

export default function BrochureModal({ open, onClose, currentSlug, parentSlug, brochure = "/images/home/GATD-Company-Profile.pdf" }) {
  const [form, setForm] = useState({ name: "", email: "", country: "", organization: "", programme: "" });
  const [submitted, setSubmitted] = useState(false);

  // Current programme + all siblings under the same parent
  const currentProgram = programsData[currentSlug];
  const allPrograms = Object.entries(programsData)
    .filter(([, p]) => p.parentSlug === parentSlug)
    .map(([slug, p]) => ({ slug, title: p.title, isCurrent: slug === currentSlug }));

  // Pre-select the current programme
  const initialProgramme = currentSlug || "";
  const [selectedProgramme, setSelectedProgramme] = useState(initialProgramme);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // reset on close
      setSubmitted(false);
      setForm({ name: "", email: "", country: "", organization: "", programme: "" });
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-white border border-slate-300 focus:border-[#D52029] outline-none rounded-md px-4 py-3 text-sm text-[#414143] placeholder-slate-400 transition-colors duration-200";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Red header bar */}
        <div className="bg-[#D52029] px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Programme Brochure</p>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              Download Your Free Brochure
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200 mt-0.5"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#414143]">Thank You!</h4>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Your details have been received. Click below to open your brochure.
              </p>
              <a
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors duration-200 shadow-md"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                </svg>
                Open Brochure
              </a>
              <button onClick={onClose} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Full Name" required
                className={inputClass}
              />
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Email Address" required
                className={inputClass}
              />
              {/* Country select */}
              <div className="relative">
                <select
                  name="country" value={form.country} onChange={handleChange}
                  required className={`${inputClass} appearance-none pr-9 cursor-pointer`}
                >
                  <option value="" disabled>Country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <input
                name="organization" value={form.organization} onChange={handleChange}
                placeholder="Organisation"
                className={inputClass}
              />
              {/* Programme dropdown — current pre-selected, all siblings available */}
              {allPrograms.length > 0 && (
                <div className="relative">
                  <select
                    name="programme"
                    value={selectedProgramme}
                    onChange={(e) => setSelectedProgramme(e.target.value)}
                    className={`${inputClass} appearance-none pr-9 cursor-pointer`}
                  >
                    <option value="">Select Programme</option>
                    {allPrograms.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title}{p.isCurrent ? " (Current)" : ""}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-1"
              >
                Download Brochure
              </button>
              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By submitting, you agree to receive programme information from GATD. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
