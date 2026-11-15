"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import { LEASING_SUITES } from "@/data/galleryData";

interface LeasingPortfolioProps {
  onRequestCadDossier: (suiteCode: string, suiteName: string) => void;
  onScheduleWalkthrough: (suiteName: string) => void;
}

export const LeasingPortfolio: React.FC<LeasingPortfolioProps> = ({
  onRequestCadDossier,
  onScheduleWalkthrough,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>("All Zones");

  const zones = ["All Zones", "Ground Promenade", "Mezzanine Atrium", "Sky Conservatory"];

  const filteredLeases = LEASING_SUITES.filter(
    (suite) => selectedZone === "All Zones" || suite.zone === selectedZone
  );

  return (
    <section id="leasing" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#DADADA] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92D20]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                COMMERCIAL TENANCY & FLAGSHIP ALLOCATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              Commercial Flagship Leasing Portfolio
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              A curated selection of monumental commercial envelopes currently under allocation for global luxury Maisons, independent Swiss horologists, and triple-starred gastronomic operators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#1C1C1E]/60 uppercase">
              LEASING ALLOCATION CYCLE:
            </span>
            <span className="px-3 py-1 bg-[#1E3A5F] text-[#FFFFFF] text-xs font-mono font-bold rounded-full">
              Q2 2027 ENVELOPE
            </span>
          </div>
        </div>

        {/* Zone Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase text-[#1C1C1E]/60 mr-2">
            SELECT PRECINCT ZONE:
          </span>
          {zones.map((zone) => {
            const isSelected = selectedZone === zone;
            return (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isSelected
                    ? "bg-[#1C1C1E] text-[#FFFFFF]"
                    : "bg-[#F7F4F4] text-[#1C1C1E] hover:bg-[#DADADA]/50"
                }`}
              >
                {zone}
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Leasing Dossiers (NO 3-CARD ROWS) */}
        <div className="space-y-12">
          {filteredLeases.map((suite, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={suite.id}
                className="border border-[#DADADA] bg-[#FFFFFF] overflow-hidden"
              >
                {/* Dossier Header Strip */}
                <div className="bg-[#F7F4F4] px-6 py-3 border-b border-[#DADADA] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1C1C1E] uppercase">
                      {suite.cadCode}
                    </span>
                    <span className="text-[#DADADA]">|</span>
                    <span className="text-[#1E3A5F] font-semibold">{suite.zone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                        suite.status === "Available Q2 2027"
                          ? "bg-[#D92D20] text-[#FFFFFF]"
                          : "bg-[#1C1C1E] text-[#FFFFFF]"
                      }`}
                    >
                      {suite.status}
                    </span>
                  </div>
                </div>

                {/* Main Asymmetric Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[320px] bg-[#1C1C1E] ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DADADA] px-3 py-1 font-mono text-[10px] text-[#1C1C1E] font-bold uppercase">
                      TARGET: {suite.targetProfile}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 p-6 lg:p-8 space-y-6 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                          COMMERCIAL FLAGSHIP DOSSIER
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                          {suite.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#1C1C1E]/80 leading-relaxed">
                        {suite.description}
                      </p>

                      {/* 4-Metric In-Situ Spec Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 bg-[#F7F4F4] border border-[#DADADA]">
                        <div>
                          <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                            GROSS INTERNAL AREA
                          </span>
                          <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                            {suite.giaM2.toLocaleString()} m²{" "}
                            <span className="text-[10px] font-normal text-[#1C1C1E]/60">
                              ({suite.giaSqFt.toLocaleString()} sq ft)
                            </span>
                          </span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                            CLEAR VOLUME
                          </span>
                          <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                            {suite.clearHeightM}m Clear Height
                          </span>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                            CONTINUOUS FRONTAGE
                          </span>
                          <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                            {suite.frontageM}m Glazed Facade
                          </span>
                        </div>
                      </div>

                      {/* Deliverable Specifications */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                          CORE & SHELL DELIVERABLE CRITERIA
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#1C1C1E]/80">
                          {suite.deliverableSpec.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Adjacent Tenancy Co-Tenancy Context */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#1C1C1E]/70 pt-2 border-t border-[#DADADA]">
                        <span className="text-[#1E3A5F] font-bold">CO-TENANCY CLUSTER:</span>
                        <span>{suite.adjacentTenants.join(" • ")}</span>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#DADADA] flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onRequestCadDossier(suite.cadCode, suite.name)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Request Architectural CAD Dossier</span>
                      </button>
                      <button
                        onClick={() => onScheduleWalkthrough(suite.name)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:bg-[#F7F4F4] hover:border-[#1E3A5F] transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Schedule Technical Walkthrough</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

