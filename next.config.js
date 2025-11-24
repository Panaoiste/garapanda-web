const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [
      require('rehype-highlight'),
      require('rehype-slug'),
      [
        require('rehype-autolink-headings'),
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // output: 'export', lo comento porque me lo dijo gemini para poder subir a vercel
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withMDX(nextConfig)

