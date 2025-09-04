
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  ['Home', '#hero'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Certs', '#certifications'],
  ['Contact', '#contact'],
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <div className="brand">MECH‑QA</div>
          <nav className="nav-links">
            {links.map(l => <a key={l[0]} href={l[1]}>{l[0]}</a>)}
          </nav>
          <button className="hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </header>

      {open && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="sidebar"
        >
          <button className="close" onClick={()=>setOpen(false)} aria-label="Close menu">✕</button>
          <div className="sidebar-links">
            {links.map(l => (
              <a key={l[0]} href={l[1]} onClick={()=>setOpen(false)}>{l[0]}</a>
            ))}
          </div>
        </motion.aside>
      )}
    </>
  )
}
