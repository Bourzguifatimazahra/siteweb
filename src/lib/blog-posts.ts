export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  cover: string;
  content: string;
};

import projAgadir from "@/assets/project-agadir.jpg";
import projCasa from "@/assets/project-casablanca.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import heroSolar from "@/assets/hero-solar.jpg";

export const POSTS: BlogPost[] = [
  {
    slug: "autoconsommation-solaire-maroc",
    title: "Autoconsommation solaire au Maroc : ce qui change en 2026",
    excerpt:
      "La loi 82-21 sur l'autoproduction ouvre de nouvelles opportunités pour les industriels marocains. Décryptage complet.",
    date: "2026-06-14",
    author: "Équipe Eqnovia",
    readingTime: "6 min",
    cover: projAgadir,
    content: `Le Maroc franchit une étape décisive dans sa transition énergétique. Avec la publication des décrets d'application de la loi 82-21, les entreprises marocaines peuvent désormais produire et consommer leur propre électricité solaire dans un cadre juridique clair et sécurisé.

Concrètement, une usine à Casablanca ou Agadir peut installer une centrale photovoltaïque en toiture ou en ombrière, injecter le surplus sur le réseau ONEE, et bénéficier d'un mécanisme de compensation. Les économies observées sur nos projets récents atteignent 35 à 45 pour cent de la facture électrique annuelle.

L'installation d'une centrale de 500 kilowatts-crête permet d'éviter environ 700 tonnes de CO2 par an, tout en offrant un retour sur investissement moyen entre quatre et six ans. Chez Eqnovia, nous accompagnons nos clients de l'étude de faisabilité jusqu'à l'exploitation, avec un suivi continu de la performance.

Points clés à retenir :
Le seuil d'autoproduction sans autorisation préalable a été relevé. Les industriels raccordés en moyenne tension peuvent désormais couvrir la majorité de leurs besoins. Les financements verts se multiplient, portés par la Banque européenne d'investissement et les institutions marocaines.

En résumé, 2026 marque l'année où l'énergie solaire devient un choix stratégique évident pour toute entreprise soucieuse de sa compétitivité et de son impact environnemental.`,
  },
  {
    slug: "stockage-bess-industriel",
    title: "Stockage BESS : la clé de l'autonomie énergétique industrielle",
    excerpt:
      "Comment les systèmes de batteries transforment la stabilité et la résilience des sites industriels africains.",
    date: "2026-05-22",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: projCasa,
    content: `Le stockage d'énergie par batteries, ou BESS, n'est plus une option futuriste. C'est aujourd'hui la brique manquante qui rend le solaire pleinement industriel.

Les systèmes BESS modernes reposent sur des batteries lithium fer phosphate, réputées pour leur sécurité et leur longévité. Couplés à une centrale photovoltaïque, ils permettent de lisser la production, de sécuriser les charges critiques et de réduire drastiquement les pointes tarifaires.

Sur nos projets africains récents, nous avons observé une réduction des coupures de courant de plus de 80 pour cent, et une diminution du recours aux groupes électrogènes diesel de l'ordre de 90 pour cent. L'impact économique est significatif : moins de carburant, moins de maintenance, et une empreinte carbone en forte baisse.

Un système BESS bien dimensionné intègre un onduleur bidirectionnel, un système de gestion intelligent, et une supervision à distance. Chez Eqnovia, nos ingénieurs conçoivent des architectures adaptées à chaque profil de consommation, en tenant compte du climat, du réseau et des priorités opérationnelles.

L'avenir énergétique de l'Afrique se construit avec le stockage. C'est la garantie d'une électricité fiable, propre et compétitive, 24 heures sur 24.`,
  },
  {
    slug: "ombrieres-solaires-logistique",
    title: "Ombrières photovoltaïques : double bénéfice pour la logistique",
    excerpt:
      "Produire de l'énergie tout en abritant les véhicules : la solution intelligente pour les grands parkings.",
    date: "2026-04-10",
    author: "Équipe Eqnovia",
    readingTime: "4 min",
    cover: hero1,
    content: `Les ombrières photovoltaïques transforment un espace passif, le parking, en actif énergétique de premier plan. Une ombrière de 5000 mètres carrés peut produire plus d'un gigawattheure par an, tout en offrant confort et protection aux véhicules stationnés.

Pour un centre logistique moderne, cette double fonction est un atout stratégique. La température intérieure des véhicules baisse de plusieurs degrés, ce qui réduit la consommation de climatisation. La productivité des équipes s'améliore, et l'image de l'entreprise se renforce grâce à un engagement environnemental visible.

Techniquement, une ombrière repose sur une charpente métallique galvanisée dimensionnée pour résister aux vents et aux charges climatiques marocaines. Les modules photovoltaïques bifaciaux modernes offrent des rendements supérieurs à 22 pour cent. L'ensemble est raccordé au poste de livraison via des onduleurs de string ou centraux selon la puissance.

Le retour sur investissement d'une ombrière solaire est généralement compris entre cinq et sept ans, avec une durée de vie utile supérieure à 25 ans. C'est un investissement patrimonial autant qu'énergétique.

Chez Eqnovia, nous concevons des ombrières esthétiques, robustes, et parfaitement intégrées à l'architecture des sites logistiques et commerciaux.`,
  },
  {
    slug: "epc-cle-en-main-eqnovia",
    title: "EPC clé en main : comment Eqnovia sécurise vos projets solaires",
    excerpt:
      "De l'étude au raccordement, découvrez la méthodologie EPC d'Eqnovia pour livrer des centrales performantes et bancables.",
    date: "2026-03-05",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: hero1,
    content: `Un projet solaire industriel n'est pas qu'une affaire de panneaux. C'est une chaîne d'ingénierie, d'achats, de construction et de mise en service où chaque maillon conditionne la performance finale. C'est la promesse d'un contrat EPC : Engineering, Procurement, Construction.

Chez Eqnovia, la phase d'ingénierie démarre par un audit énergétique détaillé, une simulation PVsyst rigoureuse et une étude structurelle de la toiture ou du terrain. Nous produisons ensuite un dossier d'exécution complet : plans électriques, notes de calcul, spécifications matériels.

Côté approvisionnement, nous sélectionnons exclusivement des modules Tier 1, des onduleurs certifiés IEC et des structures galvanisées à chaud. Chaque composant est tracé, testé et couvert par des garanties fabricant longue durée.

La construction respecte les standards HSE les plus stricts, avec un chef de chantier dédié et un reporting hebdomadaire au client. La mise en service inclut tests de performance, remise du dossier technique et formation des équipes d'exploitation.

Résultat : une centrale bancable, assurable, et prête pour 25 ans de production. C'est cette rigueur qui fait d'Eqnovia un partenaire de confiance pour les industriels et investisseurs au Maroc et en Afrique.`,
  },
  {
    slug: "financement-ppa-solaire",
    title: "PPA solaire : produire vert sans investissement initial",
    excerpt:
      "Le tiers-investissement (PPA) permet de bénéficier du solaire sans mobiliser de trésorerie. Comment ça marche ?",
    date: "2026-02-18",
    author: "Équipe Eqnovia",
    readingTime: "4 min",
    cover: projCasa,
    content: `Le PPA, ou Power Purchase Agreement, est un contrat de vente d'électricité qui révolutionne l'accès au solaire pour les entreprises marocaines. Le principe est simple : Eqnovia finance, installe et exploite la centrale sur votre site, et vous achetez uniquement l'électricité produite, à un tarif inférieur à celui du réseau, sur une durée typique de 15 à 20 ans.

Aucun investissement initial n'est requis. Aucun risque technique n'est porté par le client : Eqnovia et ses partenaires financiers assument la performance, la maintenance et les assurances. Vous ne payez que les kilowattheures consommés, avec une visibilité totale sur votre coût énergétique.

Ce modèle est particulièrement adapté aux industriels, aux centres commerciaux, aux hôtels et aux exploitations agroalimentaires qui souhaitent réduire immédiatement leur facture sans impacter leur BFR ni leur capacité d'endettement.

À l'issue du contrat, la centrale devient généralement propriété du client, offrant une électricité quasi gratuite pour une décennie supplémentaire. Le PPA est ainsi à la fois un outil de compétitivité et un levier de décarbonation, aligné avec les engagements RSE et les exigences des donneurs d'ordre internationaux.

Eqnovia structure des PPA sur mesure, en partenariat avec des institutions financières marocaines et européennes, pour rendre le solaire accessible à toutes les entreprises.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
