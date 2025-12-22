import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInUp, slideInLeft } from '@/lib/animations'

export default function About() {
  return (
    <section id="sobre-nos" className="py-20 bg-brand-navy">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-4 text-center font-display">
            Sobre Nós
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-12">
          <ScrollReveal variants={slideInLeft}>
            <h3 className="text-4xl md:text-display-md font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-pink-light bg-clip-text text-transparent font-display">
              MANA CODA
            </h3>
          </ScrollReveal>

          <ScrollReveal variants={fadeInUp}>
            <p className="text-body-lg text-neutral-gray-300 mb-6 leading-relaxed">
              MANA CODA não é apenas uma comunidade, é um movimento. Inspiradas
              por iniciativas como Women Techmakers e Laboratoria, nascemos para
              transformar o ecossistema tecnológico moçambicano.
            </p>
          </ScrollReveal>

          <ScrollReveal variants={fadeInUp}>
            <div className="bg-brand-navy-light rounded-xl p-6 border border-brand-pink/20">
              <p className="text-xl md:text-heading-md font-semibold text-white mb-4">
                A Nossa Visão
              </p>
              <p className="text-body-lg text-neutral-gray-300 leading-relaxed">
                Tornar Moçambique a referência nº 1 na formação e liderança
                feminina em STEM em África.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

