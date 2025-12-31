import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    title: 'Ensinar',
    icon: '/ensinar.svg',
    alt: 'Ícone de ensino em pixel art',
    intro: 'Do zero ao "Hello World".',
    items: [
      {
        title: 'Bootcamps Intensivos',
        description: 'Programação, Design, Data Science;',
      },
      {
        title: 'Masterclasses',
        description: 'Com as melhores experts do mercado;',
      },
      {
        title: 'Mentoria',
        description: 'Aprende com quem já trilhou o caminho.',
      },
    ],
  },
  {
    title: 'Empoderar',
    icon: '/empoderar.svg',
    alt: 'Ícone de empoderamento em pixel art',
    intro: 'Acreditamos no teu potencial antes mesmo de tu acreditares.',
    items: [
      {
        title: 'Manifesto STEM',
        description: 'O nosso compromisso com a inclusão;',
      },
      {
        title: 'Networking',
        description: 'Conecta-te com manas que partilham a mesma vibração;',
      },
      {
        title: 'Histórias Reais',
        description: 'Inspiração semanal para te manteres motivada.',
      },
    ],
  },
  {
    title: 'Conectar',
    icon: '/conectar.svg',
    alt: 'Ícone de conexão em pixel art',
    intro: 'O conhecimento só vale se gerar oportunidades.',
    items: [
      {
        title: 'Feiras de Emprego',
        description: 'Acesso direto a recrutadores;',
      },
      {
        title: 'Grants & Estágios',
        description: 'Oportunidades remuneradas locais e internacionais;',
      },
      {
        title: 'Hackathons & Buildathons',
        description: 'Constrói projetos reais e ganha visibilidade.',
      },
    ],
  },
]

export default function Vision() {
  return (
    <section
      id="visao"
      className="relative overflow-hidden py-24 bg-brand-navy-light"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/square_pattern_1.svg"
          alt=""
          className="hidden md:block absolute left-0 top-0 w-[393px] max-w-none opacity-70"
        />
        <img
          src="/square_pattern_2.svg"
          alt=""
          className="hidden md:block absolute right-0 bottom-0 w-[393px] max-w-none opacity-80"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white text-center font-display">
            Nossos Pilares
          </h2>
        </ScrollReveal>

        <ScrollReveal variants={fadeInUp} className="mt-3">
          <p className="text-center text-neutral-gray-300 text-lg md:text-body-lg">
            Como vamos transformar a tua carreira? Através do método MANA CODA:
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              variants={fadeInUp}
              className="space-y-4 text-left"
            >
              <img
                src={pillar.icon}
                alt={pillar.alt}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-neutral-gray-300 mt-2">{pillar.intro}</p>
              </div>

              <ul className="mt-4 space-y-2 text-neutral-gray-300 list-disc pl-5 marker:text-white">
                {pillar.items.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-white">{item.title}:</span>{' '}
                    {item.description}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <ScrollReveal variants={fadeInUp} className="mt-12 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-brand-navy border border-brand-gold rounded-none text-brand-gold hover:bg-brand-navy inline-flex items-center justify-center gap-2"
          >
            Junta-te à Comunidade
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
