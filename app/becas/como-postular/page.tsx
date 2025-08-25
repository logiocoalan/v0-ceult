import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, FileText, Upload, Send } from "lucide-react"

const pasos = [
  {
    numero: 1,
    titulo: "Verificá tu elegibilidad",
    descripcion: "Asegurate de cumplir con todos los requisitos obligatorios antes de comenzar tu postulación.",
    icon: CheckCircle,
    accion: "Verificar requisitos",
    href: "/becas/eligibilidad",
  },
  {
    numero: 2,
    titulo: "Prepará tu documentación",
    descripcion: "Descargá los formularios necesarios y reuní todos los documentos requeridos para tu postulación.",
    icon: FileText,
    accion: "Ver documentos",
    href: "/becas/documentacion",
  },
  {
    numero: 3,
    titulo: "Completá el formulario online",
    descripcion:
      "Ingresá al sistema de postulaciones y completá todos los campos con tu información personal y académica.",
    icon: Upload,
    accion: "Ir al formulario",
    href: "/postularme",
  },
  {
    numero: 4,
    titulo: "Enviá tu postulación",
    descripcion:
      "Revisá toda la información, adjuntá los documentos requeridos y enviá tu postulación antes de la fecha límite.",
    icon: Send,
    accion: "Enviar postulación",
    href: "/postularme",
  },
]

export default function ComoPostularPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo postular</h1>
              <p className="text-lg text-muted-foreground">
                Seguí estos 4 pasos para completar tu postulación de manera exitosa
              </p>
            </div>

            <div className="space-y-8">
              {pasos.map((paso, index) => {
                const Icon = paso.icon
                return (
                  <Card key={paso.numero} className="relative">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                          {paso.numero}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Icon className="h-5 w-5 text-primary" />
                            {paso.titulo}
                          </CardTitle>
                          <CardDescription className="mt-2 text-base">{paso.descripcion}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pl-16">
                      <Button asChild variant="outline">
                        <Link href={paso.href}>{paso.accion}</Link>
                      </Button>
                    </CardContent>

                    {/* Connecting line */}
                    {index < pasos.length - 1 && <div className="absolute left-10 top-20 w-px h-8 bg-border"></div>}
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 text-center space-y-6">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">¿Tenés dudas sobre el proceso?</h3>
                  <p className="text-muted-foreground mb-4">
                    Nuestro equipo está disponible para ayudarte con cualquier consulta sobre tu postulación.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button asChild variant="outline">
                      <Link href="/becas/faq">Ver preguntas frecuentes</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contacto">Contactar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Button asChild size="lg">
                <Link href="/postularme">Comenzar mi postulación</Link>
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
