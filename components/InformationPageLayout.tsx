"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";

export default function InformationPageLayout({ children }: { children: ReactNode }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-primary antialiased selection:bg-primary selection:text-white">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      {children}
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
