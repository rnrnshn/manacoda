import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-brand-pink hover:bg-brand-pink-light text-white focus:ring-brand-pink',
      secondary: 'bg-brand-navy-light hover:bg-brand-navy text-white focus:ring-brand-pink',
      outline: 'border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white focus:ring-brand-pink',
      gold: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy focus:ring-brand-gold',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

