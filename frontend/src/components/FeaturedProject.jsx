// src/components/FeaturedProject.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, CheckCircle, Layers, Cpu } from "lucide-react";
import { projects } from "../data";

const featured = projects.filter((p) => p.featured);

const mrlDetails = {
  problem:
    "Livestock farmers often unknowingly violate Maximum Residue Level (MRL) standards for antimicrobial drugs — risking public health and export bans. Manual record-keeping is error-prone and non-traceable.",
  solution:
    "MRLSentinel creates a digital pipeline: animal health records → ML-powered risk prediction → blockchain-anchored audit trail, giving farms, vets, and regulators a single source of truth.",
  highlights: [
    "Random Forest classifier trained on 50K+ treatment records with 91% precision",
    "Ethereum smart contracts for immutable treatment logging",
    "Automated withdrawal-period enforcement prevents early-sale violations",
    "Real-time MRL risk score dashboard with trend analysis",
    "Role-based access: Farmer / Vet / Regulator / Admin",
  ],
  architecture: [
    "React.js UI",
    "Node.js + Express API",
    "MongoDB Atlas",
    "Python (Scikit-learn)",
    "Ethereum (Solidity)",
    "Hyperledger Fabric",
  ],
};

const ticketDetails = {
  problem:
    "Manual or phone-based ticket booking systems for local events suffer from seat conflicts, no real-time availability, and no digital proof of purchase.",
  solution:
    "A full-featured booking platform with real-time seat selection via Socket.io, Stripe payment integration, and QR-code digital tickets — with a complete admin management console.",
  highlights: [
    "Real-time seat locking with Socket.io to prevent double-booking",
    "Stripe integration for secure payment processing",
    "QR-code generation for digital tickets with PDF export",
    "Admin dashboard: create events, manage bookings, view analytics",
    "JWT-based authentication with Google OAuth support",
  ],
  architecture: [
    "React.js",
    "Node.js + Express",
    "MongoDB",
    "Socket.io",
    "Stripe API",
    "JWT + Google OAuth",
  ],
};

const detailsMap = { 1: mrlDetails, 2: ticketDetails };

function FeaturedCard({ project, reverse }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const details = detailsMap[project.id];

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-3xl overflow-hidden mb-12"
      style={{ borderColor: `${project.color}25` }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className={`grid md:grid-cols-2 gap-0 ${reverse ? "md:grid-flow-dense" : ""}`}
      >
        {/* Image side */}
        <div
          className={`relative h-64 md:h-auto overflow-hidden ${reverse ? "md:col-start-2" : ""}`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}40, rgba(13,20,36,0.85))`,
            }}
          />

          {/* Floating stat */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display font-extrabold text-6xl text-white opacity-30">
                {project.id === 1 ? "91%" : "∞"}
              </p>
              <p className="text-sm text-white/50 font-mono">
                {project.id === 1 ? "ML Accuracy" : "Real-time sync"}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-lg text-xs text-white font-mono backdrop-blur-sm bg-white/10 border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-2">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: project.color }}
            >
              Featured Project
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl dark:text-white text-slate-900 mb-1">
            {project.title}
          </h3>
          <p className="dark:text-slate-400 text-slate-500 text-sm mb-4 font-medium">
            {project.subtitle}
          </p>

          {/* Problem */}
          <div className="mb-4 p-4 rounded-xl bg-dark-700/50 border border-dark-500/50">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
              The Problem
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
              {details.problem}
            </p>
          </div>

          {/* Solution */}
          <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed mb-5">
            {details.solution}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {details.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm dark:text-slate-300 text-slate-700"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <CheckCircle
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: project.color }}
                />
                {h}
              </motion.li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Layers size={14} className="text-slate-500" />
            {details.architecture.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold btn-shimmer"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass dark:text-slate-300 text-slate-700 text-sm font-semibold hover:text-white transition-colors border border-white/10"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="featured" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            03 / Featured
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            Deep <span className="gradient-text">Dives</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-lg mx-auto">
            Projects I'm most proud of — built end-to-end with real architecture
            decisions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto mt-4" />
        </motion.div>

        {featured.map((project, i) => (
          <FeaturedCard
            key={project.id}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
