import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Timeline } from "@/components/timeline"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CronogramaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cronograma de becas</h1>
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
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20"></div>
    </div>
  )
}
