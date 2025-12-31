import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Vision from '../components/sections/Vision'
import Manifesto from '../components/sections/Manifesto'
import Programs from '../components/sections/Programs'
import Partners from '../components/sections/Partners'
import Community from '../components/sections/Community'
import Contact from '../components/sections/Contact'
import { siteMetadata } from '../lib/seo'

export const Route = createFileRoute('/')({
  meta: () => [
    {
      title: siteMetadata.title,
    },
    {
      name: 'description',
      content: siteMetadata.description,
    },
    {
      name: 'keywords',
      content: siteMetadata.keywords,
    },
    // Open Graph
    {
      property: 'og:title',
      content: siteMetadata.title,
    },
    {
      property: 'og:description',
      content: 'Ela Conecta. Ela Cria. Ela Conquista.',
    },
    {
      property: 'og:image',
      content: siteMetadata.ogImage,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: siteMetadata.url,
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: siteMetadata.title,
    },
    {
      name: 'twitter:description',
      content: 'Ela Conecta. Ela Cria. Ela Conquista.',
    },
    {
      name: 'twitter:image',
      content: siteMetadata.ogImage,
    },
  ],
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Vision />
      <Programs />
      <Partners />
      <Community />
    </div>
  )
}
