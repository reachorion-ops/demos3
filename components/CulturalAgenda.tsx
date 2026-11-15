"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CULTURAL_EVENTS } from "@/data/galleryData";

interface CulturalAgendaProps {
  onReserveVipSeat: (eventTitle: string, eventDate: string) => void;
}

export const CulturalAgenda: React.FC<CulturalAgendaProps> = ({ onReserveVipSeat }) => {
  return (
    <section id="agenda" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#DADADA] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92D20]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                CHRONOLOGICAL CULTURAL SEASON
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              Exhibitions, Horological Vernissages & Salons
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              A continuous, curated calendar of private client vernissages, haute horlogerie retrospectives, and gastronomy symposiums staged within the central rotunda void.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-[#1C1C1E]/60 uppercase">SEASON:</span>
            <span className="px-3 py-1 bg-[#1E3A5F] text-[#FFFFFF] font-bold rounded-full">
              WINTER 2026 / SPRING 2027
            </span>
          </div>
        </div>

        {/* Full-width Horizontal Chronological Timeline (Zero 3-card grid) */}
        <div className="border border-[#DADADA] divide-y divide-[#DADADA] bg-[#FFFFFF]">
          {CULTURAL_EVENTS.map((event) => (
            <div
              key={event.id}
              className="p-6 lg:p-8 hover:bg-[#F7F4F4]/70 transition-colors duration-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Date Block (2 Columns) */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-baseline lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-[#DADADA] pb-3 lg:pb-0 lg:pr-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1C1E] font-mono leading-none">
                    {event.day}
                  </div>
                  <div className="text-sm font-bold tracking-widestCAD uppercase text-[#D92D20] font-mono">
                    {event.month} {event.year}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#1E3A5F] uppercase font-semibold pt-1">
                  {event.duration}
                </div>
              </div>

              {/* Event Image Thumbnail (2 Columns) */}
              <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-square w-full max-w-[200px] border border-[#DADADA] bg-[#1C1C1E] overflow-hidden shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Event Editorial Details (6 Columns) */}
              <div className="lg:col-span-6 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widestCAD uppercase font-bold bg-[#F7F4F4] text-[#1E3A5F] border border-[#DADADA]">
                    {event.badge}
                  </span>
                  <span className="text-xs font-mono text-[#1C1C1E]/60">
                    {event.curator}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1C1E]">
                  {event.title}
                </h3>

                <p className="text-xs text-[#1C1C1E]/80 leading-relaxed font-normal">
                  {event.subtitle}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-[#1C1C1E]/70 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1E3A5F]" />
                    <span>{event.venue}</span>
                  </span>
                </div>
              </div>

              {/* Action Button (2 Columns) */}
              <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-center pt-2 lg:pt-0">
                <button
                  onClick={() => onReserveVipSeat(event.title, event.dateStr)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Reserve VIP Seat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-[#1C1C1E]/50 mt-1.5 text-right">
                  Strictly UHNW / Patrons Only
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

