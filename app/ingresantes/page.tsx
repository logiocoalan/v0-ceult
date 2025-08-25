import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, MapPin, Calendar, Users } from "lucide-react"

export const metadata = {
  title: "Información para Ingresantes - CEULT",
  description: "Guía completa para estudiantes que ingresan a la universidad y buscan alojamiento en La Plata.",
}

export default function IngresantesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Información para ingresantes</h1>
              <p className="text-lg text-muted-foreground">
                Todo lo que necesitás saber si estás comenzando tu carrera universitaria en La Plata
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Bienvenidos a la vida universitaria
                  </CardTitle>
                  <CardDescription>Tu primer paso hacia una experiencia universitaria exitosa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comenzar la universidad es un momento emocionante y desafiante. Si venís de otra ciudad para
                    estudiar en La Plata, sabemos que encontrar un lugar donde vivir es una de tus principales
                    preocupaciones. El CEULT está aquí para ayudarte en esta nueva etapa.
                  </p>
                  <p className="text-muted-foreground">
                    Nuestras becas de alojamiento están especialmente pensadas para estudiantes como vos, que necesitan
                    un lugar seguro, cómodo y accesible para concentrarse en sus estudios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    ¿Por qué elegir el CEULT?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Ubicación estratégica</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cerca de las principales universidades</li>
                        <li>• Excelente conexión de transporte público</li>
                        <li>• Acceso a servicios y comercios</li>
                        <li>• Ambiente estudiantil seguro</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Comunidad estudiantil</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ambiente de estudio colaborativo</li>
                        <li>• Actividades de integración</li>
                        <li>• Red de apoyo entre estudiantes</li>
                        <li>• Experiencias compartidas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Cronograma para ingresantes
                  </CardTitle>
                  <CardDescription>Fechas importantes que tenés que tener en cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Febrero - Marzo</h4>
                      <p className="text-sm text-muted-foreground">
                        Período de inscripciones para becas. Es el momento ideal para postularte si ya confirmaste tu
                        ingreso a la universidad.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Abril</h4>
                      <p className="text-sm text-muted-foreground">
                        Inicio del período de becas. Comenzás tu vida universitaria con la tranquilidad de tener tu
                        alojamiento resuelto.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Durante el año</h4>
                      <p className="text-sm text-muted-foreground">
                        Participás en actividades de integración y aprovechás todos los servicios que ofrece el CEULT.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Consejos para ingresantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Antes de postularte</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Confirmá tu inscripción universitaria</li>
                        <li>• Reuní toda la documentación necesaria</li>
                        <li>• Calculá los costos totales</li>
                        <li>• Leé el reglamento completo</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Una vez en el CEULT</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Participá en las actividades de bienvenida</li>
                        <li>• Conocé a tus compañeros de residencia</li>
                        <li>• Aprovechá los espacios de estudio</li>
                        <li>• Respetá las normas de convivencia</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center space-y-6">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">¿Listo para dar el primer paso?</h3>
                  <p className="text-muted-foreground mb-6">
                    No dejes que la preocupación por el alojamiento afecte tu rendimiento académico. Postulate para una
                    beca del CEULT y concentrate en lo que realmente importa: tus estudios.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/becas/elegibilidad">Verificar si soy elegible</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/becas/como-postular">Ver cómo postular</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20"></div>
    </div>
  )
}
