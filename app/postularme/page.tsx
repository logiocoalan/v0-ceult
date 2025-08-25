import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, FileText, CheckCircle } from "lucide-react"

export default function PostularmePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Postulate para una beca</h1>
              <p className="text-lg text-muted-foreground">Seguí estos pasos para completar tu postulación</p>
            </div>

            <div className="grid gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Paso 1: Verificá tu elegibilidad
                  </CardTitle>
                  <CardDescription>Asegurate de cumplir con todos los requisitos antes de postularte</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link href="/becas/eligibilidad">
                      Verificar requisitos
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Paso 2: Prepará tu documentación
                  </CardTitle>
                  <CardDescription>Descargá los formularios y reuní todos los documentos necesarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link href="/becas/documentacion">
                      Ver documentación requerida
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    Paso 3: Completá tu postulación online
                  </CardTitle>
                  <CardDescription>Accedé al formulario de postulación y cargá toda tu información</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Ir al formulario de postulación
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">¿Necesitás ayuda?</h3>
              <p className="text-muted-foreground mb-4">
                Si tenés dudas sobre el proceso de postulación, no dudes en contactarnos.
              </p>
              <Button asChild variant="outline">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20"></div>
    </div>
  )
}
