import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Video,
  redux,
  tailwind,
  Location,
  nodejs,
  mongodb,
  git,
  cling,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  Chat,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  learn,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cling Multi Solutions Pvt. Ltd.",
    icon: cling,
    iconBg: "#fff",
    date: "June 2023 - Nov 2023",
    points: [
      "Contributed to the development of innovative software applications. ",
      "Developed and implemented software solutions that addressed specific business needs and improved operational efficiency. ",
      "Worked collaboratively with a team of experienced developers to design, implement, and test software solutions that addressed specific business challenges and aligned with strategic objectives. ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Development Training",
    company_name: "Learn & Build Pvt. Ltd.",
    icon: learn,
    iconBg: "#fff",
    date: "June 2023 - Nov 2023",
    points: [
      "Gained Knowledge of MERN stack: MongoDB, Express.js, React.js, and Node.js",
      "Gained Experience in building full-stack web applications",
      "Developed a full-stack e-commerce application using the MERN stack.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Video Call Application",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Video,
    source_code_link: "https://github.com/yashP45/webrtcVideochat",
    live_link: "https://playful-sunshine-debbb3.netlify.app/",
  },
  {
    name: "Chat Bot using Gpt 3.5",
    description:
      "Developed an advanced chatbot leveraging the OpenAI GPT-3.5 API to deliver intelligent and context-aware responses,enhancing user interactions across various domains",
    tags: [
      {
        name: "reactvite",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Chat,
    source_code_link: "https://github.com/yashP45/chat-app",
    live_link: "",
  },
  {
    name: "Background Location Track",
    description:
      "A Mobile App that allows user to track location in background (even when the App is closed).User can also stop the tracking & see their previous tracking history ",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mapbox",
        color: "green-text-gradient",
      },
    ],
    image: Location,
    source_code_link: "https://github.com/yashP45/driveuAssign",
    live_link:
      "https://drive.google.com/file/d/1DxwAD6EPk2dSJ9OzxnJ39uLjTOjy1G0V/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
