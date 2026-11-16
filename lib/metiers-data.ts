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
    imageAlt: string;
    normHeading: string;
    seoTitle: string;
    seoDescription: string;
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
        "slug": "bardage-metallique",
        "num": "01",
        "title": "Bardage métallique et façades architecturales",
        "shortTitle": "Bardage métallique et façades architecturales",
        "subtitle": "Étude et réalisation",
        "tagline": "",
        "heroImage": "/images/metier-bardage-metallique-b151c959.webp",
        "imageAlt": "Façade en bardage métallique nervuré",
        "galleryImages": [],
        "shortDesc": "Bardage acier simple peau ou double peau isolé, panneaux sandwich, cassettes métalliques, panneaux aluminium composite, bardage bois et façades en panneaux HPL. Notre bureau d’études prépare le calepinage et les détails avant la pose des parements et des finitions.",
        "fullDesc": "CLADIS Construction conçoit et pose des bardages métalliques et des façades architecturales en neuf, en réhabilitation et en extension. De l’étude à la réception, nous réalisons les métrés, les plans d’exécution, le calepinage des façades et les détails de fixation et de raccordement. Nous posons les ossatures secondaires, l’isolation et les parements selon la composition retenue et contrôlons les finitions avec la maîtrise d’œuvre.",
        "industrialContext": "Nous optimisons le calepinage pour limiter les chutes de tôles et de panneaux. En rénovation, nous étudions la conservation des supports compatibles avec le nouveau bardage. Lorsque le marché le prévoit, nous examinons les fiches de déclaration environnementale et sanitaire disponibles. Sur le chantier, nous organisons le tri des chutes métalliques, des emballages et des autres déchets selon les filières prévues pour l’opération.",
        "solutions": [
            {
                "title": "Bardage métallique simple peau",
                "description": "Pose horizontale ou verticale de tôles d’acier nervurées, ondulées ou trapézoïdales selon le profil. Ce système s’utilise notamment pour les hangars, les bâtiments d’activité et certains habillages d’auvents.",
                "features": []
            },
            {
                "title": "Bardage métallique double peau isolé",
                "description": "Pose des plateaux métalliques, de l’isolant et de la peau extérieure profilée. Nous étudions les raccords aux baies, la continuité de l’isolation et les interfaces d’étanchéité à l’air relevant du lot.",
                "features": []
            },
            {
                "title": "Panneaux sandwich de façade",
                "description": "Panneaux isolants à parements métalliques, à fixations apparentes ou dissimulées selon le procédé. Nous calepinons les joints et découpes autour des baies, des portes et des quais.",
                "features": []
            },
            {
                "title": "Cassettes acier ou aluminium et panneaux aluminium composite",
                "description": "Pose sur ossature secondaire, avec trames régulières, joints creux, retours en tableau et sous-faces selon la façade. Les modes de fixation et de dilatation suivent le procédé retenu.",
                "features": []
            },
            {
                "title": "Bardage bois et panneaux HPL",
                "description": "Lames ou clins bois verticaux ou horizontaux, panneaux stratifiés compacts et façades ventilées. Nous préparons les fixations, la lame d’air et les détails de sécurité incendie adaptés au système.",
                "features": []
            },
            {
                "title": "Façades ajourées et habillages",
                "description": "Tôles perforées, métal déployé, panneaux en treillis ou mailles métalliques et lames architecturales. Nous réalisons les finitions du lot, notamment les bavettes, appuis, angles, couvertines, sous-faces et raccords aux menuiseries.",
                "features": []
            }
        ],
        "advantages": [],
        "specs": [],
        "applications": [
            "Bâtiments industriels, entrepôts logistiques, immeubles tertiaires, concessions automobiles, showrooms, parcs d’activités commerciales, logements collectifs et équipements publics."
        ],
        "norms": [
            "Nous appliquons les NF DTU, recommandations professionnelles et prescriptions du procédé dans leurs domaines d’emploi. Pour le bardage bois, nous examinons le NF DTU 41.2. Pour les bardages en acier protégé ou inoxydable, nous nous référons aux recommandations professionnelles applicables. Pour les bardages rapportés, notamment en panneaux composites aluminium ou HPL, nous vérifions le référentiel du système retenu, dont le NF DTU applicable, l’Avis Technique ou le Document Technique d’Application lorsqu’il s’applique. Le vent, les fixations et les dispositions incendie sont traités selon la façade, le support et le bâtiment."
        ],
        "normHeading": "Règles de l’art",
        "methodologySteps": [
            {
                "title": "Étudier et calepiner la façade",
                "desc": "Relevé des supports, lecture des plans, choix du parement, implantation des joints et préparation des raccords aux ouvertures et à la toiture."
            },
            {
                "title": "Préparer les ossatures et le chantier",
                "desc": "Contrôle des supports, implantation des consoles, lisses, rails ou plateaux, approvisionnements et moyens d’accès."
            },
            {
                "title": "Poser l’isolation, le bardage et les habillages",
                "desc": "Mise en œuvre des couches prévues, des parements, bavettes, appuis, angles, couvertines et finitions."
            },
            {
                "title": "Contrôler et réceptionner",
                "desc": "Vérification de l’alignement, des fixations et des raccords. Traitement des écarts et remise des documents de fin de travaux prévus au marché."
            }
        ],
        "faqs": [],
        "preFillFormKey": "bardage-metallique",
        "seoTitle": "Bardage métallique et façades architecturales à Chambéry | CLADIS",
        "seoDescription": "Étude, calepinage et pose de bardages acier simple et double peau, panneaux sandwich, cassettes, aluminium composite, bois et HPL en Savoie."
    },
    {
        "slug": "couverture-metallique",
        "num": "02",
        "title": "Couverture métallique",
        "shortTitle": "Couverture métallique",
        "subtitle": "Étude et réalisation",
        "tagline": "",
        "heroImage": "/images/nos_metier_hero.jpg",
        "imageAlt": "Couverture métallique à joint debout et raccords de toiture",
        "galleryImages": [],
        "shortDesc": "Couverture bac acier, toiture double peau isolée, panneaux sandwich de couverture et zinc à joint debout. Nous réalisons vos couvertures métalliques en neuf ou en rénovation, avec leurs raccords, accessoires et évacuations d’eaux pluviales.",
        "fullDesc": "CLADIS Construction réalise la couverture métallique de bâtiments industriels, logistiques, tertiaires et commerciaux. En construction neuve et en réfection de toiture, nous coordonnons la couverture avec la charpente, le bardage et les ouvrages d’étanchéité attenants. Nous traitons les rives, faîtages, chéneaux, raccords aux lanterneaux et traversées selon le périmètre du lot.",
        "industrialContext": "",
        "solutions": [
            {
                "title": "Couverture métallique double peau isolée",
                "description": "Complexe assemblé sur chantier avec parement intérieur, isolation et peau extérieure métallique selon le procédé. Nous avons l’expérience des couvertures à exigences renforcées d’étanchéité à l’air, avec membrane dédiée et traitement de sa continuité aux raccords, traversées et jonctions.",
                "features": []
            },
            {
                "title": "Couverture en panneaux sandwich isolés",
                "description": "Pose de panneaux de toiture à deux parements métalliques et âme isolante. Selon le procédé, pose sur pannes acier, charpente bois ou appuis adaptés à un support béton. Les études précisent les fixations, les recouvrements et les raccords au faîtage, à l’égout et aux émergences.",
                "features": []
            },
            {
                "title": "Couverture bac acier sec",
                "description": "Pose de plaques d’acier nervurées, avec régulateur de condensation selon le projet. Le profil, les appuis, la pente, les recouvrements et les fixations sont étudiés selon l’exposition et le domaine d’emploi du produit.",
                "features": []
            },
            {
                "title": "Zinc à joint debout et profils imitation joint debout",
                "description": "Couverture en zinc à joint debout sur support compatible. Nous proposons également des profils acier d’aspect joint debout selon le projet. Les supports, fixations et raccords sont définis pour chaque procédé.",
                "features": []
            }
        ],
        "advantages": [],
        "specs": [],
        "applications": [],
        "norms": [
            "Le NF DTU 40.35 encadre les couvertures en plaques nervurées d’acier et le DTU 40.41 les couvertures en feuilles et longues feuilles de zinc dans leurs domaines respectifs. Pour le double peau et les panneaux sandwich, nous appliquons le référentiel du procédé retenu. Nos travaux concernent notamment les usines, entrepôts, ateliers, commerces et concessions automobiles."
        ],
        "normHeading": "Référentiels et domaines d’application",
        "methodologySteps": [
            {
                "title": "Étudier la toiture",
                "desc": "Examiner la charpente, l’entraxe des pannes, la pente, les charges du projet et les évacuations d’eaux pluviales. En réfection, relever l’existant et définir le phasage et les protections provisoires."
            },
            {
                "title": "Préparer les plans d’exécution",
                "desc": "Calepiner les bacs et panneaux, implanter les recouvrements et détailler les faîtages, rives, chéneaux, lanterneaux et raccords avec le bardage. Préparer les approvisionnements, le levage et les accès."
            },
            {
                "title": "Réaliser la couverture",
                "desc": "Poser les bacs acier, panneaux sandwich ou couches du complexe double peau selon le procédé, puis traiter les accessoires, les pénétrations et les raccords. Intégrer la membrane d’étanchéité à l’air lorsque le projet le prévoit."
            },
            {
                "title": "Vérifier avant réception",
                "desc": "Contrôler fixations, recouvrements, raccords et écoulement vers les évacuations. Vérifier la continuité visible de la membrane d’étanchéité à l’air, lorsqu’elle est prévue, et réaliser les contrôles demandés au marché."
            }
        ],
        "faqs": [],
        "preFillFormKey": "couverture-metallique",
        "seoTitle": "Couverture métallique, bac acier et zinc à Chambéry | CLADIS",
        "seoDescription": "Pose et rénovation de couvertures métalliques en bac acier, double peau isolée, panneaux sandwich et zinc à joint debout en Savoie."
    },
    {
        "slug": "etancheite-toiture-terrasse",
        "num": "03",
        "title": "Étanchéité de toiture-terrasse",
        "shortTitle": "Étanchéité de toiture-terrasse",
        "subtitle": "Étude et réalisation",
        "tagline": "",
        "heroImage": "/images/metier-couverture-etancheite-7ddec386.webp",
        "imageAlt": "Toiture-terrasse et revêtement d’étanchéité",
        "galleryImages": [],
        "shortDesc": "Étanchéité bitumineuse monocouche ou bicouche, membranes synthétiques PVC, toitures végétalisées et terrasses sous gravillons ou dalles sur plots. Nous intervenons sur supports béton, bois et bacs acier, ainsi que sur les parois enterrées selon le projet.",
        "fullDesc": "CLADIS Construction réalise l’étanchéité horizontale des toitures-terrasses, l’étanchéité des toitures inclinées recevant une membrane et le traitement des parois enterrées selon le projet. Nous intervenons sur éléments porteurs en béton, tôles d’acier nervurées et planchers bois ou panneaux dérivés du bois. En neuf et en réfection, nous traitons les parties courantes, relevés, acrotères, costières, joints et évacuations d’eaux pluviales.",
        "industrialContext": "",
        "solutions": [
            {
                "title": "Étanchéité bitumineuse monocouche ou bicouche",
                "description": "Mise en œuvre d’une ou de deux couches de membrane selon le procédé, le support et la destination. Le complexe peut comprendre pare-vapeur, isolation, revêtement, relevés et protection.",
                "features": []
            },
            {
                "title": "Étanchéité synthétique PVC",
                "description": "Mise en œuvre de membranes PVC-P selon le système, avec soudure des lés à l’air chaud et traitement des angles, relevés, naissances et traversées.",
                "features": []
            },
            {
                "title": "Étanchéité autoprotégée et protections lourdes",
                "description": "Membrane autoprotégée apparente, gravillons ou dalles et dallettes sur plots. Le choix du revêtement et de la finition dépend du support, de l’usage et du complexe. En terrasse accessible, le calepinage des dalles organise les seuils, coupes et accès aux évacuations.",
                "features": []
            },
            {
                "title": "Étanchéité sous végétalisation",
                "description": "Complexe compatible avec la végétalisation, couches de protection, drainage, filtration, substrat et végétaux ou bacs précultivés selon le lot. Traitement des bandes stériles et maintien de l’accès aux évacuations.",
                "features": []
            },
            {
                "title": "Étanchéité sous photovoltaïque",
                "description": "Préparation ou réfection du complexe et coordination des supports de fixation et des cheminements avec le lot photovoltaïque.",
                "features": []
            },
            {
                "title": "Étanchéité de murs enterrés",
                "description": "Traitement des parois verticales avec un procédé adapté au support, à l’usage des locaux et à l’exposition à l’eau. Pose des protections mécaniques et dispositions de drainage selon le projet.",
                "features": []
            }
        ],
        "advantages": [],
        "specs": [],
        "applications": [
            "Bâtiments industriels, logements collectifs, commerces et équipements publics. Toitures-terrasses inaccessibles, techniques, accessibles aux piétons ou végétalisées et parois enterrées selon le projet."
        ],
        "norms": [
            "Nous appliquons les NF DTU de la série 43 et les prescriptions du procédé dans leur domaine d’emploi. Le NF DTU 43.1 concerne les éléments porteurs en maçonnerie en climat de plaine, le NF DTU 43.3 les tôles d’acier nervurées avec revêtement d’étanchéité, et le NF DTU 43.4 le bois et les panneaux dérivés du bois. La réfection relève du NF DTU 43.5 dans son domaine d’emploi. Pour les éléments porteurs en maçonnerie en climat de montagne, nous examinons l’application du NF DTU 43.11. Selon la solution, nous nous appuyons également sur les Avis Techniques, Documents Techniques d’Application et règles professionnelles concernés. Les parois enterrées font l’objet de prescriptions liées au support, au procédé et à l’exposition à l’eau."
        ],
        "normHeading": "DTU et prescriptions",
        "methodologySteps": [
            {
                "title": "Étudier le support et l’usage",
                "desc": "Relever les supports, pentes, évacuations, émergences et accès. En rénovation, examiner l’état du complexe existant."
            },
            {
                "title": "Préparer les détails",
                "desc": "Calepiner l’isolant, implanter les évacuations et détailler les relevés, costières et joints. Prévoir les déposes et mises hors d’eau provisoires selon le phasage."
            },
            {
                "title": "Mettre en œuvre le complexe",
                "desc": "Poser les couches prévues, la membrane et les relevés, puis les protections par gravillons, dalles sur plots ou végétalisation selon le lot."
            },
            {
                "title": "Contrôler avant réception",
                "desc": "Vérifier les soudures ou recouvrements selon le système, les raccords, les relevés et le dégagement des évacuations. Réaliser les essais prévus au marché et remettre les documents de fin de travaux."
            }
        ],
        "faqs": [],
        "preFillFormKey": "etancheite-toiture-terrasse",
        "seoTitle": "Étanchéité toiture-terrasse PVC et bitume à Chambéry | CLADIS",
        "seoDescription": "Étanchéité bitumineuse et PVC sur béton, bois et bac acier. Toitures végétalisées, terrasses sur plots, gravillons et murs enterrés."
    },
    {
        "slug": "charpente-metallique",
        "num": "04",
        "title": "Charpente et structures métalliques",
        "shortTitle": "Charpente et structures métalliques",
        "subtitle": "Étude et réalisation",
        "tagline": "",
        "heroImage": "/images/metier-charpente-metallique-e3a483da.webp",
        "imageAlt": "Portiques, pannes et ossature d’une charpente métallique",
        "galleryImages": [],
        "shortDesc": "Étude, fabrication et montage de charpentes métalliques neuves, d’extensions et de renforts. Nous réalisons également les ossatures secondaires, les chevêtres et les adaptations nécessaires à l’enveloppe du bâtiment.",
        "fullDesc": "CLADIS Construction étudie, fabrique et monte des charpentes métalliques en neuf, en rénovation et en extension. Notre bureau d’études spécialisé examine la faisabilité, les descentes de charges, les appuis et les assemblages selon le périmètre confié. Nous utilisons Tekla Structures pour modéliser les ouvrages en 3D et préparer les plans d’ensemble, de fabrication et de montage. Notre atelier fabrique les éléments de charpente neuve et les pièces de renforcement, du débit et du perçage à l’assemblage prévu au dossier.",
        "industrialContext": "",
        "solutions": [
            {
                "title": "Charpentes métalliques neuves",
                "description": "Étude, fabrication et montage de portiques acier, poteaux, poutres, pannes, lisses et contreventements. Coordination des appuis et des ancrages avec le gros œuvre.",
                "features": []
            },
            {
                "title": "Extensions et adaptations",
                "description": "Création de travées, raccordement à une charpente existante et adaptation des appuis ou ossatures. Le relevé et l’étude de faisabilité précisent les interfaces et le phasage.",
                "features": []
            },
            {
                "title": "Rénovation et renforcement",
                "description": "Renforcement de poutres, poteaux, pannes ou assemblages, ajout de profilés et reprise localisée des appuis selon les études. Vérification des effets d’un changement d’usage, d’une nouvelle ouverture ou de charges supplémentaires.",
                "features": []
            },
            {
                "title": "Ossatures secondaires et chevêtres",
                "description": "Création de supports de bardage et de couverture, chevêtres pour lanterneaux, exutoires et équipements de toiture, trémies et renforts associés.",
                "features": []
            }
        ],
        "advantages": [],
        "specs": [],
        "applications": [
            "Bâtiments industriels, ateliers, entrepôts, locaux d’activité et extensions de bâtiments existants, ainsi qu’ossatures secondaires de toiture ou de façade."
        ],
        "norms": [
            "Les études de structures acier s’appuient sur l’Eurocode 3 (NF EN 1993) selon le projet. Le NF DTU 32.1 et la NF EN 1090-2 encadrent l’exécution dans leurs domaines d’application. Les assemblages, protections anticorrosion et contrôles sont définis pour l’ouvrage."
        ],
        "normHeading": "Référentiels techniques",
        "methodologySteps": [
            {
                "title": "Étudier la faisabilité",
                "desc": "Relever l’existant, examiner les appuis, les charges et la stabilité, puis préciser le périmètre et les validations attendues."
            },
            {
                "title": "Modéliser et fabriquer",
                "desc": "Préparer le modèle 3D Tekla et les plans d’exécution et de fabrication. Repérer et fabriquer les pièces suivant les plans validés, avec les protections prescrites."
            },
            {
                "title": "Monter et coordonner",
                "desc": "Contrôler les appuis et ancrages, organiser le levage et le montage, puis coordonner les ossatures, contreventements et interfaces avec les façades et la toiture."
            },
            {
                "title": "Vérifier et réceptionner",
                "desc": "Contrôler la géométrie, les assemblages et les protections. Traiter les écarts et transmettre le dossier prévu au marché."
            }
        ],
        "faqs": [],
        "preFillFormKey": "charpente-metallique",
        "seoTitle": "Charpente métallique et renforcement acier à Chambéry | CLADIS",
        "seoDescription": "Bureau d’études charpente acier, modélisation Tekla, fabrication et montage de structures neuves, extensions, renforts et chevêtres."
    }
];
export function getAllMetiers() { return METIERS; }
export function getMetierBySlug(slug: string) { return METIERS.find(m => m.slug === slug); }
