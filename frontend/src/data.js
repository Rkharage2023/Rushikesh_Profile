// src/data.js — All portfolio content lives here for easy editing

export const personal = {
  name: "Rushikesh",
  fullName: "Rushikesh Kharage",
  role: "Software Engineer",
  tagline:
    "Building intelligent systems at the intersection of Web, AI & Blockchain.",
  bio: `I'm a final-year Computer Science Engineering student at D.K.T.E. Society's Textile and Engineering Institute, Ichalkaranji — passionate about building production-grade systems that solve real-world problems. I specialize in Full Stack development with React & Node.js, Machine Learning integration, and Blockchain-based traceability.`,
  bio2: `When I'm not writing code, I'm exploring new tech stacks, contributing to research projects, or studying AI/ML architectures deep into the night. I believe software is most powerful when it's fast, transparent, and built with care.`,
  location: "Ichalkaranji, Maharashtra, India",
  email: "rushikeshkharage04@gmail.com",
  github: "https://github.com/Rkharage2023?tab=repositories",
  linkedin: "https://www.linkedin.com/in/rushikeshkharage/",
  twitter: "https://twitter.com/rushikesh",
  resumeUrl: "/resume.pdf",
  available: true,
};

export const typingWords = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "Blockchain Developer",
  "ML Integration Specialist",
  "Open Source Enthusiast",
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 92, icon: "⚛️" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "TypeScript", level: 78, icon: "🔷" },
    { name: "Framer Motion", level: 72, icon: "🎞️" },
    { name: "Next.js", level: 70, icon: "▲" },
  ],
  Backend: [
    { name: "Node.js", level: 88, icon: "🟩" },
    { name: "Express.js", level: 86, icon: "🚂" },
    { name: "Python", level: 82, icon: "🐍" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "JWT / OAuth", level: 75, icon: "🔐" },
  ],
  "Data & AI": [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "PostgreSQL", level: 74, icon: "🐘" },
    { name: "Scikit-learn", level: 80, icon: "🤖" },
    { name: "Random Forest", level: 82, icon: "🌲" },
    { name: "Pandas / NumPy", level: 78, icon: "📊" },
  ],
  "Blockchain & Tools": [
    { name: "Ethereum / Solidity", level: 70, icon: "⟠" },
    { name: "Hyperledger", level: 65, icon: "🔗" },
    { name: "Git & GitHub", level: 90, icon: "📦" },
    { name: "Docker", level: 68, icon: "🐳" },
    { name: "Postman", level: 88, icon: "📮" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Apartment Management System",

    subtitle: "Smart AI-Driven Apartment & Resident Management Platform",

    description:
      "A smart apartment management platform for handling residents, maintenance, and operations with efficiency and ease.",

    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1920&q=100",

    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],

    live: "https://apartment-frontend-alpha.vercel.app/login",

    github: "https://github.com/Rkharage2023/Apartment_Management_System",

    featured: true,

    color: "#10b981",
  },
  {
    id: 2,
    title: "Online Learning Platform",

    subtitle: "Full-Stack E-Learning Platform with Interactive Courses",

    description:
      "A modern e-learning platform offering course management, secure authentication, and a seamless learning experience for students and instructors.",

    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1920&q=100",

    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],

    live: "https://e-learn-project-ten.vercel.app/",

    github: "https://github.com/Rkharage2023/E-Learn-Project",

    featured: true,

    color: "#6366f1",
  },
  {
    id: 3,
    title: "E-Commerce Platform",

    subtitle: "Full-Stack Online Shopping Platform",

    description:
      "A modern e-commerce platform featuring product browsing, cart management, and secure checkout for a smooth online shopping experience.",

    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&q=100",

    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],

    live: "https://eproductsplatform.netlify.app/",

    github: "https://github.com/Rkharage2023/E-commerce-Platform",

    featured: false,

    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "PhotoGuard App",

    subtitle: "AI-Powered Image Privacy & Protection Tool",

    description:
      "An AI-based application that detects sensitive content in images and enhances privacy through intelligent analysis and protection features.",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=100",

    tech: ["React.js", "Python", "FastAPI", "PostgreSQL", "Scikit-learn"],

    live: "https://photoguard.netlify.app/",

    github: "https://github.com/Rkharage2023/PhotoGuardApp",

    featured: false,

    color: "#f59e0b",
  },
  {
    id: 5,
    title: "CryptoTrace",
    subtitle: "Supply Chain Blockchain DApp",
    description:
      "A decentralized application for tracking supply chain events on Ethereum. Smart contracts ensure tamper-proof logging at every step from manufacturer to consumer.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80",
    tech: ["Solidity", "Ethereum", "React.js", "Web3.js", "Hardhat"],
    live: "https://cryptotrace.demo",
    github: "https://github.com/rushikesh/cryptotrace",
    featured: false,
    color: "#22d3ee",
  },
  {
    id: 6,
    title: "CodeCollab",
    subtitle: "Real-time Collaborative IDE",
    description:
      "A browser-based collaborative code editor with real-time sync, syntax highlighting for 10+ languages, chat, and one-click code execution via sandboxed Docker containers.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    tech: ["React.js", "Socket.io", "Node.js", "Docker", "Monaco Editor"],
    live: "https://codecollab.demo",
    github: "https://github.com/rushikesh/codecollab",
    featured: false,
    color: "#f43f5e",
  },
];

export const timeline = [
  {
    year: "2025",
    type: "education",
    title: "B.E. in Computer Science Engineering",
    org: "D.K.T.E. Society's Textile and Engineering Institute, Ichalkaranji",
    desc: "Final-year student. CGPA: 7.9 / 10. Final project: MRLSentinel — Digital Farm Management System with ML & Blockchain.",
    icon: "🎓",
  },
  {
    year: "2024",
    type: "experience",
    title: "Full Stack Developer Intern",
    org: "Tech Startup (Remote)",
    desc: "Built and deployed 3 production React applications. Worked with REST APIs, JWT authentication, MongoDB atlas, and CI/CD pipelines using GitHub Actions.",
    icon: "💼",
  },
  {
    year: "2024",
    type: "achievement",
    title: "Smart India Hackathon — Finalist",
    org: "Ministry of Education, Govt. of India",
    desc: "Team of 6. Built a real-time food safety monitoring system using IoT sensors and React dashboard. Reached national finals.",
    icon: "🏆",
  },
  {
    year: "2023",
    type: "experience",
    title: "Backend Developer Intern",
    org: "Local Software Firm",
    desc: "Developed RESTful APIs with Node.js & Express. Optimized MongoDB queries resulting in 40% performance improvement on key endpoints.",
    icon: "💻",
  },
  {
    year: "2022",
    type: "education",
    title: "HSC — Science (PCM + CS)",
    org: "Maharashtra State Board",
    desc: "Scored 88.4%. Foundation in Mathematics, Physics, and Computer Science. First exposure to programming via C++ and web basics.",
    icon: "📚",
  },
];

export const techIcons = [
  { name: "React", color: "#61dafb", bg: "rgba(97,218,251,0.1)" },
  { name: "Node.js", color: "#68a063", bg: "rgba(104,160,99,0.1)" },
  { name: "MongoDB", color: "#4db33d", bg: "rgba(77,179,61,0.1)" },
  { name: "TypeScript", color: "#3178c6", bg: "rgba(49,120,198,0.1)" },
  { name: "Python", color: "#3776ab", bg: "rgba(55,118,171,0.1)" },
  { name: "Tailwind", color: "#38bdf8", bg: "rgba(56,189,248,0.1)" },
  { name: "Docker", color: "#2496ed", bg: "rgba(36,150,237,0.1)" },
  { name: "Ethereum", color: "#9945ff", bg: "rgba(153,69,255,0.1)" },
  { name: "Scikit", color: "#f7931e", bg: "rgba(247,147,30,0.1)" },
  { name: "Git", color: "#f05032", bg: "rgba(240,80,50,0.1)" },
  { name: "Express", color: "#ffffff", bg: "rgba(255,255,255,0.07)" },
  { name: "PostgreSQL", color: "#336791", bg: "rgba(51,103,145,0.1)" },
];
