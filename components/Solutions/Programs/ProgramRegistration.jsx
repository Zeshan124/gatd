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
  { id: 1, label: "Strategic HR Business Partnership & Beyond", price: 3850 },
  { id: 2, label: "Impactful Business and People Leadership", price: 3850 },
  { id: 3, label: "Performance Development and Rewards Management", price: 2800 },
  { id: 4, label: "Resourcing, Talent and Learning Management", price: 2800 },
  { id: 9, label: "Impactive HR for the Uninitiated", price: 2800 },
  { id: 10, label: "Progressing Organization Development", price: 2800 },
  { id: 11, label: "Advancing Trainer Development (ToT)", price: 2800 },
  { id: 12, label: "Management: Best Practices for Best Results", price: 3850 },
];

export default function ProgramRegistration({
  badge = "Register now",
  heading = "For Strategic HR Business Partner Training",
  backgroundImage = "/images/solutions/strategic-hr/contact_map.jpg",
}) {
  const [form, setForm] = useState({
    firstName: "", email: "", phone: "",
    country: "", designation: "", organization: "",
    source: "",
  });
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [dialCode, setDialCode] = useState("AE");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [progDropOpen, setProgDropOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedCountry = countries.find((c) => c.code === dialCode) || countries[0];
  const filtered = countries.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.dial.includes(search)
  );

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleProgram = (prog) => {
    setSelectedPrograms((prev) =>
      prev.find((p) => p.id === prog.id)
        ? prev.filter((p) => p.id !== prog.id)
        : [...prev, prog]
    );
  };

  const totalAmount = selectedPrograms.reduce((sum, p) => sum + p.price, 0);

  const handleSubmit = (e) => { e.preventDefault(); };

  const inputClass =
    "w-full bg-white border border-slate-300 focus:border-[#D52029] outline-none rounded-md px-5 py-4 text-sm text-[#414143] placeholder-[#414143] transition-colors duration-200";

  return (
    <section className="relative py-14 sm:py-18 md:py-24 overflow-hidden">

      <Image src={backgroundImage} alt="" fill className="object-cover object-center" />

      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

        {/* Badge */}
        <span className="inline-block px-4 py-2 text-sm font-semibold text-[#414143] bg-[#E8E8E8] border border-slate-200 rounded-lg mb-6 shadow-sm">
          {badge}
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#414143] leading-tight mb-10">
          {heading}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

          {/* First Name */}
          <input name="firstName" value={form.firstName} onChange={handleChange}
            placeholder="First Name" className={inputClass} />

          {/* Email */}
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email Address" className={inputClass} />

          {/* Phone with country selector */}
          <div className="relative flex items-center bg-white border border-slate-300 focus-within:border-[#D52029] rounded-md transition-colors duration-200">
            <button
              type="button"
              onClick={() => { setDropdownOpen((p) => !p); setSearch(""); }}
              className="flex items-center gap-1.5 px-4 shrink-0 py-4"
            >
              <img src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className="w-6 h-4 object-cover rounded-sm" />
              <span className="text-xs text-slate-500">{selectedCountry.dial}</span>
              <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="w-px h-5 bg-slate-300 mr-3 shrink-0" />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange}
              placeholder="Phone Number"
              className="flex-1 bg-transparent outline-none py-4 pr-5 text-sm text-[#414143] placeholder-[#414143]" />
            {dropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="px-3 py-2 border-b border-slate-100">
                  <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search country..." className="w-full text-sm outline-none py-1 text-[#414143] placeholder-slate-400" />
                </div>
                <ul className="max-h-52 overflow-y-auto">
                  {filtered.map((c) => (
                    <li key={c.code}>
                      <button type="button" onClick={() => { setDialCode(c.code); setDropdownOpen(false); setSearch(""); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-[#D52029] transition-colors text-left">
                        <img src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} alt={c.name} className="w-6 h-4 object-cover rounded-sm shrink-0" />
                        <span className="flex-1">{c.name}</span>
                        <span className="text-slate-400 text-xs">{c.dial}</span>
                      </button>
                    </li>
                  ))}
                  {filtered.length === 0 && <li className="px-4 py-3 text-sm text-slate-400">No results</li>}
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

          {/* Programmes — custom multi-select dropdown — full width */}
          <div className="sm:col-span-2 relative">
            {/* Trigger */}
            <button
              type="button"
              onClick={() => setProgDropOpen((p) => !p)}
              className="w-full flex items-center justify-between bg-white border border-slate-300 focus:border-[#D52029] rounded-md px-5 py-4 text-sm text-[#414143] transition-colors duration-200"
            >
              <span className={selectedPrograms.length ? "text-[#414143]" : "text-[#414143]/60"}>
                {selectedPrograms.length === 0
                  ? "Select Programme(s)"
                  : selectedPrograms.length === 1
                  ? selectedPrograms[0].label
                  : `${selectedPrograms.length} programmes selected`}
              </span>
              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${progDropOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown list */}
            {progDropOpen && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-y-auto max-h-72">
                {programOptions.map((prog) => {
                  const checked = !!selectedPrograms.find((p) => p.id === prog.id);
                  return (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => toggleProgram(prog)}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-3.5 text-sm text-left transition-colors duration-150 ${checked ? "bg-[#D52029]/5" : "hover:bg-slate-50"}`}
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span className={`w-4 h-4 rounded shrink-0 border-2 flex items-center justify-center transition-colors ${checked ? "bg-[#D52029] border-[#D52029]" : "border-slate-300"}`}>
                          {checked && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                            </svg>
                          )}
                        </span>
                        <span className={`leading-snug ${checked ? "text-[#D52029] font-semibold" : "text-[#414143]"}`}>
                          {prog.label}
                        </span>
                      </span>
                      <span className={`text-xs font-bold shrink-0 ${checked ? "text-[#D52029]" : "text-slate-500"}`}>
                        SGD {prog.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Price summary */}
            {selectedPrograms.length > 0 && (
              <div className="mt-3 flex items-center justify-between px-4 py-3 bg-[#D52029] rounded-lg">
                <span className="text-sm font-bold text-white">
                  {selectedPrograms.length === 1 ? selectedPrograms[0].label : `Total (${selectedPrograms.length} programmes)`}
                </span>
                <span className="text-base font-black text-white">
                  SGD {totalAmount.toLocaleString()}
                </span>
              </div>
            )}
          </div>

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

      {dropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />}
      {progDropOpen && <div className="fixed inset-0 z-40" onClick={() => setProgDropOpen(false)} />}
    </section>
  );
}
