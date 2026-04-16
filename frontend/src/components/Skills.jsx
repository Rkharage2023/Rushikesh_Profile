// src/components/Skills.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techIcons } from "../data";

/* Animated tech pill */
function TechPill({ name, color, bg, index }) {
  return (
    <motion.div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border font-medium text-sm cursor-default select-none"
      style={{ background: bg, borderColor: `${color}30`, color }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 20px ${color}40`,
        borderColor: color,
        y: -4,
      }}
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {name}
    </motion.div>
  );
}

/* Skill category card */
function CategoryCard({ title, emoji, skills, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6"
      style={{ borderColor: `${color}20` }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ borderColor: `${color}40` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 rounded-xl text-sm font-medium border transition-colors"
            style={{
              background: `${color}10`,
              borderColor: `${color}25`,
              color,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const categories = [
  {
    title: "Frontend",
    emoji: "🎨",
    color: "#6366f1",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "#10b981",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "JWT Auth",
      "WebSockets",
    ],
  },
  {
    title: "Data & AI / ML",
    emoji: "🤖",
    color: "#f59e0b",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Random Forest",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    title: "Databases",
    emoji: "🗄️",
    color: "#22d3ee",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose ODM", "Sequelize ORM"],
  },
  {
    title: "Blockchain",
    emoji: "⛓️",
    color: "#8b5cf6",
    skills: [
      "Solidity",
      "Ethereum",
      "Hyperledger",
      "Smart Contracts",
      "Web3.js",
      "Hardhat",
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    color: "#f43f5e",
    skills: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "Vite",
      "GitHub Actions",
      "Linux CLI",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            04 / Skills
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-lg mx-auto">
            Technologies I work with to build fast, scalable, and intelligent
            applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Tech pill cloud */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {techIcons.map(({ name, color, bg }, i) => (
            <TechPill key={name} name={name} color={color} bg={bg} index={i} />
          ))}
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ title, emoji, color, skills: s }, i) => (
            <CategoryCard
              key={title}
              title={title}
              emoji={emoji}
              color={color}
              skills={s}
              delay={0.1 + i * 0.05}
            />
          ))}
        </div>

        {/* Proficiency legend */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm dark:text-slate-500 text-slate-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Expert (2+ yrs)", color: "#6366f1" },
            { label: "Proficient (1–2 yrs)", color: "#10b981" },
            { label: "Familiar (<1 yr)", color: "#f59e0b" },
          ].map(({ label, color }) => (
            <span key={label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: color }}
              />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
