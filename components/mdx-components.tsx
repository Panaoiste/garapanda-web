import type { MDXComponents } from "mdx/types"

// === IMPORTA TODOS LOS COMPONENTES QUE QUIERAS USAR EN MDX ===
import { Note } from "@/components/Note"
import { Tip } from "@/components/Tip"
import { Warning } from "@/components/Warning"
import { Info } from "@/components/Info"
import { Badge } from "@/components/Badge"

import { Section } from "@/components/Section"
import { Step } from "@/components/Step"
import { Steps } from "@/components/Steps"
import { Card } from "@/components/Card"
import { Callout } from "@/components/Callout"
import { Highlight } from "@/components/Highlight"

import { Title } from "@/components/Title"
import { Subtitle } from "@/components/Subtitle"
import { Block } from "@/components/Block"
import { Divider } from "@/components/Divider"

// =============================================================

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {

    // === TITULARES CON IDs AUTO-GENERADOS ===
    h1: ({ children }) => (
      <h1 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={`heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}>
        {children}
      </h3>
    ),

    // === COMPONENTES DISPONIBLES EN MDX ===
    Note,
    Tip,
    Warning,
    Info,
    Badge,
    Section,
    Step,
    Steps,
    Card,
    Callout,
    Highlight,
    Title,
    Subtitle,
    Block,
    Divider,

    ...components,
  }
}

