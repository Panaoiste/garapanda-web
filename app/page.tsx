'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Search, FileText, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 pt-2 flex flex-col items-center text-center min-h-[80vh] -mt-6 md:-mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex justify-center mb-8">
          <Image
            src="/GaraPanda_logo.png"
            alt="Logo de GaraPanda"
            width={480}
            height={480}
            className="h-[28rem] w-[28rem] object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <h1 className="text-3xl font-black mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Ningún obstáculo es gigante cuando tienes a tu panda
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Nacemos frágiles, pero crecemos gigantes gracias al poder del cuidado. Entendemos que la vida trae dificultades extremas, pero hemos aprendido que la soledad las hace grandes y la panda las hace pequeñas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/guias"
            className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors h-full"
          >
            <BookOpen className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Guías</h2>
            <p className="text-muted-foreground">
              Tutoriales paso a paso y guías detalladas
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/blog"
            className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors h-full"
          >
            <FileText className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Blog</h2>
            <p className="text-muted-foreground">
              Artículos y noticias sobre tecnología
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/sobre-mi"
            className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors h-full"
          >
            <HelpCircle className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Sobre Mí</h2>
            <p className="text-muted-foreground">
              Conoce más sobre este proyecto
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contacto"
            className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors h-full"
          >
            <Search className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-2">Contacto</h2>
            <p className="text-muted-foreground">
              ¿Tienes preguntas? Contáctanos
            </p>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-muted rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">¿Necesitas ayuda?</h2>
        <p className="text-muted-foreground mb-6">
          Explora nuestras guías o ponte en contacto con nosotros
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/guias"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver Guías
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 border rounded-lg hover:bg-accent transition-colors"
          >
            Contactar
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

