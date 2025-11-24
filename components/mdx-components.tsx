import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>{children}</h1>,
    h2: ({ children }) => <h2 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>{children}</h2>,
    h3: ({ children }) => <h3 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>{children}</h3>,
    ...components,
  }
}

