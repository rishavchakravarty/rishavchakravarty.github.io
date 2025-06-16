import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const getInitial = () => {
    switch (direction) {
      case 'up': return { y: 100, opacity: 0 }
      case 'down': return { y: -100, opacity: 0 }
      case 'left': return { x: 100, opacity: 0 }
      case 'right': return { x: -100, opacity: 0 }
      case 'scale': return { scale: 0.5, opacity: 0 }
      case 'rotate': return { rotate: 180, scale: 0.5, opacity: 0 }
      default: return { y: 100, opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'up': return { y: 0, opacity: 1 }
      case 'down': return { y: 0, opacity: 1 }
      case 'left': return { x: 0, opacity: 1 }
      case 'right': return { x: 0, opacity: 1 }
      case 'scale': return { scale: 1, opacity: 1 }
      case 'rotate': return { rotate: 0, scale: 1, opacity: 1 }
      default: return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      style={{ opacity, scale: direction === 'scale' ? scale : undefined }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax component for background elements
export function ParallaxElement({
  children,
  speed = 0.5,
  className = ''
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 360])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
