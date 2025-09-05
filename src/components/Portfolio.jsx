import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const DATA = {
  name: "Ameet Upendra Singh",
  title: "Software Tester — Mechanical Engineering Mindset",
  tagline: "Precision in testing, engineered for quality.",
  resumeUrl: "/TestingResume.pdf",
  photo: "/office.jpg", 
  contacts: {
    email: "mailto:ameetsingh2000@gmail.com",
    phone: "tel:+918766762668",
    github: "https://github.com/ameet9087",
    linkedin: "https://www.linkedin.com/in/ameet-singh-50386529b/",
  },
  skills: [
    "Manual Testing", "Automation (Selenium)", "API Testing (Postman)",
    "Performance (JMeter)", "Java", "SQL", "Jira", "Putty"
  ],
  projects: [
    { title: "E-commerce QA", desc: "Automation + Manual testing for checkout, payments and search. Implemented Selenium TestNG framework and CI integration.", link: "#" },
    { title: "Healthcare API Testing", desc: "Postman + Newman collections, contract tests and negative scenarios for FHIR APIs.", link: "#" },
    { title: "Banking Performance Suite", desc: "Load testing with JMeter & k6 simulating peak hours, reduced p95 latency by 38%.", link: "#" },
  ],
  experience: [
  {
      role: "Automation Tester",
      company: "157Industries Private Limited",
      period: "01/09/24 - Present",
      bullets: ["Testing the Application and Managing the Team"]
    },
    {
      role: "Web Development Intern",
      company: "VeriTech IT Software Service",
      period: "10/01/25 - 10/03/25",
      bullets: ["Creating and developing UI"]
    },
    
  ],
  education: [
    {
      degree: "Bachelor Of Engineering (Mechanical Engineering)",
      school: "Anjuman College Of Engineering And Technology",
      year: "2017 - 2021",
      score:"8.7"
    },
    {
      degree: "Higher Secondary Certification",
      school: "Narayana Junior College",
      year: "2015 - 2017",
      score:"9.0"
    },
    {
      degree: "Secondary School Certification",
      school: "St. Ann's English Medium School(CBSE)",
      year: "2014 - 2015",
      score:"9.0"
    },
  ],
  certifications: ["Full Stack Java Development", "Automation Testing", "Web Development Intership", "Postman API Testing"],
  interests: ["Palying Indor & Outdor", "Travelling", "Exploring New Things"]
}

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Portfolio(){
  return (
    <div className="content" style={{position:'relative', zIndex:1}}>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <motion.div 
          className="hero-card" 
          initial="hidden" 
          animate="show" 
          variants={sectionVariant} 
          transition={{duration:0.6}}
        >
          <div>
          <h1 className="hero-name">{DATA.name}</h1>
          <p className="hero-title">{DATA.title}</p>
          <p className="hero-tag">{DATA.tagline}</p>
          <div className="hero-actions">
            <a className="btn primary" href={DATA.resumeUrl} download>Download Resume</a>
            
            </div>
            </div>
          <img src={DATA.photo} alt="Profile" className="hero-photo" />
          
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="main-grid">
        {/* Skills */}
        <motion.section id="skills" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5}}>
          <h2>Skills</h2>
          <ul className="skills-grid">
            {DATA.skills.map(s => <li key={s}>{s}</li>)}
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5, delay:0.06}}>
          <h2>Projects</h2>
          <div className="list">
            {DATA.projects.map(p => (
              <article key={p.title} className="item">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <a href={p.link} className="link">View →</a>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section id="experience" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5, delay:0.12}}>
          <h2>Experience</h2>
          <div className="timeline">
            {DATA.experience.map((e,i)=>(
              <div key={i} className="timeline-item">
                <h3>{e.role} <span className="muted">@ {e.company}</span></h3>
                <p className="period">{e.period}</p>
                <ul>
                  {e.bullets.map(b=> <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section id="education" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5, delay:0.18}}>
          <h2>Education</h2>
          <div className="list">
            {DATA.education.map(ed=>(
              <div key={ed.degree} className="item">
                <h3>{ed.degree}</h3>
                <p className="muted">{ed.school} | <span className="period">{ed.year}</span> | <span className="period">{ed.score}</span></p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section id="certifications" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5, delay:0.24}}>
          <h2>Certifications</h2>
          <ul className="cert-grid">
            {DATA.certifications.map(c=> <li key={c}>{c}</li>)}
          </ul>
        </motion.section>

        {/* Interests */}
        <motion.section id="interests" className="card" initial="hidden" whileInView="show" viewport={{once:true}} variants={sectionVariant} transition={{duration:0.5, delay:0.3}}>
          <h2>Interests</h2>
          <ul className="skills-grid">
            {DATA.interests.map(i=> <li key={i}>{i}</li>)}
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
      id="contact"
      className="card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
      transition={{ duration: 0.5, delay: 0.36 }}
    >
      <h2>Contact</h2>
      <div className="contact-grid icons-only">
        <a href={DATA.contacts.email} target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href={DATA.contacts.phone} target="_blank" rel="noopener noreferrer">
          <FaPhone size={30} />
        </a>
        <a href={DATA.contacts.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a
          href={DATA.contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </motion.section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {DATA.name} · Built with React</p>
      </footer>
    </div>
  )
}
