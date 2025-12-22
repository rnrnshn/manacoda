import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/manacoda',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/manacoda',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/manacoda',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@manacoda.co.mz',
    },
  ]

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.svg"
                alt="MANA CODA"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold font-display">MANA CODA</span>
            </div>
            <p className="text-neutral-gray-300 text-sm mb-4">
              Ela Conecta. Ela Cria. Ela Conquista.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-gray-300 hover:text-brand-pink transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-neutral-gray-300">
              <li>
                <a href="#sobre-nos" className="hover:text-brand-pink transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-brand-pink transition-colors">
                  Programas
                </a>
              </li>
              <li>
                <a href="#comunidade" className="hover:text-brand-pink transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-pink transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-neutral-gray-300 mb-2">
              <a
                href="mailto:hello@manacoda.co.mz"
                className="hover:text-brand-pink transition-colors"
              >
                hello@manacoda.co.mz
              </a>
            </p>
            <p className="text-sm text-neutral-gray-300">
              Moçambique
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-navy-light pt-8 text-center text-sm text-neutral-gray-500">
          <p>© {currentYear} MANA CODA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

