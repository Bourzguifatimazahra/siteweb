export type LangCode = "fr" | "en" | "es" | "zh" | "ar";

export type LocalizedText = { title: string; excerpt: string; content?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  cover: string;
  content: string;
  i18n?: Partial<Record<Exclude<LangCode, "fr">, LocalizedText>>;
};

export function localizePost(post: BlogPost, lang: LangCode): { title: string; excerpt: string; content: string } {
  if (lang === "fr") return { title: post.title, excerpt: post.excerpt, content: post.content };
  const tr = TRANSLATIONS[post.slug]?.[lang];
  return {
    title: tr?.title ?? post.title,
    excerpt: tr?.excerpt ?? post.excerpt,
    content: tr?.content ?? post.content,
  };
}

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
  {
    slug: "toitures-solaires-industrielles",
    title: "Toitures solaires industrielles : maximiser chaque mètre carré",
    excerpt:
      "Comment transformer une toiture d'usine en actif énergétique performant sans compromettre l'étanchéité.",
    date: "2025-08-18",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: hero2,
    content: `Les toitures industrielles marocaines représentent des dizaines de millions de mètres carrés inexploités. Chaque mètre carré peut produire entre 180 et 220 kilowattheures par an, soit une ressource énergétique locale considérable, immédiatement mobilisable sans conflit d'usage du sol.

Le préalable technique est structurel. Nos équipes réalisent systématiquement une note de calcul pour vérifier la capacité portante existante et proposer, si besoin, des renforcements ciblés. Les systèmes de fixation modernes, y compris les procédés sans perçage sur bacs acier, préservent l'étanchéité et les garanties du bâtiment.

Le choix technologique se joue entre modules monofaciaux et bifaciaux, onduleurs de string ou centraux, structures inclinées ou intégrées. Chaque combinaison a ses avantages selon la géométrie de la toiture, l'orientation, et le profil de consommation du site.

Chez Eqnovia, nous livrons des toitures solaires bancables, esthétiques et sûres, avec une garantie de performance sur 25 ans et une supervision temps réel intégrée au contrat.`,
  },
  {
    slug: "irrigation-solaire-agriculture",
    title: "Pompage solaire : irriguer sans dépendre du réseau",
    excerpt:
      "Le pompage photovoltaïque libère les exploitations agricoles marocaines du gasoil et des coupures.",
    date: "2025-07-05",
    author: "Équipe Eqnovia",
    readingTime: "4 min",
    cover: hero3,
    content: `L'irrigation représente jusqu'à 80 pour cent de la consommation d'eau au Maroc, et une part importante des coûts énergétiques des exploitations agricoles. Le pompage solaire change radicalement l'équation économique et environnementale.

Un système typique combine un champ photovoltaïque, un variateur de fréquence solaire et une pompe immergée. Aucune batterie n'est nécessaire lorsque l'eau est stockée dans un bassin de tête. L'énergie solaire disponible en journée coïncide parfaitement avec les besoins d'irrigation.

Les gains sont immédiats. Élimination totale de la facture de gasoil ou d'électricité pour le pompage. Fin des ruptures d'approvisionnement liées aux coupures. Maintenance réduite grâce à l'absence de moteur thermique. Retour sur investissement souvent inférieur à quatre ans pour les exploitations de moyenne et grande taille.

Eqnovia conçoit des solutions de pompage solaire adaptées aux forages profonds, aux réseaux collectifs et aux exploitations en goutte-à-goutte, avec un dimensionnement précis basé sur les besoins hydriques réels de chaque culture.`,
  },
  {
    slug: "recyclage-panneaux-solaires",
    title: "Recyclage des panneaux solaires : l'économie circulaire du photovoltaïque",
    excerpt:
      "Que deviennent les modules en fin de vie ? Panorama des filières de valorisation et enjeux pour le Maroc.",
    date: "2025-06-02",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: heroSolar,
    content: `Avec le boom du solaire mondial, la question de la fin de vie des panneaux photovoltaïques devient stratégique. Un module contient environ 76 pour cent de verre, 10 pour cent de plastique, 8 pour cent d'aluminium, 5 pour cent de silicium et des traces de métaux précieux. Tout est recyclable, à condition d'organiser la filière.

En Europe, la directive DEEE impose déjà la reprise et le recyclage des modules par les fabricants. Les taux de valorisation dépassent 95 pour cent en masse. Les nouveaux procédés thermiques et chimiques permettent de récupérer le silicium avec une pureté suffisante pour refabriquer des cellules.

Au Maroc, la filière reste embryonnaire mais s'organise. Les premiers volumes significatifs de panneaux en fin de vie n'arriveront qu'à partir de 2035, laissant le temps de structurer des unités de traitement compétitives. C'est une opportunité industrielle et un impératif environnemental.

Eqnovia intègre la fin de vie dès la conception : traçabilité des composants, choix de fournisseurs engagés dans des programmes de reprise, et documentation complète remise au client pour anticiper la gestion future. Le solaire est propre à condition de le penser sur tout son cycle de vie.`,
  },
  {
    slug: "eclairage-public-solaire",
    title: "Éclairage public solaire : villes plus sûres, factures allégées",
    excerpt:
      "Les lampadaires photovoltaïques autonomes s'imposent comme la solution idéale pour les collectivités marocaines.",
    date: "2025-05-14",
    author: "Équipe Eqnovia",
    readingTime: "4 min",
    cover: hero1,
    content: `L'éclairage public représente jusqu'à 40 pour cent de la facture électrique d'une commune. Les lampadaires solaires autonomes suppriment cette charge tout en apportant lumière et sécurité aux quartiers non raccordés.

Un mât solaire moderne intègre un panneau photovoltaïque, une batterie lithium longue durée, un luminaire LED haute efficacité et un contrôleur intelligent qui adapte l'intensité au trafic piétonnier. Aucune tranchée, aucun câblage, une installation en quelques heures.

Les collectivités marocaines déploient ces solutions dans les nouveaux lotissements, les zones industrielles, les axes ruraux et les espaces touristiques. Le retour sur investissement se calcule sur la durée : plus de coût d'électricité, maintenance minimale, et une durée de vie du luminaire supérieure à 15 ans.

Eqnovia accompagne les communes et opérateurs privés dans le choix, le dimensionnement et l'installation de solutions d'éclairage solaire fiables, conformes aux normes photométriques marocaines.`,
  },
  {
    slug: "solaire-hotellerie-tourisme",
    title: "Hôtellerie durable : le solaire, argument compétitif majeur",
    excerpt:
      "Les hôtels marocains adoptent le photovoltaïque pour maîtriser leurs coûts et séduire une clientèle éco-responsable.",
    date: "2025-04-08",
    author: "Équipe Eqnovia",
    readingTime: "5 min",
    cover: projAgadir,
    content: `Le secteur hôtelier est un gros consommateur d'énergie : climatisation, cuisine, blanchisserie, piscines chauffées. Pour un établissement quatre étoiles, la facture énergétique peut représenter 8 à 12 pour cent du chiffre d'affaires. Le solaire change la donne.

Une toiture ou une ombrière photovoltaïque bien dimensionnée couvre 30 à 50 pour cent des besoins d'un hôtel, avec un retour sur investissement souvent inférieur à cinq ans. Combinée à un chauffe-eau solaire thermique et à des batteries pour les pointes du soir, la solution devient très puissante.

Au-delà de l'économie, l'argument marketing est décisif. Les grandes plateformes de réservation valorisent les hébergements engagés dans une démarche durable. Les certifications comme Green Key ou Travelife exigent désormais une part significative d'énergies renouvelables.

Eqnovia conçoit des installations discrètes, intégrées à l'architecture, avec supervision temps réel et reporting mensuel des économies. Un investissement qui protège la marge, valorise l'actif immobilier et renforce l'image de marque.`,
  },
];

const TRANSLATIONS: Record<string, Partial<Record<Exclude<LangCode, "fr">, LocalizedText>>> = {
  "autoconsommation-solaire-maroc": {
    en: { title: "Solar self-consumption in Morocco: what changes in 2026", excerpt: "Law 82-21 on self-generation opens new opportunities for Moroccan industries. A complete breakdown." },
    es: { title: "Autoconsumo solar en Marruecos: qué cambia en 2026", excerpt: "La ley 82-21 sobre autoproducción abre nuevas oportunidades para la industria marroquí. Análisis completo." },
    zh: { title: "摩洛哥太阳能自消费:2026年的变化", excerpt: "82-21号自发电法为摩洛哥工业带来新机遇。全面解读。" },
    ar: { title: "الاستهلاك الذاتي الشمسي في المغرب: ما يتغير في 2026", excerpt: "قانون 82-21 حول الإنتاج الذاتي يفتح فرصاً جديدة للصناعة المغربية. تحليل شامل." },
  },
  "stockage-bess-industriel": {
    en: { title: "BESS storage: the key to industrial energy autonomy", excerpt: "How battery systems transform the stability and resilience of African industrial sites." },
    es: { title: "Almacenamiento BESS: la clave de la autonomía energética industrial", excerpt: "Cómo los sistemas de baterías transforman la estabilidad de sitios industriales africanos." },
    zh: { title: "BESS储能:工业能源自主的关键", excerpt: "电池系统如何改变非洲工业站点的稳定性与韧性。" },
    ar: { title: "تخزين BESS: مفتاح الاستقلالية الطاقوية الصناعية", excerpt: "كيف تحول أنظمة البطاريات استقرار المواقع الصناعية الأفريقية." },
  },
  "ombrieres-solaires-logistique": {
    en: { title: "Solar carports: double benefit for logistics", excerpt: "Generate energy while sheltering vehicles: the smart solution for large parking lots." },
    es: { title: "Marquesinas fotovoltaicas: doble beneficio para la logística", excerpt: "Producir energía y a la vez proteger vehículos: la solución inteligente." },
    zh: { title: "光伏车棚:物流的双重收益", excerpt: "既发电又遮蔽车辆:大型停车场的智能方案。" },
    ar: { title: "المظلات الشمسية: فائدة مزدوجة للوجستيك", excerpt: "إنتاج الطاقة مع حماية المركبات: الحل الذكي للمواقف الكبيرة." },
  },
  "epc-cle-en-main-eqnovia": {
    en: { title: "Turnkey EPC: how Eqnovia secures your solar projects", excerpt: "From study to grid connection, discover Eqnovia's EPC methodology for bankable plants." },
    es: { title: "EPC llave en mano: cómo Eqnovia asegura sus proyectos solares", excerpt: "Del estudio a la conexión, la metodología EPC de Eqnovia para plantas bancables." },
    zh: { title: "EPC总包:Eqnovia如何保障您的太阳能项目", excerpt: "从设计到并网,发现Eqnovia的EPC方法论。" },
    ar: { title: "EPC مفتاح اليد: كيف تؤمن Eqnovia مشاريعك الشمسية", excerpt: "من الدراسة إلى الربط، منهجية EPC لدى Eqnovia لمحطات قابلة للتمويل." },
  },
  "financement-ppa-solaire": {
    en: { title: "Solar PPA: go green with zero upfront investment", excerpt: "Third-party investment (PPA) brings solar benefits without capex. How does it work?" },
    es: { title: "PPA solar: producir verde sin inversión inicial", excerpt: "La tercera inversión (PPA) permite disfrutar del solar sin capex. ¿Cómo funciona?" },
    zh: { title: "太阳能PPA:零投资的绿色能源", excerpt: "第三方投资(PPA)让您无需资本支出即可享用太阳能。" },
    ar: { title: "PPA الشمسي: إنتاج أخضر بلا استثمار مسبق", excerpt: "التمويل الثالث (PPA) يتيح الاستفادة من الشمسي دون رأسمال." },
  },
  "agrivoltaisme-maroc": {
    en: { title: "Agrivoltaics: when Moroccan agriculture meets solar", excerpt: "Produce electricity while protecting crops: agrivoltaics answers water stress." },
    es: { title: "Agrovoltaica: cuando la agricultura marroquí se encuentra con el sol", excerpt: "Producir electricidad protegiendo cultivos: respuesta al estrés hídrico." },
    zh: { title: "农光互补:摩洛哥农业遇上太阳能", excerpt: "发电同时保护作物:农光互补应对水资源压力。" },
    ar: { title: "الزراعة الكهروضوئية: عندما تلتقي الفلاحة المغربية بالشمس", excerpt: "إنتاج الكهرباء وحماية المحاصيل: جواب على الإجهاد المائي." },
  },
  "hydrogene-vert-afrique": {
    en: { title: "Green hydrogen: is Africa the next global hub?", excerpt: "Morocco and its neighbors have unique assets to lead the decarbonized hydrogen market." },
    es: { title: "Hidrógeno verde: ¿África, futuro hub mundial?", excerpt: "Marruecos y sus vecinos tienen activos únicos para liderar el hidrógeno descarbonizado." },
    zh: { title: "绿氢:非洲能否成为全球枢纽?", excerpt: "摩洛哥及其邻国具备引领脱碳氢市场的独特优势。" },
    ar: { title: "الهيدروجين الأخضر: هل تصبح أفريقيا القطب العالمي المقبل؟", excerpt: "المغرب وجيرانه يمتلكون أصولاً فريدة لقيادة سوق الهيدروجين." },
  },
  "maintenance-o-et-m-solaire": {
    en: { title: "Solar O&M: securing 25 years of performance", excerpt: "Operation and maintenance drive the real profitability of a plant. Eqnovia best practices." },
    es: { title: "O&M solar: garantizar 25 años de rendimiento", excerpt: "La operación y mantenimiento determinan la rentabilidad real. Buenas prácticas Eqnovia." },
    zh: { title: "光伏运维:保障25年发电性能", excerpt: "运营与维护决定电站真实收益。Eqnovia最佳实践。" },
    ar: { title: "التشغيل والصيانة الشمسية: ضمان 25 سنة من الأداء", excerpt: "التشغيل والصيانة يحددان الربحية الحقيقية للمحطة." },
  },
  "decarbonation-industrie-maroc": {
    en: { title: "Decarbonizing Moroccan industry: where to start?", excerpt: "Faced with EU CBAM, Moroccan industries must structure a low-carbon roadmap." },
    es: { title: "Descarbonizar la industria marroquí: ¿por dónde empezar?", excerpt: "Ante el CBAM europeo, la industria marroquí debe estructurar su trayectoria baja en carbono." },
    zh: { title: "摩洛哥工业脱碳:从何开始?", excerpt: "面对欧盟CBAM,摩洛哥工业需构建低碳路径。" },
    ar: { title: "إزالة الكربون من الصناعة المغربية: من أين نبدأ؟", excerpt: "أمام CBAM الأوروبي، يجب على الصناعة المغربية بناء مسار منخفض الكربون." },
  },
  "microgrids-electrification-rurale": {
    en: { title: "Solar microgrids: electrifying remote areas", excerpt: "How PV mini-grids revolutionize electricity access in sub-Saharan Africa." },
    es: { title: "Microrredes solares: electrificar zonas aisladas", excerpt: "Cómo las minirredes fotovoltaicas revolucionan el acceso a la electricidad." },
    zh: { title: "太阳能微电网:偏远地区电气化", excerpt: "光伏微电网如何革新撒哈拉以南非洲的电力接入。" },
    ar: { title: "الشبكات الصغيرة الشمسية: كهربة المناطق المعزولة", excerpt: "كيف تُحدث الشبكات الصغيرة الكهروضوئية ثورة في الوصول للكهرباء." },
  },
  "toitures-solaires-industrielles": {
    en: { title: "Industrial solar rooftops: maximize every square meter", excerpt: "How to turn a factory roof into a high-performing energy asset without harming waterproofing." },
    es: { title: "Cubiertas solares industriales: maximizar cada metro cuadrado", excerpt: "Cómo convertir una cubierta de fábrica en activo energético sin comprometer la estanqueidad." },
    zh: { title: "工业光伏屋顶:充分利用每一平方米", excerpt: "如何将厂房屋顶变为高效能源资产,不损害防水层。" },
    ar: { title: "الأسطح الشمسية الصناعية: تعظيم كل متر مربع", excerpt: "كيف نحول سطح المصنع إلى أصل طاقوي فعال دون المساس بالعزل." },
  },
  "irrigation-solaire-agriculture": {
    en: { title: "Solar pumping: irrigate without grid dependence", excerpt: "PV pumping frees Moroccan farms from diesel and outages." },
    es: { title: "Bombeo solar: regar sin depender de la red", excerpt: "El bombeo fotovoltaico libera a las explotaciones marroquíes del gasóleo y los cortes." },
    zh: { title: "太阳能水泵:摆脱电网灌溉", excerpt: "光伏水泵让摩洛哥农场摆脱柴油与停电。" },
    ar: { title: "الضخ الشمسي: الري دون الاعتماد على الشبكة", excerpt: "الضخ الكهروضوئي يحرر المزارع المغربية من الديزل والانقطاعات." },
  },
  "recyclage-panneaux-solaires": {
    en: { title: "Solar panel recycling: the PV circular economy", excerpt: "What happens to end-of-life modules? Recycling channels and stakes for Morocco." },
    es: { title: "Reciclaje de paneles solares: la economía circular del fotovoltaico", excerpt: "¿Qué pasa con los módulos al final de su vida? Panorama y retos para Marruecos." },
    zh: { title: "光伏板回收:光伏循环经济", excerpt: "报废组件何去何从?回收产业与摩洛哥的机遇。" },
    ar: { title: "إعادة تدوير الألواح الشمسية: الاقتصاد الدائري الكهروضوئي", excerpt: "ما مصير الألواح في نهاية عمرها؟ قنوات التدوير ورهاناتها للمغرب." },
  },
  "eclairage-public-solaire": {
    en: { title: "Solar street lighting: safer cities, lower bills", excerpt: "Autonomous PV lampposts are the ideal answer for Moroccan municipalities." },
    es: { title: "Alumbrado público solar: ciudades más seguras, facturas más bajas", excerpt: "Las farolas fotovoltaicas autónomas son la solución ideal para municipios." },
    zh: { title: "太阳能路灯:更安全的城市,更低的账单", excerpt: "自主光伏路灯是摩洛哥市政的理想方案。" },
    ar: { title: "الإنارة العمومية الشمسية: مدن أكثر أمناً وفواتير أقل", excerpt: "الأعمدة الكهروضوئية المستقلة هي الحل المثالي للجماعات." },
  },
  "solaire-hotellerie-tourisme": {
    en: { title: "Sustainable hospitality: solar as a competitive edge", excerpt: "Moroccan hotels adopt PV to control costs and attract eco-conscious guests." },
    es: { title: "Hostelería sostenible: el solar, ventaja competitiva", excerpt: "Los hoteles marroquíes adoptan la fotovoltaica para controlar costes y atraer clientela ecológica." },
    zh: { title: "可持续酒店业:太阳能成为竞争优势", excerpt: "摩洛哥酒店采用光伏以控制成本并吸引环保客户。" },
    ar: { title: "الفندقة المستدامة: الشمسي حجة تنافسية كبرى", excerpt: "الفنادق المغربية تعتمد الكهروضوئي للتحكم في التكاليف وجذب زبائن بيئيين." },
  },
};

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
