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
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
