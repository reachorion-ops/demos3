"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Phone,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  FileText
} from "lucide-react";
import { SUITES_DATA, SuiteData } from "@/data/galleryData";

interface BlueprintExplorerProps {
  onBookViewing: (suiteName: string, suiteCode: string) => void;
  onRequestCadDossier: (suiteCode: string) => void;
}

export const BlueprintExplorer: React.FC<BlueprintExplorerProps> = ({
  onBookViewing,
  onRequestCadDossier,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Maisons");
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>("cartier-g01");
  const [blueprintViewMode, setBlueprintViewMode] = useState<"cad" | "highContrast">("cad");

  const levels = [
    { level: 1, name: "Level 1 Promenade", subtitle: "Grand Maisons & Joaillerie Anchors" },
    { level: 2, name: "Level 2 Couture", subtitle: "Milanese & Parisian Fashion Ateliers" },
    { level: 3, name: "Level 3 Michelin Salons", subtitle: "Three-Star Culinary Ateliers & Cellars" },
    { level: 4, name: "Level 4 Sky Pavilion", subtitle: "Observatory & Private Family Offices" },
  ];

  const categories = [
    "All Maisons",
    "Haute Horlogerie & Joaillerie",
    "Haute Couture",
    "Michelin Gastronomy",
    "Private Banking & VIP",
  ];

  // Filtered suites based on level, search, and category
  const filteredSuites = useMemo(() => {
    return SUITES_DATA.filter((suite) => {
      const matchesLevel = suite.level === selectedLevel;
      const matchesSearch =
        searchQuery.trim() === "" ||
        suite.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suite.maison.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suite.cadRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        suite.suiteCode.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat =
        selectedCategory === "All Maisons" || suite.category === selectedCategory;
      return matchesLevel && matchesSearch && matchesCat;
    });
  }, [selectedLevel, searchQuery, selectedCategory]);

  // Current selected suite object
  const activeSuite: SuiteData = useMemo(() => {
    const found = SUITES_DATA.find((s) => s.id === selectedSuiteId);
    if (found) return found;
    // Fallback to first in current level
    const firstInLevel = SUITES_DATA.find((s) => s.level === selectedLevel);
    return firstInLevel || SUITES_DATA[0];
  }, [selectedSuiteId, selectedLevel]);

  // Handle level change
  const handleLevelChange = (lvl: number) => {
    setSelectedLevel(lvl);
    const firstInNewLevel = SUITES_DATA.find((s) => s.level === lvl);
    if (firstInNewLevel) {
      setSelectedSuiteId(firstInNewLevel.id);
    }
  };

  return (
    <section id="directory" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#DADADA]">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DADADA] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92D20]"></span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                INTERACTIVE PRECINCT BLUEPRINT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E]">
              Architectural CAD Floorplan & Level Explorer
            </h2>
            <p className="text-[#1C1C1E]/70 max-w-2xl text-base">
              A live spatial vector rendering of the monumental rotunda colonnade. Select any maison or suite to inspect structural dimensions, glazed frontages, and direct concierge contact lines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setBlueprintViewMode(blueprintViewMode === "cad" ? "highContrast" : "cad")}
              className="px-4 py-2 rounded-full text-xs font-mono border border-[#DADADA] text-[#1C1C1E] hover:border-[#1E3A5F] hover:bg-[#F7F4F4] transition-colors"
            >
              MODE: {blueprintViewMode === "cad" ? "STANDARD CAD (WHITE)" : "HIGH CONTRAST BLUEPRINT"}
            </button>
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-mono tracking-widestCAD text-[#1E3A5F] block uppercase font-semibold">
                SCALE: 1:250 METRIC
              </span>
              <span className="text-xs font-mono text-[#1C1C1E]/80">
                ACTIVE GRID: A-01 TO E-08
              </span>
            </div>
          </div>
        </div>

        {/* Level Switcher (Segmented Pill Buttons) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#F7F4F4] border border-[#DADADA] rounded-full max-w-3xl">
          {levels.map((lvl) => {
            const isActive = selectedLevel === lvl.level;
            return (
              <button
                key={lvl.level}
                onClick={() => handleLevelChange(lvl.level)}
                className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 ${
                  isActive
                    ? "bg-[#1C1C1E] text-[#FFFFFF] shadow-sm"
                    : "text-[#1C1C1E]/80 hover:text-[#1C1C1E] hover:bg-[#FFFFFF]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#D92D20]" : "bg-[#DADADA]"}`}></span>
                <span>{lvl.name}</span>
              </button>
            );
          })}
        </div>

        {/* Live Search & Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#1C1C1E]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 140+ Maisons, suites, CAD references, or categories..."
              className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-full pl-11 pr-4 py-2.5 text-xs text-[#1C1C1E] placeholder:text-[#1C1C1E]/40 focus:outline-none focus:border-[#1C1C1E] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#1C1C1E]/60 hover:text-[#1C1C1E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="md:col-span-6 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isCatActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight whitespace-nowrap transition-colors ${
                    isCatActive
                      ? "bg-[#1E3A5F] text-[#FFFFFF]"
                      : "bg-[#FFFFFF] border border-[#DADADA] text-[#1C1C1E]/80 hover:border-[#1E3A5F] hover:text-[#1C1C1E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Floorplan & Editorial Showcase Grid (Zero 3-Card AI Slop!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Vector SVG Architectural Blueprint (7 Columns) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DADADA] overflow-hidden flex flex-col">
            {/* Blueprint Header Telemetry */}
            <div className="px-5 py-3 bg-[#F7F4F4] border-b border-[#DADADA] flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[#1C1C1E]">
                <Layers className="w-3.5 h-3.5 text-[#1E3A5F]" />
                <span className="font-bold uppercase tracking-wider">
                  {levels.find((l) => l.level === selectedLevel)?.name}
                </span>
                <span className="text-[#DADADA]">|</span>
                <span className="text-[#1E3A5F]">
                  REF: CAD-LVL-{selectedLevel}-PLAN
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#1C1C1E]/70">
                <span className="hidden sm:inline">CENTRAL OCULUS R=38.4M</span>
                <span className="hidden sm:inline text-[#DADADA]">•</span>
                <span className="text-[#D92D20] font-semibold">
                  {filteredSuites.length} SUITES IDENTIFIED
                </span>
              </div>
            </div>

            {/* Architectural Blueprint SVG Canvas */}
            <div
              className={`relative p-4 sm:p-6 transition-colors duration-200 select-none ${
                blueprintViewMode === "highContrast"
                  ? "bg-[#1E3A5F] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#1C1C1E]"
              }`}
            >
              {/* CAD Compass & North Indicator */}
              <div className="absolute top-6 right-6 z-10 flex flex-col items-center pointer-events-none opacity-80">
                <div className="w-9 h-9 rounded-full border border-current flex items-center justify-center font-mono text-[10px] font-bold">
                  <span>N</span>
                </div>
                <div className="w-0.5 h-2 bg-current mt-0.5"></div>
                <span className="text-[8px] font-mono tracking-widestCAD mt-1">CAD N-0°</span>
              </div>

              {/* Dynamic SVG Blueprint */}
              <svg
                viewBox="0 0 800 500"
                className="w-full h-auto max-h-[500px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Blueprint Grid Pattern */}
                  <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#DADADA"}
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      opacity={blueprintViewMode === "highContrast" ? 0.2 : 0.6}
                    />
                  </pattern>
                </defs>

                {/* Background CAD Grid */}
                <rect width="800" height="500" fill="url(#cadGrid)" />

                {/* Architectural Grid Axes Lines */}
                <g stroke={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#DADADA"} strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
                  {/* Vertical Axis Lines */}
                  <line x1="80" y1="20" x2="80" y2="480" />
                  <line x1="220" y1="20" x2="220" y2="480" />
                  <line x1="400" y1="20" x2="400" y2="480" />
                  <line x1="580" y1="20" x2="580" y2="480" />
                  <line x1="720" y1="20" x2="720" y2="480" />

                  {/* Horizontal Axis Lines */}
                  <line x1="20" y1="100" x2="780" y2="100" />
                  <line x1="20" y1="250" x2="780" y2="250" />
                  <line x1="20" y1="400" x2="780" y2="400" />
                </g>

                {/* Outer Architectural Perimeter Wall Colonnade */}
                <rect
                  x="50"
                  y="60"
                  width="700"
                  height="380"
                  fill="none"
                  stroke={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#1C1C1E"}
                  strokeWidth="2"
                />

                {/* Central Rotunda Oculus Void (Monumental Circular Heart) */}
                <circle
                  cx="400"
                  cy="250"
                  r="115"
                  fill={blueprintViewMode === "highContrast" ? "#152a45" : "#F7F4F4"}
                  stroke={blueprintViewMode === "highContrast" ? "#DADADA" : "#1E3A5F"}
                  strokeWidth="2"
                />
                <circle
                  cx="400"
                  cy="250"
                  r="90"
                  fill="none"
                  stroke={blueprintViewMode === "highContrast" ? "#DADADA" : "#1E3A5F"}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="400"
                  cy="250"
                  r="45"
                  fill="none"
                  stroke="#D92D20"
                  strokeWidth="1.5"
                />

                {/* Central Oculus Text Callout */}
                <text
                  x="400"
                  y="245"
                  textAnchor="middle"
                  fill={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#1C1C1E"}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  letterSpacing="0.1em"
                >
                  ROTUNDA OCULUS VOID
                </text>
                <text
                  x="400"
                  y="262"
                  textAnchor="middle"
                  fill="#D92D20"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  APEX CL: 44.5M (NATURAL SKYLIGHT)
                </text>

                {/* Colonnade Pillars & Structural Columns (Pritzker Grid) */}
                {[
                  { cx: 80, cy: 90 }, { cx: 220, cy: 90 }, { cx: 400, cy: 90 }, { cx: 580, cy: 90 }, { cx: 720, cy: 90 },
                  { cx: 80, cy: 410 }, { cx: 220, cy: 410 }, { cx: 400, cy: 410 }, { cx: 580, cy: 410 }, { cx: 720, cy: 410 },
                  { cx: 80, cy: 250 }, { cx: 720, cy: 250 }
                ].map((col, idx) => (
                  <rect
                    key={idx}
                    x={col.cx - 6}
                    y={col.cy - 6}
                    width="12"
                    height="12"
                    fill={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#1C1C1E"}
                  />
                ))}

                {/* Connecting Skybridges & Promenade Arteries */}
                <line
                  x1="285"
                  y1="250"
                  x2="515"
                  y2="250"
                  stroke={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#1C1C1E"}
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />
                <line
                  x1="400"
                  y1="135"
                  x2="400"
                  y2="365"
                  stroke={blueprintViewMode === "highContrast" ? "#FFFFFF" : "#1C1C1E"}
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />

                {/* Egress Stairwells & High-Speed Lifts */}
                <g fill="none" stroke={blueprintViewMode === "highContrast" ? "#DADADA" : "#1E3A5F"} strokeWidth="1">
                  <rect x="58" y="68" width="30" height="30" />
                  <line x1="58" y1="68" x2="88" y2="98" />
                  <text x="63" y="85" fontSize="7" fill="currentColor" fontFamily="monospace">LIFT</text>

                  <rect x="712" y="68" width="30" height="30" />
                  <line x1="712" y1="68" x2="742" y2="98" />
                  <text x="717" y="85" fontSize="7" fill="currentColor" fontFamily="monospace">LIFT</text>

                  <rect x="58" y="402" width="30" height="30" />
                  <line x1="58" y1="402" x2="88" y2="432" />
                  <text x="63" y="419" fontSize="7" fill="currentColor" fontFamily="monospace">LIFT</text>

                  <rect x="712" y="402" width="30" height="30" />
                  <line x1="712" y1="402" x2="742" y2="432" />
                  <text x="717" y="419" fontSize="7" fill="currentColor" fontFamily="monospace">LIFT</text>
                </g>

                {/* Clickable Boutique Suites on Blueprint for Selected Level */}
                {filteredSuites.map((suite) => {
                  const isSelected = activeSuite.id === suite.id;
                  const coords = suite.architecturalCoordinates;

                  return (
                    <g
                      key={suite.id}
                      onClick={() => setSelectedSuiteId(suite.id)}
                      className="cursor-pointer group transition-all duration-200"
                    >
                      {/* Suite Floor Outline */}
                      <rect
                        x={coords.x}
                        y={coords.y}
                        width={coords.width}
                        height={coords.height}
                        fill={
                          isSelected
                            ? "#D92D20"
                            : blueprintViewMode === "highContrast"
                            ? "#1c385b"
                            : "#FFFFFF"
                        }
                        stroke={
                          isSelected
                            ? "#D92D20"
                            : blueprintViewMode === "highContrast"
                            ? "#DADADA"
                            : "#1C1C1E"
                        }
                        strokeWidth={isSelected ? "2.5" : "1"}
                        className="transition-colors duration-200 group-hover:stroke-[#D92D20]"
                      />

                      {/* CAD Hatching Lines if selected */}
                      {isSelected && (
                        <g stroke="#FFFFFF" strokeWidth="0.75" opacity="0.3">
                          <line x1={coords.x} y1={coords.y} x2={coords.x + coords.width} y2={coords.y + coords.height} />
                          <line x1={coords.x + coords.width} y1={coords.y} x2={coords.x} y2={coords.y + coords.height} />
                        </g>
                      )}

                      {/* Suite Status Pin / Reticle */}
                      <circle
                        cx={coords.x + coords.width / 2}
                        cy={coords.y + 22}
                        r={isSelected ? "4" : "3"}
                        fill={isSelected ? "#FFFFFF" : "#D92D20"}
                      />

                      {/* Suite Maison Name Label */}
                      <text
                        x={coords.x + coords.width / 2}
                        y={coords.y + 40}
                        textAnchor="middle"
                        fill={
                          isSelected
                            ? "#FFFFFF"
                            : blueprintViewMode === "highContrast"
                            ? "#FFFFFF"
                            : "#1C1C1E"
                        }
                        fontSize={coords.width > 130 ? "11" : "9.5"}
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        letterSpacing="-0.01em"
                      >
                        {suite.maison.toUpperCase()}
                      </text>

                      {/* Suite Code & Area */}
                      <text
                        x={coords.x + coords.width / 2}
                        y={coords.y + 55}
                        textAnchor="middle"
                        fill={
                          isSelected
                            ? "#FFFFFF"
                            : blueprintViewMode === "highContrast"
                            ? "#DADADA"
                            : "#1C1C1E"
                        }
                        fontSize="8"
                        fontFamily="monospace"
                        opacity={isSelected ? 0.9 : 0.7}
                      >
                        {suite.cadRef} • {suite.floorAreaM2}m²
                      </text>

                      {/* Glazed Frontage micro callout */}
                      <text
                        x={coords.x + coords.width / 2}
                        y={coords.y + coords.height - 10}
                        textAnchor="middle"
                        fill={
                          isSelected
                            ? "#FFFFFF"
                            : "#1E3A5F"
                        }
                        fontSize="7"
                        fontFamily="monospace"
                        fontWeight="bold"
                        opacity={isSelected ? 0.95 : 0.8}
                      >
                        FRONTAGE: {suite.glazedFrontageM}M
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Blueprint Footer Status Bar */}
              <div className="pt-4 border-t border-current/20 flex flex-wrap items-center justify-between text-[10px] font-mono gap-2 opacity-80">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-none bg-[#D92D20] inline-block"></span>
                    <span>ACTIVE SELECTION</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-none border border-current inline-block"></span>
                    <span>AVAILABLE / COMMISSIONED</span>
                  </span>
                </div>
                <div>
                  <span>PALAIS ROTUNDA CAD SPEC V8.4 • APPROVED</span>
                </div>
              </div>
            </div>

            {/* Quick Suite Selector Pills on bottom */}
            <div className="p-4 bg-[#F7F4F4] border-t border-[#DADADA] flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#1C1C1E]/60 whitespace-nowrap pl-1">
                JUMP TO MAISON:
              </span>
              {filteredSuites.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSuiteId(s.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-colors ${
                    activeSuite.id === s.id
                      ? "bg-[#D92D20] text-[#FFFFFF]"
                      : "bg-[#FFFFFF] border border-[#DADADA] text-[#1C1C1E] hover:border-[#1C1C1E]"
                  }`}
                >
                  {s.maison}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Maison Showcase Card (5 Columns) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DADADA] p-6 lg:p-7 space-y-6">
            {/* Architectural CAD Metadata Header */}
            <div className="flex items-start justify-between border-b border-[#DADADA] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widestCAD uppercase bg-[#1E3A5F] text-[#FFFFFF]">
                    {activeSuite.cadRef}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
                    {activeSuite.levelName}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                  {activeSuite.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#1C1C1E]/60 block uppercase">
                  HERITAGE
                </span>
                <span className="text-xs font-mono font-bold text-[#1C1C1E]">
                  FONDÉ EN {activeSuite.heritageYear}
                </span>
              </div>
            </div>

            {/* High-Resolution Architectural Photography of Flagship Suite */}
            <div className="relative aspect-[16/10] w-full border border-[#DADADA] bg-[#1C1C1E] overflow-hidden group">
              <Image
                src={activeSuite.image}
                alt={activeSuite.name}
                fill
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DADADA] px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-[#1C1C1E] font-semibold">
                LOCATION: {activeSuite.suiteCode}
              </div>
              <div className="absolute bottom-3 right-3 bg-[#1C1C1E]/90 text-[#FFFFFF] px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider">
                {activeSuite.privateSalonCapacity}
              </div>
            </div>

            {/* Architectural & Engineering Telemetry Grid */}
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#F7F4F4] border border-[#DADADA]">
              <div>
                <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                  GROSS FLOOR AREA
                </span>
                <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                  {activeSuite.floorAreaM2.toLocaleString()} m²{" "}
                  <span className="text-[10px] font-normal text-[#1C1C1E]/70">
                    ({activeSuite.floorAreaSqFt.toLocaleString()} sq ft)
                  </span>
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                  CLEAR CEILING HEIGHT
                </span>
                <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                  {activeSuite.ceilingHeightM}m Clear Height
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                  GLAZED FRONTAGE
                </span>
                <span className="text-sm font-bold text-[#1C1C1E] font-mono">
                  {activeSuite.glazedFrontageM}m Continuous
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widestCAD uppercase text-[#1C1C1E]/60 block">
                  AUDITED ANNUAL TURNOVER
                </span>
                <span className="text-sm font-bold text-[#D92D20] font-mono">
                  {activeSuite.auditedTurnover || "Prime Tenancy"}
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs text-[#1C1C1E]/80 leading-relaxed font-normal">
              {activeSuite.description}
            </p>

            {/* Architectural Features Bullet List */}
            <div className="space-y-2 border-t border-[#DADADA] pt-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] block">
                FLAGSHIP STRUCTURAL SPECIFICATIONS
              </span>
              <ul className="space-y-1.5 text-xs text-[#1C1C1E]/80">
                {activeSuite.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92D20] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Concierge Direct Line & Direct Actions */}
            <div className="p-4 border border-[#DADADA] bg-[#FFFFFF] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#1C1C1E]">
                  <Phone className="w-3.5 h-3.5 text-[#1E3A5F]" />
                  <span className="font-semibold tracking-tight">Direct White Glove Desk:</span>
                </div>
                <span className="font-mono font-bold text-[#1C1C1E]">
                  {activeSuite.privateConciergePhone}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onBookViewing(activeSuite.name, activeSuite.suiteCode)}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book Private Salon</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onRequestCadDossier(activeSuite.cadRef)}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:bg-[#F7F4F4] hover:border-[#1E3A5F] transition-colors flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#1E3A5F]" />
                  <span>CAD Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

