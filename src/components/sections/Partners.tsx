import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const partnersTop = [
  { name: 'Cerner', logo: '/cerner.png' },
  { name: 'IDEO.org', logo: '/ideo-org.png' },
  { name: 'JP Morgan Chase & Co.', logo: '/jp-morgan.png' },
  { name: 'MOZA', logo: '/moza.png' },
  { name: 'Kabum', logo: '/kabum.png', className: 'h-7 md:h-8 max-w-[110px]' },
]

const partnersBottom = [
  { name: 'Facebook', logo: '/facebook.png' },
  { name: 'Zalando', logo: '/zalando.png' },
  { name: 'Vodafone', logo: '/vodafone.png' },
  { name: 'Designit', logo: '/designit.png' },
]

export default function Partners() {
  return (
    <section
      id="parceiros"
      className="relative overflow-visible py-24 md:pb-52 bg-brand-navy"
    >
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-5xl md:text-heading-xl font-bold text-[#C3503F] text-center font-display">
            Parceiros
          </h2>
        </ScrollReveal>

        <ScrollReveal variants={fadeInUp} className="mt-3">
          <p className="text-center text-[#508677] text-lg md:text-xl font-semibold">
            Os que acreditam no futuro
          </p>
        </ScrollReveal>

        <ScrollReveal variants={fadeInUp} className="mt-6">
          <p className="text-center text-neutral-gray-100 text-lg max-w-4xl mx-auto leading-relaxed">
            A revolução feminina na tecnologia em Moçambique não se faz sozinha.
            Por trás de cada &quot;Hello World&quot;, de cada projeto concluído e
            de cada carreira transformada na MANA CODA, existe uma rede de aliados
            estratégicos.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-8 max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          >
            {partnersTop.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300 ${partner.className ?? ''}`}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {partnersBottom.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute z-50 bottom-0 left-0 right-0 w-full translate-y-1/2 transform pointer-events-none">
        <img src="/stripped_line.svg" alt="" className="w-full" />
      </div>
    </section>
  )
}
