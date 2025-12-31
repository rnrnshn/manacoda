import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'Bootcamp de Introdução à Web:',
    description: 'Inscreve-te na lista de espera',
    notch: 'right',
  },
  {
    title: "Hackathon 'Soluções para Maputo':",
    description: 'Junta a tua equipa e cria impacto.',
    notch: 'center',
  },
  {
    title: 'Live Q&A:',
    description: "'Como conseguir o primeiro emprego em Tech em 2025'.",
    notch: 'left',
  },
]

const notchShapes: Record<'left' | 'center' | 'right', string> = {
  left: 'polygon(0 0, 100% 0, 100% 100%, 32% 100%, 32% 86%, 0 86%)',
  center: 'polygon(0 0, 100% 0, 100% 86%, 68% 86%, 68% 100%, 32% 100%, 32% 86%, 0 86%)',
  right: 'polygon(0 0, 100% 0, 100% 86%, 68% 86%, 68% 100%, 0 100%)',
}

export default function Programs() {
  return (
    <section id="programas" className="py-20 bg-[#272356] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variants={fadeInUp}>
          <div className="text-center mb-10">
            <p className="text-brand-gold text-lg md:text-xl font-semibold mb-4">
              O que vem por aí?
            </p>
            <h2 className="text-3xl md:text-heading-xl font-bold text-neutral-gray-300 mb-2 font-display">
              Programas e Eventos
            </h2>
            <p className="text-neutral-gray-300 text-lg">Brevemente</p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-4"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div
                className="relative bg-brand-navy-light p-8 border border-brand-navy/80 hover:border-brand-pink transition-colors h-full flex flex-col"
              >
                <h3 className="text-brand-pink text-2xl font-semibold leading-tight mb-6 max-w-[15ch] min-h-[5.75rem]">
                  {program.title}
                </h3>
                <p className="text-neutral-gray-100 text-lg leading-relaxed flex-grow">
                  {program.description}
                </p>
                <div className="flex justify-start mt-10">
                  <ArrowRight className="text-brand-gold" size={28} strokeWidth={2.4} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
