import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { SearchBar } from '@/components/search-bar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guías',
  description: 'Explora nuestras guías y tutoriales paso a paso',
  openGraph: {
    title: 'Guías',
    description: 'Explora nuestras guías y tutoriales paso a paso',
  },
}

export default function GuiasPage() {
  const guias = getAllPosts('guias')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Guías y Tutoriales</h1>
        <p className="text-muted-foreground mb-8">
          Encuentra guías detalladas y tutoriales paso a paso para ayudarte en tu trabajo diario.
        </p>

        <SearchBar type="guias" posts={guias} />

        <div className="grid gap-6 mt-8">
          {guias.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay guías disponibles aún.</p>
            </div>
          ) : (
            guias.map((guia) => (
              <Link
                key={guia.slug}
                href={`/guias/${guia.slug}`}
                className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-2">{guia.title}</h2>
                <p className="text-muted-foreground mb-4">{guia.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {guia.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(guia.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  )}
                  {guia.tags && guia.tags.length > 0 && (
                    <div className="flex gap-2">
                      {guia.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

