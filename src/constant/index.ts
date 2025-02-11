import city_computer_img from "@/assets/projects/City-Computers.png";
import engineers_iq_img from "@/assets/projects/Engineers-IQ.png";
import keeb_shop_img from "@/assets/projects/Keeb-Shop.png";
import { StaticImageData } from "next/image";

export const TypewriterWords = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "React Developer",
  "NextJS Developer",
  "NodeJS Developer",
  "NestJS Developer",
  "JavaScript Developer",
  "Typescript Developer",
  "API Specialist",
  "Freelance Coder",
];

interface IProject {
  title: string;
  image: StaticImageData;
  description: string;
  techStack: string[];
  frontend: string;
  backend: string;
  liveLink: string;
}

export const projects: IProject[] = [
  {
    title: "E-commerce Platform",
    description:
      "A modern multi-vendor E-Commerce platform with advanced features.",
    image: city_computer_img,
    techStack: [
      "Typescript",
      "NextJS",
      "ShadCN",
      "Express",
      "Zod",
      "JWT",
      "Meilisearch",
      "Prisma",
      "PostgreSQL",
    ],
    frontend: "https://github.com/naimuddin94/city_computer_frontend",
    backend: "https://github.com/naimuddin94/city_computer_backend",
    liveLink: "https://citycomputer.vercel.app/",
  },
  {
    title: "Blog Application",
    description: "A comprehensive blog platform with advanced social features.",
    image: engineers_iq_img,
    techStack: [
      "Typescript",
      "NextJS",
      "NextUI",
      "Express",
      "Mongoose",
      "JWT",
      "MongoDB",
    ],
    frontend: "https://github.com/naimuddin94/engineers_iq",
    backend: "https://github.com/naimuddin94/engineers_iq",
    liveLink: "https://engineersiq.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    description:
      "Mechanical Keyboard E-Commerce Platform built with raw React library.",
    image: keeb_shop_img,
    techStack: [
      "Typescript",
      "React",
      "ShadCN",
      "Redux",
      "Express",
      "Zod",
      "JWT",
      "Mongoose",
      "MongoDB",
    ],
    frontend: "https://github.com/naimuddin94/MK_shop_client",
    backend: "https://github.com/naimuddin94/mechanical_keyboard_shop_server",
    liveLink: "https://keeb-keyboard.vercel.app/",
  },
];
