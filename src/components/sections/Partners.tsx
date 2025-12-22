import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Building2, Briefcase, GraduationCap, Network } from 'lucide-react'

const partnerCategories = [
  {
    icon: Building2,
    title: 'Institucionais & Doadores',
    description: 'UN Women, UNICEF, UNDP, GIZ, USAID, Fundações',
    color: 'text-brand-pink',
  },
  {
    icon: Briefcase,
    title: 'Setor Privado',
    description: 'Bancos, Telcos, Fintechs, Startups, Big Tech',
    color: 'text-brand-gold',
  },
  {
    icon: GraduationCap,
    title: 'Academia',
    description: 'Universidades, Institutos Técnicos',
    color: 'text-brand-pink',
  },
  {
    icon: Network,
    title: 'Ecossistema',
    description: 'Hubs de inovação, comunidades tech',
    color: 'text-brand-gold',
  },
]

const benefits = [
  'Aumento de mulheres em funções técnicas',
  'Criação de pipelines de talentos femininos',
  'Impacto social e económico mensurável',
]

export default function Partners() {
  return (
    <section id="parceiros" className="py-20 bg-brand-navy-light">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-12 text-center font-display">
            Parceiros
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto"
        >
          {partnerCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full">
                  <div className={`${category.color} mb-4 flex justify-center`}>
                    <Icon size={40} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-gray-300">
                    {category.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <ScrollReveal variants={fadeInUp}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Benefícios para Parceiros
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-neutral-gray-300"
                >
                  <span className="text-brand-pink mt-1">•</span>
                  <p className="text-body-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="primary" size="lg">
                Torna-te Parceiro
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

