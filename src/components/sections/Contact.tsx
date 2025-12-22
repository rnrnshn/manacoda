import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-brand-navy-light">
      <div className="container mx-auto px-4">
        <ScrollReveal variants={fadeInUp}>
          <h2 className="text-3xl md:text-heading-xl font-bold text-white mb-12 text-center font-display">
            Contacto
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal variants={fadeInUp}>
            <div className="bg-brand-navy rounded-xl p-8 border border-brand-navy-light">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-brand-pink mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@manacoda.co.mz"
                      className="text-neutral-gray-300 hover:text-brand-pink transition-colors"
                    >
                      hello@manacoda.co.mz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-pink mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Localização
                    </h3>
                    <p className="text-neutral-gray-300">Moçambique</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = 'mailto:hello@manacoda.co.mz'
                  }}
                >
                  Envia-nos uma Mensagem
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

