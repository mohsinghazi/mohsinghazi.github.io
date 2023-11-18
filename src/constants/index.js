import {
  BeFit,
  News,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tripguide,
  avatar,
  html5,
  restApi,
  sphere,
  intern,
  infy,
  deloitte,
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
    icon: avatar,
  },
  {
    title: "Front-end Developer",
    icon: html5,
  },
  {
    title: "Backend Developer",
    icon: restApi,
  },
  {
    title: "Full-stack Developer",
    icon: sphere,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Yuwaiting Technologies Pvt Ltd",
    icon: intern,
    iconBg: "#fff",
    date: "Feb 2021 - May 2021",
    points: [
      "Actively engaged in web creative design and development.",
      "Learned ReactJS and ExpressJSwhile creating and deployingweb applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented a responsive,mobile-first approach",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Infosys",
    icon: infy,
    iconBg: "#3781C2",
    date: "Aug 2021 - Nov 2022",
    points: [
      "Work in a team-oriented environmentfor all aspects of development.",
      "Developedweb applicationUI components using ReactJS for customer accounts, which included debugging issues, diagnosing root causes, and identifying solutions",
      "Collaboratedwith productteammembers to implement newfeature developments.",
    ],
  },
  {
    title: "Senior Executive",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#fff",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "BeFit",
    description:
      "Web-based tool that enables user to search exercises It comes with hundreds of built-in workout routines. The user has the option to search by specific body part or workout.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: BeFit,
    source_code_link: "https://github.com/MDMohsinGhazi/BeFit",
    web_link: "https://be-fit-opal.vercel.app/",
  },
  {
    name: "Flutter News",
    description:
      "A web application that shows news based on the user's current location and allows them to search for the most recent, worldwide, and categorised news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: News,
    source_code_link: "https://https://github.com/MDMohsinGhazi/News-App.com/",
    web_link: "https://wondrous-wisp-dcb5ec.netlify.app/",
  },
  {
    name: "Hotel booking",
    description:
      "A comprehensive travel booking platform that allows users to book hotels and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MDMohsinGhazi/hotel-booking",
    web_link: "https://hotel-booking-eight.vercel.app",
  },
];

export { services, technologies, experiences, projects };
