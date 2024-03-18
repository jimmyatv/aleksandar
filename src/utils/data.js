import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';


export const projects = [
  {
    name: 'React project, in progress...',
    url: 'https://jimmyatv.github.io/myBabySpa',
    img: project1
  },
  {
    name: 'Essential Landing Page',
    url: 'https://jimmyatv.github.io/SunDivisor',
    img: project2
  },
  {
    name: 'Vue project, expense tracker',
    url: 'https://jimmyatv-expensetracker.netlify.app',
    img: project4
  },
  {
    name: 'CRUD',
    url: 'https://jimmyatv.github.io/CRUD',
    img: project5
  },
  {
    name: 'Vanila JS & Pagination & local storage',
    url: 'https://jimmyatv.github.io/GroceryList',
    img: project6
  },
  {
    name: 'Basic HTML,CSS & JS',
    url: 'https://jimmyatv.github.io/OwnItAll-byAlex',
    img: project3
  }
]

//? Company achivment
export const projectExperience = [
  {
    name: "Number of projects and tasks",
    projects: 336,
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

//? My skills
export const WhatDoIHelp = [
  "As a frontend developer, I can contribute to your team by crafting visually appealing and responsive user interfaces. My expertise in React, JavaScript, and SCSS ensures that I can create seamless and interactive web experiences.",
  
  "We leverage frontend development to create digital products, ensuring not only a visually appealing interface but also contributing to the transformation of businesses",
];


//? Experiance
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
    place: "Freelance, Cyprus",
    tenure: "Apr 2019 - Feb 2023",
    role: "React developer",
    detail:
      "Since 2019, I have been working remotely as a freelance developer in Cyprus on a half-time basis, successfully completing projects and I have gained valuable experience.",
  },
];


//? Comments
export const comments = [
  {
    name: "Frontend Developer",
    comment:
      "I'm a Frontend Developer based in Serbia, that loves to code and build products with a delightful user experience. I love working in between product and developer experience.",
    img: about1,
  },
  {
    name: "UI/UX",
    comment:
      "Crafting intuitive digital experiences with meticulous attention to detail. Bringing ideas to life through visually stunning and user-friendly designs.",
    img: about2,
  },
  {
    name: "Cycling",
    comment:
      "Exploring the world with a passion for pedaling. Turning routes into exhilarating journeys, fueled by adventure and determination.",
    img: about3,
  },
  {
    name: "Creative Solutions",
    comment:
      "Innovative, intuitive, and imaginative. Constructing digital connections that swiftly and reliably link businesses with their customers.",
    img: about4,
  },
];


//? Slider
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