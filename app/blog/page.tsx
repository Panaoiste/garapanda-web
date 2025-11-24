import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { SearchBar } from '@/components/search-bar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos y noticias sobre tecnología y desarrollo',
  openGraph: {
    title: 'Blog',
    description: 'Artículos y noticias sobre tecnología y desarrollo',
  },
}

export default function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Artículos, noticias y reflexiones sobre tecnología y desarrollo.
        </p>

        <SearchBar type="blog" posts={posts} />

        <div className="grid gap-6 mt-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay artículos disponibles aún.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {post.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
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

