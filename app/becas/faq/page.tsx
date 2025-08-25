import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes</h1>
              <p className="text-lg text-muted-foreground">
                Encontrá respuestas a las consultas más comunes sobre las becas de alojamiento
              </p>
            </div>

            <div className="mb-12">
              <FAQ />
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">¿No encontraste lo que buscabas?</h3>
              <p className="text-muted-foreground mb-4">
                Si tenés alguna consulta específica que no está respondida en estas preguntas frecuentes, no dudes en
                contactarnos. Nuestro equipo estará encantado de ayudarte.
              </p>
              <Button asChild variant="outline">
                <Link href="/contacto">Hacer una consulta</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <Button asChild size="lg">
                <Link href="/postularme">Postularme ahora</Link>
              </Button>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild variant="ghost">
                  <Link href="/becas/elegibilidad">Verificar elegibilidad</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/becas/como-postular">Ver cómo postular</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20"></div>
    </div>
  )
}
