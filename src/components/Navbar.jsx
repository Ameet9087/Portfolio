import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  ["Home", "#hero"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Certification", "#certifications"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          {/* Animated Logo with Live Effect */}
          <motion.div
            className="brand live-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: -2 }}
          >
            AS
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            {links.map(([name, href]) => (
              <motion.a
                key={name}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {name}
              </motion.a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar for mobile */}
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="sidebar"
        >
          <button
            className="close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="sidebar-links">
            {links.map(([name, href]) => (
              <a key={name} href={href} onClick={() => setOpen(false)}>
                {name}
              </a>
            ))}
          </div>
        </motion.aside>
      )}
    </>
  );
}
