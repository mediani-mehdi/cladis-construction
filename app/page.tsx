"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import AboutCompany from "@/components/AboutCompany";
import CoreServices from "@/components/CoreServices";
import Methodology from "@/components/Methodology";
import AllianceSection from "@/components/AllianceSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import EnvelopeConfigurator from "@/components/EnvelopeConfigurator";
import QuotationForm from "@/components/QuotationForm";
import CatalogueModal from "@/components/CatalogueModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const [configPreFill, setConfigPreFill] = useState<{
    buildingType?: string;
    surface?: number;
    bardageType?: string;
    toitureType?: string;
    hasCharpente?: boolean;
  } | null>(null);

  const handleApplyConfig = (summary: {
    buildingType: string;
    surface: number;
    bardageType: string;
    toitureType: string;
    hasCharpente: boolean;
  }) => {
    setConfigPreFill(summary);
  };

  return (
    <main className="min-h-screen bg-white text-swiss-ink selection:bg-black selection:text-white antialiased">
      {/* Floating Glassmorphism Navbar with Scroll Progress */}
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Swiss Editorial Hero Section */}
      <Hero onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Swiss Modular Metrics / Credibility Bar */}
      <MetricsBar />

      {/* Qui sommes-nous / L'Entreprise & Nos Atouts */}
      <AboutCompany />

      {/* Nos Métiers / Core Services (Modular Grid + Technical Sheets) */}
      <CoreServices />

      {/* Project Methodology / 4-Step Swiss Protocol */}
      <Methodology />

      {/* Strategic Alliance Section (Cladis • Building Services • Filiale d'Achat) */}
      <AllianceSection />

      {/* Selected Portfolio / Project Showcase with Filter Tabs */}
      <ProjectShowcase />

      {/* Interactive Envelope Configurator */}
      <EnvelopeConfigurator onApplyConfig={handleApplyConfig} />

      {/* Interactive Quotation Form (Demande de Devis & Coordinates) */}
      <QuotationForm preFillData={configPreFill} />

      {/* Minimal Swiss Footer */}
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Official Catalogue 2026 Modal */}
      <CatalogueModal
        isOpen={catalogueOpen}
        onClose={() => setCatalogueOpen(false)}
      />
    </main>
  );
}
