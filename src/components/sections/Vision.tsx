import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Target, Heart, Lightbulb, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Inclusão & Diversidade',
    description: 'Tecnologia para todas',
    color: 'text-brand-pink',
  },
  {
    icon: Target,
    title: 'Impacto Social',
    description: 'Resultados reais e mensuráveis',
    color: 'text-brand-gold',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Aprender fazendo',
    color: 'text-brand-pink',
  },
  {
    icon: Heart,
    title: 'Colaboração',
    description: 'Comunidade acima do indivíduo',
    color: 'text-brand-gold',
  },
  {
    icon: Award,
    title: 'Empoderamento Feminino',
    description: 'Liderança, autonomia e protagonismo',
    color: 'text-green-500',
  },
]

export default function Vision() {
  return (
    <section id="visao" className="py-20 bg-brand-navy-light">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-12 text-center font-display">
            Valores
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <div className={`${value.color} mb-4 flex justify-center`}>
                    <Icon size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

