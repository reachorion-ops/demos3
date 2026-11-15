"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: (type?: string, suiteId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Directory", href: "#directory" },
    { label: "Architecture", href: "#engineering" },
    { label: "Leasing", href: "#leasing" },
    { label: "Endorsements", href: "#endorsements" },
    { label: "Exhibitions", href: "#agenda" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b hairline border-[#DADADA]">
      {/* Top micro telemetry bar */}
      <div className="bg-[#1C1C1E] text-[#FFFFFF] text-[10px] tracking-widestCAD uppercase font-mono px-6 py-1 flex items-center justify-between border-b border-[#DADADA]/20">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D92D20] animate-pulse"></span>
          <span>PRECINCT TELEMETRY: 140 MAISONS ACTIVE</span>
          <span className="hidden sm:inline text-[#DADADA]/60">•</span>
          <span className="hidden sm:inline text-[#DADADA]/80">HARBOURFRONT ROTUNDA APEX 44.5M</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#DADADA]/80">
          <span>VALET: LEVEL B1–B3 ACTIVE</span>
          <span>•</span>
          <span>DISCRETION CODE: LEVEL IV ENCRYPTED</span>
          <span>•</span>
          <span className="text-[#FFFFFF] font-semibold">PARIS / GENÈVE TIME: 17:15 CET</span>
        </div>
      </div>

      {/* Main 56px Architectural Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-none border border-[#1C1C1E] flex items-center justify-center bg-[#FFFFFF] group-hover:bg-[#1C1C1E] transition-colors duration-200">
            <svg
              className="w-4 h-4 text-[#1C1C1E] group-hover:text-[#FFFFFF] transition-colors duration-200"
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
            <span className="font-bold tracking-tight text-[15px] leading-tight text-[#1C1C1E]">
              THE ROTUNDA ROYALE
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              COMMERCIAL FLAGSHIP GALLERIE
            </span>
          </div>
        </a>

        {/* Single-word Non-wrapping Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#1C1C1E] hover:text-[#D92D20] tracking-tight transition-colors py-1 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D92D20] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Pill Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenInquiry("Private VIP Salon Viewing")}
            className="px-4 py-2 rounded-full text-[12px] font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:border-[#1E3A5F] hover:bg-[#F7F4F4] transition-all duration-200 flex items-center gap-1.5"
          >
            <span>VIP Concierge</span>
          </button>
          <button
            onClick={() => onOpenInquiry("Commercial Flagship Tenancy")}
            className="px-4 py-2 rounded-full text-[12px] font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-all duration-200 flex items-center gap-1 shadow-sm"
          >
            <span>Leasing Inquiries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1C1C1E] hover:bg-[#F7F4F4] rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#DADADA] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#1C1C1E] hover:text-[#D92D20] py-2 border-b border-[#DADADA]/50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("Private VIP Salon Viewing");
              }}
              className="w-full py-2.5 rounded-full text-[13px] font-medium border border-[#DADADA] text-[#1C1C1E] text-center"
            >
              VIP Concierge
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("Commercial Flagship Tenancy");
              }}
              className="w-full py-2.5 rounded-full text-[13px] font-semibold bg-[#D92D20] text-[#FFFFFF] text-center"
            >
              Leasing Inquiries
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

