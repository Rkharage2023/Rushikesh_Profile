// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react";
import { personal } from "../data";

const socials = [
  { Icon: Github, href: personal.github, label: "GitHub" },
  { Icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: personal.twitter, label: "Twitter" },
  { Icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t dark:border-dark-600 border-slate-200 overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center shadow-glow-sm">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg dark:text-white text-slate-900">
                Rushikesh<span className="text-brand-400">.</span>
              </span>
            </div>
            <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed max-w-xs">
              Software Engineer & Full Stack Developer building fast,
              intelligent, and production-grade systems.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="font-display font-semibold dark:text-white text-slate-900 mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm dark:text-slate-400 text-slate-600 hover:text-brand-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold dark:text-white text-slate-900 mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-brand-400 transition-colors border border-white/5 hover:border-brand-500/30"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm dark:text-slate-400 text-slate-600 hover:text-brand-400 transition-colors font-mono"
            >
              {personal.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t dark:border-dark-600 border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs dark:text-slate-500 text-slate-400 font-mono">
            © {year} Rushikesh Patil. All rights reserved.
          </p>
          <p className="text-xs dark:text-slate-500 text-slate-400 flex items-center gap-1.5">
            Crafted with{" "}
            <Heart size={11} className="text-red-400 fill-red-400" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
