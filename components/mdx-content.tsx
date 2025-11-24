import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface MDXContentProps {
  content: string
}

// Función para generar IDs únicos desde el texto
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const components = {
  h1: ({ children, ...props }: any) => {
    const id = generateId(String(children))
    return <h1 id={id} className="text-4xl font-bold mt-8 mb-4" {...props}>{children}</h1>
  },
  h2: ({ children, ...props }: any) => {
    const id = generateId(String(children))
    return <h2 id={id} className="text-3xl font-semibold mt-6 mb-3" {...props}>{children}</h2>
  },
  h3: ({ children, ...props }: any) => {
    const id = generateId(String(children))
    return <h3 id={id} className="text-2xl font-semibold mt-4 mb-2" {...props}>{children}</h3>
  },
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  ol: (props: any) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  code: (props: any) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  img: (props: any) => <img className="rounded-lg my-4" {...props} />,
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
                properties: {
                  className: ['anchor'],
                },
              },
            ],
          ],
        },
      }}
      components={components}
    />
  )
}
