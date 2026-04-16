// src/components/Resume.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Trophy,
  BookOpen,
} from "lucide-react";
import { timeline, personal } from "../data";

const iconMap = {
  education: <GraduationCap size={16} />,
  experience: <Briefcase size={16} />,
  achievement: <Trophy size={16} />,
  learning: <BookOpen size={16} />,
};

const colorMap = {
  education: { dot: "#6366f1", text: "text-brand-400" },
  experience: { dot: "#10b981", text: "text-emerald-400" },
  achievement: { dot: "#f59e0b", text: "text-amber-400" },
  learning: { dot: "#22d3ee", text: "text-cyan-400" },
};

function TimelineItem({ item, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const c = colorMap[item.type] || colorMap.education;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 pb-10"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${c.dot}, ${c.dot}99)`,
            boxShadow: `0 0 20px ${c.dot}40`,
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.1 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          {iconMap[item.type]}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 timeline-line opacity-30" />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="glass-card rounded-2xl p-5 flex-1 mb-2"
        style={{ borderColor: `${c.dot}20` }}
        whileHover={{ borderColor: `${c.dot}40`, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
          <div>
            <h3 className="font-display font-semibold text-base dark:text-white text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm font-medium dark:text-slate-400 text-slate-600">
              {item.org}
            </p>
          </div>
          <span
            className={`font-mono text-sm font-bold ${c.text} flex-shrink-0`}
          >
            {item.year}
          </span>
        </div>
        <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
          {item.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            05 / Resume
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-md mx-auto mb-8">
            Education, experience, and milestones that shaped my engineering
            career.
          </p>

          {/* Download button */}
          <motion.a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-violet text-white font-semibold btn-shimmer shadow-glow-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={18} />
            Download Full Resume (PDF)
          </motion.a>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timeline.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              total={timeline.length}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-8 glass-card rounded-2xl p-6 text-center border border-brand-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm dark:text-slate-400 text-slate-600 mb-1">
            Looking for a driven engineer?
          </p>
          <p className="font-display font-bold text-lg dark:text-white text-slate-900 mb-4">
            I'm open to full-time roles & internships 🚀
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-violet text-white text-sm font-semibold"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
