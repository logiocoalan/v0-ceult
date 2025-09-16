import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { SummaryBlock } from "@/components/summary-block"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline" // ajustá ruta si hace falta

export default function BecasPage() {
  const becasBlocks = [
    {
      title: "Cómo postular",
      description: "Conocé los pasos necesarios para completar tu postulación exitosamente.",
      href: "/becas/como-postular",
      buttonText: "Ver pasos",
    },
    {
      title: "Documentación",
      description: "Descargá formularios y conocé qué documentos necesitás presentar.",
      href: "/becas/documentacion",
      buttonText: "Ver documentos",
    },
    {
      title: "Renovación",
      description: "Conocé cómo renovar tu beca para el siguiente período académico.",
      href: "/becas/renovacion",
      buttonText: "Ver renovación",
    },
    {
      title: "Preguntas frecuentes",
      description: "Encontrá respuestas a las consultas más comunes sobre las becas.",
      href: "/becas/faq",
      buttonText: "Ver FAQs",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ====== Cronograma primero ====== */}
            <section>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Cronograma de becas
                </h1>
                <p className="text-lg text-muted-foreground">
                  Conocé las fechas importantes del proceso de postulación y selección
                </p>
              </div>

              <div className="mb-12">
                <Timeline />
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Recordatorios importantes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Las fechas pueden estar sujetas a modificaciones</li>
                  <li>• Se recomienda no esperar hasta el último día para postularse</li>
                  <li>• Los resultados se publican en nuestro sitio web y se notifican por email</li>
                  <li>• Mantené actualizada tu información de contacto</li>
                </ul>
              </div>

              <div className="text-center space-y-4">
                <Button asChild size="lg">
                  <Link href="/postularme">Postularme ahora</Link>
                </Button>

                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button asChild variant="ghost">
                    <Link href="/becas/como-postular">Ver cómo postular</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href="/novedades">Ver novedades</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* ====== Luego las tarjetas ====== */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Todo lo que necesitás saber
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explorá toda la información sobre las becas de alojamiento del CEULT
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {becasBlocks.map((block, i) => (
                  <SummaryBlock
                    key={i}
                    title={block.title}
                    description={block.description}
                    href={block.href}
                    buttonText={block.buttonText}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20" />
    </div>
  )
}
