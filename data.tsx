import { 
  BookText, 
  CodeSquare, 
  HomeIcon, 
  UserRound, 
  Linkedin, 
  Twitter, 
  Rss, 
  Twitch, 
  Youtube, 
  Crop, 
  Pencil, 
  Computer, 
  Book, 
  Rocket, 
  Speech 
} from "lucide-react";

export const socialNetworks = [
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/adriel-rodriguez-b5b05029b",
  },
    ];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "Freelance",
    description:
      "Como Desarrollador Full Stack freelance, hice proyectos innovadores y personalizados para una variedad de clientes y emprendimientos pequeños.",
    date: "Jun 2024 ",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Zentrais LLC",
    description:
      "En Zentrais LLC, participé en el desarrollo de aplicaciones web y móviles, colaborando con equipos multidisciplinarios para crear soluciones tecnológicas efectivas.",
    date: "Oct 2025 - Presente",
  }
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Año de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: +10,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: +20,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
 
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];
