import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: 'Conoce más sobre este proyecto de documentación',
  openGraph: {
    title: 'Sobre Mí',
    description: 'Conoce más sobre este proyecto de documentación',
  },
}

export default function SobreMiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Sobre Mí', href: '/sobre-mi' },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">Sobre Mí</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Bienvenido a este espacio de documentación y guías técnicas.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">El Proyecto</h2>
            <p className="text-muted-foreground mb-4">
              Este sitio web está diseñado para compartir conocimiento, guías y documentación
              técnica de forma clara y accesible. El objetivo es crear un recurso útil para
              desarrolladores y usuarios que buscan soluciones y tutoriales paso a paso.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tecnologías</h2>
            <p className="text-muted-foreground mb-4">
              Este sitio está construido con tecnologías modernas y eficientes:
            </p>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>Next.js 14 con App Router</li>
              <li>TypeScript para type safety</li>
              <li>TailwindCSS para estilos</li>
              <li>MDX para contenido</li>
              <li>Optimizado para rendimiento y SEO</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Si tienes preguntas, sugerencias o quieres colaborar, no dudes en{' '}
              <a href="/contacto" className="text-primary hover:underline">
                contactarme
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

