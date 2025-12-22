import { useEffect, useState } from 'react'

interface UseScrollSpyOptions {
  sectionIds: string[]
  offset?: number
}

export const useScrollSpy = ({ sectionIds, offset = 100 }: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the current section based on scroll position
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i])
            return
          }
        }
      }

      // If no section found, set first one as active
      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}

