import {
  FaNode,
  FaJava,
  FaAws,
  FaReact,
  FaPython,
  FaSymfony,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaDocker,
  FaTiktok,
  FaGit,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.png";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaLinkedin />,
  <FaGithub />,
  <FaYoutube />,
  <FaTiktok />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Saleck EL JILI",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "0624020215",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "salek.eljili@gmail.com",
  },
];

export const icons = [
  <FaNode />,
  <FaGit />,
  <FaReact />,
  <FaJava />,
  <FaDocker />,
  <FaAws />,
  <FaPython />,
  <FaSymfony />,
];

export const experiences = [
  {
    id: 1,
    year: "2024",
    position: "Consultant Full-Stack (JAVA/JS)",
    company: "Capgemini",
  },
  {
    id: 2,
    year: "2021-2024",
    position: "Développeur back-end",
    company: "Qwest TV",
  },
  /* {
    di: 2,
    year: "2021",
    position:
      "Contrôle et enregistrement informatique des articles réceptionnés",
    company: "Amazon",
  }, */
  {
    id: 3,
    year: "2021",
    position: "Développeur Full Stack",
    company: "Estiam",
  },
  {
    id: 4,
    year: "2020-2021",
    position: "Développeur back-end",
    company: "CAMUSAT",
  },
  {
    id: 5,
    year: "2020",
    position: "Développeur JQueryMobile et Formateur Math-Info",
    company: "AEMST",
  },
  {
    id: 6,
    year: "2019",
    position: "Développeur Java",
    company: "CE",
  },
  {
    id: 7,
    year: "2019",
    position: "Développeur Laravel",
    company: "AMSA",
  },
];
export const finishes = [
  {
    id: 1,
    number: "4+",
    itemName: "Années d'expérience",
  },
  {
    id: 2,
    number: "10+",
    itemName: "Clients satisfaits",
  },
  {
    id: 3,
    number: "20+",
    itemName: "Projets réalisés",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "web",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "Mobile", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Paris, France",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "salek.eljili@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "0624020215",
  },
];
