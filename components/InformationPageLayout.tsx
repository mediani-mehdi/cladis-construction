"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";

export default function InformationPageLayout({ children }: { children: ReactNode }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">{children}</div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
