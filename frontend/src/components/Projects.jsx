// src/components/Projects.jsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../data";

/* Project card */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const { title, subtitle, description, image, tech, live, github, color } =
    project;

  return (
    <motion.div
      className="glass-card rounded-3xl overflow-hidden card-tilt group cursor-default"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -8,
        boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${color}30`,
        borderColor: `${color}40`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, #0d1424, transparent)`,
          }}
        />
        {/* Color accent */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: color }}
        />

        {/* Featured star */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-amber-300 bg-amber-500/20 border border-amber-500/30">
            <Star size={10} fill="currentColor" /> Featured
          </div>
        )}

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} /> Source
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-display font-bold text-lg dark:text-white text-slate-900 mb-0.5">
            {title}
          </h3>
          <p className="text-xs font-mono" style={{ color }}>
            {subtitle}
          </p>
        </div>
        <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Featured",
    ...new Set(projects.flatMap((p) => p.tech.slice(0, 2))),
  ];
  const filtered =
    filter === "All"
      ? projects
      : filter === "Featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Section BG */}
      <div className="absolute inset-0 dark:bg-dark-900/50 bg-slate-100/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            02 / Projects
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto">
            A collection of projects spanning web apps, ML systems, and
            blockchain DApps — each one solving a real problem.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["All", "Featured", "React.js", "Blockchain", "Python"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-gradient-to-r from-brand-600 to-accent-violet text-white shadow-glow-sm"
                  : "glass dark:text-slate-400 text-slate-600 hover:text-brand-400"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/Rkharage2023?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-2xl dark:text-slate-300 text-slate-700 font-medium hover:text-brand-400 border border-white/10 hover:border-brand-500/30 transition-all"
          >
            <Github size={18} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
