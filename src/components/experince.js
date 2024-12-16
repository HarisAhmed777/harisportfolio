import frontend from '../components/images/frontend.png';
import backend from '../components/images/backend.png';
import design from '../components/images/design.png';
import cloud from '../components/images/cloud.png';
import weatherapp from '../components/images/Weatherapp.png';
import starholidays from '../components/images/starholidays.png';
import calci from '../components/images/calci.png';
import admin from '../components/images/HolidayAdmin.png';
import OldPortfolio from '../components/images/OldPortfolio.png';
import Masjid from '../components/images/Masjid.png';


export const experiences = [
    {
      title: "Frontend Development",
      company_name: "React.js",
      icon: frontend,
      iconBg: "#383E56",
      date: "Jun 2022 - Present",
      points: [
        "Learned to build dynamic user interfaces with reusable React components",
        "Explored state management using React’s Context API and hooks",
        "Mastered navigation and routing with React Router for single-page applications",
        "Studied performance optimization techniques like memoization and lazy loading",
        "Gained experience integrating third-party libraries and APIs into React apps",
        "Developed responsive and accessible designs using Tailwind CSS with React",
      ],
    },
    {
      title: "UI Designing",
      company_name: "Shadcn,Material UI,Tailwind,Bootstrap",
      icon: design,
      iconBg: "white",
      date: "Sep 2022 - Present",
      points: [
        "Learned to create responsive and modern designs using Tailwind CSS",
        "Explored Material UI components for building professional-grade user interfaces",
        "Mastered UI customization and design tokens with ShadCN",
        "Gained experience crafting layouts and styling with CSS",
        "Studied rapid prototyping and design consistency using Bootstrap",
        "Developed accessible and user-friendly interfaces with a focus on usability",
      ]
      
    },
    {
      title: "Backend Development",
      company_name: "Node js, Express js, Mongoose",
      icon: backend,
      iconBg: "#383E56",
      date: "Dec 2022 - Present",
      points: [
        "Learned to build RESTful APIs using Node.js and Express.js",
        "Gained experience handling server-side logic and middleware in Express.js",
        "Explored database design and management with MongoDB",
        "Implemented CRUD operations with Mongoose for MongoDB integration",
        "Mastered authentication and authorization using JSON Web Tokens (JWT)",
        "Handled API security with best practices like input validation and CORS",
        "Learned to optimize API performance using caching and pagination techniques",
        "Explored error handling and debugging in server-side applications",
        "Implemented file upload and management with Multer in Node.js",
        "Studied deployment and scaling of backend applications using cloud platforms",
      ]
      
    },
    {
      title: "Mobile Application Development",
      company_name: "React Native",
      icon: cloud,
      iconBg: "black",
      date: "Jun 2023 - Present",
      points: [
        "Learned to build cross-platform mobile applications using React Native",
        "Explored components and styling specific to React Native, like View, Text, and StyleSheet",
        "Gained experience with navigation using React Navigation for seamless user experience",
        "Mastered state management in mobile apps using React Context API and hooks",
        "Integrated RESTful APIs and handled data with Axios in React Native",
        "Explored native device features like camera, location, and storage using third-party libraries",
        "Studied optimization techniques for improving performance in React Native apps",
      ]
      
    },
  ];

  
  export const projects = [
    {
      name: "Weather App",
      description:
      "A dynamic weather application that uses a third-party API to fetch and display weather details for any global location. The app provides real-time information with a simple and user-friendly interface.",

      tags: [
        {
          name: "React",
          color: "text-blue-600",
        },
        {
          name: "Bootstrap",
          color: "text-green-500",
        },
       
      ],
      image:weatherapp,
      alt: "weatherapp",
      live_link: "https://weatherappharis.netlify.app/",
    },
    {
      name: "Holiday Booking App",
      description:
      "A full-stack MERN application for booking holiday packages, offering user authentication, payment gateway integration, and dynamic package management. Features include user login, profile management, and a seamless holiday booking experience.",

      tags: [
        {
          name: "MERN",
          color: "text-blue-600",
        },
        {
          name: "Bootstrap",
          color: "text-green-500",
        },
        {
          name: "Material UI",
          color: "text-red-700",
        },
      ],
      image:starholidays,
      alt: "Holiday Booking Site",
      live_link: "https://capable-medovik-acac7d.netlify.app/",
    },
    {
      name: "Simple Calculator",
      description:
      "A responsive and user-friendly calculator built with React. The app allows users to perform basic arithmetic operations with an intuitive interface, making it simple to use for quick calculations on any device.",

      tags: [
        {
          name: "React",
          color: "text-blue-600",
        },
        {
          name: "Bootstrap",
          color: "text-green-500",
        },
       
      ],
      image:calci,
      alt: "Simple Calculator",
      live_link: "https://ephemeral-hummingbird-7f0604.netlify.app/",
    },
    {
      name: "Admin Dashboard",
      description:
      "An admin dashboard designed to manage and monitor various aspects of a system. It includes features like data visualization, user management, and real-time insights to streamline administrative tasks in a professional UI.",

      tags: [
        {
          name: "MERN",
          color: "text-blue-600",
        },
        {
          name: "Bootstrap",
          color: "text-green-500",
        },
        {
          name: "Material UI",
          color: "text-red-700",
        },
      ],
      image: admin,
      alt: "Admin DashBoard",
      live_link: "",
    },
    {
      name: "Prayer Timings Calculator",
      description:
      "A prayer timing app that provides accurate prayer schedules for any location worldwide. The app includes secure login, JWT authentication, and personalized settings, allowing users to view prayer times based on their location.",

      tags: [
        {
          name: "MERN",
          color: "text-blue-600",
        },
        {
          name: "restapi",
          color: "text-green-500",
        },
        {
          name: "Tailwind",
          color: "text-red-700",
        },
      ],
      image:Masjid,
      alt: "Prayer Timing Calculator",  
      live_link: "https://celebrated-conkies-c8a055.netlify.app/",
    },
    {
      name: "My Old Protfolio",
      description:
      "A personal portfolio showcasing my skills and projects, built to highlight my experience as a developer. It features a clean, responsive design with sections on my expertise, work, and contact information.",

      tags: [
        {
          name: "html",
          color: "text-blue-600",
        },
        {
          name: "Plain CSS",
          color: "text-green-500",
        },
        {
          name: "Bootstrap",
          color: "text-red-700",
          
        },
      ],
      image:OldPortfolio,
      alt: "Portfolio",
      live_link: "https://resplendent-crostata-c6a7d7.netlify.app/",
    },
    // {
    //   name: "PG Management",
    //   description:
    //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
    //   source_code_link: "https://github.com/Rajeshesh",
    //   live_link: "http://3.82.129.40:8000/",
    // },
  ];
 export  const services = [
    {
      title: "Web Developer",
      icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/web.png",
    },
    {
      title: "React Developer",
      icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/frontend.png",
    },
    {
      title: "Backend Developer",
      icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/backend.png",
    },
    {
      title: "Full Stack Developer",
      icon: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/fullStack.png",
    },
  ];