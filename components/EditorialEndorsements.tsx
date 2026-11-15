"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EDITORIAL_ENDORSEMENTS, EditorialEndorsement } from "@/data/galleryData";

interface EditorialEndorsementsProps {
  onInquireTenancy: (maisonName: string) => void;
}

export const EditorialEndorsements: React.FC<EditorialEndorsementsProps> = ({
  onInquireTenancy,
}) => {
  const [selectedEndorsementId, setSelectedEndorsementId] = useState<string>("endorsement-cartier");

  const activeEndorsement: EditorialEndorsement =
    EDITORIAL_ENDORSEMENTS.find((e) => e.id === selectedEndorsementId) || EDITORIAL_ENDORSEMENTS[0];

  return (
    <section id="endorsements" className="py-16 lg:py-24 bg-[#F7F4F4] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#DADADA] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                EDITORIAL PORTFOLIO ENDORSEMENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              Audited Flagship Tenancy Statements
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              Published in partnership with Robb Report, Financial Times, and Vogue Business. Verified operational outcomes from executive leadership across our anchor Maisons.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#1C1C1E]/70">
            <span>FORMAT:</span>
            <span className="px-3 py-1 bg-[#FFFFFF] border border-[#DADADA] font-bold text-[#1C1C1E]">
              DOUBLE-PAGE EDITORIAL SPREAD
            </span>
          </div>
        </div>

        {/* Minimalist Maison Pill Selector */}
        <div className="flex flex-wrap gap-2 pb-2">
          {EDITORIAL_ENDORSEMENTS.map((item) => {
            const isSelected = activeEndorsement.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedEndorsementId(item.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-[#1C1C1E] text-[#FFFFFF] shadow-sm"
                    : "bg-[#FFFFFF] border border-[#DADADA] text-[#1C1C1E] hover:border-[#1E3A5F]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-[#D92D20]" : "bg-[#DADADA]"
                  }`}
                ></span>
                <span>{item.maisonName}</span>
              </button>
            );
          })}
        </div>

        {/* Double-Page Spread Layout (Vogue Business / Robb Report Aesthetic) */}
        <div className="border border-[#DADADA] bg-[#FFFFFF] shadow-none overflow-hidden">
          {/* Masthead Telemetry Strip */}
          <div className="px-6 py-3.5 bg-[#FFFFFF] border-b border-[#DADADA] flex flex-wrap items-center justify-between text-xs font-mono text-[#1C1C1E]/70">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#1C1C1E] tracking-widestCAD uppercase">
                {activeEndorsement.publicationReference}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>{activeEndorsement.cadUnitRef}</span>
              <span className="text-[#DADADA]">•</span>
              <span className="text-[#1E3A5F] font-semibold">{activeEndorsement.tenancyCommencement}</span>
            </div>
          </div>

          {/* Spread Body: 2 Balanced Editorial Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DADADA]">
            {/* Page 1 (Left): Executive Portrait & Audited Financial Metrics (5 Columns) */}
            <div className="lg:col-span-5 p-6 lg:p-8 space-y-8 bg-[#FFFFFF] flex flex-col justify-between">
              <div className="space-y-6">
                {/* Executive Portrait Frame */}
                <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 w-full border border-[#DADADA] bg-[#1C1C1E] overflow-hidden">
                  <Image
                    src={activeEndorsement.portraitUrl}
                    alt={activeEndorsement.executiveName}
                    fill
                    className="object-cover object-center filter grayscale contrast-115"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#FFFFFF]/95 border-t border-[#DADADA] p-3 backdrop-blur-sm">
                    <div className="font-bold text-sm text-[#1C1C1E] tracking-tight">
                      {activeEndorsement.executiveName}
                    </div>
                    <div className="text-[11px] font-mono text-[#1E3A5F]">
                      {activeEndorsement.executiveRole}
                    </div>
                  </div>
                </div>

                {/* Maison Seal & Tenancy Location */}
                <div className="p-4 bg-[#F7F4F4] border border-[#DADADA] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1E3A5F] font-bold">
                      OFFICIAL ANCHOR COVENANT
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D92D20]"></span>
                  </div>
                  <div className="text-xs font-mono text-[#1C1C1E] font-semibold">
                    {activeEndorsement.flagshipLocation}
                  </div>
                </div>
              </div>

              {/* Audited Financial Metrics (NO STAR ICONS!) */}
              <div className="space-y-3 pt-4 border-t border-[#DADADA]">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                  AUDITED OPERATIONAL DELIVERABLES
                </span>
                <div className="space-y-3">
                  {activeEndorsement.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 bg-[#FFFFFF] border border-[#DADADA] space-y-1"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-bold tracking-tight text-[#D92D20] font-mono">
                          {metric.value}
                        </span>
                        <span className="text-[10px] font-mono text-[#1C1C1E]/60 uppercase">
                          AUDITED
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-[#1C1C1E] tracking-tight">
                        {metric.label}
                      </div>
                      <div className="text-[11px] text-[#1C1C1E]/60 font-mono">
                        {metric.footnote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page 2 (Right): Authoritative Tenancy Statement & Typographic Spread (7 Columns) */}
            <div className="lg:col-span-7 p-6 lg:p-10 space-y-8 bg-[#FFFFFF] flex flex-col justify-between">
              <div className="space-y-8">
                {/* Brand Monogram Watermark / Crest */}
                <div className="flex items-center justify-between border-b border-[#DADADA] pb-4">
                  <span className="text-xl font-bold tracking-[0.25em] text-[#1C1C1E] uppercase">
                    {activeEndorsement.monogram}
                  </span>
                  <span className="text-[10px] font-mono text-[#1E3A5F] uppercase tracking-wider">
                    EXECUTIVE INTERVIEW ARCHIVE
                  </span>
                </div>

                {/* Editorial Big Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1C1E] leading-snug">
                  {activeEndorsement.editorialHeadline}
                </h3>

                {/* Editorial Body Text (Book-like Typography) */}
                <div className="space-y-5 text-sm sm:text-base text-[#1C1C1E]/85 leading-relaxed">
                  {activeEndorsement.editorialBody.map((paragraph, pIdx) => (
                    <p key={pIdx} className="tracking-tight">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Spread Footer Validation */}
              <div className="pt-8 border-t border-[#DADADA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-[#1C1C1E]">
                    Audited by Deloitte Commercial Real Estate Advisory
                  </div>
                  <div className="text-[11px] font-mono text-[#1C1C1E]/60">
                    Portfolio Covenant Ref: LUX-2026-FT99
                  </div>
                </div>

                <button
                  onClick={() => onInquireTenancy(activeEndorsement.maisonName)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Inquire Similar Tenancy Volume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

