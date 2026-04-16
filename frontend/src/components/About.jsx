// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Coffee, Cpu, Zap } from "lucide-react";
import { personal, skills } from "../data";

/* Stagger container */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function SkillBar({ name, level, icon, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="flex items-center gap-1.5 text-sm font-medium dark:text-slate-300 text-slate-700">
          <span>{icon}</span> {name}
        </span>
        <span className="font-mono text-xs text-brand-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${level}%` } : { width: "0%" }}
          transition={{
            duration: 1.2,
            delay: delay + 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}

const CATEGORY_COLORS = {
  Frontend: { from: "#6366f1", to: "#8b5cf6", border: "rgba(99,102,241,0.3)" },
  Backend: { from: "#10b981", to: "#06b6d4", border: "rgba(16,185,129,0.3)" },
  "Data & AI": {
    from: "#f59e0b",
    to: "#ef4444",
    border: "rgba(245,158,11,0.3)",
  },
  "Blockchain & Tools": {
    from: "#8b5cf6",
    to: "#ec4899",
    border: "rgba(139,92,246,0.3)",
  },
};

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = Object.keys(skills);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            01 / About
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── Left: bio + quick stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-8 inline-block">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-cyan flex items-center justify-center text-5xl font-display font-black text-white shadow-glow-md">
                R
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 glass-card px-3 py-1.5 rounded-xl text-xs font-medium text-brand-400 border border-brand-500/20"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨ Final Year
              </motion.div>
            </div>

            <h3 className="font-display font-bold text-2xl dark:text-white text-slate-900 mb-4">
              Software Engineer & Problem Solver
            </h3>
            <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-4">
              {personal.bio}
            </p>
            <p className="dark:text-slate-400 text-slate-600 leading-relaxed mb-8">
              {personal.bio2}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Cpu size={18} />,
                  label: "Projects Built",
                  value: "15+",
                },
                {
                  icon: <Zap size={18} />,
                  label: "Technologies",
                  value: "20+",
                },
                {
                  icon: <Coffee size={18} />,
                  label: "Cups of Coffee",
                  value: "∞",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "India",
                },
              ].map(({ icon, label, value }) => (
                <motion.div
                  key={label}
                  className="glass-card rounded-2xl p-4 flex items-center gap-3"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(99,102,241,0.4)",
                  }}
                >
                  <span className="text-brand-400">{icon}</span>
                  <div>
                    <p className="font-display font-bold text-lg dark:text-white text-slate-900">
                      {value}
                    </p>
                    <p className="text-xs dark:text-slate-500 text-slate-500">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: skill bars ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const c = CATEGORY_COLORS[tab];
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? "text-white shadow-sm"
                        : "dark:text-slate-400 text-slate-600 glass hover:text-white"
                    }`}
                    style={
                      activeTab === tab
                        ? {
                            background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                          }
                        : {}
                    }
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Skill bars */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              {skills[activeTab].map(({ name, level, icon }, i) => (
                <SkillBar
                  key={name}
                  name={name}
                  level={level}
                  icon={icon}
                  delay={i * 0.08}
                />
              ))}
            </motion.div>

            {/* Currently learning */}
            <motion.div
              className="mt-4 glass-card rounded-2xl p-4 flex items-center gap-3 border border-brand-500/20"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <span className="text-2xl">📖</span>
              <div>
                <p className="text-xs dark:text-slate-500 text-slate-500 uppercase tracking-wider font-mono">
                  Currently Learning
                </p>
                <p className="text-sm font-medium dark:text-slate-200 text-slate-700">
                  Transformer Architectures · LLM Fine-tuning · Rust
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
