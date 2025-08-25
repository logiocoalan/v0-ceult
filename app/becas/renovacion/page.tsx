import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, FileText, Calendar, CheckCircle } from "lucide-react"

export default function RenovacionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Renovación de becas</h1>
              <p className="text-lg text-muted-foreground">
                Información sobre cómo renovar tu beca de alojamiento para el siguiente período académico
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Proceso de renovación
                </CardTitle>
                <CardDescription>
                  Los becarios actuales pueden solicitar la renovación de su beca siguiendo estos pasos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  La renovación de becas está sujeta a la disponibilidad de cupos y al cumplimiento de los requisitos
                  académicos y de convivencia establecidos en el reglamento. Los becarios actuales tienen prioridad
                  sobre los nuevos postulantes, siempre que mantengan su condición de estudiante regular y demuestren un
                  rendimiento académico satisfactorio.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Requisitos para renovar
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mantener condición de alumno regular</li>
                      <li>• Cumplir con el rendimiento académico mínimo</li>
                      <li>• No tener sanciones disciplinarias</li>
                      <li>• Estar al día con los pagos</li>
                      <li>• Presentar documentación actualizada</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Documentación requerida
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Certificado de alumno regular actualizado</li>
                      <li>• Constancia de notas del último período</li>
                      <li>• Declaración jurada de ingresos actualizada</li>
                      <li>• Formulario de renovación completo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Fechas importantes</CardTitle>
                <CardDescription>Cronograma del proceso de renovación para el próximo período</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Apertura de renovaciones</span>
                    <span className="text-muted-foreground">Octubre 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Cierre de renovaciones</span>
                    <span className="text-muted-foreground">Noviembre 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Evaluación y resultados</span>
                    <span className="text-muted-foreground">Diciembre 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Inicio del nuevo período</span>
                    <span className="text-muted-foreground">Marzo 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Reglamento completo</h3>
              <p className="text-muted-foreground mb-4">
                Para conocer todos los detalles sobre el proceso de renovación, requisitos específicos y procedimientos,
                consultá el reglamento oficial de becas del CEULT.
              </p>
              <Button asChild variant="outline">
                <a href="/docs/reglamento-becas.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Descargar reglamento completo
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground">¿Sos becario actual y querés renovar tu beca?</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contacto">Consultar renovación</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/becas/faq">Ver preguntas frecuentes</Link>
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
