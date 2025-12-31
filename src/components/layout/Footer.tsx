import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/company/manacoda',
    },
    {
      name: 'Twitter',
      Icon: FaSquareTwitter,
      href: 'https://twitter.com/manacoda',
    },
    {
      name: 'Facebook',
      Icon: FaFacebookSquare,
      href: 'https://www.facebook.com/manacoda',
    },
    {
      name: 'Instagram',
      Icon: RiInstagramFill,
      href: 'https://www.instagram.com/manacoda',
    },
  ]

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-8">
          {/* Brand Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex md:justify-end items-center gap-2 mb-4">
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
            <div className="flex flex-col gap-4">
              <p>Siga-nos:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.Icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                      aria-label={social.name}
                    >
                      <Icon className="h-8 w-8 bg-brand-navy-light text-white shadow-sm transition hover:bg-brand-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Copyright */}
        <div className="border-t border-brand-navy-light py-4 text-center text-sm text-neutral-gray-500 bg-white">
          <p className="text-brand-navy">© {currentYear} MANA CODA. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}
