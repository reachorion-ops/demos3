"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { SUITES_DATA, LEASING_SUITES } from "@/data/galleryData";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialSuite?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = "Private VIP Salon Viewing",
  initialSuite = "",
}) => {
  const [step, setStep] = useState<number>(1);
  const [inquiryType, setInquiryType] = useState<string>(initialType);
  const [selectedSuite, setSelectedSuite] = useState<string>(initialSuite);
  const [appointmentDate, setAppointmentDate] = useState<string>("2026-11-28");
  const [appointmentTime, setAppointmentTime] = useState<string>("15:00 CET");

  // Visitor credentials
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    discretionRequirement: "Standard Encrypted",
    specialNotes: "",
  });

  const [confirmationRef, setConfirmationRef] = useState<string>("");

  useEffect(() => {
    if (initialType) setInquiryType(initialType);
    if (initialSuite) setSelectedSuite(initialSuite);
    if (isOpen) {
      setStep(1);
      // Generate realistic reference code
      const randomDigits = Math.floor(10000 + Math.random() * 90000);
      setConfirmationRef(`REF-ROT-${randomDigits}`);
    }
  }, [isOpen, initialType, initialSuite]);

  if (!isOpen) return null;

  const inquiryTypes = [
    {
      title: "Private VIP Salon Viewing",
      subtitle: "Bespoke appointment at Cartier, Patek Philippe, Hermès, or other Maisons.",
      badge: "VIP Clients & Collectors",
    },
    {
      title: "Commercial Flagship Tenancy",
      subtitle: "Evaluate available commercial envelopes, terms, and landlord capital contributions.",
      badge: "Brand Principals & Real Estate Heads",
    },
    {
      title: "Architectural CAD Dossier Request",
      subtitle: "Full BIM models, structural loads, MEP grease shaft schematics, and vault ratings.",
      badge: "Architects & MEP Consultants",
    },
    {
      title: "Press & Cultural Vernissage Credential",
      subtitle: "Accreditation for exhibition previews, horological symposiums, and architecture tours.",
      badge: "Curators & Verified Press",
    },
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submit step
      setStep(4);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1C1E]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#DADADA] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#F7F4F4] border-b border-[#DADADA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D92D20]"></span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F]">
              ROYALE PROTOCOL • STEP {step} OF 4
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1C1C1E] hover:bg-[#DADADA]/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                  Select Protocol Objective
                </h3>
                <p className="text-xs text-[#1C1C1E]/70 font-normal">
                  Your inquiry is assigned directly to a designated Private Client Attaché or Commercial Tenancy Director.
                </p>
              </div>

              <div className="space-y-3">
                {inquiryTypes.map((type) => {
                  const isSelected = inquiryType === type.title;
                  return (
                    <button
                      key={type.title}
                      type="button"
                      onClick={() => setInquiryType(type.title)}
                      className={`w-full text-left p-4 border transition-all duration-200 flex items-start justify-between gap-4 ${
                        isSelected
                          ? "border-[#1C1C1E] bg-[#F7F4F4] shadow-sm"
                          : "border-[#DADADA] bg-[#FFFFFF] hover:bg-[#F7F4F4]/50"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono tracking-wider font-semibold text-[#1E3A5F]">
                            {type.badge}
                          </span>
                        </div>
                        <div className="font-bold text-sm tracking-tight text-[#1C1C1E]">
                          {type.title}
                        </div>
                        <div className="text-xs text-[#1C1C1E]/70 font-normal">
                          {type.subtitle}
                        </div>
                      </div>

                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                          isSelected
                            ? "border-[#D92D20] bg-[#D92D20]"
                            : "border-[#DADADA] bg-[#FFFFFF]"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full"></div>}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Proceed to Selection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                  Target Maison or Suite Allocation
                </h3>
                <p className="text-xs text-[#1C1C1E]/70 font-normal">
                  Specify the boutique salon or commercial envelope for this protocol.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                    MAISON / SUITE REFERENCE
                  </label>
                  <select
                    value={selectedSuite}
                    onChange={(e) => setSelectedSuite(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                  >
                    <option value="">Select a Maison or Suite...</option>
                    <optgroup label="Ground Promenade Maisons">
                      {SUITES_DATA.filter((s) => s.level === 1).map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.maison} — {s.cadRef} ({s.suiteCode})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Level 2 Couture Salons">
                      {SUITES_DATA.filter((s) => s.level === 2).map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.maison} — {s.cadRef} ({s.suiteCode})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Level 3 Michelin Salons">
                      {SUITES_DATA.filter((s) => s.level === 3).map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.maison} — {s.cadRef} ({s.suiteCode})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Commercial Flagship Leasing Envelopes">
                      {LEASING_SUITES.map((ls) => (
                        <option key={ls.id} value={ls.name}>
                          {ls.cadCode} — {ls.name} ({ls.giaM2} m²)
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      PREFERRED TIME WINDOW
                    </label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    >
                      <option value="11:00 CET (Morning Private Salon)">11:00 CET (Morning Private Salon)</option>
                      <option value="15:00 CET (Afternoon Salon)">15:00 CET (Afternoon Salon)</option>
                      <option value="18:30 CET (Evening Vernissage Window)">18:30 CET (Evening Vernissage Window)</option>
                      <option value="21:00 CET (After-Hours Private Access)">21:00 CET (After-Hours Private Access)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F7F4F4] border border-[#DADADA] text-xs font-mono text-[#1C1C1E]/70 space-y-1">
                  <div className="font-bold text-[#1E3A5F]">SUBTERRANEAN VIP VALET ACCESS:</div>
                  <div>Level B3 airlock arrival with private lift to suite will be reserved automatically.</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:bg-[#F7F4F4] transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Enter Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-[#1C1C1E]">
                  Visitor & Executive Credentials
                </h3>
                <p className="text-xs text-[#1C1C1E]/70 font-normal">
                  All transmissions are treated with institutional discretion under our strict privacy charter.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      FULL LEGAL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lord Alexander Montgomery"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      ORGANIZATION / MAISON
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Private Family Office / Richemont"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      CONFIDENTIAL DIRECT EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="exec@familyoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                      TELEPHONE / SIGNAL LINE *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+41 22 819 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1E3A5F] mb-1.5">
                    SECURITY & DISCRETION PROTOCOL
                  </label>
                  <select
                    value={formData.discretionRequirement}
                    onChange={(e) => setFormData({ ...formData, discretionRequirement: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DADADA] rounded-none px-4 py-2.5 text-xs text-[#1C1C1E] focus:outline-none focus:border-[#1C1C1E]"
                  >
                    <option value="Standard Encrypted Protocol">Standard Encrypted Protocol</option>
                    <option value="Sovereign / Diplomatic Discretion">Sovereign / Diplomatic Discretion (Direct Attaché)</option>
                    <option value="Armored Conveyance Required (Level B3 Ingress)">Armored Conveyance Required (Level B3 Ingress)</option>
                    <option value="Strictly Anonymous Collector Escort">Strictly Anonymous Collector Escort</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-tight border border-[#DADADA] text-[#1C1C1E] hover:bg-[#F7F4F4] transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-tight bg-[#D92D20] text-[#FFFFFF] hover:bg-[#1C1C1E] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Transmit Protocol Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full border border-[#D92D20] flex items-center justify-center mx-auto bg-[#F7F4F4]">
                <CheckCircle2 className="w-8 h-8 text-[#D92D20]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widestCAD uppercase font-bold text-[#1E3A5F]">
                  FORMAL TRANSMISSION RECORDED
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-[#1C1C1E]">
                  Protocol Confirmation
                </h3>
                <p className="text-xs text-[#1C1C1E]/70 max-w-md mx-auto leading-relaxed">
                  Your formal dossier request has been registered in our encrypted tenancy registry. A designated private attaché has been assigned to your reference.
                </p>
              </div>

              {/* Reference Card */}
              <div className="max-w-md mx-auto p-5 bg-[#F7F4F4] border border-[#DADADA] text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-[#DADADA] pb-2">
                  <span className="text-[#1C1C1E]/60 uppercase">CAD REFERENCE:</span>
                  <span className="font-bold text-sm text-[#D92D20]">{confirmationRef}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1C1C1E]/60 uppercase">OBJECTIVE:</span>
                  <span className="text-[#1C1C1E] font-semibold">{inquiryType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1C1C1E]/60 uppercase">TARGET SUITE:</span>
                  <span className="text-[#1C1C1E] font-semibold">{selectedSuite || "Grand Rotunda Masterplan"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1C1C1E]/60 uppercase">WINDOW:</span>
                  <span className="text-[#1C1C1E] font-semibold">{appointmentDate} at {appointmentTime}</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#DADADA] pt-2">
                  <span className="text-[#1C1C1E]/60 uppercase">ASSIGNED ATTACHÉ:</span>
                  <span className="text-[#1E3A5F] font-bold">Jean-Marc de Saint-Germain (Royale Attaché #04)</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-full text-xs font-semibold tracking-tight bg-[#1C1C1E] text-[#FFFFFF] hover:bg-[#D92D20] transition-colors"
                >
                  Return to Precinct Explorer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

