
import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticleBackground(){
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  const options = {
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: "#071028" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 3 }
      }
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ["#4fb3ff", "#7cffd6", "#9f7cff"] },
      shape: { type: "circle" },
      opacity: { value: 0.9 },
      size: { value: { min: 2, max: 5 } },
      links: { enable: true, distance: 150, color: "#1e90ff", opacity: 0.12, width: 1 },
      move: { enable: true, speed: 1.4, outModes: { default: "out" } }
    },
    detectRetina: true,
  }

  return <Particles id="tsparticles" init={particlesInit} options={options} />
}
