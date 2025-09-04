
import React from 'react'
import Navbar from './components/Navbar.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import Portfolio from './components/Portfolio.jsx'

export default function App(){
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <Portfolio />
    </div>
  )
}
