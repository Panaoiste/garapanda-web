import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './highlight.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GaraPanda',
    template: '%s | GaraPanda',
  },
  description: 'GaraPanda: guías, documentación y ayuda técnica para tu día a día.',
  keywords: ['garapanda', 'documentación', 'guías', 'tutoriales', 'ayuda', 'soporte'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tudominio.com',
    siteName: 'GaraPanda',
    title: 'GaraPanda',
    description: 'GaraPanda: guías, documentación y ayuda técnica para tu día a día.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GaraPanda',
    description: 'GaraPanda: guías, documentación y ayuda técnica para tu día a día.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

