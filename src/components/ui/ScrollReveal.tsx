import { motion, MotionProps } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Variants } from 'framer-motion'

interface ScrollRevealProps extends Omit<MotionProps, 'variants' | 'initial' | 'animate'> {
  children: React.ReactNode
  variants?: Variants
  className?: string
  once?: boolean
}

export const ScrollReveal = ({
  children,
  variants,
  className,
  once = true,
  ...motionProps
}: ScrollRevealProps) => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const animationVariants = variants || defaultVariants

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

