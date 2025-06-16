import { motion } from 'framer-motion'

export function FloatingElements() {
  const elements = [
    { type: 'circle', size: 'w-4 h-4', color: 'bg-orange-400/20' },
    { type: 'square', size: 'w-3 h-3', color: 'bg-pink-400/20' },
    { type: 'triangle', size: 'w-5 h-5', color: 'bg-purple-400/20' },
    { type: 'diamond', size: 'w-4 h-4', color: 'bg-blue-400/20' },
    { type: 'star', size: 'w-6 h-6', color: 'bg-cyan-400/20' }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric floating elements */}
      {[...Array(15)].map((_, i) => {
        const element = elements[i % elements.length]
        return (
          <motion.div
            key={`float-${i}`}
            className={`absolute ${element.size} ${element.color} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150 - Math.random() * 100, 0],
              x: [0, Math.sin(i) * 100, 0],
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        )
      })}

      {/* Glowing orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-20 h-20 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${['#f97316', '#ec4899', '#a855f7', '#06b6d4'][i % 4]} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        />
      ))}

      {/* Sacred geometry patterns */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-orange-400"
          />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-pink-400" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 opacity-5"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,10 L90,50 L50,90 L10,50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-cyan-400"
          />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" />
        </svg>
      </motion.div>
    </div>
  )
}
