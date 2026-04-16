// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  FileText,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { personal, typingWords } from "../data";

/* ─── Particle system ─── */
function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  let W = canvas.offsetWidth;
  let H = canvas.offsetHeight;
  canvas.width = W;
  canvas.height = H;

  const COUNT = Math.floor((W * H) / 9000);
  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  const COLORS = ["rgba(99,102,241,", "rgba(139,92,246,", "rgba(34,211,238,"];
  let raf;

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Draw dot
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `${color}${p.alpha})`;
      ctx.fill();

      // Connect nearby particles
      particles.forEach((q) => {
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 100 && dist > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(99,102,241,${0.04 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    raf = requestAnimationFrame(draw);
  };

  draw();

  const onResize = () => {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
  };
  window.addEventListener("resize", onResize);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
  };
}

/* ─── Motion variants ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const canvasRef = useRef(null);
  const typed = useTypingEffect(typingWords);

  useEffect(() => {
    if (!canvasRef.current) return;
    return initParticles(canvasRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        id="particles-canvas"
        className="absolute inset-0 w-full h-full"
      />

      {/* Glowing orbs */}
      <div
        className="orb w-96 h-96 bg-brand-500 top-1/4 -left-48"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb w-72 h-72 bg-accent-violet bottom-1/4 -right-36"
        style={{ animationDelay: "2s" }}
      />
      <div className="orb w-56 h-56 bg-accent-cyan top-3/4 left-1/3 opacity-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Available badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium border border-brand-500/20 dark:text-slate-300 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-time & Internship Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-4"
        >
          <span className="dark:text-white text-slate-900">Hi, I'm </span>
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="font-display text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center dark:text-slate-300 text-slate-700"
        >
          <span>{typed}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-body text-lg md:text-xl dark:text-slate-400 text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-violet text-white font-semibold btn-shimmer shadow-glow-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={18} />
            View Projects
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass border border-brand-500/30 dark:text-white text-slate-800 font-semibold hover:border-brand-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText size={18} />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl glass border border-white/10 dark:text-white text-slate-800 font-semibold hover:border-brand-400/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: personal.github, Icon: Github, label: "GitHub" },
            { href: personal.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-brand-400 transition-colors border border-white/5 hover:border-brand-500/30"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
          <span className="dark:text-slate-600 text-slate-400 text-sm ml-2">
            Find me online
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-slate-500 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
