'use client'

import { useState, useMemo, useEffect } from 'react'
import { Search } from 'lucide-react'
import { type PostMeta } from '@/lib/mdx'
import Link from 'next/link'

interface SearchBarProps {
  type: 'guias' | 'blog'
  posts: PostMeta[]
}

export function SearchBar({ type, posts }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description?.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  }, [searchQuery, posts])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={`Buscar en ${type === 'guias' ? 'guías' : 'blog'}...`}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {isOpen && searchQuery && filteredPosts.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${type}/${post.slug}`}
              className="block p-4 hover:bg-accent transition-colors border-b last:border-b-0"
              onClick={() => {
                setSearchQuery('')
                setIsOpen(false)
              }}
            >
              <h3 className="font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      )}

      {isOpen && searchQuery && filteredPosts.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border rounded-lg shadow-lg p-4">
          <p className="text-muted-foreground text-center">
            No se encontraron resultados
          </p>
        </div>
      )}
    </div>
  )
}

