import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInUp, slideInLeft } from '@/lib/animations'

export default function About() {
  return (
    <section id="sobre-nos" className="relative py-28 bg-brand-navy">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-xl md:text-heading-xl text-brand-gold mb-6 text-center font-display">
            Sobre Nós
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal variants={slideInLeft}>
            <h3 className="text-5xl text-center md:text-display-md font-bold mb-6 text-brand-pink font-display">
              MANA CODA
            </h3>
          </ScrollReveal>

          <ScrollReveal variants={fadeInUp}>
            <p className="text-center text-body-lg text-neutral-gray-300 mb-2 leading-relaxed">
              MANA CODA não é apenas uma comunidade, é um movimento. Inspiradas
              por iniciativas como Women Techmakers e Laboratoria, nascemos para
              transformar o ecossistema tecnológico moçambicano.
            </p>
          </ScrollReveal>

          <ScrollReveal variants={fadeInUp}>
              <p className="text-center text-body-lg text-neutral-gray-300 leading-relaxed">
                <span className="font-semibold">A Nossa Visão</span> Tornar Moçambique a referência nº 1 na formação e liderança
                feminina em STEM em África.
              </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src="/distorted_lines.svg" alt="" className="w-full" />
      </div>
    </section>
  )
}

