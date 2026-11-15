"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#DADADA] text-[#1C1C1E]">
      {/* Live Architectural Operational Telemetry Strip */}
      <div className="border-b border-[#DADADA] bg-[#F7F4F4] px-6 py-3 font-mono text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
            <span className="font-bold text-[#1C1C1E]">PRECINCT STATUS:</span>
            <span className="text-[#1C1C1E]/80">
              140 Maisons Active • Subterranean Valet Operational • Air Quality AQI 8 • Temp 21.5°C
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#1C1C1E]/70">
            <span>SURVEILLANCE: CLASS V PASSIVE</span>
            <span>•</span>
            <span className="text-[#D92D20] font-semibold">ALL GATES CLEARED</span>
          </div>
        </div>
      </div>

      {/* Main Directory Body */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 space-y-12">
        {/* Brand Architecture Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-[#DADADA] pb-12">
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#1C1C1E] flex items-center justify-center bg-[#FFFFFF]">
                <svg
                  className="w-4 h-4 text-[#1C1C1E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <rect x="7" y="7" width="10" height="10" strokeDasharray="1 1" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg leading-tight text-[#1C1C1E]">
                  THE ROTUNDA ROYALE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                  COMMERCIAL FLAGSHIP GALLERIE & MASTERPLAN
                </span>
              </div>
            </div>

            <p className="text-xs text-[#1C1C1E]/75 leading-relaxed font-normal">
              A private commercial real estate trust and Pritzker-prize architectural landmark housing 140+ haute horlogerie houses, luxury couture salons, and Michelin culinary ateliers across 192,000 m² of Gross Leasable Area.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono">
            <span className="text-[10px] tracking-widestCAD uppercase text-[#1E3A5F] font-bold">
              CAD MASTERPLAN ARCHIVE
            </span>
            <span className="text-[#1C1C1E] font-semibold">BIM / REVIT NX-2026-V8</span>
            <span className="text-[#1C1C1E]/60">Monaco / Genève / Paris Consortia</span>
            <button
              onClick={scrollToTop}
              className="mt-2 px-4 py-1.5 rounded-full border border-[#DADADA] text-[11px] font-sans font-medium hover:bg-[#F7F4F4] transition-colors flex items-center gap-1.5"
            >
              <span>Back to Apex</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Clean 4-Column Directory (Apple Minimalism) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Column 1: Maisons & Salons */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              MAISONS & SALONS
            </h4>
            <ul className="space-y-2.5 text-[#1C1C1E]/75 font-normal">
              <li><a href="#directory" className="hover:text-[#D92D20] transition-colors">Haute Horlogerie & Complications</a></li>
              <li><a href="#directory" className="hover:text-[#D92D20] transition-colors">Place Vendôme High Jewelry</a></li>
              <li><a href="#directory" className="hover:text-[#D92D20] transition-colors">Milanese & Parisian Haute Couture</a></li>
              <li><a href="#directory" className="hover:text-[#D92D20] transition-colors">Three-Star Michelin Culinary Ateliers</a></li>
              <li><a href="#directory" className="hover:text-[#D92D20] transition-colors">Private Banking & Family Offices</a></li>
            </ul>
          </div>

          {/* Column 2: Architecture & Engineering */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              ARCHITECTURE & MEP
            </h4>
            <ul className="space-y-2.5 text-[#1C1C1E]/75 font-normal">
              <li><a href="#engineering" className="hover:text-[#D92D20] transition-colors">Biophilic Glass Diagrid Canopy</a></li>
              <li><a href="#engineering" className="hover:text-[#D92D20] transition-colors">Subterranean Armored Logistics</a></li>
              <li><a href="#engineering" className="hover:text-[#D92D20] transition-colors">Class III High-Jewelry Vault Pads</a></li>
              <li><a href="#engineering" className="hover:text-[#D92D20] transition-colors">Circadian Spectral Lighting (CRI &gt;98)</a></li>
              <li><a href="#engineering" className="hover:text-[#D92D20] transition-colors">Dedicated Heavy Culinary Risers</a></li>
            </ul>
          </div>

          {/* Column 3: Commercial Leasing */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              TENANCY & ALLOCATION
            </h4>
            <ul className="space-y-2.5 text-[#1C1C1E]/75 font-normal">
              <li><a href="#leasing" className="hover:text-[#D92D20] transition-colors">Promenade Duplex Flagships</a></li>
              <li><a href="#leasing" className="hover:text-[#D92D20] transition-colors">Mezzanine Couture Ateliers</a></li>
              <li><a href="#leasing" className="hover:text-[#D92D20] transition-colors">Sky Conservatory Penthouse</a></li>
              <li><a href="#leasing" className="hover:text-[#D92D20] transition-colors">Landlord Fit-Out Framework</a></li>
              <li><a href="#leasing" className="hover:text-[#D92D20] transition-colors">Architectural Review Committee</a></li>
            </ul>
          </div>

          {/* Column 4: Concierge & Governance */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              GOVERNANCE & VIP
            </h4>
            <ul className="space-y-2.5 text-[#1C1C1E]/75 font-normal">
              <li><a href="#concierge" className="hover:text-[#D92D20] transition-colors">Royale Private Client Salon</a></li>
              <li><a href="#concierge" className="hover:text-[#D92D20] transition-colors">Level B3 Subterranean Ingress</a></li>
              <li><a href="#concierge" className="hover:text-[#D92D20] transition-colors">Rooftop Twin-Engine Helipad</a></li>
              <li><a href="#endorsements" className="hover:text-[#D92D20] transition-colors">Audited Tenancy Covenants</a></li>
              <li><a href="#agenda" className="hover:text-[#D92D20] transition-colors">Cultural Season Vernissages</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Single-Line Links */}
        <div className="border-t border-[#DADADA] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#1C1C1E]/60">
          <div>
            © 2026 The Rotunda Commercial Real Estate Trust & Flagship Galleries. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-[#1C1C1E] cursor-pointer">Pritzker Masterplan NX-2026</span>
            <span>•</span>
            <span className="hover:text-[#1C1C1E] cursor-pointer">Code of Sovereign Discretion</span>
            <span>•</span>
            <span className="hover:text-[#1C1C1E] cursor-pointer">BREEAM Outstanding Ref: E-2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

