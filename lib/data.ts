import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { TbBuildingBank } from "react-icons/tb";
import { CgSwiss } from "react-icons/cg";
import { SiBankofamerica } from "react-icons/si";

import * as thumbnails from '@/public/thumbnails/index';
import * as icons from "@/public/icons/index";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectTypes = [
  {
    value: 'all',
    name: "All",
  },
  {
    value: 'ux',
    name: "UX",
  },
  {
    value: 'frontend',
    name: "Front-End",
  },
  {
    value: 'fullstack',
    name: "Full-Stack",
  },
  // {
  //   value: 'mobile',
  //   name: "Mobile",
  // },
]

export const experiencesData = [
  {
    title: "Graduated from University of North Florida",
    company: "",
    location: "Jacksonville, FL",
    description:
      "I graduated with a B.S. in Computer Science after which I immediately found a job as a web programmer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Web Applications Programmer",
    company: "APPX Inc.",
    location: "Jacksonville, FL",
    description:
      "I built web templates for various state archives for data management systems.",
    icon: React.createElement(FaComputer),
    date: "2016 - 2017",
  },
  {
    title: "Front-End Developer",
    company: "TIAA Bank",
    location: "Jacksonville, FL",
    description:
      "I contributed to the company's main public site which was a Single Page Application for new and existing clients.",
    icon: React.createElement(TbBuildingBank),
    date: "2017 - 2019",
  },
  {
    title: "UI Developer (Full Stack)",
    company: "Credit Suisse Bank",
    location: "Research Triangle, NC",
    description:
      "I worked on the full-stack of a dashboard app for a data management system used by the bank's business clients and data analysts.",
    icon: React.createElement(CgSwiss),
    date: "2019 - 2023",
  },
  {
    title: "Front End Software Engineer",
    company: "Bank of America",
    location: "Charlotte, NC",
    description:
      "I spearheaded the development of a new client-facing application, enhancing the bank's digital services and improving customer satisfaction.",
    icon: React.createElement(SiBankofamerica),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Image Wizard",
    type: 'fullstack',
    description:
      "A DALL-E clone where users can utilize an AI image generator and share amazing creative pics with the community.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    imageUrl: thumbnails.imgWizard,
    siteUrl: 'https://image-wizard.vercel.app/',
    srcUrl: 'https://github.com/RodChris/image_wizard'
  },
  {
    title: "Wheels on Demand",
    type: 'frontend',
    description:
      "Car rental app with a user-friendly interface and a wide selection of vehicles that simplifies renting a car for your next road trip!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "RapidAPI"],
    imageUrl: thumbnails.carShowcase,
    siteUrl: 'https://car-showcase-sable-zeta.vercel.app/',
    srcUrl: 'https://github.com/RodChris/car_showcase'
  },
  {
    title: "TrailTrekker",
    type: 'ux',
    description:
      "A stunning travel app landing page featuring everything you'll need for your next awesome hiking adventure!",
    tags: ["UX", "React", "Next.js", "TypeScript", "Tailwind", "Mobile Design"],
    imageUrl: thumbnails.travelApp,
    siteUrl: 'https://travel-app-jade-seven.vercel.app/',
    srcUrl: 'https://github.com/RodChris/travel_app'
  },
  {
    title: "Next Gen Bank",
    type: 'ux',
    description:
      "A financial app landing page with stunning visuals and user-centric features that redefine the way you interact with your financial institution online.",
    tags: ["UX", "React", "Tailwind", "Mobile Design"],
    imageUrl: thumbnails.bankApp,
    siteUrl: 'https://modern-bank-app-indol-six.vercel.app/',
    srcUrl: 'https://github.com/RodChris/modern_bank_app'
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  {
    name: "HTML",
    img: icons.html,
  },
  {
    name: "CSS",
    img: icons.css,
  },
  {
    name: "JavaScript",
    img: icons.javascript,
  },
  {
    name: "React",
    img: icons.react
  },
  {
    name: "Redux",
    img: icons.redux
  },
  {
    name: "Git",
    img: icons.git
  },
  {
    name: "Sass",
    img: icons.sass
  },
  {
    name: "Tailwind",
    img: icons.tailwind
  },
  {
    name: "TypeScript",
    img: icons.typeScript
  },
  {
    name: "Node.js",
    img: icons.nodejs
  },
  {
    name: "Next.js",
    img: icons.next
  },
  {
    name: "MongoDB",
    img: icons.mongoDB
  },
  {
    name: "GraphQL",
    img: icons.graphQL
  },
  {
    name: "Java",
    img: icons.java
  },
  {
    name: "JIRA",
    img: icons.jira
  },
  // {
  //   name: "Python",
  //   img: ""
  // },
  // {
  //   name: "Django",
  //   img: ""
  // },
  // {
  //   name: "Framer Motion",
  //   img: ""
  // },
] as const;