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
  {
    slug: "agrivoltaisme-maroc",
    title: "Agrivoltaïsme : quand l'agriculture marocaine rencontre le solaire",
    excerpt:
      "Produire de l'électricité tout en protégeant les cultures : l'agrivoltaïsme s'impose comme une réponse au stress hydrique.",
    date: "2026-01-28",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: hero2,
    content: `L'agrivoltaïsme désigne l'association intelligente d'une production agricole et d'une production photovoltaïque sur une même parcelle. Au Maroc, où le stress hydrique s'accentue, cette approche prend une importance stratégique.

Les panneaux surélevés créent une ombre partielle qui réduit l'évapotranspiration des cultures, parfois jusqu'à 30 pour cent. Résultat : moins d'irrigation nécessaire, des rendements agricoles préservés voire améliorés pour certaines cultures maraîchères, et une production d'électricité qui valorise le foncier.

Les structures dynamiques modernes s'orientent automatiquement selon la course du soleil et les besoins des plantes. Un pilotage agronomique fin permet d'optimiser à la fois la lumière reçue par les cultures et l'énergie produite.

Chez Eqnovia, nous concevons des projets pilotes en partenariat avec des exploitants agricoles et des instituts de recherche marocains. L'objectif : démontrer qu'énergie et agriculture peuvent prospérer ensemble, sans sacrifier ni l'une ni l'autre.

L'agrivoltaïsme est plus qu'une innovation technique. C'est un modèle d'adaptation au changement climatique, une réponse concrète aux défis de souveraineté alimentaire et énergétique du continent africain.`,
  },
  {
    slug: "hydrogene-vert-afrique",
    title: "Hydrogène vert : l'Afrique, futur hub mondial ?",
    excerpt:
      "Le Maroc et ses voisins disposent d'atouts uniques pour devenir des leaders mondiaux de l'hydrogène décarboné.",
    date: "2025-12-15",
    author: "Équipe Eqnovia",
    readingTime: "6 min",
    cover: heroSolar,
    content: `L'hydrogène vert, produit par électrolyse de l'eau à partir d'électricité renouvelable, s'impose comme le vecteur énergétique clé de la décarbonation industrielle. Sidérurgie, chimie, transport lourd, aviation : ces secteurs n'ont pas d'alternative crédible à long terme.

Le Maroc dispose d'un potentiel exceptionnel : ensoleillement record, gisements éoliens de classe mondiale sur la façade atlantique, foncier disponible, et proximité géographique avec l'Europe consommatrice. La stratégie nationale hydrogène vise 4 gigawatts d'électrolyseurs à l'horizon 2030.

Les premiers projets industriels émergent, portés par des consortiums internationaux. Ammoniac vert pour l'export, e-fuels pour l'aviation, alimentation d'industries locales : les débouchés se dessinent rapidement.

Eqnovia se positionne sur les briques amont de la chaîne : centrales photovoltaïques et éoliennes dédiées, systèmes de stockage, infrastructures de raccordement. Nos équipes suivent activement les appels à projets et développent des partenariats avec les acteurs industriels et institutionnels.

L'hydrogène vert ne remplacera pas l'électrification directe, plus efficace pour la plupart des usages. Mais pour les secteurs difficiles à décarboner, il constitue une opportunité historique pour l'Afrique de valoriser ses ressources renouvelables à l'échelle mondiale.`,
  },
  {
    slug: "maintenance-o-et-m-solaire",
    title: "O&M solaire : garantir 25 ans de performance",
    excerpt:
      "L'exploitation et la maintenance conditionnent la rentabilité réelle d'une centrale. Les bonnes pratiques Eqnovia.",
    date: "2025-11-08",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: hero3,
    content: `Une centrale solaire est conçue pour produire pendant 25 à 30 ans. Encore faut-il en assurer l'exploitation rigoureuse. L'O&M, pour Operation and Maintenance, est le pilier souvent sous-estimé qui distingue une centrale performante d'un actif décevant.

La supervision à distance est la première ligne de défense. Nos centrales sont équipées de capteurs, d'onduleurs communicants et de compteurs qui remontent en temps réel les données de production. Notre centre de contrôle détecte immédiatement toute anomalie : baisse de rendement, panne d'onduleur, défaut de string.

La maintenance préventive suit un calendrier strict : contrôles électriques annuels, thermographie infrarouge, vérification des serrages, inspection des structures. Le nettoyage des modules, essentiel au Maroc où la poussière peut réduire la production de 5 à 15 pour cent, est planifié selon la saison et le site.

La maintenance corrective mobilise nos équipes techniques régionales, capables d'intervenir sous 24 à 48 heures partout au Maroc. Un stock de pièces stratégiques (onduleurs de rechange, connecteurs, câbles) garantit des délais de remise en service minimaux.

Chez Eqnovia, nos contrats d'O&M incluent une garantie de performance : nous nous engageons sur un ratio de production annuel, avec compensation en cas de sous-performance. C'est cette exigence qui rassure les investisseurs et bancarise nos projets.`,
  },
  {
    slug: "decarbonation-industrie-maroc",
    title: "Décarboner l'industrie marocaine : par où commencer ?",
    excerpt:
      "Face aux exigences CBAM européennes, les industriels marocains doivent structurer leur trajectoire bas-carbone.",
    date: "2025-10-20",
    author: "Équipe Eqnovia",
    readingTime: "6 min",
    cover: projAgadir,
    content: `Le mécanisme d'ajustement carbone aux frontières européen, ou CBAM, entre en application progressive depuis 2026. Concrètement, les exportateurs marocains d'acier, ciment, aluminium, engrais et électricité devront déclarer et payer les émissions carbone incorporées à leurs produits. La compétitivité de pans entiers de l'industrie nationale est en jeu.

La bonne nouvelle : les leviers de décarbonation existent, et beaucoup sont rentables. La première étape consiste à mesurer précisément son empreinte carbone selon les standards ISO 14064 ou GHG Protocol. Sans mesure fiable, pas de stratégie crédible.

Vient ensuite l'efficacité énergétique : isolation, récupération de chaleur, moteurs performants, éclairage LED, pilotage intelligent des utilités. Ces actions offrent souvent des retours sur investissement inférieurs à trois ans et réduisent immédiatement la facture énergétique.

L'autoproduction solaire, éventuellement couplée à du stockage, constitue le deuxième pilier. Elle permet de substituer une électricité décarbonée à celle du réseau, en particulier pendant les heures diurnes qui coïncident souvent avec les pics de consommation industrielle.

Enfin, l'électrification des procédés thermiques, l'utilisation de biomasse ou d'hydrogène vert pour la chaleur haute température, et l'optimisation logistique complètent la trajectoire.

Eqnovia accompagne les industriels marocains dans cette démarche globale, de l'audit initial au déploiement des solutions, avec une lecture financière et carbone intégrée.`,
  },
  {
    slug: "microgrids-electrification-rurale",
    title: "Microgrids solaires : l'électrification des zones isolées",
    excerpt:
      "Comment les mini-réseaux photovoltaïques révolutionnent l'accès à l'électricité en Afrique subsaharienne.",
    date: "2025-09-12",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: projCasa,
    content: `Plus de 600 millions d'Africains n'ont toujours pas accès à une électricité fiable. Étendre les réseaux nationaux jusqu'aux villages les plus reculés coûte cher et prend du temps. Les microgrids solaires apportent une réponse rapide, économique et durable.

Un microgrid combine une centrale photovoltaïque, un système de stockage par batteries, un système de gestion intelligent et un réseau de distribution local. Il peut alimenter un village, une école, un dispensaire, une unité de transformation agricole, ou un site industriel isolé.

Les impacts sont considérables. L'éclairage prolonge la journée productive et scolaire. Le froid conserve médicaments et récoltes. La connectivité mobile devient possible. Les activités économiques se développent : moulins, ateliers, commerces, ateliers de couture.

Techniquement, les microgrids modernes intègrent des protections avancées, des systèmes prépayés par mobile money, et une supervision à distance qui optimise la maintenance. La durée de vie utile dépasse 20 ans avec un renouvellement partiel des batteries à mi-parcours.

Eqnovia développe des microgrids en partenariat avec des ONG, des collectivités et des opérateurs privés dans plusieurs pays africains. Chaque projet est co-construit avec les communautés bénéficiaires, gage d'appropriation et de pérennité.

L'électrification rurale n'est pas qu'un enjeu technique. C'est un levier majeur de développement humain, d'émancipation et de résilience climatique pour les populations africaines.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
