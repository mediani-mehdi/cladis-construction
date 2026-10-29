"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building2, UploadCloud, ArrowUpRight } from "lucide-react";

interface PreFillData {
  buildingType?: string;
  surface?: number;
  bardageType?: string;
  toitureType?: string;
  hasCharpente?: boolean;
}

interface QuotationFormProps {
  preFillData?: PreFillData | null;
}

export default function QuotationForm({ preFillData }: QuotationFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    societe: "",
    email: "",
    telephone: "",
    typeProjet: "bardage",
    surfaceEstimee: "",
    localisation: "Chambéry / Région Rhône-Alpes",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);

  useEffect(() => {
    if (preFillData) {
      setFormData((prev) => ({
        ...prev,
        typeProjet: preFillData.hasCharpente
          ? "global"
          : preFillData.bardageType
          ? "bardage"
          : "couverture",
        surfaceEstimee: preFillData.surface ? `${preFillData.surface} m²` : prev.surfaceEstimee,
        message: `Simulation pré-remplie depuis le configurateur :
- Typologie : ${preFillData.buildingType || "Industriel"}
- Surface : ${preFillData.surface || 2500} m²
- Bardage : ${preFillData.bardageType || "Panneaux Sandwichs"}
- Couverture : ${preFillData.toitureType || "Toiture Solaire"}
- Charpente : ${preFillData.hasCharpente ? "Oui (à intégrer)" : "Non"}

Merci de nous recontacter pour une étude détaillée et un chiffrage précis.`,
      }));
    }
  }, [preFillData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 bg-white relative border-t border-black/8 bg-swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="devis">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-swiss-ink" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
              [07 // CONSULTATION & ÉTUDE TECHNIQUE]
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
            Demander un <span className="font-serif italic font-normal text-swiss-accent">Devis</span>
          </h2>

          <p className="text-sm text-swiss-muted font-normal leading-relaxed">
            Transmettez-nous votre cahier des charges ou votre dossier de consultation (DCE).
            Notre bureau d'études analyse vos contraintes et vous répond avec une étude technique chiffrée sous 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Form (Swiss Light Design) */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-10 shadow-swiss-md relative">
            
            {submitted ? (
              <div className="py-16 px-4 text-center space-y-6">
                <div className="w-16 h-16 bg-swiss-subtle border border-black/20 flex items-center justify-center mx-auto text-swiss-ink shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-swiss-ink" />
                </div>
                
                <h3 className="font-sans text-2xl sm:text-3xl text-swiss-ink font-bold">
                  Demande Transmise avec Succès
                </h3>

                <p className="text-sm text-swiss-muted max-w-md mx-auto font-normal leading-relaxed">
                  Merci <strong className="text-swiss-ink font-semibold">{formData.nom || "Monsieur / Madame"}</strong>.
                  Notre ingénieur d'affaires étudie votre projet pour{" "}
                  <strong className="text-swiss-ink">{formData.societe || "votre entreprise"}</strong>.
                  Vous recevrez un accusé de réception à l'adresse{" "}
                  <span className="text-swiss-ink font-mono font-bold">{formData.email}</span>.
                </p>

                <div className="p-4 bg-swiss-subtle border border-black/10 max-w-md mx-auto text-xs text-swiss-muted font-mono text-left space-y-1">
                  <div>Type de projet : <span className="text-swiss-ink uppercase font-semibold">{formData.typeProjet}</span></div>
                  <div>Chantier : <span className="text-swiss-ink">{formData.localisation}</span></div>
                  <div>Délai d'analyse : <span className="text-swiss-ink font-bold">Sous 48 heures ouvrées</span></div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nom: "",
                      societe: "",
                      email: "",
                      telephone: "",
                      typeProjet: "bardage",
                      surfaceEstimee: "",
                      localisation: "Chambéry / Région Rhône-Alpes",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 bg-swiss-subtle hover:bg-swiss-stone border border-black/10 text-xs font-mono uppercase tracking-wider text-swiss-ink transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-black/8 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-swiss-ink font-bold">
                    Formulaire de Consultation Technique
                  </span>
                  <span className="text-[11px] font-mono text-swiss-muted">
                    * Traitement confidentiel
                  </span>
                </div>

                {/* 2 Cols: Nom & Société */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Société / Organisme *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Cabinet d'Architecture / Société SAS"
                      value={formData.societe}
                      onChange={(e) => setFormData({ ...formData, societe: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2 Cols: Email & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="j.dupont@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2 Cols: Type de Projet & Surface */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Type de Projet *
                    </label>
                    <select
                      value={formData.typeProjet}
                      onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink outline-none transition-colors"
                    >
                      <option value="bardage">Bardage Métallique (Façade)</option>
                      <option value="couverture">Couverture & Étanchéité (Toiture)</option>
                      <option value="charpente">Charpente Métallique</option>
                      <option value="global">Enveloppe Complète (Charpente + Couverture + Bardage)</option>
                      <option value="solaire">Toiture Solaire / Végétalisée</option>
                      <option value="autre">Autre Projet Spécifique</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                      Surface Estimée & Ville
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 2 500 m² à Chambéry"
                      value={formData.surfaceEstimee}
                      onChange={(e) => setFormData({ ...formData, surfaceEstimee: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                    Description du Projet & Contraintes Particulières *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez la nature de votre projet, les délais prévus, la localisation exacte et toute exigence thermique ou architecturale..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-black/15 focus:border-black focus:ring-1 focus:ring-black rounded-none text-sm text-swiss-ink placeholder-swiss-muted/60 outline-none transition-colors resize-none"
                  />
                </div>

                {/* File Upload Mock for Architectural Plans */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-swiss-ink font-bold block mb-1.5">
                    Plans de l'Ouvrage ou CCTP (Facultatif - PDF, DWG, ZIP)
                  </label>
                  <label className="flex items-center justify-center gap-3 p-4 bg-swiss-subtle border border-dashed border-black/20 hover:border-black rounded-none cursor-pointer transition-colors">
                    <UploadCloud className="w-5 h-5 text-swiss-accent" />
                    <span className="text-xs text-swiss-muted font-mono">
                      {attachedFileName ? (
                        <span className="text-swiss-ink font-bold">{attachedFileName}</span>
                      ) : (
                        "Cliquez pour joindre un fichier (Max 25 Mo)"
                      )}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setAttachedFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Submit Button (Swiss High-Contrast Solid Black) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmission de votre dossier en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande d'étude technique</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-swiss-muted font-mono text-center pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-swiss-accent shrink-0" />
                  <span>Réponse contractuelle garantie sous 48h ouvrées par notre bureau d'études</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Company Contact Info & Headquarters Aside */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white border border-black/10 p-7 sm:p-8 space-y-6 shadow-swiss-md">
              <div className="flex items-center gap-3 border-b border-black/8 pb-4">
                <div className="w-9 h-9 bg-swiss-ink text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-xl text-swiss-ink font-bold">
                    CLADIS CONSTRUCTION
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted block font-semibold">
                    Siège Social & Bureau d'Études
                  </span>
                </div>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3.5 text-xs">
                  <MapPin className="w-4 h-4 text-swiss-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-swiss-ink font-bold block">
                      74 rue de la Révériaz
                    </span>
                    <span className="text-swiss-muted font-normal">
                      73000 Chambéry, Savoie, France
                    </span>
                    <span className="text-[10px] text-swiss-muted font-mono block mt-0.5">
                      Également : 325 avenue des Landiers, 73000 Chambéry
                    </span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5 text-xs">
                  <Phone className="w-4 h-4 text-swiss-accent shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="tel:0952863156"
                      className="text-swiss-ink hover:underline font-mono block font-semibold"
                    >
                      09 52 86 31 56 <span className="text-swiss-muted font-normal text-[10px]">(Standard Chambéry)</span>
                    </a>
                    <a
                      href="tel:0768527215"
                      className="text-swiss-muted hover:text-swiss-ink font-mono block transition-colors mt-0.5 text-[11px]"
                    >
                      07 68 52 72 15 <span className="text-[10px]">(Ligne Directe Ingénieur)</span>
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3.5 text-xs">
                  <Mail className="w-4 h-4 text-swiss-accent shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:contact@cladisbardage.com"
                      className="text-swiss-ink hover:underline font-mono block font-medium"
                    >
                      contact@cladisbardage.com
                    </a>
                    <a
                      href="mailto:cladisconstruction73@gmail.com"
                      className="text-swiss-muted hover:text-swiss-ink font-mono block transition-colors mt-0.5 text-[11px]"
                    >
                      cladisconstruction73@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 text-xs">
                  <Clock className="w-4 h-4 text-swiss-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-swiss-ink block font-bold">
                      Horaires d'Ouverture
                    </span>
                    <span className="text-swiss-muted font-normal">
                      Lundi – Vendredi : 8h00 – 18h00
                    </span>
                    <span className="text-[10px] text-swiss-muted font-mono block mt-0.5">
                      Fermé les samedis, dimanches & jours fériés
                    </span>
                  </div>
                </div>

              </div>

              {/* Geographic Reach */}
              <div className="pt-5 border-t border-black/8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-ink font-bold block mb-2">
                  Zone d'Intervention Prioritaire
                </span>
                <p className="text-xs text-swiss-muted font-normal leading-relaxed">
                  Intervention sur toute la région <strong className="text-swiss-ink">Auvergne-Rhône-Alpes</strong> :
                  Savoie (73), Haute-Savoie (74), Isère (38), Rhône (69), Ain (01) et départements limitrophes.
                </p>
              </div>

            </div>

            {/* Direct Google Maps Navigation Card */}
            <div className="bg-white border border-black/10 p-6 flex items-center justify-between shadow-swiss-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted font-bold block">
                  Visite & Rendez-vous Bureau
                </span>
                <div className="text-sm font-bold text-swiss-ink">
                  Localiser CLADIS CONSTRUCTION
                </div>
                <div className="text-xs text-swiss-muted font-normal">
                  À 5 min de la VRU / Sortie Chambéry Centre
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=74+rue+de+la+Révériaz+73000+Chambéry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-swiss-subtle border border-black/10 hover:bg-swiss-ink hover:text-white text-swiss-ink flex items-center justify-center transition-all duration-200"
                title="Ouvrir dans Google Maps"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
