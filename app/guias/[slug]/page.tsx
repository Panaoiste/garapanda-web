import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Sidebar } from '@/components/sidebar'
import { MDXContent } from '@/components/mdx-content'
import type { Metadata } from 'next'
import { Calendar, User } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs('guias')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug('guias', params.slug)

  if (!post) {
    return {
      title: 'Guía no encontrada',
    }
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
    },
  }
}

export default function GuiaPage({ params }: PageProps) {
  const post = getPostBySlug('guias', params.slug)

  if (!post) {
    notFound()
  }

  const { meta, content } = post

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Guías', href: '/guias' },
            { label: meta.title, href: `/guias/${meta.slug}` },
          ]}
        />

        <div className="flex gap-8 mt-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
                {meta.description && (
                  <p className="text-xl text-muted-foreground mb-4">{meta.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {meta.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(meta.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  )}
                  {meta.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{meta.author}</span>
                    </div>
                  )}
                </div>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXContent content={content} />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar content={content} />
          </aside>
        </div>
      </div>
    </div>
  )
}

