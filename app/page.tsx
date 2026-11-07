"use client";

import { useState } from "react";
import HomeNavigation from "@/components/HomeNavigation";
import HomeHero from "@/components/HomeHero";
import HomeSections from "@/components/HomeSections";
import EnvelopeConfigurator from "@/components/EnvelopeConfigurator";
import QuotationForm from "@/components/QuotationForm";
import CatalogueModal from "@/components/CatalogueModal";
import HomeFooter from "@/components/HomeFooter";

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
    <main className="v2-home">
      <HomeNavigation onOpenCatalogue={() => setCatalogueOpen(true)} />
      <HomeHero />
      <HomeSections />

      {/* Interactive Envelope Configurator */}
      <div className="v2-tools"><EnvelopeConfigurator onApplyConfig={handleApplyConfig} /></div>

      {/* Interactive Quotation Form (Demande de Devis & Coordinates) */}
      <div className="v2-consultation"><QuotationForm preFillData={configPreFill} /></div>

      {/* Minimal Swiss Footer */}
      <HomeFooter onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Official Catalogue 2026 Modal */}
      <CatalogueModal
        isOpen={catalogueOpen}
        onClose={() => setCatalogueOpen(false)}
      />
    </main>
  );
}
