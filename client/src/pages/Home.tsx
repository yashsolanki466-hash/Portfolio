/* Reference-matched adaptation of dhlabs.ai: editorial engineering studio structure, adapted to Yash Solanki’s résumé facts. */
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const projects = [
  { id: "01", type: "PROJECT · GENOMIC DATA", name: "Avian Influenza Dashboard", tech: "React · Node.js · Express · PostgreSQL", summary: "A full-stack web application for analyzing and visualizing over 10,000 genomic datasets, with interactive React components and backend services for data visualization.", detail: "Designed data cards and frontend interactions to communicate complex datasets clearly and effectively.", image: "/manus-storage/yash-avian-dashboard_6b584a1e.png" },
  { id: "02", type: "PROJECT · SEQUENCE PROCESSING", name: "VNTRseeker", tech: "Node.js · HTML · CSS · JavaScript", summary: "A web application for efficient bulk-sequence data processing with optimized backend logic for repeat-sequence workflows.", detail: "Implemented optimized backend logic resulting in a 25% improvement in data pipeline efficiency.", image: "/manus-storage/yash-vntrseeker_03b2a1e4.png" },
];

const capabilities = [
  ["01", "Full Stack Development", "React.js, Redux, Node.js, Express.js, Django, Flask, JavaScript (ES6+), HTML5, CSS3, and SQL."],
  ["02", "Automation & Reporting", "Python command-line workflows, report generation, deliverable parsing, and SFTP / FTP / SSH integrations."],
  ["03", "Data & Bioinformatics", "Dashboards and data-driven applications using Pandas, NumPy, Power BI, Excel, and genomic datasets."],
];

const skills = [
  ["Languages", "JavaScript (ES6+), Python, HTML5, CSS3, SQL"],
  ["Frontend", "React.js, Redux, Tailwind CSS"],
  ["Backend", "Node.js, Express.js, Django, Flask"],
  ["Databases", "MongoDB, PostgreSQL, MySQL"],
  ["Tools", "Git, GitHub, Selenium, Scrapy, SFTP, FTP, SSH"],
  ["Analytics", "Pandas, NumPy, Power BI, Excel, AI Tools, Prompt Engineering, Performance Optimization"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [loaded, setLoaded] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 550); return () => clearTimeout(t); }, []);
  return <div className={`editorial-site ${loaded ? "is-ready" : ""}`}>
    <header className="editorial-nav">
      <a href="#top" className="studio-wordmark"><span className="mark-square">Y</span><span>Yash Solanki</span></a>
      <nav className={menu ? "open" : ""}>{[["services", "Services"], ["work", "Work"], ["experience", "Experience"], ["about", "About"]].map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setMenu(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Talk to me <ArrowUpRight size={14} /></a></nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button><button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X size={19} /> : <Menu size={19} />}</button></div>
    </header>

    <main id="top">
      <section className="editorial-hero page-section">
        <div className="hero-copy"><p className="caps">FULL STACK DEVELOPMENT · AUTOMATION · DATA SYSTEMS · BIOINFORMATICS</p><h1>Software systems for the <em>complex data.</em></h1><p className="hero-lead">Yash Solanki builds web applications, automation pipelines, dashboards, and scientific software where dependable engineering meets information that needs to become useful.</p><div className="hero-actions"><a className="solid-link" href="#contact">Talk to me <ArrowUpRight size={15} /></a><a className="text-link" href="#work">See my work <ArrowUpRight size={15} /></a></div><p className="partner-line mono">AHMEDABAD, GUJARAT, INDIA <span>·</span> AVAILABLE FOR THE RIGHT SYSTEM</p></div>
        <aside className="status-ledger mono"><div className="ledger-head"><span><i /> CURRENTLY BUILDING</span><span>Y.26</span></div><div className="ledger-row"><span>full_stack</span><b>React ↔ Node</b></div><div className="ledger-row"><span>automation</span><b>Python pipelines</b></div><div className="ledger-row"><span>data_systems</span><b>Dashboards</b></div><div className="ledger-row"><span>bioinformatics</span><b>RNA-Seq reporting</b></div><div className="ledger-row"><span>education</span><b>MSc Biotechnology</b></div></aside>
      </section>

      <div className="ticker mono"><span>SOFTWARE SYSTEMS FOR COMPLEX DATA</span><b>•</b><span>REACT / NODE / PYTHON</span><b>•</b><span>BUILDING FROM AHMEDABAD</span><b>•</b><span>SOFTWARE SYSTEMS FOR COMPLEX DATA</span></div>

      <section id="services" className="page-section numbered-section"><div className="section-label mono">[ 01 ] WHAT I BUILD</div><div className="section-intro"><h2>Three practices, anchored in <em>useful systems.</em></h2><p>I work across the interface, backend, pipeline, and data layers so complex operational and scientific information can move clearly through a team.</p></div><div className="capability-list">{capabilities.map(([number, title, text]) => <article className="capability-row" key={number}><span className="row-index mono">PILLAR {number}</span><div><h3>{title}</h3><p>{text}</p><a className="text-link" href="#contact">Read more <ArrowUpRight size={13} /></a></div><div className="proof-list mono"><span>{number === "01" ? "REACT / NODE / EXPRESS" : number === "02" ? "PYTHON / PIPELINES" : "PANDAS / NUMPY / SQL"}</span><span>{number === "01" ? "CLIENT-FACING PLATFORMS" : number === "02" ? "RNA-SEQ REPORTING" : "GENOMIC DATASETS"}</span></div></article>)}</div></section>

      <section id="work" className="page-section numbered-section work-section"><div className="section-label mono">[ 02 ] SELECTED WORK</div><div className="section-intro"><h2>Projects that move information from <em>raw to readable.</em></h2><p>Selected systems from Yash’s software and bioinformatics work. Visuals are decorative representations; project facts come from the supplied résumé.</p></div><div className="project-rows">{projects.map((project) => <button key={project.id} className="project-row" onClick={() => setSelected(project)}><div className="project-copy"><span className="mono caps">{project.type}</span><h3>{project.name}</h3><p>{project.summary}</p><span className="text-link">See project details <ArrowUpRight size={14} /></span></div><div className="project-visual"><img src={project.image} alt="" /><span className="visual-label mono">{project.tech}</span></div></button>)}</div></section>

      <section id="experience" className="page-section numbered-section"><div className="section-label mono">[ 03 ] EXPERIENCE</div><div className="section-intro"><h2>Building across software, science, and <em>operations.</em></h2></div><div className="experience-table"><article><span className="mono row-index">CURRENT</span><div><h3>Bioinformatician / Software Developer</h3><p className="company">UNIGENOME UNIPATH · AHMEDABAD, INDIA</p><p>Designed report automation and a centralized project dashboard for multiple departments. Built Node.js backend services, an interactive React frontend, a secure SFTP / FTP / SSH delivery platform, and a Python pipeline for RNA-Seq reports.</p></div><span className="mono date">PRESENT</span></article><article><span className="mono row-index">FREELANCE</span><div><h3>Full Stack Developer</h3><p className="company">INFI YATRA · TRAVEL WEB APP</p><p>Developed a responsive travel platform using React, Node.js, and Express.js with dynamic routing and API integrations for a seamless booking experience.</p></div><span className="mono date">PROJECT</span></article></div></section>

      <section id="about" className="page-section split-section"><div className="section-label mono">[ 04 ] SYSTEM NOTES</div><div className="section-intro"><h2>The unusual path is part of the <em>toolkit.</em></h2><p>Yash’s progression from microbiology to bioinformatics to full-stack development informs the way scientific and operational data is approached: with curiosity for the source and care for the system around it.</p></div><div className="education-strip"><div><span className="mono">06/2019 — 06/2022</span><h3>BSc Microbiology</h3><p>CU Shah Institute of Science · CGPA 6.78</p></div><ChevronDown /><div><span className="mono">06/2022 — 06/2023</span><h3>PG Diploma in Bioinformatics</h3><p>Gujarat Technological University · CGPA 9.0</p></div><ChevronDown /><div><span className="mono">06/2023 — 06/2025</span><h3>MSc Biotechnology</h3><p>Gujarat Biotechnology University · CGPA 7.5</p></div></div></section>

      <section className="page-section skill-section"><div className="section-label mono">[ 05 ] TOOLING</div><div className="section-intro"><h2>A working vocabulary across the <em>stack.</em></h2></div><div className="skills-table">{skills.map(([label, value]) => <div key={label}><span className="mono">{label}</span><p>{value}</p></div>)}</div><div className="certs mono"><span>CERTIFICATIONS</span><p>GenAI Powered Data Analytics Job Simulation · Deloitte Australia Data Analytics Job Simulation · Commonwealth Bank Introduction to Data Science Job Simulation</p></div></section>

      <section id="contact" className="contact-section page-section"><div className="section-label mono">[ 06 ] OPEN CHANNEL</div><div className="contact-inner"><p className="caps">LET’S MAKE THE COMPLEX USEFUL</p><h2>Have a system<br />worth <em>building?</em></h2><a className="solid-link large" href="mailto:yashsolanki466@gmail.com">Email Yash <ArrowUpRight size={18} /></a><div className="contact-details mono"><span>yashsolanki466@gmail.com</span><span>+91 9601793485</span><span>Ahmedabad, India</span></div></div></section>
    </main>

    <footer><span>YASH SOLANKI · FULL STACK DEVELOPER</span><span>© 2026 YASH SOLANKI</span><a href="#top">BACK TO TOP ↑</a></footer>
    {selected && <div className="case-backdrop" onClick={() => setSelected(null)}><article className="case-modal" onClick={(e) => e.stopPropagation()}><button className="case-close" onClick={() => setSelected(null)} aria-label="Close case study"><X size={18} /></button><img src={selected.image} alt="" /><div><span className="caps mono">{selected.type}</span><h2>{selected.name}</h2><p>{selected.summary}</p><p><strong>KEY CONTRIBUTION</strong><br />{selected.detail}</p><p className="mono case-tech">{selected.tech}</p></div></article></div>}
  </div>;
}
