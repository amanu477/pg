import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowRight, Code2, Terminal, Layers, Database, Globe, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* 
=============================================================================
USER CONFIGURATION: EDIT YOUR PERSONAL INFORMATION HERE
=============================================================================
*/
const CONFIG = {
  name: "Amanu",
  role: "Full-Stack Web Developer",
  location: "",
  tagline: "Designing and shipping modern web applications — from concept to deployment.",
  bio: "I'm a self-driven full-stack developer who builds real products end to end. My work spans e-commerce platforms, restaurant and gym websites, healthcare tools, trading dashboards, and small business sites. I care about clean interfaces, fast iteration, and turning ideas into something people can actually use. Most of my recent stack lives in TypeScript and React, but I'll reach for whatever fits the problem.",
  email: "amanu477@github.com",
  socials: {
    github: "https://github.com/amanu477",
    linkedin: "https://linkedin.com/in/amanu477",
    twitter: "https://github.com/amanu477",
  },
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "REST APIs", "Web Scraping", "CRUD Systems"] },
    { category: "Tools & Workflow", items: ["Git", "GitHub", "Replit", "VS Code", "Vite", "npm"] },
  ],
  experience: [
    {
      role: "Independent Web Developer",
      company: "Freelance & Personal Projects",
      period: "2025 — Present",
      description: "Building production web apps across e-commerce, food, fitness, healthcare, and trading domains. Shipping full TypeScript + React stacks end to end."
    },
    {
      role: "Full-Stack Developer",
      company: "Self-Initiated Projects",
      period: "2024 — 2025",
      description: "Expanded into Python-based backends, web scraping, and CRUD systems. Started layering modern frontend tooling into every project."
    },
    {
      role: "Web Developer (Learning & Building)",
      company: "Personal Studio",
      period: "2023 — 2024",
      description: "First portfolio sites, restaurant pages, and small interactive HTML/CSS/JS apps. Foundation for everything that came after."
    }
  ],
  projects: [
    {
      title: "MMC",
      description: "A modern TypeScript-based web application — the most recent project in active development.",
      tech: ["TypeScript", "React", "CSS", "HTML"],
      image: "/images/project-1.png",
      demo: "https://github.com/amanu477/MMC",
      github: "https://github.com/amanu477/MMC"
    },
    {
      title: "Adulis Food Complex",
      description: "A web platform for a food complex business — menus, ordering, and presentation built on a clean TypeScript stack.",
      tech: ["TypeScript", "React", "CSS", "Replit"],
      image: "/images/project-2.png",
      demo: "https://replit.com/@amanu459717/Adulis-Food-Complex",
      github: "https://github.com/amanu477/Adulis-Food-Complex"
    },
    {
      title: "Ecom",
      description: "A full e-commerce web application with product flows and a substantial TypeScript codebase.",
      tech: ["TypeScript", "React", "JavaScript", "CSS"],
      image: "/images/project-3.png",
      demo: "https://github.com/amanu477/ecom",
      github: "https://github.com/amanu477/ecom"
    },
    {
      title: "Gym Web",
      description: "A fitness studio web app built with TypeScript — pages for classes, schedules, and member-facing content.",
      tech: ["TypeScript", "JavaScript", "HTML", "CSS"],
      image: "/images/project-4.png",
      demo: "https://github.com/amanu477/Gym-web",
      github: "https://github.com/amanu477/Gym-web"
    },
    {
      title: "Medfinder",
      description: "A healthcare-focused tool helping users find medications and related info. Mixes Python on the backend with HTML/CSS/JS up front.",
      tech: ["HTML", "Python", "CSS", "JavaScript"],
      image: "/images/project-1.png",
      demo: "https://github.com/amanu477/medfinder",
      github: "https://github.com/amanu477/medfinder"
    },
    {
      title: "Trade Horizon",
      description: "A trading-themed web project blending HTML, JavaScript, and Python — focused on data presentation and user-facing dashboards.",
      tech: ["HTML", "JavaScript", "Python", "CSS"],
      image: "/images/project-2.png",
      demo: "https://github.com/amanu477/trade-horizon",
      github: "https://github.com/amanu477/trade-horizon"
    },
    {
      title: "Propick",
      description: "A TypeScript application built around a focused product-pick flow — modern, lean, and quick to iterate.",
      tech: ["TypeScript", "React", "JavaScript", "CSS"],
      image: "/images/project-3.png",
      demo: "https://github.com/amanu477/propick",
      github: "https://github.com/amanu477/propick"
    },
    {
      title: "Affiliate Project",
      description: "A TypeScript-driven affiliate platform — clean structure, modern tooling, real production patterns.",
      tech: ["TypeScript", "React", "CSS", "HTML"],
      image: "/images/project-4.png",
      demo: "https://github.com/amanu477/affiliate-project",
      github: "https://github.com/amanu477/affiliate-project"
    }
  ]
};
/* ========================================================================= */

// Fade-up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            {CONFIG.name.split(' ')[0]}<span className="text-primary">.</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollTo('projects')} className="text-muted-foreground hover:text-foreground transition-colors">Work</button>
            <button onClick={() => scrollTo('experience')} className="text-muted-foreground hover:text-foreground transition-colors">Experience</button>
            <button onClick={() => scrollTo('contact')} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <ThemeToggle />
            <Button onClick={() => scrollTo('contact')} className="hidden sm:inline-flex rounded-full">
              Let's Talk
            </Button>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground font-mono">
                    Available for new opportunities
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] tracking-tight mb-6">
                  Crafting precise <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                    digital systems.
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                  Hi, I'm {CONFIG.name}. {CONFIG.tagline}
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                  <Button size="lg" onClick={() => scrollTo('projects')} className="rounded-full px-8 h-14 text-base">
                    View my work
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="rounded-full px-8 h-14 text-base border-border hover:bg-secondary">
                    Get in touch
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >
              <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
                <div className="relative w-full max-w-md mx-auto aspect-square">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent -translate-x-4 translate-y-4" />
                  <div className="absolute inset-0 rounded-2xl border border-border bg-card overflow-hidden">
                    <img 
                      src="https://avatars.githubusercontent.com/u/151337776?v=4" 
                      alt={CONFIG.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="lg:col-span-6 lg:col-start-7 space-y-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold">About me</h2>
                <div className="w-12 h-1 bg-primary rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {CONFIG.bio}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <h4 className="font-mono text-sm uppercase text-muted-foreground mb-1">Role</h4>
                    <p className="font-medium text-lg">{CONFIG.role}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm uppercase text-muted-foreground mb-1">Location</h4>
                    <p className="font-medium text-lg">{CONFIG.location}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-secondary/50 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
                <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CONFIG.skills.map((skillGroup, idx) => (
                  <motion.div key={skillGroup.category} variants={fadeInUp}>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                          {idx === 0 ? <Laptop size={20} /> : idx === 1 ? <Database size={20} /> : <Globe size={20} />}
                        </div>
                        <h3 className="text-xl font-bold mb-4 font-display">{skillGroup.category}</h3>
                        <ul className="space-y-3">
                          {skillGroup.items.map(item => (
                            <li key={item} className="flex items-center gap-3">
                              <Code2 size={16} className="text-primary/70" />
                              <span className="text-muted-foreground font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Selected Work</h2>
                  <div className="w-12 h-1 bg-primary rounded-full mb-6" />
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    A curated selection of projects I've designed and developed.
                  </p>
                </div>
                <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors group">
                  View all on GitHub 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {CONFIG.projects.map((project, idx) => (
                  <motion.div key={project.title} variants={fadeInUp} className="group relative">
                    <div className="aspect-video overflow-hidden rounded-xl bg-muted mb-6 relative isolate">
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-background/60 backdrop-blur-sm gap-4">
                        <Button asChild size="icon" className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                          <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
                        </Button>
                        <Button asChild size="icon" variant="outline" className="rounded-full w-12 h-12 bg-background border-border hover:bg-muted text-foreground">
                          <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50 font-mono text-xs rounded-md">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience</h2>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="space-y-12">
                  {CONFIG.experience.map((job, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="relative pl-8 md:pl-0">
                      <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-0 w-px bg-border"></div>
                      <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-border"></div>
                      
                      <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start relative z-10">
                        <div className="hidden md:block w-32 shrink-0 pt-1">
                          <span className="font-mono text-sm text-muted-foreground">{job.period}</span>
                        </div>
                        
                        {/* Timeline dot */}
                        <div className="absolute left-[-37px] md:left-[8rem] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                        
                        <div className="flex-1">
                          <div className="md:hidden mb-2">
                            <span className="font-mono text-xs text-primary">{job.period}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">{job.role}</h3>
                          <h4 className="text-lg text-muted-foreground mb-4">{job.company}</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-40 relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Let's build something.</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                <Button size="lg" asChild className="rounded-full px-10 h-16 text-lg group">
                  <a href={`mailto:${CONFIG.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Say Hello
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold tracking-tight">
            {CONFIG.name.split(' ')[0]}<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Github size={20} />
            </a>
            <a href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Linkedin size={20} />
            </a>
            <a href={CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
