import TEMPLATE_ONE_IMAGE from "../assets/TEMPLATE_1.png";
import TEMPLATE_TWO_IMAGE from "../assets/TEMPLATE_2.png";
import TEMPLATE_THREE_IMAGE from "../assets/TEMPLATE_3.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMAGE,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMAGE,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMAGE,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalatte = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0F4FF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E4F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with 6+ years of experience building full-stack applications using modern web technologies. Skilled in designing scalable systems and mentoring junior developers.",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "123 Main Street, San Francisco, CA, USA",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    website: "https://www.johndoe.dev",
  },
  workExperience: [
    {
      company: "Tech Solution Inc.",
      role: "Senior Frontend Engineer",
      startDate: "2022-03",
      endDate: "2025-04",
      description:
        "Led the frontend team to build scalable enterprise applications using React, TypeScript, and Redux. Collaborated closely with backend engineers and UI/UX designers to ensure seamless integration and user experience.",
    },
    {
      company: "Coding Dev Co.",
      role: "Full Stack Developer",
      startDate: "2020-01",
      endDate: "2022-02",
      description:
        "Developed and maintained web applications using the MERN stack. Implemented RESTful APIs and optimized frontend performance using React hooks and lazy loading.",
    },
    {
      company: "Startup Company",
      role: "Junior Web Developer",
      startDate: "2018-06",
      endDate: "2019-12",
      description:
        "Built and maintained responsive websites for clients. Worked on landing pages, blog platforms, and eCommerce sites using HTML, CSS, JavaScript, and jQuery.",
    },
  ],
  education: [
    {
      degree: "M.Sc. in Software Engineering",
      institution: "Tech University",
      startDate: "2021-08",
      endDate: "2023-06",
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "State University",
      startDate: "2017-08",
      endDate: "2021-05",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      startDate: "2015-06",
      endDate: "2017-05",
    },
  ],
  skills: [
    { name: "JavaScript", progress: 95 },
    { name: "React", progress: 90 },
    { name: "Node.js", progress: 85 },
    { name: "TypeScript", progress: 80 },
    { name: "MongoDB", progress: 75 },
    { name: "HTML & CSS", progress: 98 },
    { name: "Git & GitHub", progress: 90 },
  ],
  projects: [
    {
      title: "Project Manager App",
      description:
        "A task and team management platform built with the MERN stack. Features include Kanban boards, role-based access control, and real-time collaboration using Socket.io.",
      github: "https://github.com/johndoe/project-manager-app",
      liveDemo: "https://projectmanager.dev",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An e-Commerce site developed using Next.js, Stripe, and MongoDB. Includes features like product search, cart system, checkout, admin dashboard, and order tracking.",
      github: "https://github.com/johndoe/ecommerce-platform",
      liveDemo: "https://shopwithjohn.dev",
    },
    {
      title: "Blog CMS",
      description:
        "A custom content management system for blogs, built with React and Express. Includes WYSIWYG editor, image upload, SEO optimization, and category-based filtering.",
      github: "https://github.com/johndoe/blog-cms",
      liveDemo: "https://blogcms.dev",
    },
  ],
  certifications: [
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      year: "2023",
    },
    {
      title: "React Advanced Certification",
      issuer: "Coursera",
      year: "2022",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2021",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Spanish", progress: 75 },
    { name: "French", progress: 50 },
  ],
  interests: [
    "Reading Tech Blogs",
    "Open Source Contribution",
    "Hiking and Nature Walks",
    "Gaming",
    "Traveling",
  ],
};

