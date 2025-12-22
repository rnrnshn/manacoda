import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/Button'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-brand-navy relative overflow-hidden"
    >
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-display-lg font-bold text-white mb-6 font-display"
        >
          <span className="block">Ela Conecta.</span>
          <span className="block">Ela Cria.</span>
          <span className="block bg-gradient-to-r from-brand-pink to-brand-gold bg-clip-text text-transparent">
            Ela Conquista.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-body-lg text-neutral-gray-300 max-w-3xl mx-auto mb-8"
        >
          MANA CODA não é apenas uma comunidade, é um movimento. Um movimento
          de mulheres que codam, desenham, constroem, lideram.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('comunidade')}
          >
            Junta-te à Comunidade
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('sobre-nos')}
          >
            Sabe Mais
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('sobre-nos')}
          className="text-neutral-gray-500 hover:text-brand-pink transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}

