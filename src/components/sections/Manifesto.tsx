import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInUp } from '@/lib/animations'

const manifestoLines = [
  'Não pedimos permissão.',
  'Criamos.',
  '',
  'Durante demasiado tempo disseram às mulheres para esperar, adaptar-se, caber no molde.',
  'Nós escolhemos construir o molde.',
  '',
  'Acreditamos que talento não tem gênero. Oportunidade é que tem.',
  '',
  'A MANA CODA nasce para quebrar códigos antigos e escrever novos futuros.',
  '',
  'Aqui, mulheres aprendem fazendo. Erram rápido. Criam soluções reais. Transformam curiosidade em competência. Competência em carreira. Carreira em impacto.',
  '',
  'Não somos um curso. Não somos um evento. Não somos uma tendência.',
  'Somos um movimento.',
  '',
  'Um movimento de mulheres que codam, desenham, constroem, lideram. Mulheres que ocupam espaços. Mulheres que criam oportunidades — para si e para outras.',
  '',
  'Não esperamos pelo futuro.',
  'Nós programamos o futuro.',
  '',
  'MANA CODA. Ela conecta. Ela cria. Ela conquista.',
]

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-20 bg-gradient-to-b from-brand-navy to-brand-navy-light">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-12 text-center font-display">
              Manifesto
            </h2>

            <div className="space-y-4">
              {manifestoLines.map((line, index) => {
                if (line === '') {
                  return <div key={index} className="h-4" />
                }

                const isHighlight = line.includes('MANA CODA') || 
                                   line.includes('movimento') ||
                                   line.includes('programamos o futuro')

                return (
                  <ScrollReveal
                    key={index}
                    variants={fadeInUp}
                    className={isHighlight ? 'text-brand-pink font-semibold text-xl md:text-2xl' : 'text-neutral-gray-300 text-lg md:text-xl'}
                  >
                    {line}
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

