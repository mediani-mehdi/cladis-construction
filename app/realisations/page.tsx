"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function RealisationsPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-primary antialiased selection:bg-primary selection:text-white">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <ProjectShowcase standalone />
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
