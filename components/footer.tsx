import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">CEULT</h3>
            <p className="text-sm text-muted-foreground">Centro de Estudiantes Universitarios de La Plata</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Becas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/becas/como-postular" className="text-muted-foreground hover:text-primary">
                  Cómo postular
                </Link>
              </li>
              <li>
                <Link href="/becas/documentacion" className="text-muted-foreground hover:text-primary">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="/becas/cronograma" className="text-muted-foreground hover:text-primary">
                  Cronograma
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/la-casa" className="text-muted-foreground hover:text-primary">
                  Vivir en el CEULT
                </Link>
              </li>
              <li>
                <Link href="/ingresantes" className="text-muted-foreground hover:text-primary">
                  Ingresantes
                </Link>
              </li>
              <li>
                <Link href="/novedades" className="text-muted-foreground hover:text-primary">
                  Novedades
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>La Plata, Buenos Aires</li>
              <li>Argentina</li>
              <li>
                <Link href="/contacto" className="hover:text-primary">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CEULT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
