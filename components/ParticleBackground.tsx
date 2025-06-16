import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  color: string
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const colors = ['#f97316', '#ec4899', '#a855f7', '#06b6d4', '#10b981']

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 20 + 10,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1
          }}
        />
      ))}

      {/* Floating Om symbols */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`om-${i}`}
          className="absolute text-orange-400/10 text-4xl font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, 0],
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.5],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3
          }}
        >
          ॐ
        </motion.div>
      ))}
    </div>
  )
}
