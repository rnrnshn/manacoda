import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const ecosystemItems = [
  {
    title: 'Podcast: Ela Coda Talks 🎧',
    description: 'Histórias sem filtros, conversas inspiradoras e dicas de carreira.',
    accentColor: '#BCA075',
    borderGradient: 'linear-gradient(90deg, #508677 0%, #4498D6 100%)',
  },
  {
    title: 'Magazine "ELA CODA" 📖',
    description: 'A nossa revista trimestral com pesquisas, entrevistas e tendências.',
    accentColor: '#C471B6',
    borderGradient: 'linear-gradient(120deg, #C471B6 0%, #BCA075 100%)',
  },
  {
    title: 'Newsletter 💌',
    description: 'Bolsas de estudo, vagas de emprego e novidades direto no teu email.',
    accentColor: '#BCA075',
    borderGradient: 'linear-gradient(120deg, #BCA075 0%, #C471B6 100%)',
  },
]

export default function Community() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section
      id="comunidade"
      className="relative overflow-visible py-20 bg-gradient-to-b from-brand-navy-light to-brand-navy"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_left,#ffffff10_0,transparent_30%),radial-gradient(circle_at_bottom_right,#ffffff08_0,transparent_28%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px))', backgroundSize: '80px 80px' }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <ScrollReveal variants={fadeInUp} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight font-display md:whitespace-nowrap">
              O Ecossistema
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-brand-gold leading-tight font-display md:whitespace-nowrap">
              MANA CODA
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ecosystemItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="h-full"
              >
                <div
                  style={{
                    ['--accent-color' as string]: item.accentColor,
                    backgroundImage:
                      item.borderGradient ||
                      'linear-gradient(120deg, var(--accent-color), rgba(255,255,255,0.18))',
                  }}
                  className="relative p-[1px] h-full"
                >
                  <div className="relative bg-brand-navy h-full">
                    <div className="px-7 py-7 md:px-8 md:py-8 text-white min-h-[220px] flex flex-col gap-5 justify-between">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-4">
                          <span className="mt-1 block h-12 w-[3px] bg-[var(--accent-color)]" />
                          <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-neutral-gray-100 text-lg md:text-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 top-0 h-full w-28 sm:w-32">
            <div className="h-full w-full bg-[url('/square_pattern_1.svg')] bg-cover opacity-80" />
          </div>
          <div className="absolute right-0 bottom-0 h-full w-28 sm:w-32">
            <div className="h-full w-full bg-[url('/square_pattern_2.svg')] bg-cover opacity-80" />
          </div>

          <div className="relative border border-brand-gold bg-brand-navy px-6 sm:px-10 py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-3xl font-semibold text-white leading-tight">
                  Faça parte deste <span className="text-brand-pink">movimento</span>
                </h3>
                <p className="text-lg text-neutral-gray-100 mt-3">
                  Junte-se à nossa comunidade
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="bg-brand-navy border border-brand-gold rounded-none text-brand-gold hover:bg-brand-navy inline-flex items-center justify-center gap-2"
                onClick={() => scrollToSection('contacto')}
              >
                Junta-te à Comunidade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
