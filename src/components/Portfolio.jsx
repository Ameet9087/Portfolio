import React from 'react'
import { motion } from 'framer-motion'

const DATA = {
  name: "Ameet Upendra Singh",
  title: "Software Tester — Mechanical Engineering Mindset",
  tagline: "Precision in testing, engineered for quality.",
  resumeUrl: "/TestingResume.pdf",
  photo: "/office.jpg", 
  contacts: {
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=ameetsingh2000@gmail.com",
    phone: "tel:+918766762668",
    github: "https://github.com/ameet9087",
    linkedin: "https://www.linkedin.com/in/ameet-singh-50386529b/",
  },
  skills: [
    "Manual Testing", "Automation (Selenium)", "API Testing (Postman)",
    "Performance (JMeter)", "Java / Python", "SQL", "Jira / TestRail", "CI/CD"
  ],
  projects: [
    { title: "E-commerce QA", desc: "Automation + Manual testing for checkout, payments and search. Implemented Selenium TestNG framework and CI integration.", link: "#" },
    { title: "Healthcare API Testing", desc: "Postman + Newman collections, contract tests and negative scenarios for FHIR APIs.", link: "#" },
    { title: "Banking Performance Suite", desc: "Load testing with JMeter & k6 simulating peak hours, reduced p95 latency by 38%.", link: "#" },
  ],
  experience: [
    { role: "Senior QA Engineer", company: "ABC Technologies", period: "2022 — Present", bullets: ["Led automation efforts for web and API testing.","Mentored 4 junior testers; set up CI test gates."] },
    { role: "QA Engineer", company: "XYZ Solutions", period: "2019 — 2022", bullets: ["Planned test strategies for releases.","Executed performance tests and reported bottlenecks."] },
  ],
  education: [
    { degree: "B.Tech. Mechanical Engineering", school: "Institute of Engineering", year: "2015 — 2019" },
    { degree: "Diploma in Software Testing", school: "Online Academy", year: "2020" },
  ],
  certifications: ["ISTQB Foundation Level", "Certified Agile Tester", "Selenium WebDriver", "Postman API Testing"],
  interests: ["Automation Frameworks", "Robotics & IoT", "Debugging Puzzles", "QA Communities"]
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
            <a className="btn ghost" href="#contact">Contact</a>
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
                <p className="muted">{ed.school} · <span className="period">{ed.year}</span></p>
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
>   <h2>Contact</h2>
  <div className="contact-grid">
    <a className="contact-item" href={DATA.contacts.email}  > <strong>Email:</strong> <span className="muted" >{DATA.contacts.email}</span></a>
    <a className="contact-item" href={DATA.contacts.phone} ><strong>Phone:</strong> <span className="muted" href={DATA.contacts.phone}>8766762668</span></a>
    <a className="contact-item" href={DATA.contacts.github} ><strong>GitHub:</strong> <span className="muted">{DATA.contacts.github}</span></a>
    <a className="contact-item" href={DATA.contacts.linkedin} ><strong>LinkedIn:</strong> <span className="muted">{DATA.contacts.linkedin}</span></a>
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
