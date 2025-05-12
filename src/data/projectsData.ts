// Import project images
import project1 from "../assets/Images/Home/ProjectHome/est5.jpg";
// Use URL import for files with spaces
// @ts-ignore
import project2 from "../assets/Images/Home/ProjectHome/con fac 24.jpg";
import project3 from "../assets/Images/Home/ProjectHome/cham1.jpg";
import project4 from "../assets/Images/Home/ProjectHome/con2.jpg";
// Import additional images from available folders
// @ts-ignore
import road1 from "../assets/Images/Home/ProjectHome/con fac 24.jpg";
import road2 from "../assets/Images/Home/ProjectHome/con2.jpg";
import building1 from "../assets/Images/Home/ProjectHome/est5.jpg";
import building2 from "../assets/Images/Home/ProjectHome/cham1.jpg";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  vueExterieure?: string[]; // Optional array of exterior view images
  vueInterieure?: string[]; // Optional array of interior view images
  year: string;
  client: string;
  location: string;
  type: "building" | "road" | "residential" | "commercial" | "infrastructure";
}

// Project data with detailed information
const projectsData: Project[] = [
  {
    id: 1,
    title: "Tour Résidentielle de Luxe",
    category: "Résidentiel",
    type: "building",
    description: "Un ensemble résidentiel luxueux offrant des vues panoramiques exceptionnelles et des commodités haut de gamme, définissant un nouveau standard de vie urbaine.",
    image: building1,
    vueExterieure: [building1, project4,project4,project4,project4,project4], // Array of exterior view images
    vueInterieure: [project3, project2], // Array of interior view images
    year: "2023",
    client: "Groupe Immobilier Premium",
    location: "Casablanca, Maroc"
  },
  {
    id: 2,
    title: "Rénovation Autoroute A1",
    category: "Infrastructure",
    type: "road",
    description: "Projet majeur de rénovation d'autoroute comprenant l'élargissement des voies, l'amélioration de la sécurité et l'installation d'infrastructures modernes.",
    image: road1,
    vueExterieure: [road1, road2],
    year: "2022",
    client: "Ministère des Transports",
    location: "Rabat-Casablanca, Maroc"
  },
  {
    id: 3,
    title: "Centre Commercial Moderne",
    category: "Commercial",
    type: "building",
    description: "Un centre commercial contemporain avec une architecture impressionnante, offrant une expérience de shopping inégalée et intégrant des solutions durables.",
    image: building2,
    vueExterieure: [building2, project1],
    vueInterieure: [project2, project3],
    year: "2021",
    client: "Développeurs Commerciaux Unis",
    location: "Marrakech, Maroc"
  },
  {
    id: 4,
    title: "Pont de Connexion Urbaine",
    category: "Infrastructure",
    type: "road",
    description: "Un pont innovant reliant des quartiers clés de la ville, améliorant la mobilité urbaine et présentant une conception architecturale distinctive.",
    image: road2,
    vueExterieure: [road2, road1],
    year: "2022",
    client: "Autorité Municipale",
    location: "Tanger, Maroc"
  },
  {
    id: 5,
    title: "Complexe Résidentiel Écologique",
    category: "Résidentiel",
    type: "residential",
    description: "Un ensemble résidentiel écologique intégrant des technologies vertes, des espaces communs luxuriants et une conception favorisant un mode de vie durable.",
    image: building1,
    vueExterieure: [building1, building2],
    vueInterieure: [project3, project1],
    year: "2020",
    client: "ÉcoHabitat Développement",
    location: "Agadir, Maroc"
  },
  {
    id: 6,
    title: "Quartier d'Affaires Central",
    category: "Commercial",
    type: "commercial",
    description: "Un complexe de bureaux de premier plan définissant l'horizon urbain avec son architecture audacieuse et ses espaces de travail innovants.",
    image: building2,
    vueExterieure: [building2, project4],
    vueInterieure: [project2, project1],
    year: "2023",
    client: "Consortium d'Investissement Stratégique",
    location: "Casablanca, Maroc"
  },
  {
    id: 7,
    title: "Projet Routier Écologique",
    category: "Infrastructure",
    type: "road",
    description: "Une infrastructure routière innovante conçue avec des matériaux durables et des solutions pour réduire l'impact environnemental tout en améliorant la circulation.",
    image: road1,
    vueExterieure: [road1, road2],
    year: "2021",
    client: "Direction des Routes Nationales",
    location: "Fès-Meknès, Maroc"
  },
  {
    id: 8,
    title: "Tours Jumelles Commerciales",
    category: "Commercial",
    type: "building",
    description: "Un ensemble de tours commerciales emblématiques qui redéfinissent le paysage urbain avec des façades vitrées innovantes et des espaces de travail modernes.",
    image: building1,
    vueExterieure: [building1, building2],
    vueInterieure: [project1, project3],
    year: "2022",
    client: "Consortium d'Investissement International",
    location: "Tanger, Maroc"
  }
];

export default projectsData; 