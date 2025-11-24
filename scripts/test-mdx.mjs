import fs from 'fs'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const content = fs.readFileSync(process.argv[2], 'utf8')

try {
  await compile(content, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['anchor'] } }],
    ],
  })
  console.log('success')
} catch (error) {
  console.error(error)
  process.exit(1)
}

