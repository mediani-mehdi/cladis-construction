export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "bardage" | "couverture" | "charpente" | "complexe";
  categoryLabel: string;
  location: string;
  department: string;
  surface: string;
  year: string;
  image: string;
  galleryImages: string[];
  clientType: string;
  clientName?: string;
  description: string;
  context: string;
  challenges: string[];
  solutions: string[];
  technicalDetails: { label: string; value: string }[];
  associatedLots: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "hub-chambery",
    slug: "hub-chambery",
    title: "Centre Logistique & Hub Tertiaire des Alpes",
    subtitle: "Enveloppe Globale Métallique & Façade Cassettes Rétroéclairées",
    category: "complexe",
    categoryLabel: "Enveloppe Clé en Main",
    location: "Chambéry, Savoie",
    department: "73",
    surface: "6 400 m²",
    year: "2025",
    image: "/images/hero-building.jpg",
    galleryImages: [
      "/images/hero-building.jpg",
      "/images/about-building.jpg",
      "/images/construction-hero.jpg",
      "/images/project-chambery-hub.jpg",
    ],
    clientType: "Plateforme Industrielle & Bureaux Tertiaires",
    description:
      "Conception et mise en œuvre complète du clos-couvert : charpente métallique haute portée, façades en bardage double peau avec cassettes perforées rétroéclairées et toiture étanchée en membrane bicouche élastomère avec isolation thermique haute performance RE2020.",
    context:
      "Ce hub stratégique situé au carrefour des vallées alpines accueille une plateforme logistique à fort flux et un siège administratif de 1 200 m² de bureaux. Le projet devait impérativement conjuguer rapidité d'exécution pour mise hors d'eau anticipée et signature architecturale contemporaine valorisant l'entrée de zone d'activités.",
    challenges: [
      "Gestion simultanée des 3 corps d'état (charpente, couverture, bardage) dans un calendrier serré de 6 mois.",
      "Sollicitations climatiques alpines sévères (neige accidentelle zone 2B et vent en couloir de vallée).",
      "Jonctions millimétrées entre la partie entrepôt (panneaux sandwichs) et le bâtiment tertiaire (cassettes planes).",
    ],
    solutions: [
      "Préfabrication intégrale des charpentes en usine avec boulonnerie haute résistance pour montage éclair.",
      "Modélisation BIM 3D par notre bureau d'études supprimant 100% des clashs d'interfaces sur site.",
      "Système de fixation invisible exclusif pour les cassettes aluminium perforées de la façade bureaux.",
    ],
    technicalDetails: [
      { label: "Système Façade", value: "Bardage métallique cassette aluminium laqué 20/10ème" },
      { label: "Isolation Thermique", value: "Laine de roche 160 mm - R = 4.85 m²·K/W" },
      { label: "Étanchéité Toiture", value: "Membrane SBS autoprotégée avec classement Broof (t3)" },
      { label: "Charpente Métallique", value: "Poutres PRS acier S355 grande portée 34 mètres" },
      { label: "Bureau d'études", value: "Modélisation BIM 3D intégrale Cladis Construction" },
      { label: "Équipe de Pose", value: "Alliance Building Services (20 compagnons qualifiés)" },
    ],
    associatedLots: ["Bardage Métallique", "Couverture & Étanchéité", "Charpentes Métalliques"],
  },
  {
    id: "usine-bardage-haute-savoie",
    slug: "usine-bardage-haute-savoie",
    title: "Unité de Production & Métallurgie de Précision",
    subtitle: "Rénovation & Extension d'Enveloppe Isolante Haute Performance",
    category: "bardage",
    categoryLabel: "Bardage Métallique",
    location: "Annecy, Haute-Savoie",
    department: "74",
    surface: "4 200 m²",
    year: "2024",
    image: "/images/service-bardage.jpg",
    galleryImages: [
      "/images/service-bardage.jpg",
      "/images/about-building.jpg",
      "/images/project-chambery-hub.jpg",
    ],
    clientType: "Bâtiment Industriel de Pointe",
    description:
      "Rénovation complète et extension de façade en bardage métallique nervuré vertical et horizontal. Traitement acoustique intégré pour l'absorption des bruits de machines et respect scrupuleux de l'intégration dans l'écrin paysager alpin.",
    context:
      "Cette unité de décolletage et mécanique de précision nécessitait une rénovation thermique drastique sans arrêt de sa chaîne de production robotisée. La température intérieure devait rester stable à ±1°C pour la précision des machines d'usinage.",
    challenges: [
      "Intervention en site totalement occupé sans aucune interruption des machines d'usinage.",
      "Contraintes acoustiques strictes imposées par la proximité d'une zone résidentielle.",
      "Suppression totale des ponts thermiques existants sur l'ossature béton vétuste.",
    ],
    solutions: [
      "Dépose et repose par tranches journalières étanches avec filets de confinement anti-poussière.",
      "Complexe isolant double peau à âme laine de roche acoustique haute densité.",
      "Teinte Gris Anthracite RAL 7016 mat texturé Qualicoat classe 2 résistant aux UV montagnards.",
    ],
    technicalDetails: [
      { label: "Système Façade", value: "Panneaux sandwichs à âme laine de roche 120 mm" },
      { label: "Performance Acoustique", value: "Affaiblissement Rw+Ctr = 34 dB" },
      { label: "Finition Peinture", value: "Gris Anthracite RAL 7016 mat texturé Qualicoat" },
      { label: "Perméabilité à l'Air", value: "Q4Pa-surf < 0.45 m³/(h·m²)" },
      { label: "Levage", value: "Nacelles grand déport et grues mobiles Building Services" },
    ],
    associatedLots: ["Bardage Métallique", "Isolation Thermique RE2020"],
  },
  {
    id: "toiture-grenoble",
    slug: "toiture-grenoble",
    title: "Complexe de Distribution & Entrepôt Froid",
    subtitle: "Étanchéité Toiture Terrasse & Préparation Intégration Photovoltaïque",
    category: "couverture",
    categoryLabel: "Couverture & Étanchéité",
    location: "Grenoble, Isère",
    department: "38",
    surface: "8 500 m²",
    year: "2024",
    image: "/images/service-couverture.jpg",
    galleryImages: [
      "/images/service-couverture.jpg",
      "/images/project-alpes-logistics.jpg",
      "/images/construction-hero.jpg",
    ],
    clientType: "Logistique & Froid Positif",
    description:
      "Travaux d'étanchéité bitumineuse et pose de complexe isolant polyuréthane haute densité. Préparation structurelle pour l'intégration de centrales photovoltaïques sur bacs acier renforcés sans pénétration de la membrane.",
    context:
      "Un entrepôt logistique de premier plan dédié aux produits frais nécessitant une isolation thermique exceptionnelle pour limiter les consommations énergétiques des groupes froids et une toiture prête pour une centrale solaire de 600 kWc.",
    challenges: [
      "Surface imposante de 8 500 m² à étancher avant la période automnale des fortes pluies iséroises.",
      "Résistance au poinçonnement et charges statiques lourdes pour l'accueil de la centrale solaire.",
      "Sécurité collective absolue pour les équipes travaillant en hauteur.",
    ],
    solutions: [
      "Bacs acier haute résistance 1.00 mm dimensionnés pour supporter les surcharges solaires et climatiques.",
      "Isolation mousse rigide PIR 140 mm certifiée ACERMI posée à joints croisés étanches.",
      "Membrane bitume SBS élastomère sous Enquête Technique Nouvelle (ETN) pour fixations thermosoudées.",
    ],
    technicalDetails: [
      { label: "Support de Toiture", value: "Bacs acier nervurés grande portée 1.00 mm" },
      { label: "Complexe Isolant", value: "Mousse PIR 140 mm certifiée ACERMI" },
      { label: "Membrane d'Étanchéité", value: "Bicouche élastomère soudable sous ETN solaire" },
      { label: "Sécurité Permanente", value: "Lignes de vie inox 316L et garde-corps autoportants" },
      { label: "Contrôle Qualité", value: "Contrôle d'étanchéité par fumigène et mise en eau" },
    ],
    associatedLots: ["Couverture & Étanchéité", "Toitures Solaires Photovoltaïques"],
  },
  {
    id: "charpente-porteuse-vallee",
    slug: "charpente-porteuse-vallee",
    title: "Hangar Aéronautique & Maintenance Lourde",
    subtitle: "Structure Métallique Grande Portée 38m sans Appui & Pont Roulant",
    category: "charpente",
    categoryLabel: "Charpente Métallique",
    location: "Bourget-du-Lac, Savoie",
    department: "73",
    surface: "3 800 m²",
    year: "2023",
    image: "/images/service-charpente.jpg",
    galleryImages: [
      "/images/service-charpente.jpg",
      "/images/construction-hero.jpg",
      "/images/hero-building.jpg",
    ],
    clientType: "Structure Métallique Grande Portée",
    description:
      "Fabrication et montage d'une charpente métallique en profilés PRS haute résistance (S355J2) avec portée libre de 38 mètres sans poteau intermédiaire. Intégration de chemins de roulement pour ponts roulants de 10 tonnes.",
    context:
      "Hangar technique destiné à la maintenance d'aéronefs et équipements lourds nécessitant un espace d'évolution intérieur entièrement dégagé sans aucun pilier central gênant le déplacement des appareils.",
    challenges: [
      "Franchissement de 38 mètres de portée libre sous surcharges de neige alpines exceptionnelles.",
      "Calcul des sollicitations dynamiques et tolérances d'alignement au millimètre pour les chemins de pont roulant.",
      "Levage de fermes de plus de 12 tonnes à l'aide de deux grues mobiles synchronisées.",
    ],
    solutions: [
      "Poutres reconstituées soudées (PRS) à inertie variable en acier de nuance S355J2 certifié CE.",
      "Contreventements rigides en toiture et palées de stabilité triangulées.",
      "Contrôle dimensionnel au théodolite laser avant et après serrage au couple dynamométrique.",
    ],
    technicalDetails: [
      { label: "Nuance d'Acier", value: "Acier normalisé S355 avec traçabilité EXC3" },
      { label: "Portée Libre", value: "38 mètres d'un seul tenant sans appui" },
      { label: "Capacité Pont Roulant", value: "Chemins de roulement pour pont 10 tonnes" },
      { label: "Protection Anticorrosion", value: "Galvanisation et primaire époxy C3" },
      { label: "Boulonnerie", value: "Boulons HR 10.9 précontraints contrôlés" },
    ],
    associatedLots: ["Charpentes Métalliques", "Bardage Métallique"],
  },
  {
    id: "siege-architectural-lyon",
    slug: "siege-architectural-lyon",
    title: "Siège Régional & Espace Showroom Tertiaire",
    subtitle: "Façade Cassettes Aluminium Pliées à Fixation Invisible & Trame Singulière",
    category: "bardage",
    categoryLabel: "Bardage Spécifique",
    location: "Lyon Est, Rhône",
    department: "69",
    surface: "2 900 m²",
    year: "2025",
    image: "/images/service-bardage-specifique.jpg",
    galleryImages: [
      "/images/service-bardage-specifique.jpg",
      "/images/about-building.jpg",
      "/images/project-chambery-hub.jpg",
    ],
    clientType: "Siège Corporatif Haut de Gamme",
    description:
      "Façade géométrique à cassettes d'aluminium thermolaqué avec découpes laser sur mesure. Système de fixations 100% invisibles garantissant un rendu architectural monolithique et épuré.",
    context:
      "Le maître d'ouvrage souhaitait faire de son nouveau siège un bâtiment emblématique visible depuis les grands axes métropolitains lyonnais, avec des trames asymétriques et un jeu d'ombres sophistiqué.",
    challenges: [
      "Calepinage de plus de 450 cassettes aux dimensions non standards avec tolérance de joint de ±1 mm.",
      "Fixations entièrement masquées sans aucune vis apparente en façade.",
      "Intégration d'éclairages LED linéaires étanches encastrés dans les joints creux.",
    ],
    solutions: [
      "Relevé 3D par scanner laser de la structure gros œuvre pour modéliser chaque patte de fixation sur mesure.",
      "Usinage à commande numérique des cassettes aluminium composite 4 mm avec anodisation satinée.",
      "Pose par des compagnons façadiers d'élite avec outillage de précision laser.",
    ],
    technicalDetails: [
      { label: "Matériau Façade", value: "Cassettes aluminium composite 4 mm pré-anodisées" },
      { label: "Système de Fixation", value: "Pattes équerres à rupture de pont thermique Isofix" },
      { label: "Étanchéité à l'Air", value: "Membrane pare-pluie respirante haute résistance UV" },
      { label: "Performance Acoustique", value: "Rw de 48 dB en façade bord d'autoroute" },
      { label: "Validation Technique", value: "Essai AEV validé en laboratoire certifié CSTB" },
    ],
    associatedLots: ["Bardage Spécifique & Façades", "Isolation Thermique RE2020"],
  },
  {
    id: "toiture-solaire-vegetalisee",
    slug: "toiture-solaire-vegetalisee",
    title: "Éco-Hub Industriel & Toiture Biosourcée",
    subtitle: "Synergie Végétale Sedum & Centrale Solaire Photovoltaïque Sans Percement",
    category: "couverture",
    categoryLabel: "Toiture Végétalisée & Solaire",
    location: "Albertville, Savoie",
    department: "73",
    surface: "5 100 m²",
    year: "2024",
    image: "/images/service-vegetalise-solaire.jpg",
    galleryImages: [
      "/images/service-vegetalise-solaire.jpg",
      "/images/service-couverture.jpg",
      "/images/construction-hero.jpg",
    ],
    clientType: "Bâtiment Éco-conçu & Bas Carbone",
    description:
      "Association innovante d'une toiture végétalisée en sedum sur 2 000 m² et d'une centrale photovoltaïque en toiture de 3 100 m². Régulation hygrométrique naturelle et production annuelle d'énergie verte réinjectée dans le réseau.",
    context:
      "Opération pilote conçue pour anticiper les réglementations de la Loi Climat & Résilience en combinant abattement des eaux pluviales en toiture et production d'électricité photovoltaïque en autoconsommation.",
    challenges: [
      "Calcul des charges combinées (poids du substrat gorgé d'eau + panneaux solaires + surcharges de neige).",
      "Éviter absolument toute perforation de l'étanchéité pour la fixation des panneaux solaires.",
      "Sélection d'espèces de sédums adaptées aux hivers rigoureux et étés chauds de la combe de Savoie.",
    ],
    solutions: [
      "Membrane d'étanchéité bitumineuse traitée anti-racines certifiée FLL.",
      "Système de bacs et plots photovoltaïques thermosoudés validés par Enquête Technique Nouvelle (ETN).",
      "Substrat allégé à base de pouzzolane et minéraux avec tapis précultivé 7 variétés régionales.",
    ],
    technicalDetails: [
      { label: "Complexe Végétal", value: "Tapis de sedum précultivé 7 variétés régionales" },
      { label: "Étanchéité Toiture", value: "Membrane anti-racine traitée selon directives FLL" },
      { label: "Puissance Solaire", value: "540 kWc intégrés sur bacs sans percement" },
      { label: "Rétention Eau Pluviale", value: "Capacité de stockage pluvial de 35 L/m²" },
      { label: "Conformité Légale", value: "Conforme Loi Climat & Résilience 2024" },
    ],
    associatedLots: ["Étanchéité Toiture", "Solutions Photovoltaïques"],
  },
];

export function getAllProjects(): ProjectItem[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug || p.id === slug);
}

