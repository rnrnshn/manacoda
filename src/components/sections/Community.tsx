import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { TrendingUp, Code2, Palette } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const communityTypes = [
  {
    icon: TrendingUp,
    title: 'Hustlers',
    description:
      'Mulheres focadas em crescimento, carreira, execução e resultados.',
    color: 'text-brand-gold',
    bgGradient: 'from-brand-gold/20 to-brand-gold/5',
  },
  {
    icon: Code2,
    title: 'Hackers',
    description:
      'Construtoras, programadoras, engenheiras, solucionadoras de problemas.',
    color: 'text-brand-pink',
    bgGradient: 'from-brand-pink/20 to-brand-pink/5',
  },
  {
    icon: Palette,
    title: 'Hipsters',
    description:
      'Criativas, designers, comunicadoras e storytellers da inovação.',
    color: 'text-brand-gold',
    bgGradient: 'from-brand-gold/20 to-brand-gold/5',
  },
]

export default function Community() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section id="comunidade" className="py-20 bg-brand-navy">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-4 text-center font-display">
            A Comunidade
          </h2>
          <p className="text-body-lg text-neutral-gray-300 text-center max-w-3xl mx-auto mb-12">
            A Comunidade MANA CODA é diversa, colaborativa e orientada à ação.
            Juntas, formam uma força coletiva que cria o futuro.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
        >
          {communityTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full bg-gradient-to-br ${type.bgGradient}`}>
                  <div className={`${type.color} mb-4 flex justify-center`}>
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {type.title}
                  </h3>
                  <p className="text-neutral-gray-300 text-center">
                    {type.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <ScrollReveal variants={fadeInUp}>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contacto')}
            >
              Junta-te à Comunidade
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

