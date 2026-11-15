"use client";

import React, { useState } from "react";
import {
  Download,
  Shield,
  CheckCircle2,
  HardHat
} from "lucide-react";
import { ENGINEERING_PILLARS, EngineeringPillar } from "@/data/galleryData";

interface EngineeringConsoleProps {
  onRequestTechnicalBrief: (pillarTitle: string) => void;
}

export const EngineeringConsole: React.FC<EngineeringConsoleProps> = ({
  onRequestTechnicalBrief,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("pillar-canopy");

  const activePillar: EngineeringPillar =
    ENGINEERING_PILLARS.find((p) => p.id === selectedPillarId) || ENGINEERING_PILLARS[0];

  return (
    <section id="engineering" className="py-16 lg:py-24 bg-[#F7F4F4] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#DADADA] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                PRITZKER ARCHITECTURAL MASTERPLAN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              Masterplan Engineering & MEP Console
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              A rigorous asymmetric technical inspection system detailing the six core engineering pillars that permit multi-million dollar high-jewelry salons, Michelin dining risers, and armored logistics to co-exist with zero compromise.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#FFFFFF] border border-[#DADADA] px-4 py-2 text-xs font-mono">
              <span className="text-[#1C1C1E]/60 uppercase block text-[9px] tracking-wider">
                COMMISSIONING STATUS
              </span>
              <span className="text-[#1C1C1E] font-bold">100% OPERATIONAL SIGN-OFF</span>
            </div>
          </div>
        </div>

        {/* Asymmetric 2-Column Console Layout (NO 3-CARD ROWS!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Index List of the 6 Engineering Pillars (4 Columns) */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#DADADA] divide-y divide-[#DADADA]">
            <div className="px-5 py-3.5 bg-[#1C1C1E] text-[#FFFFFF] flex items-center justify-between font-mono text-xs">
              <span className="font-semibold tracking-wider">ENGINEERING PILLARS INDEX</span>
              <span className="text-[#DADADA]/70">6 OF 6 CERTIFIED</span>
            </div>

            {ENGINEERING_PILLARS.map((pillar) => {
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-5 transition-all duration-200 flex items-start justify-between gap-4 group ${
                    isSelected
                      ? "bg-[#F7F4F4] border-l-4 border-l-[#D92D20]"
                      : "hover:bg-[#F7F4F4]/60"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#D92D20]">
                        {pillar.index}
                      </span>
                      <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1E3A5F] font-semibold">
                        {pillar.cadRef}
                      </span>
                    </div>
                    <div className="font-bold text-sm tracking-tight text-[#1C1C1E] group-hover:text-[#D92D20] transition-colors">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-[#1C1C1E]/60 line-clamp-1 font-mono">
                      {pillar.category}
                    </div>
                  </div>

                  <span
                    className={`shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                      isSelected ? "bg-[#D92D20]" : "bg-[#DADADA]"
                    }`}
                  ></span>
                </button>
              );
            })}

            <div className="p-4 bg-[#F7F4F4] text-xs font-mono text-[#1C1C1E]/70 flex items-center gap-2">
              <HardHat className="w-4 h-4 text-[#1E3A5F]" />
              <span>Sign-off Authority: Werner Sobek & Arup Fellows</span>
            </div>
          </div>

          {/* Right Column: Expansive CAD Technical Dossier (8 Columns) */}
          <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#DADADA] p-6 lg:p-8 space-y-8">
            {/* Dossier Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#DADADA] pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widestCAD uppercase font-bold bg-[#1C1C1E] text-[#FFFFFF]">
                    SECTION {activePillar.index} • {activePillar.cadRef}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                    {activePillar.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1C1E]">
                  {activePillar.title}
                </h3>
                <p className="text-xs font-mono text-[#1C1C1E]/60">
                  Lead Engineering Consortium: {activePillar.leadArchitect}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start sm:items-end">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#1C1C1E]/60">
                  SECURITY / STATUS
                </span>
                <span className="text-xs font-mono font-bold text-[#1E3A5F]">
                  {activePillar.status}
                </span>
              </div>
            </div>

            {/* Architectural Summary Callout */}
            <div className="p-5 bg-[#F7F4F4] border-l-2 border-l-[#1E3A5F] text-[#1C1C1E] space-y-1">
              <span className="text-[10px] font-mono tracking-widestCAD uppercase font-semibold text-[#1E3A5F] block">
                ENGINEERING SPECIFICATION ABSTRACT
              </span>
              <p className="text-sm leading-relaxed font-normal">
                {activePillar.summary}
              </p>
            </div>

            {/* High-Impact Telemetry Highlights (Non-SaaS, Clean Apple Metrics) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activePillar.telemetryHighlights.map((tel, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-[#DADADA] bg-[#FFFFFF] space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#D92D20] font-mono">
                    {tel.metric}
                  </div>
                  <div className="text-xs font-medium text-[#1C1C1E]/80 tracking-tight">
                    {tel.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Structural Telemetry Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                  AUDITED TECHNICAL TELEMETRY & TOLERANCES
                </span>
                <span className="text-[10px] font-mono text-[#1C1C1E]/60">
                  INSPECTION REV: 2026-V8
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 border border-[#DADADA] p-4 bg-[#FFFFFF]">
                {activePillar.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F7F4F4] border border-[#DADADA]/60 space-y-1"
                  >
                    <div className="text-[10px] font-mono tracking-wider text-[#1C1C1E]/70 uppercase">
                      {spec.label}
                    </div>
                    <div className="text-base font-bold text-[#1C1C1E] font-mono">
                      {spec.value}{" "}
                      {spec.unit && (
                        <span className="text-xs font-normal text-[#1E3A5F]">
                          {spec.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schematic In-Situ Engineering Details */}
            <div className="space-y-3 border-t border-[#DADADA] pt-6">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                STRUCTURAL INTEGRATION & FAIL-SAFE MECHANISMS
              </span>
              <ul className="space-y-2 text-xs text-[#1C1C1E]/80">
                {activePillar.schematicDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D92D20] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions & Certification Stamp */}
            <div className="pt-4 border-t border-[#DADADA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1E3A5F]" />
                <span className="text-xs font-mono font-semibold text-[#1C1C1E]">
                  {activePillar.certificationBadge}
                </span>
              </div>

              <button
                onClick={() => onRequestTechnicalBrief(activePillar.title)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#1C1C1E] text-[#FFFFFF] hover:bg-[#D92D20] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Full CAD Engineering Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

