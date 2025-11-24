'use client'; // <--- PONLO EN LA PRIMERA LÍNEA
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">GaraPanda</h3>
            <p className="text-sm text-muted-foreground">
              Guías y documentación técnica para desarrolladores y entusiastas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guias" className="text-muted-foreground hover:text-foreground">
                  Guías
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-muted-foreground hover:text-foreground">
                  Sobre Mí
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GaraPanda. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

