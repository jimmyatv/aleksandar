import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import about1 from '../assets/about1.jpg';
export const projectExperience = [
  {
    name: "Number of projects",
    projects: 36,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Number of clients I have worked with",
    projects: 69,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 27,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "As a frontend developer, I can contribute to your team by crafting visually appealing and responsive user interfaces. My expertise in React, JavaScript, and SCSS ensures that I can create seamless and interactive web experiences.",
  
  "We leverage frontend development to create digital products, ensuring not only a visually appealing interface but also contributing to the transformation of businesses",
];

export const workExp = [
  {
    place: "Selltico, Serbia",
    tenure: "Feb 2023 - Present",
    role: "Frontend developer",
    detail:
      "I'm a Frontend Developer based in Serbia, that loves to code and build products with a delightful user experience. Some things that make me excited are JavaScript, React.",
  },
  {
    place: "Amazon, USA",
    tenure: "Apr 2018 - Present",
    role: "Amazon Associate",
    detail:
      "Since 2018, I've been deeply engaged in affiliate marketing as an Amazon Associate, consistently refining and optimizing strategies for sustained success. My active involvement in the program continues to this day.",
  },
  {
    place: "Upwork, USA",
    tenure: "Apr 2018 - Feb 2023",
    role: "Fronend developer",
    detail:
      "Freelance experience with upwork. Contributed to high-profile projects, providing expertise in frontend development, with a specific focus on React and JavaScript technologies.",
  },
];

export const comments = [
  {
    name: "Frontend Developer",
    comment:
      "I'm a Frontend Developer based in Serbia, that loves to code and build products with a delightful user experience. I love working in between product and developer experience.",
    img: about1,
  },
  {
    name: "Aleksandar Jimmy TEST",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: about1,
  },
  {
    name: "Aleksandar Jimmy TEST",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: about1,
  },
  {
    name: "Aleksandar Jimmy TEST",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: about1,
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};