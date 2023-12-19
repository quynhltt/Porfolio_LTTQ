import React from "react";
import img11 from "../images/demo-fiverr.png";
import img12 from "../images/demo-fiverr2.png";
import img13 from "../images/demo-fiverr3.png";
import img14 from "../images/demo-fiverr4.png";

import img21 from "../images/demo-booking.png";
import img22 from "../images/demo-booking2.png";
import img23 from "../images/demo-booking3.png";
import img24 from "../images/demo-booking4.png";

import img31 from "../images/demo-shoeshop.png";
import img32 from "../images/demo-shoeshop2.png";
import img33 from "../images/demo-shoeshop3.png";

import img41 from "../images/demo-corpvision.png";
import img42 from "../images/demo-corpvision2.png";
import img43 from "../images/demo-corpvision3.png";
import img44 from "../images/demo-corpvision4.png";
import img45 from "../images/demo-corpvision5.png";

const imgProject1 = [
  {
    id: 11,
    src: img11,
    alt: "Image 11",
  },
  {
    id: 12,
    src: img12,
    alt: "Image 12",
  },
  {
    id: 13,
    src: img13,
    alt: "Image 13",
  },
  {
    id: 14,
    src: img14,
    alt: "Image 14",
  },
];

const imgProject2 = [
  {
    id: 21,
    src: img21,
    alt: "Image 21",
  },
  {
    id: 22,
    src: img22,
    alt: "Image 22",
  },
  {
    id: 23,
    src: img23,
    alt: "Image 23",
  },
  {
    id: 24,
    src: img24,
    alt: "Image 24",
  },
];

const imgProject3 = [
  {
    id: 31,
    src: img31,
    alt: "Image 31",
  },
  {
    id: 32,
    src: img32,
    alt: "Image 32",
  },
  {
    id: 33,
    src: img33,
    alt: "Image 33",
  },
];

const imgProject4 = [
  {
    id: 41,
    src: img41,
    alt: "Image 41",
  },
  {
    id: 42,
    src: img42,
    alt: "Image 42",
  },
  {
    id: 43,
    src: img43,
    alt: "Image 43",
  },
  {
    id: 44,
    src: img44,
    alt: "Image 44",
  },
  {
    id: 45,
    src: img45,
    alt: "Image 45",
  },
];

export const dataProject = [
  {
    id: 1,
    name: "Fiverr Capstone",
    path: "https://fiverrcapstone.vercel.app/",
    thumbnailPath: "images/demo-fiverr.png",
    size: 5,
    desc: [
      "Fiverr Capstone a single page application having features based on Fiverr Website. Fiverr is a multinational online marketplace for freelance services.",
      "The platform connects freelancers to people or businesses looking to hire, encouraging a wide range of services in a free market. It offers both buyers and sellers a digitally streamlined transactional platform.",
      "The application can be used for small or medium enterprise's portfolio.",
      "Product can be used on smartphone and tablet.",
    ],
    role: "Frontend Developer, Leader",
    technology: ["HTML5", "CSS3", "ReactJS", "Redux Toolkit", "Ant Design", "Tailwind CSS", "Git"],
    demo: imgProject1,
  },
  {
    id: 2,
    name: "Movie Ticket Booking Capstone",
    path: "https://bc41-capstone-reactjs-bookingmovie.vercel.app/",
    thumbnailPath: "images/demo-booking.png",
    size: 5,
    desc: [
      "Initializing and settings a movie ticket booking site with Create-react-app.",
      "Build features for online ticket booking sites such as real-time booking, product details, product review, connections to distribution partners.",
      "Product can be used on smartphone and tablet.",
    ],
    role: "Frontend Developer",
    technology: ["HTML5", "CSS3", "ReactJS", "Redux Toolkit", "Ant Design", "Tailwind CSS", "Git"],
    demo: imgProject2,
  },
  {
    id: 3,
    name: "Shoe Shop Redux Webpage",
    path: "https://bc41-lttq-redux-shoe-shop.vercel.app/",
    thumbnailPath: "images/demo-shoeshop.png",
    size: 3,
    desc: ["Initializing and settings a sale simulation webpage with Create-react-app.", "Build features for users to add and check products in the cart"],
    role: "Frontend Developer",
    technology: ["HTML5", "CSS3", "Bootstrap", "ReactJS", "Redux", "Git"],
    demo: imgProject3,
  },
  {
    id: 4,
    name: "Corp Vision Capstone",
    path: "https://bc41-bootstrap-capstone.vercel.app/",
    thumbnailPath: "images/demo-corpvision.png",
    size: 3,
    desc: ["Build a fully responsive layout having the same effect as the sample layout.", "Product can be used for small or medium enterprise's portfolio."],
    role: "Frontend Developer",
    technology: ["HTML5", "CSS3", "Bootstrap", "Owl Carousel", "Fancy Box", "Git"],
    demo: imgProject4,
  },
];
