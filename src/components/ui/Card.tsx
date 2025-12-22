import { motion } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { scaleOnHover } from '@/lib/animations'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, className, children, ...props }, ref) => {
    const baseStyles = 'bg-brand-navy-light rounded-xl p-6 border border-brand-navy'

    if (hover) {
      return (
        <motion.div
          ref={ref}
          variants={scaleOnHover}
          initial="rest"
          whileHover="hover"
          className={cn(baseStyles, 'hover:border-brand-pink transition-colors', className)}
          {...props}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={cn(baseStyles, className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

