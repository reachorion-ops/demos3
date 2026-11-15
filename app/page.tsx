"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BlueprintExplorer } from "@/components/BlueprintExplorer";
import { EngineeringConsole } from "@/components/EngineeringConsole";
import { LeasingPortfolio } from "@/components/LeasingPortfolio";
import { EditorialEndorsements } from "@/components/EditorialEndorsements";
import { CulturalAgenda } from "@/components/CulturalAgenda";
import { ConciergeLounge } from "@/components/ConciergeLounge";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("Private VIP Salon Viewing");
  const [modalSuite, setModalSuite] = useState<string>("");

  const handleOpenInquiry = (type?: string, suite?: string) => {
    if (type) setModalType(type);
    if (suite) setModalSuite(suite);
    setModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1C1C1E] flex flex-col font-sans selection:bg-[#1E3A5F] selection:text-[#FFFFFF]">
      {/* 1. Architectural Brand Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="flex-grow">
        {/* 2. Grand Architectural Hero */}
        <Hero
          onExploreDirectory={() => scrollToSection("directory")}
          onRequestProspectus={() => handleOpenInquiry("Commercial Flagship Tenancy")}
        />

        {/* 3. Centerpiece — Interactive CAD Floorplan & Level Explorer */}
        <BlueprintExplorer
          onBookViewing={(suiteName, suiteCode) =>
            handleOpenInquiry("Private VIP Salon Viewing", `${suiteName} (${suiteCode})`)
          }
          onRequestCadDossier={(suiteCode) =>
            handleOpenInquiry("Architectural CAD Dossier Request", suiteCode)
          }
        />

        {/* 4. Masterplan Engineering & MEP Console */}
        <EngineeringConsole
          onRequestTechnicalBrief={(pillarTitle) =>
            handleOpenInquiry("Architectural CAD Dossier Request", pillarTitle)
          }
        />

        {/* 5. Commercial Flagship Leasing Portfolio */}
        <LeasingPortfolio
          onRequestCadDossier={(cadCode, suiteName) =>
            handleOpenInquiry("Commercial Flagship Tenancy", `${cadCode} — ${suiteName}`)
          }
          onScheduleWalkthrough={(suiteName) =>
            handleOpenInquiry("Commercial Flagship Tenancy", `Walkthrough: ${suiteName}`)
          }
        />

        {/* 6. Editorial Maison Endorsements (Portfolio Testimonials) */}
        <EditorialEndorsements
          onInquireTenancy={(maisonName) =>
            handleOpenInquiry("Commercial Flagship Tenancy", `Tenancy benchmark: ${maisonName}`)
          }
        />

        {/* 7. Chronological Cultural Season Agenda */}
        <CulturalAgenda
          onReserveVipSeat={(eventTitle, eventDate) =>
            handleOpenInquiry("Press & Cultural Vernissage Credential", `${eventTitle} (${eventDate})`)
          }
        />

        {/* 8. VIP Concierge & Tenancy Atelier */}
        <ConciergeLounge
          onContactConcierge={() =>
            handleOpenInquiry("Private VIP Salon Viewing", "Royale Private Client Desk")
          }
          onScheduleWalkthrough={() =>
            handleOpenInquiry("Commercial Flagship Tenancy", "Architectural Atelier Walkthrough")
          }
          onRequestGuidelines={() =>
            handleOpenInquiry("Architectural CAD Dossier Request", "Tenancy Architectural Guidelines (PDF)")
          }
        />
      </main>

      {/* 9. Apple-Grade Architectural Footer */}
      <Footer />

      {/* 10. Interactive Concierge & Leasing Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
        initialSuite={modalSuite}
      />
    </div>
  );
}
