'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  content: string
}

interface Heading {
  id: string
  text: string
  level: number
}

export function Sidebar({ content }: SidebarProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extraer headings del contenido usando regex
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const matches = Array.from(content.matchAll(headingRegex))
    
    const extractedHeadings: Heading[] = matches.map((match, index) => {
      const level = match[1].length
      const text = match[2].trim()
      // Crear un ID único basado en el texto
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      return { id, text, level }
    })
    
    setHeadings(extractedHeadings)

    // Observar cambios en el scroll para destacar el heading activo
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveId(id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    // Observar todos los headings en el DOM
    const headingElements = document.querySelectorAll('h1, h2, h3')
    headingElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [content])

  if (headings.length === 0) return null

  return (
    <div className="sticky top-20">
      <div className="border rounded-lg p-4 bg-card">
        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
          Contenido
        </h3>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id) || 
                              document.querySelector(`h${heading.level}:contains("${heading.text}")`)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  // Actualizar la URL sin recargar
                  window.history.pushState(null, '', `#${heading.id}`)
                }
              }}
              className={cn(
                'block text-sm transition-colors hover:text-foreground',
                heading.level === 1 && 'pl-0 font-medium',
                heading.level === 2 && 'pl-4',
                heading.level === 3 && 'pl-8 text-muted-foreground',
                activeId === heading.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
