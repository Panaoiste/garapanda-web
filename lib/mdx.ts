import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')
const allowedExtensions = ['.mdx', '.md']
const extensionRegex = /\.mdx?$/

export interface PostMeta {
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
  category?: string
  slug: string
}

export function getAllPosts(type: 'guias' | 'blog' = 'guias'): PostMeta[] {
  const fullPath = path.join(contentDirectory, type)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }

  const fileNames = fs.readdirSync(fullPath)
  const allPostsData = fileNames
    .filter((name) => allowedExtensions.some((ext) => name.endsWith(ext)))
    .map((fileName) => {
      const slug = fileName.replace(extensionRegex, '')
      const fullPath = path.join(contentDirectory, type, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        ...data,
        slug,
      } as PostMeta
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return allPostsData
}

export function getPostBySlug(type: 'guias' | 'blog', slug: string) {
  const targetPath = allowedExtensions
    .map((ext) => path.join(contentDirectory, type, `${slug}${ext}`))
    .find((possiblePath) => fs.existsSync(possiblePath))

  if (!targetPath) {
    return null
  }

  const fileContents = fs.readFileSync(targetPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      ...data,
      slug,
    } as PostMeta,
    content,
  }
}

export function getAllPostSlugs(type: 'guias' | 'blog' = 'guias'): string[] {
  const fullPath = path.join(contentDirectory, type)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }

  const fileNames = fs.readdirSync(fullPath)
  return fileNames
    .filter((name) => allowedExtensions.some((ext) => name.endsWith(ext)))
    .map((fileName) => fileName.replace(extensionRegex, ''))
}

