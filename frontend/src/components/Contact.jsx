// src/components/Contact.jsx
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { personal } from "../data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 5000);
  };

  const socials = [
    {
      label: "GitHub",
      href: personal.github,
      Icon: Github,
      color: "#ffffff",
      bg: "rgba(255,255,255,0.08)",
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
      Icon: Linkedin,
      color: "#0a66c2",
      bg: "rgba(10,102,194,0.12)",
    },
    {
      label: "Twitter",
      href: personal.twitter,
      Icon: Twitter,
      color: "#1da1f2",
      bg: "rgba(29,161,242,0.12)",
    },
    {
      label: "Email",
      href: `mailto:${personal.email}`,
      Icon: Mail,
      color: "#6366f1",
      bg: "rgba(99,102,241,0.12)",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-dark-900/60 bg-slate-100/60 pointer-events-none" />
      <div className="orb w-64 h-64 bg-brand-500 top-1/4 left-0 opacity-10" />
      <div className="orb w-48 h-48 bg-accent-cyan bottom-1/4 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-brand-400 text-sm tracking-widest uppercase mb-3">
            06 / Contact
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-slate-900 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and interesting
            conversations. Drop me a message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-violet rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* ── Left: Info card ── */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold dark:text-white text-slate-900">
                  Available for Hire
                </span>
              </div>
              <p className="text-sm dark:text-slate-400 text-slate-600">
                Currently looking for full-time Software Engineer / Full Stack
                Developer roles. Also open to exciting freelance projects.
              </p>
            </div>

            {/* Contact details */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-1">
                Reach me at
              </h3>
              {[
                {
                  Icon: Mail,
                  label: personal.email,
                  href: `mailto:${personal.email}`,
                },
                { Icon: MapPin, label: personal.location, href: null },
              ].map(({ Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                    <Icon size={15} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm dark:text-slate-300 text-slate-700 hover:text-brand-400 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm dark:text-slate-300 text-slate-700">
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-4">
                Find me on
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ label, href, Icon, color, bg }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/10 text-sm font-medium transition-all duration-200"
                    style={{ background: bg, color }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl dark:text-white text-slate-900 mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "John Doe",
                    },
                    {
                      name: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider font-mono">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused(null)}
                        placeholder={placeholder}
                        required
                        className={`form-input ${focused === name ? "ring-1 ring-brand-500/50" : ""}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder="Job opportunity / Collaboration / Hello!"
                    className={`form-input ${focused === "subject" ? "ring-1 ring-brand-500/50" : ""}`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium dark:text-slate-400 text-slate-600 mb-1.5 uppercase tracking-wider font-mono">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Hi Rushikesh, I'd love to talk about..."
                    rows={5}
                    required
                    className={`form-input resize-none ${focused === "message" ? "ring-1 ring-brand-500/50" : ""}`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-violet text-white font-semibold btn-shimmer shadow-glow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={
                    status === null
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 40px rgba(99,102,241,0.5)",
                        }
                      : {}
                  }
                  whileTap={status === null ? { scale: 0.98 } : {}}
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {status === "success" && (
                  <motion.p
                    className="text-center text-sm text-emerald-400 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={14} />
                    Thanks! I'll get back to you within 24 hours.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    className="text-center text-sm text-red-400 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={14} />
                    Something went wrong. Please email me directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
