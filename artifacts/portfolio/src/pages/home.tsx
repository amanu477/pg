import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Phone, MapPin, Send } from "lucide-react";

/* ─── Content ─────────────────────────────────────────────── */
const ME = {
  name: "Amanuel Bekuma",
  role: "Full-Stack Developer",
  bio: "Full-stack developer. I turn ideas into working software — clean code, real results.",
  aboutBio: "Full Stack Developer with a B.Sc. in Computer Science from ACT American College. Experienced in building end-to-end web applications using TypeScript, React, and Python, with delivered projects across healthcare, fitness, food, e-commerce, and finance. Focused on clean, maintainable code and shipping products that work.",
  email: "amanubekuma499@gmail.com",
  phone: "+251945961704",
  location: "Addis Ababa, Ethiopia",
  telegram: "yoakin4",
  avatar: "/images/profile.jpg",
  socials: {
    github:   "https://github.com/amanu477",
    linkedin: "https://linkedin.com/in/amanu477",
  },
};

const SKILLS = [
  "TypeScript", "React", "Next.js", "Python",
  "Django", "Node.js", "PostgreSQL", "REST APIs",
  "Tailwind CSS", "Flask", "Express", "Git",
];

const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "Flask", "Node.js", "Express", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
];

const LANGUAGES = [
  { lang: "Amharic",    level: "Native" },
  { lang: "Afan Oromo", level: "Native" },
  { lang: "English",    level: "Professional" },
];

const PROJECTS = [
  {
    num: "01",
    title: "KP",
    category: "Personal Website",
    year: "2025",
    description:
      "A personal portfolio and professional website — clean, fast, and built to make a lasting first impression. Live at kalebbelete.com.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    live: "https://kalebbelete.com",
  },
  {
    num: "02",
    title: "Adulis Food Complex",
    category: "Food & Hospitality",
    year: "2025",
    description:
      "A modern web platform for a food business — rich menu presentation, ordering flows, and a clean TypeScript stack built for real operations.",
    tech: ["TypeScript", "React", "CSS", "Replit"],
  },
  {
    num: "03",
    title: "Medfinder",
    category: "Healthcare",
    year: "2024",
    description:
      "A healthcare tool helping users locate medications and information fast. Python backend paired with a simple, effective HTML/CSS/JS front end.",
    tech: ["Python", "HTML", "JavaScript", "CSS"],
  },
  {
    num: "04",
    title: "Propick",
    category: "Product Discovery",
    year: "2025",
    description:
      "A streamlined product-pick platform with a focused, conversion-first user flow. Built lean with TypeScript and React for rapid iteration.",
    tech: ["TypeScript", "React", "JavaScript", "CSS"],
  },
  {
    num: "05",
    title: "Ecom",
    category: "E-Commerce",
    year: "2024",
    description:
      "A full e-commerce application — product browsing, cart management, and checkout — built on a robust TypeScript codebase ready for production.",
    tech: ["TypeScript", "React", "JavaScript", "CSS"],
  },
  {
    num: "06",
    title: "Youthcom",
    category: "Community Platform",
    year: "2025",
    description:
      "A community hub for youth organisations — clean information architecture, event listings, and an intuitive member experience built with TypeScript.",
    tech: ["TypeScript", "React", "CSS", "Node.js"],
  },
];

/* ─── Animation helpers ────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Project row ──────────────────────────────────────────── */
function ProjectRow({
  p,
  i,
}: {
  p: (typeof PROJECTS)[number];
  i: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.08, ease }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-6 py-7 border-t border-border relative overflow-hidden">
          {/* Hover fill */}
          <motion.div
            className="absolute inset-0 bg-primary/5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease }}
            style={{ originX: 0 }}
          />

          {/* Number */}
          <span
            className="stroke-num text-5xl md:text-6xl font-light shrink-0 w-16 select-none transition-colors duration-300"
            style={open ? { WebkitTextStroke: "1px hsl(var(--primary))", color: "transparent" } : {}}
          >
            {p.num}
          </span>

          {/* Title + category */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-serif text-2xl md:text-4xl font-light leading-tight transition-colors duration-300 group-hover:text-primary"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {p.title}
            </h3>
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mt-1">
              {p.category} · {p.year}
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
          >
            <ArrowUpRight size={22} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className={`pb-10 pl-0 md:pl-22 ${p.live ? "grid grid-cols-1 md:grid-cols-2 gap-8 items-start" : "max-w-xl"}`}>
              <div>
                <p className="text-muted-foreground leading-relaxed text-base font-light mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {p.live && (
                <div className="flex md:items-end">
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={14} />
                    <span>Visit Live Site</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main component ───────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity  = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY        = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const photoScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  /* Duplicate skills for seamless marquee */
  const marqueItems = [...SKILLS, ...SKILLS];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="grain" />

      {/* ── Nav ────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-border/50 py-4"
            : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl font-light tracking-wide hover:opacity-60 transition-opacity"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {ME.name}<span className="text-primary">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide font-light">
            {[
              { label: "About",    id: "about"    },
              { label: "Work",     id: "projects" },
              { label: "Contact",  id: "contact"  },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goto(id)}
                className="hover-line text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={ME.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={17} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
        >
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[130px]"
              style={{ background: "radial-gradient(circle, hsl(213 90% 52% / 0.13), hsl(226 82% 62% / 0.07) 55%, transparent 75%)" }} />
            <div className="absolute bottom-1/4 left-1/4 w-[340px] h-[340px] rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, hsl(235 80% 68% / 0.08), transparent 70%)" }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

              {/* Text */}
              <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-primary">
                    Hello, I'm
                  </span>
                </motion.div>

                {/* Name */}
                <div className="mb-6">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 0.2, ease }}
                      className="font-serif leading-[0.92] tracking-tight"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(4rem, 11vw, 9rem)",
                        fontWeight: 300,
                      }}
                    >
                      Amanuel
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease }}
                      className="font-serif italic leading-[0.92] tracking-tight gradient-text"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(4rem, 11vw, 9rem)",
                        fontWeight: 300,
                      }}
                    >
                      Bekuma.
                    </motion.h1>
                  </div>
                </div>

                {/* Role + divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.55, ease }}
                  style={{ originX: 0 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px flex-1 max-w-[60px] bg-border" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
                    {ME.role}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-50" />
                      <span className="relative rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-primary">Available</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease }}
                  className="text-muted-foreground font-light leading-relaxed max-w-sm mb-10 text-base"
                >
                  {ME.bio}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.85, ease }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button onClick={() => goto("projects")} className="btn-primary">
                    <span>View Work</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <button onClick={() => goto("contact")} className="btn-outline">
                    <span>Get in Touch</span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Photo */}
              <motion.div
                style={{ scale: photoScale, opacity: photoOpacity }}
                className="hidden lg:flex items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease }}
                  className="relative"
                >
                  {/* Decorative rings */}
                  <div className="absolute -inset-4 rounded-full animate-spin" style={{ animationDuration: "20s", border: "1px solid hsl(213 90% 60% / 0.30)" }} />
                  <div className="absolute -inset-8 rounded-full animate-spin" style={{ animationDuration: "35s", animationDirection: "reverse", border: "1px solid hsl(226 82% 65% / 0.18)" }} />
                  <div className="absolute -inset-14 rounded-full animate-spin" style={{ animationDuration: "60s", border: "1px dashed hsl(235 80% 70% / 0.12)" }} />

                  {/* Photo */}
                  <div className="relative w-[260px] h-[260px] xl:w-[310px] xl:h-[310px] rounded-full overflow-hidden glow">
                    <img
                      src={ME.avatar}
                      alt={ME.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 bg-card border border-border px-4 py-2.5 text-xs font-mono tracking-wide"
                  >
                    <span className="text-primary font-medium">5</span>
                    <span className="text-muted-foreground ml-1">Projects Shipped</span>
                  </motion.div>

                  {/* Floating role badge */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-2 -left-8 bg-card border border-border px-4 py-2.5 text-xs font-mono tracking-wide"
                  >
                    <span className="text-primary">✦</span>
                    <span className="text-muted-foreground ml-2">{ME.role}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Marquee ─────────────────────────────────────────── */}
        <div className="border-y border-border py-5 overflow-hidden bg-secondary/30">
          <div className="marquee-track">
            {marqueItems.map((skill, i) => (
              <span key={i} className="flex items-center gap-6 px-6">
                <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground whitespace-nowrap">
                  {skill}
                </span>
                <span className="text-primary text-lg leading-none select-none">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── About ───────────────────────────────────────────── */}
        <section id="about" className="py-32 md:py-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* ① Section label */}
            <RevealBlock>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-6">About</p>
            </RevealBlock>

            {/* ② Full-width pull-quote bio */}
            <RevealBlock delay={0.08}>
              <div className="border-t border-border pt-10 mb-16 md:mb-24">
                <p
                  className="font-serif font-light leading-[1.2] max-w-5xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.9rem, 4.2vw, 3.6rem)",
                  }}
                >
                  A developer who builds with{" "}
                  <em className="italic gradient-text">purpose</em> and{" "}
                  <em className="italic gradient-text">precision</em> —
                  shipping products that actually work.
                </p>
              </div>
            </RevealBlock>

            {/* ③ Photo + right-side detail */}
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start mb-20">

              {/* Photo */}
              <RevealBlock>
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-primary" />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-primary" />
                  <div className="aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={ME.avatar}
                      alt={ME.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-5 bg-background border border-border px-4 py-3">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">B.Sc. Computer Science</p>
                    <p className="text-xs font-light text-foreground mt-0.5">ACT American College</p>
                  </div>
                </div>
              </RevealBlock>

              {/* Right detail column */}
              <div className="space-y-8 pt-2">

                {/* Bio text */}
                <RevealBlock delay={0.1}>
                  <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
                    {ME.aboutBio}
                  </p>
                </RevealBlock>

                {/* Stats row */}
                <RevealBlock delay={0.15}>
                  <div className="grid grid-cols-3 divide-x divide-border border border-border">
                    {[
                      { num: "5+", label: "Projects" },
                      { num: "3+", label: "Years" },
                      { num: "∞",  label: "Commits" },
                    ].map((s) => (
                      <div key={s.label} className="py-5 text-center">
                        <p
                          className="font-serif text-3xl font-light gradient-text mb-0.5"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                        >
                          {s.num}
                        </p>
                        <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </RevealBlock>

                {/* Languages */}
                <RevealBlock delay={0.2}>
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-4">Languages</p>
                  <div className="grid grid-cols-3 gap-3">
                    {LANGUAGES.map(({ lang, level }) => (
                      <div key={lang} className="border border-border p-4 group hover:border-primary transition-colors">
                        <p className="text-sm font-light text-foreground mb-1 group-hover:text-primary transition-colors">{lang}</p>
                        <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">{level}</p>
                      </div>
                    ))}
                  </div>
                </RevealBlock>

              </div>
            </div>

            {/* ④ Skills bento grid */}
            <RevealBlock delay={0.1}>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-6">Skills</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SKILL_GROUPS.map((group, gi) => (
                  <div
                    key={group.label}
                    className={`border border-border p-6 hover:border-primary/50 transition-colors group ${gi === 0 ? "md:col-span-2" : ""}`}
                  >
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-primary text-lg leading-none select-none">✦</span>
                      <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                        {group.label}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 bg-secondary/60 text-foreground/80 group-hover:text-foreground transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealBlock>

          </div>
        </section>

        {/* ── Projects ────────────────────────────────────────── */}
        <section id="projects" className="py-32 md:py-40 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RevealBlock className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-4">
                    Selected Work
                  </p>
                  <h2
                    className="font-serif font-light leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                    }}
                  >
                    Projects that<br />
                    <em className="italic gradient-text">speak for themselves.</em>
                  </h2>
                </div>
                <a
                  href={ME.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-line inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start md:self-end font-light pb-0.5"
                >
                  All on GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </RevealBlock>

            <div>
              {PROJECTS.map((p, i) => (
                <ProjectRow key={p.num} p={p} i={i} />
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────── */}
        <section id="contact" className="py-32 md:py-40 bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Left: headline */}
              <RevealBlock>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-8">
                  Let's Talk
                </p>
                <h2
                  className="font-serif font-light leading-[1.05] mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  }}
                >
                  Have an idea?<br />
                  <em className="italic gradient-text">Let's build it.</em>
                </h2>
                <p className="text-muted-foreground font-light text-base leading-relaxed max-w-sm">
                  I'm open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello — reach out any way you like.
                </p>
              </RevealBlock>

              {/* Right: contact details */}
              <RevealBlock delay={0.15}>
                <div className="space-y-0 mt-2">
                  {[
                    {
                      icon: <MapPin size={16} />,
                      label: "Location",
                      value: ME.location,
                      href: null,
                    },
                    {
                      icon: <Mail size={16} />,
                      label: "Email",
                      value: ME.email,
                      href: `mailto:${ME.email}`,
                    },
                    {
                      icon: <Phone size={16} />,
                      label: "Phone",
                      value: ME.phone,
                      href: `tel:${ME.phone}`,
                    },
                    {
                      icon: <Send size={16} />,
                      label: "Telegram",
                      value: `@${ME.telegram}`,
                      href: `https://t.me/${ME.telegram}`,
                    },
                    {
                      icon: <Linkedin size={16} />,
                      label: "LinkedIn",
                      value: "amanu477",
                      href: ME.socials.linkedin,
                    },
                    {
                      icon: <Github size={16} />,
                      label: "GitHub",
                      value: "amanu477",
                      href: ME.socials.github,
                    },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-5 py-5 border-t border-border group">
                      <span className="text-primary shrink-0">{icon}</span>
                      <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground w-20 shrink-0">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="hover-line text-sm font-light text-foreground hover:text-primary transition-colors pb-0.5"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-light text-foreground">{value}</span>
                      )}
                    </div>
                  ))}
                  <div className="border-t border-border" />
                </div>
              </RevealBlock>

            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} {ME.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground tracking-wide">
            <a href={ME.socials.github}   target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={ME.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href={`mailto:${ME.email}`}                                 className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
