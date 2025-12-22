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
                src="/vertical_logo.svg"
                alt="MANA CODA"
                className="h-auto w-12"
              />
            </div>
            
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="pb-4">Para mais informações, dúvidas e esclarecimentos, entre em contacto pelos canais:</p>
            <p><span className="text-brand-gold font-semibold">Contacto:</span> + 258 80 123 4567</p>
            <p><span className="text-brand-gold font-semibold">Email:</span> manacoda@cumunite.co.mz</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-navy-light pt-8 text-center text-sm text-neutral-gray-500">
          <p>© {currentYear} MANA CODA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

