export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface MetierStep {
  title: string;
  desc: string;
}

export interface MetierFAQ {
  question: string;
  answer: string;
}

export interface MetierData {
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  shortDesc: string;
  fullDesc: string;
  industrialContext: string;
  solutions: {
    title: string;
    description: string;
    features: string[];
  }[];
  advantages: string[];
  specs: TechnicalSpec[];
  applications: string[];
  norms: string[];
  methodologySteps: MetierStep[];
  faqs: MetierFAQ[];
  preFillFormKey: string;
}

export const METIERS: MetierData[] = [
  {
    slug: "bardage-metallique",
    num: "01",
    title: "Bardage Métallique Industriel & Tertiaire",
    shortTitle: "Bardage Métallique",
    subtitle: "Façades Architecturales & Isolation Haute Performance",
    tagline: "Esthétisme rigoureux, étanchéité à l'air et protection thermique pérenne",
    heroImage: "/images/service-bardage.jpg",
    galleryImages: ["/images/service-bardage.jpg", "/images/about-building.jpg", "/images/project-chambery-hub.jpg"],
    shortDesc:
      "Pose de bardages extérieurs industriels et tertiaires respectant les normes les plus exigeantes. Systèmes simple peau, double peau avec isolant haute densité et panneaux sandwich certifiés.",
    fullDesc:
      "CLADIS CONSTRUCTION réalise la conception, le calepinage et la pose de bardages extérieurs en respectant les normes les plus élevées de qualité et de sécurité (DTU 32.1, DTU 32.2 et règles RAGE). Nos solutions de bardage s'adaptent à tous types de bâtiments industriels, logistiques et tertiaires, offrant à la fois une protection mécanique renforcée, une étanchéité parfaite à l'air et à l'eau, et une signature architecturale résolument contemporaine. Grâce à notre bureau d'études intégré et notre filiale d'approvisionnement direct, nous garantissons une pose au millimètre, résistante aux intempéries alpines et conforme aux exigences thermiques RE2020.",
    industrialContext:
      "L'enveloppe extérieure d'un bâtiment industriel représente son premier rempart thermique et son identité visuelle. En région Auvergne-Rhône-Alpes, les fortes amplitudes thermiques, le gel hivernal et l'exposition au vent imposent des solutions d'ossatures secondaires désolidarisées et des isolants incombustibles à haute densité.",
    solutions: [
      {
        title: "Panneaux Sandwichs Métalliques (PIR & Laine de Roche)",
        description:
          "Complexes monoblocs préfabriqués en usine assurant isolation thermique, phonique et étanchéité en une seule opération de pose.",
        features: [
          "Mousse polyisocyanurate (PIR) à très faible conductivité (λ = 0.022 W/m.K)",
          "Âme en laine de roche incombustible (classement au feu A2-s1,d0)",
          "Emboîtement étanche à fixations cachées ou apparentes avec joints d'étanchéité continus",
          "Rapidité de pose et mise hors d'eau accélérée du bâtiment",
        ],
      },
      {
        title: "Bardage Double Peau avec Rupture Thermique",
        description:
          "Système composé d'un plateau intérieur support, d'un isolant thermo-acoustique traversé par des écarteurs isolants, et d'une peau extérieure ventilée.",
        features: [
          "Absence totale de ponts thermiques grâce aux rupteurs d'isolation ISO-RUPT",
          "Affaiblissement acoustique supérieur pour les usines bruyantes ou le tertiaire (Rw jusqu'à 54 dB)",
          "Large choix de profils extérieurs : trapézoïdaux, sinusoïdaux, cassettes planes pliées",
          "Régulation hygrothermique optimale et façade ventilée",
        ],
      },
      {
        title: "Bardage Simple Peau & Auvents Industriels",
        description:
          "Tôles nervurées en acier galvanisé prélaqué ou aluminium pour bâtiments non chauffés, hangars de stockage ou auvents de quais.",
        features: [
          "Solution ultra-économique pour zones de stockage et préaux",
          "Traitement anticorrosion renforcé (revêtements 25µm à 50µm polyester, PVDF ou polyuréthane)",
          "Résistance élevée aux chocs mécaniques et aux sollicitations dynamiques de vent",
        ],
      },
    ],
    advantages: [
      "Étanchéité parfaite à l'air et à l'eau testée selon les règles professionnelles",
      "Rupture totale des ponts thermiques pour atteindre les exigences RE2020",
      "Liberté architecturale complète : cassettes, perforations, couleurs RAL personnalisées",
      "Résistance prouvée aux environnements industriels sévères et climats de montagne",
      "Couverture par garantie décennale et contrôle systématique des interfaces",
    ],
    specs: [
      { label: "Matériaux", value: "Acier galvanisé S280/S320 prélaqué, aluminium thermo-laqué, zinc" },
      { label: "Épaisseurs isolant", value: "De 80 mm à 240 mm (laine de roche minérale / PIR haute densité)" },
      { label: "Performance thermique", value: "Résistance thermique R jusqu'à 8.5 m²·K/W" },
      { label: "Réaction au feu", value: "Classement A2-s1,d0 / Incombustible / Broof (t3)" },
      { label: "Perméabilité à l'air", value: "Q4Pa-surf conforme aux labels BEPOS / Effinergie" },
      { label: "Protection anticorrosion", value: "Classe de corrosivité C3, C4 et C5-I (chimie/industrie)" },
    ],
    applications: [
      "Bâtiments industriels, usines de production & ateliers de fabrication",
      "Entrepôts logistiques, hubs de distribution & messageries",
      "Bâtiments tertiaires, sièges sociaux & immeubles d'entreprises",
      "Concessions automobiles, show-rooms & parcs d'activités commerciales",
    ],
    norms: [
      "DTU 32.1 & 32.2 (Ossatures métalliques et bardages)",
      "Règles professionnelles pour le bardage métallique",
      "Réglementation Environnementale RE2020",
      "Eurocodes 1 & 3 (Calcul des charges de vent et neige)",
    ],
    methodologySteps: [
      {
        title: "01. Étude & Calepinage 3D",
        desc: "Analyse des plans architecte, calepinage précis des trames de panneaux et gestion des angles et ouvertures.",
      },
      {
        title: "02. Fixation des Ossatures Secondaires",
        desc: "Pose des lisses de bardage et équerres avec cales thermiques pour rupture complète des ponts froids.",
      },
      {
        title: "03. Pose de l'Isolation & Étanchéité",
        desc: "Mise en place de l'isolant haute densité, des pare-vapeur et bandes d'étanchéité sous profil.",
      },
      {
        title: "04. Montage des Peaux de Bardage & Finitions",
        desc: "Pose millimétrée des panneaux ou cassettes avec bavettes de rejet d'eau, coiffes d'acrotères et profils d'angles.",
      },
    ],
    faqs: [
      {
        question: "Quel système privilégier entre panneau sandwich et double peau ?",
        answer:
          "Le panneau sandwich offre une mise en œuvre très rapide et un excellent rapport coût/performance thermique. Le système double peau est préconisé lorsque des exigences acoustiques élevées (usines bruyantes, tertiaire) ou une liberté architecturale spécifique (cassettes sur mesure, fixations invisibles) sont requises.",
      },
      {
        question: "Comment garantissez-vous l'étanchéité à l'air RE2020 ?",
        answer:
          "Nous appliquons des cordons de mastic butyle continus sur toutes les jonctions d'emboîtement, calfeutrons les liaisons avec le gros œuvre par des membranes EPDM et validons l'ouvrage lors des essais d'infiltrométrie (blower door test).",
      },
    ],
    preFillFormKey: "bardage",
  },
  {
    slug: "couverture-etancheite",
    num: "02",
    title: "Couverture Industrielle & Étanchéité Toiture Terrasse",
    shortTitle: "Couverture & Étanchéité",
    subtitle: "Systèmes de Toitures Industrielles Métalliques & Synthétiques",
    tagline: "Protection absolue contre les intempéries alpines et durabilité garantie",
    heroImage: "/images/service-couverture.jpg",
    galleryImages: ["/images/service-couverture.jpg", "/images/project-alpes-logistics.jpg", "/images/construction-hero.jpg"],
    shortDesc:
      "Travaux d'étanchéité bitumineuse multicouche élastomère, membranes synthétiques PVC/TPO, bacs acier isolés pour toitures terrasses inaccessibles ou techniques.",
    fullDesc:
      "CLADIS CONSTRUCTION accompagne les maîtres d'ouvrage et constructeurs dans la réalisation de toitures industrielles hautement fiables. En neuf comme en réhabilitation lourde, nos solutions garantissent une imperméabilité totale, une isolation thermique continue et une résistance exemplaire aux surcharges climatiques (neige et vent en Savoie et région Rhône-Alpes). Nos compagnons étancheurs maîtrisent la soudure des membranes synthétiques PVC/FPO, la pose des bicouches bitumineux élastomères et le traitement minutieux de tous les points singuliers (acrotères, pénétrations de sheds, lanterneaux et émergences techniques).",
    industrialContext:
      "La toiture est le composant le plus exposé d'un bâtiment industriel. Elle subit directement le rayonnement UV, les chocs thermiques extrêmes et le poids des accumulations neigeuses. Une défaillance d'étanchéité entraîne des arrêts de production critiques, c'est pourquoi nous privilégions des complexes certifiés sous avis technique CSTB avec contrôle systématique.",
    solutions: [
      {
        title: "Étanchéité Toitures Terrasses en Bacs Acier (BAP)",
        description:
          "Support bac acier nervuré, pare-vapeur renforcé, isolant thermique haute résistance à la compression et membrane d'étanchéité.",
        features: [
          "Bacs acier de forte épaisseur calculés selon les portées de pannes",
          "Isolants polyisocyanurate (PIR) ou laine de roche soudable",
          "Membranes bicouches élastomères SBS ou monocouche FPO/TPO thermosoudée",
          "Résistance au poinçonnement et classe de trafic technique",
        ],
      },
      {
        title: "Couverture Métallique Sèche & Panneaux Isolés",
        description:
          "Bacs profilés en acier galvanisé ou panneaux sandwichs de toiture avec joint mousse et feutre régulateur de condensation.",
        features: [
          "Pose sur charpente métallique ou béton avec pentes adaptées",
          "Sous-face traitée anti-condensation pour locaux non isolés",
          "Fixations sommet d'onde avec cavaliers et rondelles néoprène vulcanisées",
          "Longueurs de bacs continues jusqu'à plus de 20 mètres pour supprimer les recouvrements transversaux",
        ],
      },
      {
        title: "Éléments de Sécurité & Éclairage Zénithal",
        description:
          "Intégration d'exutoires de fumées DENFC conformes au désenfumage ERP/ERT et lignes de vie permanentes.",
        features: [
          "Lanterneaux d'éclairage naturel avec dômes polycarbonate triple paroi anti-UV",
          "Exutoires de fumées pneumatiques ou électriques avec grilles anti-chute 1200 Joules",
          "Lignes de vie et garde-corps autoportants pour la sécurité des interventions de maintenance",
        ],
      },
    ],
    advantages: [
      "Systèmes bicouche élastomère SBS haute adhérence ou membranes synthétiques thermosoudées",
      "Dimensionnement pour charges de neige extrêmes en zone montagne (Eurocodes 1)",
      "Intégration complète de la sécurité en toiture (garde-corps, lignes de vie, DENFC)",
      "Contrôle d'étanchéité par fumigène ou mise en eau avant réception de chantier",
      "Garantie décennale validée par les bureaux de contrôle (Socotec, Veritas, Apave)",
    ],
    specs: [
      { label: "Types d'étanchéité", value: "Bitume modifié SBS bicouche, PVC armé, membrane FPO/TPO" },
      { label: "Isolants associés", value: "PIR (polyisocyanurate), Laine de roche haute densité double densité" },
      { label: "Pentes admissibles", value: "De 1% à plus de 15% (toitures plates à fortes pentes)" },
      { label: "Résistance au feu", value: "Broof (t3) exigé pour conformité ICPE et ERP" },
      { label: "Résistance au poinçonnement", value: "Classe I5 (haute résistance aux charges ponctuelles)" },
      { label: "Garantie", value: "Garantie décennale avec attestation nominative" },
    ],
    applications: [
      "Bâtiments logistiques & grandes surfaces commerciales",
      "Usines de fabrication & ateliers de maintenance",
      "Réfection de toitures anciennes sans interruption d'activité",
      "Bâtiments classés ICPE soumis à contraintes feu strictes",
    ],
    norms: [
      "DTU 43.3 (Toitures en tôles d'acier nervurées)",
      "DTU 43.1 (Étanchéité des toitures terrasses)",
      "DTU 40.35 (Couverture en plaques nervurées en acier)",
      "Cahiers des Prescriptions Techniques CSTB",
    ],
    methodologySteps: [
      {
        title: "01. Vérification du Support Charpente",
        desc: "Contrôle des entraxes de pannes, flèches admissibles et alignement structurel.",
      },
      {
        title: "02. Pose du Bac Acier & Pare-Vapeur",
        desc: "Fixation des bacs acier, traitement acoustique si nécessaire, et soudure du pare-vapeur continu.",
      },
      {
        title: "03. Calepinage de l'Isolant Thermique",
        desc: "Fixation mécanique des panneaux isolants avec joints décalés pour éliminer tout pont thermique.",
      },
      {
        title: "04. Soudure de l'Étanchéité & Relevés",
        desc: "Thermosoudure automatisée des lés de membrane et relevés d'étanchéité d'acrotère armés.",
      },
    ],
    faqs: [
      {
        question: "Quelle est la durée de vie moyenne d'une étanchéité de toiture terrasse ?",
        answer:
          "Les complexes d'étanchéité actuels (bitume SBS de qualité supérieure ou membrane FPO) ont une durée de vie moyenne de 25 à 30 ans avec un contrat d'entretien régulier des noues et descentes pluviales.",
      },
      {
        question: "Pouvez-vous rénover une toiture sans arrêter l'exploitation de l'usine ?",
        answer:
          "Oui, nous intervenons couramment en site occupé grâce à des protocoles de phasage par tranche étanche journalière, sécurisant totalement les outils de production et les stocks situés en dessous.",
      },
    ],
    preFillFormKey: "couverture",
  },
  {
    slug: "charpente-metallique",
    num: "03",
    title: "Charpentes & Structures Métalliques",
    shortTitle: "Charpentes Métalliques",
    subtitle: "Conception, Calculs Structurels & Levage Haute Précision",
    tagline: "Robustesse millimétrée, grandes portées libres et conformité Eurocodes 3",
    heroImage: "/images/service-charpente.jpg",
    galleryImages: ["/images/service-charpente.jpg", "/images/construction-hero.jpg", "/images/hero-building.jpg"],
    shortDesc:
      "Pose de structures métalliques mécano-soudées, ossatures primaires et secondaires, portiques haute portée conçus pour les grandes charges d'exploitation et ponts roulants.",
    fullDesc:
      "CLADIS CONSTRUCTION assure le pilotage, les études d'exécution et le levage de charpentes métalliques pour les ouvrages industriels les plus exigeants. En collaboration avec notre bureau d'études et nos partenaires fabricants certifiés EN 1090, nous modélisons chaque profilé, gousset et assemblage boulonné haute résistance (HR). Que ce soit pour des bâtiments à grande portée libre sans poteaux intermédiaires, des auvents de logistique ou des structures intégrant des chemins de roulement pour ponts roulants, nous garantissons une robustesse sans compromis.",
    industrialContext:
      "La charpente métallique constitue le squelette porteur de l'édifice. Les calculs aux états limites ultimes (ELU) et états limites de service (ELS) intègrent les sollicitations climatiques spécifiques des Alpes (charges de neige accidentelle, zones sismiques 3 et 4). Une coordination millimétrée avec le gros œuvre et les fondations béton est indispensable pour un assemblage parfait.",
    solutions: [
      {
        title: "Portiques Industriels & Poutres Treillis Haute Portée",
        description:
          "Structures franchissant de 15 à plus de 45 mètres de portée libre, maximisant le volume intérieur utile pour les process et stockages.",
        features: [
          "Profilés IPE, HEA, HEB en acier S275JR ou S355J2 certifié CE",
          "Poutres treillis allégées pour les très grandes portées de toiture",
          "Assemblages par boulons HR précontraints avec clés dynamométriques étalonnées",
        ],
      },
      {
        title: "Structures Porteuses de Ponts Roulants & Mezzanines",
        description:
          "Calcul et montage des chemins de roulement, corbeaux et plateformes de stockage lourdes pour les ateliers industriels.",
        features: [
          "Calculs dynamiques de fatigue selon Eurocodes 3 partie 6",
          "Tolérances d'alignement de rails au millimètre pour éviter l'usure prématurée des galets",
          "Mezzanines à planchers collaborants ou caillebotis pour charges jusqu'à 1500 kg/m²",
        ],
      },
      {
        title: "Ossatures Secondaires & Chevêtres d'Enveloppe",
        description:
          "Pannes de toiture zinguées à froid (profils Z, C, Sigma) et lisses de bardage pour support direct des peaux extérieures.",
        features: [
          "Optimisation du poids de l'ossature grâce aux aciers haute limite élastique",
          "Systèmes d'échantignoles et contreventements rigides en croix de Saint-André",
          "Création de chevêtres de désenfumage, baies vitrées et portes sectionnelles",
        ],
      },
    ],
    advantages: [
      "Calculs aux états limites (ELU / ELS) conformes aux Eurocodes 3 et règles parasismiques",
      "Assemblages pré-usinés en usine certifiée garantissant une vitesse d'érection maximale",
      "Tonnage d'acier optimisé pour conjuguer compétitivité budgétaire et résistance absolue",
      "Coordination directe avec les équipes de génie civil et les lots techniques",
      "Traçabilité complète des aciers et contrôles non-destructifs des soudures critiques",
    ],
    specs: [
      { label: "Nuances d'acier", value: "Acier de construction S275JR, S355J2 selon EN 10025-2" },
      { label: "Protection anticorrosion", value: "Galvanisation à chaud ISO 1461 ou peinture primaire + finition C3/C4" },
      { label: "Portées réalisables", value: "De 12 m à plus de 45 m sans appui intermédiaire" },
      { label: "Classe d'exécution", value: "EXC2 et EXC3 selon norme européenne NF EN 1090-2" },
      { label: "Boulonnerie", value: "Boulons classe 8.8 et 10.9 HR précontraints" },
      { label: "Calculs parasismiques", value: "Conformes Eurocodes 8 (Zones de sismicité 1 à 4)" },
    ],
    applications: [
      "Bâtiments de stockage grande hauteur & messageries logistiques",
      "Ateliers de fabrication mécanique & usines de transformation",
      "Auvents de chargement poids-lourds & quais industriels",
      "Bâtiments agricoles et concessions de machines industrielles",
    ],
    norms: [
      "NF EN 1090-1 & EN 1090-2 (Exécution des structures en acier)",
      "Eurocodes 3 (Calcul des structures en acier - NF EN 1993)",
      "Eurocodes 1 (Actions de la neige et du vent)",
      "Eurocodes 8 (Conception des structures pour leur résistance aux séismes)",
    ],
    methodologySteps: [
      {
        title: "01. Note de Calculs & Modélisation 3D Tekla",
        desc: "Dimensionnement des sections sous sollicitations climatiques et modélisation BIM 3D des nœuds.",
      },
      {
        title: "02. Implantation & Scellement des Tiges d'Ancrage",
        desc: "Contrôle topographique au théodolite laser des axes et altimétries des massifs béton.",
      },
      {
        title: "03. Levage & Montage des Poteaux / Fermes",
        desc: "Grutage par équipes de monteurs certifiés, haubanage provisoire et serrage des boulons d'assemblage.",
      },
      {
        title: "04. Pose des Pannes, Lisses & Contreventements",
        desc: "Stabilisation définitive de l'ossature prête à recevoir la couverture et le bardage.",
      },
    ],
    faqs: [
      {
        question: "Quel délai faut-il prévoir pour la fabrication et le levage d'une charpente métallique ?",
        answer:
          "Pour un bâtiment industriel standard de 1 500 à 3 000 m², le délai moyen d'études d'exécution et de fabrication usine est de 4 à 6 semaines, suivi d'un montage sur site de 2 à 3 semaines.",
      },
      {
        question: "Quelle protection anticorrosion choisir pour un site industriel ?",
        answer:
          "En milieu standard intérieur, une peinture primaire antirouille suffit. Pour les structures exposées aux intempéries ou ambiances humides, la galvanisation à chaud au trempé garantit plus de 50 ans de protection sans entretien.",
      },
    ],
    preFillFormKey: "charpente",
  },
  {
    slug: "bardage-specifique",
    num: "04",
    title: "Bardage Spécifique & Façades Singulières",
    shortTitle: "Bardage Spécifique",
    subtitle: "Trames Sur Mesure, Cassettes Architecturales & Façades Complexes",
    tagline: "Réalisation d'enveloppes singulières à forte identité architecturale",
    heroImage: "/images/service-bardage-specifique.jpg",
    galleryImages: ["/images/service-bardage-specifique.jpg", "/images/about-building.jpg", "/images/project-chambery-hub.jpg"],
    shortDesc:
      "Conception et mise en œuvre de façades à géométrie singulière, cassettes perforées, brise-soleil intégrés, bardage vertical à joint debout et habillages spécifiques.",
    fullDesc:
      "CLADIS CONSTRUCTION conçoit et met en œuvre des solutions de bardage spécifique adaptées aux exigences architecturales, acoustiques et fonctionnelles les plus pointues. Qu'il s'agisse de façades complexes aux géométries non répétitives, de cassettes d'aluminium pliées sur mesure avec fixations invisibles, de brise-soleil horizontaux ou verticaux, ou de parements perforés rétroéclairés, nous accompagnons les architectes et maîtres d'ouvrage pour matérialiser leurs ambitions esthétiques sans jamais compromettre la pérennité technique.",
    industrialContext:
      "Les sièges sociaux, bâtiments tertiaires vitrines et équipements publics recherchent une identité forte qui se démarque des bâtiments industriels standards. Le travail des façades singulières exige une précision horlogère dans le calepinage 3D, la gestion des dilatations thermiques et l'alignement des joints creux.",
    solutions: [
      {
        title: "Cassettes Aluminium & Panneaux Composites (Alucobond)",
        description:
          "Panneaux pliés sur 4 côtés avec fixations totalement masquées, créant des surfaces parfaitement planes et des lignes épurées.",
        features: [
          "Aluminium thermolaqué Qualicoat ou anodisé Qualanod",
          "Composites à âme minérale ignifugée A2",
          "Gestion des joints creux réguliers de 10 à 20 mm avec fonds de joint noirs",
          "Possibilité de trames triangulées ou trapézoïdales",
        ],
      },
      {
        title: "Bardages Perforés & Claustras Métalliques Rétroéclairés",
        description:
          "Tôles ajourées selon des motifs personnalisés permettant de filtrer la lumière solaire tout en créant une signature nocturne spectaculaire.",
        features: [
          "Perforation sur mesure par découpe laser ou poinçonnage CNC",
          "Rôle de brise-soleil thermique passif réduisant la surchauffe estivale",
          "Intégration de rubans LED étanches dissimulés dans les ossatures",
        ],
      },
      {
        title: "Habillage Joint Debout & Façades Zinc / Acier Prélaqué",
        description:
          "Mise en œuvre traditionnelle revisitée pour une esthétique minérale haut de gamme en façade et toiture continue.",
        features: [
          "Lignes de sertissage debout verticales ou horizontales très graphiques",
          "Excellente durabilité et zéro entretien",
          "Idéal pour liaisons façade-toiture sans rupture d'acrotère",
        ],
      },
    ],
    advantages: [
      "Fixations invisibles et lignes de fuite épurées sans vis apparentes",
      "Accompagnement personnalisé des architectes dès la phase d'avant-projet (APD)",
      "Gestion millimétrée des angles, linteaux, embrasures de baies et coiffes",
      "Traitements de surface haute durabilité (Qualicoat classe 2, thermo-laquage texturé)",
      "Affaiblissement acoustique renforcé pour environnements urbains ou bruyants",
    ],
    specs: [
      { label: "Typologies", value: "Cassettes aluminium pliées, panneaux composites Alucobond, zinc joint debout" },
      { label: "Perforations", value: "Motifs personnalisés, perforations acoustiques et claustras décoratifs" },
      { label: "Fixations", value: "Systèmes brevetés clipsables ou rivets teintés affleurants" },
      { label: "Performance acoustique", value: "Affaiblissement Rw jusqu'à 52 dB selon complexe" },
      { label: "Planéité", value: "Tolérance de flèche sous charge de vent < 1/200" },
      { label: "Garantie peinture", value: "Jusqu'à 25 ans selon classement d'ambiance et teinte" },
    ],
    applications: [
      "Sièges sociaux & immeubles de bureaux tertiaires",
      "Équipements publics, musées & gares",
      "Façades d'usines vitrines et halls d'accueil de prestige",
      "Surélévations et réhabilitations urbaines à forte contrainte PLU",
    ],
    norms: [
      "Avis Techniques CSTB des systèmes de bardage rapporté",
      "Cahiers du CSTB 3747 (Bardages ventilés sur ossature)",
      "Règles professionnelles pour les façades métalliques",
    ],
    methodologySteps: [
      {
        title: "01. Prototypage & Échantillonnage de Teintes",
        desc: "Validation conjointe avec l'architecte des nuances de couleur, textures et finitions sous lumière réelle.",
      },
      {
        title: "02. Relevé 3D Scanner Laser du Bâtiment",
        desc: "Acquisition du nuage de points pour caler la trame au millimètre sur le gros œuvre existant.",
      },
      {
        title: "03. Usinage de Précision des Cassettes",
        desc: "Découpe numérique, poinçonnage et pliage robotisé en atelier certifié ISO 9001.",
      },
      {
        title: "04. Montage par Compagnons Façadiers Spécialisés",
        desc: "Pose soignée sur ossatures réglables avec contrôle au niveau laser de la planéité des joints.",
      },
    ],
    faqs: [
      {
        question: "Les cassettes en aluminium résistent-elles aux chocs de niveau rez-de-chaussée ?",
        answer:
          "Oui, nous adaptons les épaisseurs d'aluminium (2 à 3 mm) ou prévoyons des panneaux composites à âme rigide conformes au classement de résistance aux chocs Q4 pour les zones accessibles au public.",
      },
    ],
    preFillFormKey: "bardage",
  },
  {
    slug: "isolation-thermique",
    num: "05",
    title: "Isolation Thermique Industrielle & RE2020",
    shortTitle: "Isolation Thermique",
    subtitle: "Performance Énergétique, Économies d'Énergie & Confort Global",
    tagline: "Limitation radicale des déperditions, rupture des ponts thermiques et confort thermique 4 saisons",
    heroImage: "/images/service-isolation.jpg",
    galleryImages: ["/images/service-isolation.jpg", "/images/about-building.jpg", "/images/service-couverture.jpg"],
    shortDesc:
      "Complexes isolants haute densité, rupteurs de ponts thermiques, isolation continue des enveloppes industrielles pour atteindre les seuils énergétiques les plus stricts.",
    fullDesc:
      "CLADIS CONSTRUCTION intègre l'isolation thermique au cœur de chaque composant de l'enveloppe du bâtiment. Face à la hausse continue des coûts de l'énergie et aux exigences de la réglementation environnementale RE2020, nous concevons des barrières thermiques ininterrompues pour les façades, toitures terrasses et jonctions sensibles. En associant laines minérales haute densité, mousses polyuréthane rigides (PIR) et rupteurs thermiques de dernière génération, nos solutions suppriment les condensations, abaissent la facture de chauffage/climatisation et améliorent radicalement le bilan carbone de votre bâtiment.",
    industrialContext:
      "Dans un entrepôt de 5 000 m² ou une usine de production, les déperditions de toiture et de façade peuvent représenter jusqu'à 60 % de la facture énergétique globale. L'isolation thermique d'aujourd'hui ne concerne plus seulement le froid hivernal, mais également le confort d'été (inertie et déphasage thermique pour limiter les températures excessives dans les ateliers).",
    solutions: [
      {
        title: "Isolation Continue de Toitures Terrasses",
        description:
          "Panneaux rigides en PIR ou laine de roche posés en couches croisées pour une isolation sans aucun pont thermique linéaire.",
        features: [
          "Conductivité thermique exceptionnelle de la mousse PIR (λ = 0.022 W/m.K)",
          "Résistance à la compression adaptée à la maintenance et au support de centrales solaires",
          "Incombustibilité des solutions laine de roche certifiées Broof(t3)",
        ],
      },
      {
        title: "Rupteurs de Ponts Thermiques d'Ossatures Façades",
        description:
          "Écarteurs isolants en matériaux composites insérés entre la structure porteuse et les profils de finition.",
        features: [
          "Élimination des ponts thermiques ponctuels au niveau des équerres de bardage",
          "Préservation de la température superficielle intérieure pour éviter toute condensation",
          "Conformité avec les calculs thermiques dynamiques Th-BCE",
        ],
      },
      {
        title: "Entrepôts Frigorifiques & Températures Dirigées",
        description:
          "Panneaux isothermes grande épaisseur pour chambres froides positives ou négatives avec étanchéité vapeur absolue.",
        features: [
          "Épaisseurs de 120 mm à 220 mm pour conservation à -25°C",
          "Emboîtements à double labyrinthe avec joints silicone alimentaires",
          "Traitement spécifique des seuils et ruptures de sol pour éviter le gel sous dallage",
        ],
      },
    ],
    advantages: [
      "Continuité parfaite de l'enveloppe isolante sans fuite thermique",
      "Réduction drastique des consommations de chauffage et de climatisation",
      "Sécurité incendie optimale avec isolants certifiés incombustibles A2-s1,d0",
      "Éligibilité aux dispositifs de Certificats d'Économies d'Énergie (CEE) en rénovation",
      "Valorisation dans les certifications environnementales BREEAM, LEED et HQE",
    ],
    specs: [
      { label: "Matériaux isolants", value: "Laine de roche haute densité, mousse rigide polyisocyanurate (PIR)" },
      { label: "Conductivité thermique", value: "Lambda λ de 0.022 à 0.035 W/(m·K)" },
      { label: "Perméabilité à l'air", value: "Mesure Q4Pa-surf < 0.6 m³/(h·m²)" },
      { label: "Résistance au feu", value: "A1, A2-s1,d0 et panneaux coupe-feu EI30 / EI60" },
      { label: "Attestation", value: "Certifications ACERMI obligatoires sur tous les isolants" },
      { label: "Gain énergétique moyen", value: "De 25% à 45% d'économie sur la facture énergétique" },
    ],
    applications: [
      "Bâtiments tertiaires basse consommation (Passivhaus / BEPOS)",
      "Entrepôts frigorifiques & plateformes agroalimentaires",
      "Usines de fabrication de haute technologie nécessitant hygrométrie contrôlée",
      "Rénovation thermique globale d'enveloppes industrielles vétustes",
    ],
    norms: [
      "Réglementation Environnementale RE2020",
      "Règles de calcul Th-Bat et Th-U du CSTB",
      "Certifications thermiques ACERMI",
      "Règlementations ERP contre les risques d'incendie",
    ],
    methodologySteps: [
      {
        title: "01. Audit Thermique & Calculs de Déperdition",
        desc: "Simulation thermique de l'enveloppe pour déterminer l'épaisseur optimale d'isolant et le retour sur investissement.",
      },
      {
        title: "02. Traitement Rigoureux du Pare-Vapeur",
        desc: "Mise en œuvre du pare-vapeur avec pontage étanche pour stopper toute migration d'humidité vers l'isolant.",
      },
      {
        title: "03. Calage et Fixation Mécanique des Panneaux",
        desc: "Pose à joints décalés avec vis thermiquement isolées limitant la conductivité de la fixation.",
      },
      {
        title: "04. Contrôle par Thermographie Infrarouge",
        desc: "Inspection caméra thermique post-réalisation pour valider l'absence de pont thermique résiduel.",
      },
    ],
    faqs: [
      {
        question: "La réglementation RE2020 s'applique-t-elle à tous les bâtiments industriels ?",
        answer:
          "La RE2020 s'applique aux bureaux et bâtiments tertiaires. Pour les locaux d'activités et de stockage industriels, la réglementation thermique RT2012 s'applique encore avec des exigences renforcées sur les seuils d'isolation de toiture et de façade.",
      },
    ],
    preFillFormKey: "bardage",
  },
  {
    slug: "toiture-vegetalisee-solaire",
    num: "06",
    title: "Toitures Végétalisées & Intégration Solaire Photovoltaïque",
    shortTitle: "Étanchéité Végétalisée & Solaire",
    subtitle: "Synergie Écologique, Biodiversité & Production d'Énergie Verte",
    tagline: "Transformer vos toitures en centrales de production d'énergie et réservoirs de fraîcheur",
    heroImage: "/images/service-vegetalise-solaire.jpg",
    galleryImages: ["/images/service-vegetalise-solaire.jpg", "/images/service-couverture.jpg", "/images/construction-hero.jpg"],
    shortDesc:
      "Complexes d'étanchéité anti-racines pour toitures végétalisées et supports d'intégration solaire photovoltaïque sans percement d'étanchéité.",
    fullDesc:
      "CLADIS CONSTRUCTION met en œuvre des toitures industrielles de nouvelle génération qui concilient performance environnementale, conformité à la Loi Climat & Résilience et rentabilité économique. Nos équipes certifiées installent des systèmes d'étanchéité traités anti-racines pour accueillir des toitures végétalisées légères (sédums) régulatrices des eaux pluviales, ainsi que des systèmes de fixation solaire thermosoudés ou lestés sans aucune perforation de la membrane d'étanchéité. Nous assurons la pérennité mécanique de votre toiture tout en transformant vos surfaces passives en gisements d'énergie renouvelable.",
    industrialContext:
      "En application de l'article L. 111-18-1 du Code de l'urbanisme et de la loi Climat et Résilience, les nouveaux bâtiments à usage commercial, industriel ou logistique de plus de 500 m² ont l'obligation d'intégrer sur 30% puis 50% de leur toiture soit un procédé de production d'énergies renouvelables (solaire photovoltaïque), soit un système de végétalisation. Nous vous apportons la solution clé en main conforme.",
    solutions: [
      {
        title: "Intégration Solaire Photovoltaïque Sans Percement",
        description:
          "Pose de plots ou rails thermosoudés directement sur la membrane d'étanchéité FPO ou bitume, éliminant tout risque de fuite.",
        features: [
          "Systèmes sous Enquête Technique Nouvelle (ETN) validée par les bureaux de contrôle",
          "Orientation optimisée Est-Ouest ou Sud pour autoconsommation industrielle",
          "Aucune perforation mécanique de la toiture : étanchéité garantie à 100%",
          "Poids ultra-léger compatible avec la capacité portante des bacs acier standards",
        ],
      },
      {
        title: "Toitures Végétalisées Extensives en Sédums",
        description:
          "Complexe végétal à faible charge composé d'une couche drainante, d'un filtre imputrescible et d'un tapis de sedum pré-cultivé.",
        features: [
          "Rétention et régulation du débit de fuite des eaux d'orage (abattement pluvial jusqu'à 70%)",
          "Protection de la membrane d'étanchéité contre les chocs thermiques et les UV, doublant sa longévité",
          "Amélioration de l'isolation acoustique et abaissement de la température estivale en toiture",
          "Entretien minimal (1 à 2 passages annuels de désherbage doux)",
        ],
      },
      {
        title: "Systèmes Biosolaires Mixtes (Végétal + Panneaux Solaires)",
        description:
          "Combinaison astucieuse où l'évapotranspiration des plantes refroidit les modules photovoltaïques, améliorant leur rendement électrique de 5 à 10%.",
        features: [
          "Fixation des panneaux solaires lestés par le substrat de végétalisation lui-même",
          "Synergie complète entre biodiversité urbaine et production énergétique maximale",
        ],
      },
    ],
    advantages: [
      "Système de fixation photovoltaïque sans perforation d'étanchéité certifié par ETN",
      "Mise en conformité immédiate avec la Loi Climat & Résilience",
      "Protection mécanique de la membrane d'étanchéité doublant sa durée de vie",
      "Contribution directe aux démarches RSE, décarbonation et labels environnementaux (BREEAM, LEED)",
      "Production d'électricité verte pour autoconsommation et réduction des factures",
    ],
    specs: [
      { label: "Végétalisation", value: "Sedum extensif léger (poids 60 à 85 kg/m² saturé en eau)" },
      { label: "Intégration solaire", value: "Supports thermosoudés ou lestés certifiés ETN" },
      { label: "Membranes requises", value: "Membrane traitée anti-racine certifiée FLL" },
      { label: "Puissance crête", value: "Jusqu'à 180 à 220 Wc/m² de surface de toiture utile" },
      { label: "Rétention d'eau", value: "Coefficient de rétention pluviale de 50% à 75%" },
      { label: "Garantie", value: "Garantie décennale toiture + Garantie produit fabricant panneaux 25 ans" },
    ],
    applications: [
      "Bâtiments industriels neufs assujettis à l'obligation solaire (Loi Climat)",
      "Plateformes logistiques et entrepôts à forte toiture plane",
      "Parcs d'activités tertiaires et éco-quartiers durables",
      "Sites industriels visant l'autoconsommation électrique pour leurs machines",
    ],
    norms: [
      "Règles professionnelles pour toitures végétalisées (CSFE)",
      "Guides CSTB pour toitures photovoltaïques",
      "Enquêtes Techniques Nouvelles (ETN) certifiées par bureaux de contrôle",
      "Normes électriques NF C 15-100 et guides UTE C 15-712-1",
    ],
    methodologySteps: [
      {
        title: "01. Étude Structurelle de Surcharge Toiture",
        desc: "Vérification par notre bureau d'études de la capacité portante de la charpente face au poids du système solaire ou végétal.",
      },
      {
        title: "02. Pose de la Membrane Anti-Racine",
        desc: "Application d'une membrane d'étanchéité haute résistance traitée anti-racines soudée en continu.",
      },
      {
        title: "03. Installation des Fixations Solaires / Drainage Végétal",
        desc: "Thermosoudure des rails de fixation ou pose de la nappe drainante filtrante.",
      },
      {
        title: "04. Pose des Modules Solaires & Végétaux",
        desc: "Montage des panneaux et raccordement, ou épandage du substrat et déroulage des tapis de sedums vivants.",
      },
    ],
    faqs: [
      {
        question: "Les panneaux solaires risquent-ils de percer la toiture et de créer des infiltrations ?",
        answer:
          "Absolument pas. Nous utilisons exclusivement des procédés sous Enquête Technique Nouvelle (ETN) où les rails sont thermosoudés sur la membrane ou maintenus par lestage, sans aucune perforation traversante.",
      },
      {
        question: "Une toiture végétalisée demande-t-elle beaucoup d'arrosage ?",
        answer:
          "Non. La végétalisation extensive en sédums est composée de plantes grasses montagnardes ultra-résistantes à la sécheresse. Après la phase d'enracinement initiale, aucun arrosage régulier n'est nécessaire sous notre climat alpin.",
      },
    ],
    preFillFormKey: "couverture",
  },
];

export function getAllMetiers(): MetierData[] {
  return METIERS;
}

export function getMetierBySlug(slug: string): MetierData | undefined {
  return METIERS.find((m) => m.slug === slug);
}

