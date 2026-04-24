import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, ArrowDown } from "lucide-react";

const CONFIG = {
  name: "Amanu",
  role: "Full-Stack Developer",
  tagline: "Designing and shipping modern web applications — from concept to deployment.",
  bio: "I'm a self-driven full-stack developer who builds real products end to end. My work spans e-commerce platforms, food businesses, healthcare tools, and community platforms. I care about clean interfaces, fast iteration, and turning ideas into something people can actually use.",
  email: "amanu477@github.com",
  socials: {
    github: "https://github.com/amanu477",
    linkedin: "https://linkedin.com/in/amanu477",
  },
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "REST APIs", "Express"] },
    { category: "Tooling", items: ["Git", "Vite", "Replit", "Drizzle ORM"] },
  ],
  projects: [
    {
      title: "Adulis Food Complex",
      description: "A full-featured web platform for a food business — menus, presentation, and ordering experience built on a modern TypeScript stack.",
      tech: ["TypeScript", "React", "CSS", "Replit"],
      category: "Food & Hospitality",
      demo: "https://replit.com/@amanu459717/Adulis-Food-Complex",
      github: "https://github.com/amanu477/Adulis-Food-Complex"
    },
    {
      title: "Medfinder",
      description: "A healthcare-focused tool helping users locate medications and related information. Mixes a Python backend with a clean HTML/CSS/JS front end.",
      tech: ["HTML", "Python", "CSS", "JavaScript"],
      category: "Healthcare",
      demo: "https://github.com/amanu477/medfinder",
      github: "https://github.com/amanu477/medfinder"
    },
    {
      title: "Propick",
      description: "A streamlined product-pick platform built for speed and clarity — modern TypeScript architecture with a lean, focused user flow.",
      tech: ["TypeScript", "React", "JavaScript", "CSS"],
      category: "Product",
      demo: "https://github.com/amanu477/propick",
      github: "https://github.com/amanu477/propick"
    },
    {
      title: "Ecom",
      description: "A full e-commerce web application with product browsing, cart flows, and a robust TypeScript codebase built for real-world use.",
      tech: ["TypeScript", "React", "JavaScript", "CSS"],
      category: "E-Commerce",
      demo: "https://github.com/amanu477/ecom",
      github: "https://github.com/amanu477/ecom"
    },
    {
      title: "Youthcom",
      description: "A community platform connecting youth organizations — clean information architecture, event management, and an intuitive member-facing experience.",
      tech: ["TypeScript", "React", "CSS", "Node.js"],
      category: "Community",
      demo: "https://github.com/amanu477/youthcom",
      github: "https://github.com/amanu477/youthcom"
    },
  ]
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof CONFIG.projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative border-t border-border pt-8 pb-12"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground leading-tight">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 border border-border rounded-full text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:flex-col gap-3 md:items-end md:pt-8">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            View Live <ArrowUpRight size={14} />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border border-border rounded-sm hover:bg-secondary transition-colors"
          >
            <Github size={14} /> GitHub
          </motion.a>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-primary"
        initial={{ width: 0 }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease }}
      />
    </motion.article>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Background decorative orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="orb absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px]" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.div
            className="font-display text-lg tracking-tight font-semibold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {CONFIG.name}
            <span className="text-primary ml-0.5">.</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
            {["About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase() === "work" ? "projects" : item.toLowerCase())}
                className="elegant-border text-muted-foreground hover:text-foreground transition-colors duration-200 pb-0.5"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={CONFIG.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <main className="relative z-10">

        {/* ── Hero ── */}
        <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col justify-center items-start pt-24 pb-16">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="container mx-auto px-6 md:px-12"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-5xl"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-semibold leading-[1.08] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
              >
                Building{" "}
                <em className="not-italic gold-shimmer">elegant</em>
                <br />
                digital experiences.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12 font-light"
              >
                {CONFIG.tagline}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <motion.button
                  onClick={() => scrollTo("projects")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                >
                  View Work <ArrowUpRight size={15} />
                </motion.button>
                <motion.button
                  onClick={() => scrollTo("contact")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-sm font-medium rounded-sm hover:bg-secondary transition-colors"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── About ── */}
        <section id="about" className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-6">About</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.15] mb-8">
                  Crafting products<br />
                  <em className="italic font-normal text-muted-foreground">people love to use.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base font-light max-w-md">
                  {CONFIG.bio}
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                {CONFIG.skills.map((group, i) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease }}
                    className="border-t border-border py-7 flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    <span className="text-xs font-mono tracking-widest uppercase text-primary w-28 shrink-0 pt-0.5">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {group.items.map(item => (
                        <span key={item} className="text-sm text-muted-foreground font-light">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
                <div className="border-t border-border" />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Projects ── */}
        <section id="projects" className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedSection>
              <motion.div variants={fadeUp} className="mb-20">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-6">Selected Work</p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                    Projects that matter.
                  </h2>
                  <a
                    href={CONFIG.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="elegant-border inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors pb-0.5 self-start md:self-end"
                  >
                    All on GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>

            <div className="space-y-0">
              {CONFIG.projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Contact ── */}
        <section id="contact" className="py-28 md:py-40">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <motion.p variants={fadeIn} className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-8">
                Contact
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-semibold leading-tight mb-8"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
              >
                Let's build something{" "}
                <em className="italic font-normal text-muted-foreground">remarkable.</em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto"
              >
                I'm open to new opportunities. Whether you have a project in mind or simply want to connect, I'd love to hear from you.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href={`mailto:${CONFIG.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
                >
                  <Mail size={15} /> Send a Message
                </motion.a>
                <motion.a
                  href={CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-sm font-medium rounded-sm hover:bg-secondary transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </motion.a>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs font-mono">
          <span className="tracking-wide">© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href={`mailto:${CONFIG.email}`} className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
