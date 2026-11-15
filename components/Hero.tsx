"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onExploreDirectory: () => void;
  onRequestProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDirectory, onRequestProspectus }) => {
  return (
    <section className="relative bg-[#FFFFFF] border-b border-[#DADADA] overflow-hidden">
      {/* Top framing container */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">
        {/* Micro-label tracking CAD header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DADADA]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#F7F4F4] text-[#1E3A5F] border border-[#DADADA]">
              ARCHITECTURAL MASTERPLAN 2026
            </span>
            <span className="text-[11px] font-mono tracking-tight text-[#1C1C1E]/70">
              PRITZKER LAUREATE CONSORTIUM • HARBOURFRONT SECTOR 01
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-tight text-[#1C1C1E]/80">
            <span>LAT 43.7384° N, LONG 7.4246° E</span>
            <span className="hidden sm:inline text-[#DADADA]">•</span>
            <span className="hidden sm:inline text-[#D92D20] font-semibold">CAD SPEC: NX-ROT-ARCH-V8</span>
          </div>
        </div>

        {/* Hero Typography & Split layout */}
        <div className="pt-10 pb-12 lg:pt-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-[#1C1C1E] tracking-tighter leading-[1.05] text-balance">
              Where haute horlogerie meets Pritzker-prize architecture.
            </h1>
            <p className="text-lg lg:text-xl text-[#1C1C1E]/80 max-w-2xl font-normal leading-relaxed tracking-tight">
              An enterprise-grade commercial landmark housing 140+ storied luxury houses, three-star culinary ateliers, and monolithic flagship salons across 192,000 square metres of low-iron structural glass and French limestone.
            </p>

            {/* Pill CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreDirectory}
                className="px-6 py-3.5 rounded-full text-[13px] font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <span>Explore Interactive CAD Blueprint</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onRequestProspectus}
                className="px-6 py-3.5 rounded-full text-[13px] font-semibold tracking-tight bg-[#FFFFFF] border border-[#DADADA] text-[#1E3A5F] hover:bg-[#F7F4F4] hover:border-[#1E3A5F] transition-all duration-200 flex items-center gap-2"
              >
                <span>Request Tenancy Prospectus</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right telemetry briefing box */}
          <div className="lg:col-span-4 bg-[#F7F4F4] border border-[#DADADA] p-6 rounded-none space-y-4">
            <div className="flex items-center justify-between border-b border-[#DADADA] pb-3">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                STRUCTURAL SPECIFICATION
              </span>
              <span className="text-[10px] font-mono text-[#D92D20] font-bold">CERTIFIED</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1 border-b border-[#DADADA]/60">
                <span className="text-[#1C1C1E]/70">CLEAR CANOPY APEX:</span>
                <span className="font-semibold text-[#1C1C1E]">44.50 METRES</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#DADADA]/60">
                <span className="text-[#1C1C1E]/70">ACOUSTIC DAMPENING:</span>
                <span className="font-semibold text-[#1C1C1E]">NC-28 (76% DIFFUSION)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#DADADA]/60">
                <span className="text-[#1C1C1E]/70">VAULT SECURITY GRADE:</span>
                <span className="font-semibold text-[#1E3A5F]">EN 1143-1 CLASS III+</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#1C1C1E]/70">GLAZING ENVELOPE:</span>
                <span className="font-semibold text-[#1C1C1E]">9,400 M² LOW-IRON</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-[#1C1C1E]/60 italic border-t border-[#DADADA]">
              *Audited by Arup Building Physics & Werner Sobek Structural Engineering.
            </div>
          </div>
        </div>

        {/* Grand Architectural Hero Stage (Framed High-Contrast Image with CAD Telemetry Pinned Overlays) */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] border border-[#DADADA] bg-[#1C1C1E] overflow-hidden">
          {/* Real high-res architectural photograph */}
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=90"
            alt="The Grand Rotunda Glass Atrium Architecture"
            fill
            priority
            className="object-cover object-center filter contrast-105"
          />

          {/* Crisp framing hairline grid overlay */}
          <div className="absolute inset-0 border border-[#DADADA]/40 pointer-events-none">
            <div className="w-full h-full grid grid-cols-4 grid-rows-3">
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-b border-[#FFFFFF]/20"></div>
              <div className="border-b border-[#FFFFFF]/20"></div>
              <div className="border-r border-[#FFFFFF]/20"></div>
              <div className="border-r border-[#FFFFFF]/20"></div>
              <div className="border-r border-[#FFFFFF]/20"></div>
              <div></div>
            </div>
          </div>

          {/* Pinned CAD Telemetry Badges (Apple Minimalist Aesthetic) */}
          <div className="absolute top-6 left-6 z-10 bg-[#FFFFFF] border border-[#DADADA] px-3.5 py-2 shadow-sm flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D92D20] animate-ping"></span>
            <span className="text-[10px] font-mono tracking-widestCAD uppercase font-bold text-[#1C1C1E]">
              ROTUNDA APEX: 44.5M • ACOUSTIC DIFFUSION: 76%
            </span>
          </div>

          <div className="absolute top-6 right-6 z-10 bg-[#1E3A5F] text-[#FFFFFF] border border-[#1E3A5F] px-3.5 py-2 shadow-sm font-mono text-[10px] tracking-widestCAD uppercase">
            CAD REF: NX-ROT-2026-HERO
          </div>

          <div className="absolute bottom-6 left-6 z-10 bg-[#FFFFFF] border border-[#DADADA] px-4 py-3 max-w-sm hidden sm:block">
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block mb-1">
              CANOPY GEOMETRY SPECIFICATION
            </span>
            <p className="text-xs font-mono text-[#1C1C1E] leading-tight">
              Continuous double-curved diagrid shell with triple-layer low-iron argon insulated glazing.
            </p>
          </div>

          <div className="absolute bottom-6 right-6 z-10 bg-[#FFFFFF] border border-[#DADADA] px-3.5 py-2 text-right hidden sm:block">
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#D92D20] block">
              STATUS: COMMISSIONED
            </span>
            <span className="text-xs font-mono text-[#1C1C1E]">
              100% OPERATIONAL REVENUE
            </span>
          </div>
        </div>

        {/* Clean 4-Metric Architectural Strip with Hairline Borders */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 border border-[#DADADA] divide-y lg:divide-y-0 lg:divide-x divide-[#DADADA] bg-[#FFFFFF]">
          <div className="p-6 lg:p-8 space-y-1">
            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1C1E]">
              140<span className="text-[#D92D20]">+</span>
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              LUXURY HOUSES & MAISONS
            </div>
            <p className="text-xs text-[#1C1C1E]/70 pt-1 font-mono">
              Haute Horlogerie, High Fashion & Joaillerie
            </p>
          </div>

          <div className="p-6 lg:p-8 space-y-1">
            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1C1E]">
              192,000<span className="text-sm lg:text-base font-normal text-[#1C1C1E]/60 ml-1">m²</span>
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              GROSS LEASABLE AREA (GLA)
            </div>
            <p className="text-xs text-[#1C1C1E]/70 pt-1 font-mono">
              Over 4 architectural levels with 7.2m clear heights
            </p>
          </div>

          <div className="p-6 lg:p-8 space-y-1">
            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1C1E]">
              16
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              MICHELIN SALONS & ATELIERS
            </div>
            <p className="text-xs text-[#1C1C1E]/70 pt-1 font-mono">
              Equipped with independent 32,000 m³/h risers
            </p>
          </div>

          <div className="p-6 lg:p-8 space-y-1">
            <div className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1C1E]">
              1,400
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              SUBTERRANEAN VALET BAYS
            </div>
            <p className="text-xs text-[#1C1C1E]/70 pt-1 font-mono">
              Levels B1–B3 with 4 armored heavy-logistics docks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

