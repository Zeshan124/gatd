"use client";

import { useState } from "react";
import Image from "next/image";

const countries = [
  { code: "AE", name: "UAE", dial: "+971" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "QA", name: "Qatar", dial: "+974" },
  { code: "KW", name: "Kuwait", dial: "+965" },
  { code: "BH", name: "Bahrain", dial: "+973" },
  { code: "OM", name: "Oman", dial: "+968" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "JP", name: "Japan", dial: "+81" },
];

const programOptions = [
  "Strategic HR Business Partnership & Beyond",
  "Impactful Business and People Leadership",
  "Performance Development and Rewards Management",
  "Resourcing, Talent and Learning Management",
  "HR Analytics and Digital Transformation",
  "Employment Law and Compliance",
  "Organisational Design and Change",
  "Executive Compensation and Benefits Strategy",
];

export default function ProgramRegistration({
  badge = "Register now",
  heading = "For Strategic HR Business Partner Training",
  backgroundImage = "/images/solutions/strategic-hr/contact_map.jpg",
}) {
  const [form, setForm] = useState({
    firstName: "", email: "", phone: "",
    country: "", designation: "", organization: "",
    programme: "", totalAmount: "", source: "",
  });
  const [dialCode, setDialCode] = useState("AE");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedCountry = countries.find((c) => c.code === dialCode) || countries[0];

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  );

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => { e.preventDefault(); };

  const inputClass =
    "w-full bg-transparent border-b border-slate-300 focus:border-[#D52029] outline-none py-3 text-sm text-[#414143] placeholder-slate-500 transition-colors duration-200";

  return (
    <section className="relative bg-[#F2F2F2] py-14 sm:py-18 md:py-24 overflow-hidden">

      {/* Background image */}
      <Image src={backgroundImage} alt="" fill className="object-cover object-center opacity-20" />

      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Badge */}
        <span className="inline-block px-4 py-2 text-sm font-semibold text-[#414143] bg-[#E8E8E8] border border-slate-200 rounded-lg mb-6 shadow-sm">
          {badge}
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] leading-tight mb-10">
          {heading}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

          {/* First Name */}
          <input name="firstName" value={form.firstName} onChange={handleChange}
            placeholder="First Name" className={inputClass} />

          {/* Email */}
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email Address"
            className={`${inputClass} border border-[#D52029] rounded px-3`} />

          {/* Phone with country selector */}
          <div className="relative flex items-center border-b border-slate-300 focus-within:border-[#D52029] transition-colors duration-200">
            {/* Country flag button */}
            <button
              type="button"
              onClick={() => { setDropdownOpen((p) => !p); setSearch(""); }}
              className="flex items-center gap-1.5 pr-3 shrink-0 py-3"
            >
              <img
                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                alt={selectedCountry.name}
                className="w-6 h-4 object-cover rounded-sm"
              />
              <span className="text-xs text-slate-500">{selectedCountry.dial}</span>
              <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="w-px h-5 bg-slate-300 mr-3 shrink-0" />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange}
              placeholder="Phone Number"
              className="flex-1 bg-transparent outline-none py-3 text-sm text-[#414143] placeholder-slate-500" />

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                {/* Search */}
                <div className="px-3 py-2 border-b border-slate-100">
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search country..."
                    className="w-full text-sm outline-none py-1 text-[#414143] placeholder-slate-400"
                  />
                </div>
                {/* List */}
                <ul className="max-h-52 overflow-y-auto">
                  {filtered.map((c) => (
                    <li key={c.code}>
                      <button
                        type="button"
                        onClick={() => { setDialCode(c.code); setDropdownOpen(false); setSearch(""); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-[#D52029] transition-colors text-left"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                          alt={c.name}
                          className="w-6 h-4 object-cover rounded-sm shrink-0"
                        />
                        <span className="flex-1">{c.name}</span>
                        <span className="text-slate-400 text-xs">{c.dial}</span>
                      </button>
                    </li>
                  ))}
                  {filtered.length === 0 && (
                    <li className="px-4 py-3 text-sm text-slate-400">No results</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Country */}
          <input name="country" value={form.country} onChange={handleChange}
            placeholder="Country" className={inputClass} />

          {/* Designation */}
          <input name="designation" value={form.designation} onChange={handleChange}
            placeholder="Designation" className={inputClass} />

          {/* Organization */}
          <input name="organization" value={form.organization} onChange={handleChange}
            placeholder="Organization" className={inputClass} />

          {/* Programmes */}
          <div className="relative">
            <select name="programme" value={form.programme} onChange={handleChange}
              className={`${inputClass} appearance-none pr-8 cursor-pointer`}>
              <option value="" disabled>Programmes</option>
              {programOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Total Amount */}
          <input name="totalAmount" value={form.totalAmount} onChange={handleChange}
            placeholder="Total Amount" className={inputClass} />

          {/* Source — full width */}
          <input name="source" value={form.source} onChange={handleChange}
            placeholder="From where do you hear?"
            className={`${inputClass} sm:col-span-2`} />

          {/* Submit */}
          <div className="sm:col-span-2 mt-2">
            <button type="submit"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#D52029] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Submit now
            </button>
          </div>

        </form>
      </div>

      {/* Close dropdown on outside click */}
      {dropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
      )}
    </section>
  );
}
