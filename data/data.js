import portfolio from "../public/images/portfolio.png";
import blomsterhandel from "../public/images/blomsterhandel.png";
export const projects = [
  {
    title: "Portfolio",
    featured: true,
    githubLink: "https://github.com/june7001/portfolio",
    img: portfolio,
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
    description: "Improvements ongoing",
    link: "https://june.contact",
  },
  {
    title: "Blomsterhandel",
    featured: true,
    githubLink: "https://github.com/june7001/commerce",
    img: blomsterhandel,
    techStack: ["Next.js(app router)", "Shopify"],
    description: "A headless shopify flower shop",
    link: "https://commerce-three-rose-76.vercel.app/",
  },
];
