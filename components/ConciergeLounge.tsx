"use client";

import React, { useState } from "react";
import {
  Key,
  Building,
  CheckCircle2,
  ChevronDown,
  Download,
  ArrowUpRight
} from "lucide-react";
import { FAQ_DATA } from "@/data/galleryData";

interface ConciergeLoungeProps {
  onContactConcierge: () => void;
  onScheduleWalkthrough: () => void;
  onRequestGuidelines: () => void;
}

export const ConciergeLounge: React.FC<ConciergeLoungeProps> = ({
  onContactConcierge,
  onScheduleWalkthrough,
  onRequestGuidelines,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="concierge" className="py-16 lg:py-24 bg-[#F7F4F4] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="border-b border-[#DADADA] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                WHITE-GLOVE SERVICE & TENANCY COORDINATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              VIP Concierge & Tenancy Atelier
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              Dual dedicated operational desks providing seamless discretion for private patrons and rigorous architectural integration for global luxury brand executives.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-[#1C1C1E]/60 uppercase">DISCRETION LEVEL:</span>
            <span className="px-3 py-1 bg-[#1C1C1E] text-[#FFFFFF] font-bold rounded-full">
              NATO / ENCRYPTED PROTOCOL
            </span>
          </div>
        </div>

        {/* 2-Column Luxury Lounge Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Royale Private Client Salon (Left) */}
          <div className="bg-[#FFFFFF] border border-[#DADADA] p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#DADADA] pb-4">
                <div className="flex items-center gap-2.5">
                  <Key className="w-4 h-4 text-[#D92D20]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                    CLIENT SERVICES
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#D92D20]">
                  WHITE GLOVE 24/7
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                Royale Private Client Salon
              </h3>

              <p className="text-xs text-[#1C1C1E]/80 leading-relaxed">
                Dedicated exclusively to sovereign collectors, royal family delegations, and high-jewelry private buyers. We coordinate secure air tarmac transfers, armored vehicle escorts directly into our subterranean Level B3 airlock, and private after-hours viewing suites across all 140 Maisons.
              </p>

              {/* Service Capabilities */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                  BESPOKE ATELIER CAPABILITIES
                </span>
                <ul className="space-y-2 text-xs text-[#1C1C1E]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                    <span>Direct tarmac pick-up from private aviation terminals in armored Maybach fleet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                    <span>Dual-encrypted communication line with your dedicated Private Client Attaché</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                    <span>Multi-maison private viewing itineraries with sommelier hospitality in SCIF suites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                    <span>Secured custody transfer direct from Class III subterranean vault pads</span>
                  </li>
                </ul>
              </div>

              {/* Concierge Hotline */}
              <div className="p-4 bg-[#F7F4F4] border border-[#DADADA] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#1C1C1E]/70 font-mono">DIRECT ROYALE HOTLINE:</span>
                  <span className="font-mono font-bold text-[#1C1C1E]">+33 1 89 20 44 00</span>
                </div>
                <div className="text-[10px] font-mono text-[#1E3A5F]">
                  Encrypted Signal / Telegram Attaché Dispatch Available
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DADADA]">
              <button
                onClick={onContactConcierge}
                className="w-full py-3 rounded-full text-xs font-semibold tracking-tight bg-[#1C1C1E] text-[#FFFFFF] hover:bg-[#D92D20] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Contact Royale Private Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Commercial Tenancy Office & Architectural Atelier (Right) */}
          <div className="bg-[#FFFFFF] border border-[#DADADA] p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#DADADA] pb-4">
                <div className="flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-[#1E3A5F]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                    TENANCY & ENGINEERING
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#1E3A5F]">
                  ARCHITECTURAL ATELIER
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                Commercial Tenancy Office
              </h3>

              <p className="text-xs text-[#1C1C1E]/80 leading-relaxed">
                The technical liaison office for Maison brand architects, MEP engineers, and retail directors. We oversee the landlord capital contribution framework, BIM/CAD compliance, Pritzker shopfront criteria, and heavy-riser connections.
              </p>

              {/* Tenancy Capabilities */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                  TECHNICAL TENANCY SERVICES
                </span>
                <ul className="space-y-2 text-xs text-[#1C1C1E]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A5F] shrink-0 mt-0.5" />
                    <span>Comprehensive BIM/Revit architectural model access and structural loads review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A5F] shrink-0 mt-0.5" />
                    <span>On-site MEP integration coordination for culinary grease shafts & vault pads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A5F] shrink-0 mt-0.5" />
                    <span>Turnkey landlord shell handover with Tier IV electrical redundancy hookups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A5F] shrink-0 mt-0.5" />
                    <span>Assistance with municipal approvals, heritage compliance, and tax-free customs zones</span>
                  </li>
                </ul>
              </div>

              {/* Tenancy Hotline */}
              <div className="p-4 bg-[#F7F4F4] border border-[#DADADA] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#1C1C1E]/70 font-mono">TENANCY ADVISORY EXT:</span>
                  <span className="font-mono font-bold text-[#1C1C1E]">+33 1 89 20 44 99</span>
                </div>
                <div className="text-[10px] font-mono text-[#1E3A5F]">
                  Office Hours: Monday–Friday 08:00 – 19:00 CET
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DADADA] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={onRequestGuidelines}
                className="w-full py-3 px-4 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tenancy Guidelines (PDF)</span>
              </button>
              <button
                onClick={onScheduleWalkthrough}
                className="w-full py-3 px-4 rounded-full text-xs font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:bg-[#F7F4F4] hover:border-[#1E3A5F] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Schedule Walkthrough</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Visitor & Tenancy FAQ Accordion with Hairline Borders */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#DADADA] pb-4 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              FREQUENTLY ADDRESSED ARCHITECTURAL & OPERATIONAL CRITERIA
            </span>
            <span className="text-xs font-mono text-[#1C1C1E]/60">
              5 SECTIONS INDEXED
            </span>
          </div>

          <div className="border border-[#DADADA] divide-y divide-[#DADADA] bg-[#FFFFFF]">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 lg:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F7F4F4]/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1E3A5F] font-bold block">
                        {item.category}
                      </span>
                      <span className="font-bold text-base sm:text-lg tracking-tight text-[#1C1C1E]">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full border border-[#DADADA] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#1C1C1E] text-[#FFFFFF]" : "text-[#1C1C1E]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 lg:px-6 pb-6 pt-2 bg-[#F7F4F4]/40 border-t border-[#DADADA]/50">
                      <p className="text-xs sm:text-sm text-[#1C1C1E]/80 leading-relaxed max-w-4xl font-normal">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

