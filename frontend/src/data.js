// src/data.js — All portfolio content lives here for easy editing

export const personal = {
  name: "Rushikesh",
  fullName: "Rushikesh Patil",
  role: "Software Engineer",
  tagline:
    "Building intelligent systems at the intersection of Web, AI & Blockchain.",
  bio: `I'm a final-year Computer Science Engineering student at D.K.T.E. Society's Textile and Engineering Institute, Ichalkaranji — passionate about building production-grade systems that solve real-world problems. I specialize in Full Stack development with React & Node.js, Machine Learning integration, and Blockchain-based traceability.`,
  bio2: `When I'm not writing code, I'm exploring new tech stacks, contributing to research projects, or studying AI/ML architectures deep into the night. I believe software is most powerful when it's fast, transparent, and built with care.`,
  location: "Ichalkaranji, Maharashtra, India",
  email: "rushikesh@example.com",
  github: "https://github.com/rushikesh",
  linkedin: "https://linkedin.com/in/rushikesh",
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
    title: "MRLSentinel",
    subtitle: "Digital Farm Management System",
    description:
      "An AI-powered platform for monitoring antimicrobial usage and MRL (Maximum Residue Level) compliance in livestock farming. Uses Random Forest ML for risk prediction and Ethereum blockchain for immutable traceability of treatment records.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Scikit-learn",
      "Ethereum",
      "Hyperledger",
    ],
    live: "https://mrlsentinel.demo",
    github: "https://github.com/rushikesh/mrlsentinel",
    featured: true,
    color: "#10b981",
  },
  {
    id: 2,
    title: "Online Ticket Booking System",
    subtitle: "Full Stack Event Platform",
    description:
      "A full-featured event ticket booking platform with real-time seat selection, secure payments, QR-based digital tickets, and an admin dashboard for event management and analytics.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
    live: "https://ticketbooking.demo",
    github: "https://github.com/rushikesh/ticket-booking",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 3,
    title: "DevConnect",
    subtitle: "Developer Networking Platform",
    description:
      "A LinkedIn-style platform built for developers — create profiles, post updates, follow peers, and get matched with collaborators based on tech stack similarity.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    live: "https://devconnect.demo",
    github: "https://github.com/rushikesh/devconnect",
    featured: false,
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "SmartExpense AI",
    subtitle: "AI-Powered Budget Tracker",
    description:
      "An expense tracker that uses ML clustering to auto-categorize transactions and provides natural-language spending insights. Integrates with bank export CSVs.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    tech: ["React.js", "Python", "FastAPI", "PostgreSQL", "Scikit-learn"],
    live: "https://smartexpense.demo",
    github: "https://github.com/rushikesh/smart-expense",
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
    desc: "Final-year student. CGPA: 8.6 / 10. Final project: MRLSentinel — Digital Farm Management System with ML & Blockchain.",
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
