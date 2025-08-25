import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Novedades - CEULT",
  description: "Últimas noticias, actualizaciones y anuncios del Centro de Estudiantes Universitarios de La Plata.",
}

// Mock data - in a real app this would come from a CMS or database
const novedades = [
  {
    slug: "apertura-inscripciones-2024",
    titulo: "Apertura de inscripciones para becas 2024",
    resumen:
      "Ya están abiertas las inscripciones para las becas de alojamiento del período 2024. Conocé los nuevos requisitos y fechas importantes.",
    fecha: "2024-02-01",
    categoria: "Becas",
    destacado: true,
  },
  {
    slug: "nuevas-instalaciones-cocina",
    titulo: "Renovación completa de las cocinas comunitarias",
    resumen: "Finalizamos la renovación de todas las cocinas comunitarias con nuevos equipos y mobiliario moderno.",
    fecha: "2024-01-15",
    categoria: "Instalaciones",
    destacado: false,
  },
  {
    slug: "taller-gestion-tiempo",
    titulo: "Taller de gestión del tiempo para estudiantes",
    resumen: "Este sábado realizaremos un taller gratuito sobre técnicas de estudio y gestión del tiempo académico.",
    fecha: "2024-01-10",
    categoria: "Actividades",
    destacado: false,
  },
  {
    slug: "resultados-becas-2023",
    titulo: "Publicación de resultados de becas 2023",
    resumen: "Ya están disponibles los resultados de la convocatoria de becas 2023. Consultá si fuiste seleccionado.",
    fecha: "2023-12-15",
    categoria: "Becas",
    destacado: false,
  },
  {
    slug: "celebracion-25-aniversario",
    titulo: "Celebramos 25 años del CEULT",
    resumen:
      "El CEULT cumple 25 años brindando alojamiento a estudiantes universitarios. Conocé nuestra historia y logros.",
    fecha: "2023-11-20",
    categoria: "Institucional",
    destacado: false,
  },
]

export default function NovedadesPage() {
  const novedadDestacada = novedades.find((n) => n.destacado)
  const otrasNovedades = novedades.filter((n) => !n.destacado)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Novedades</h1>
              <p className="text-lg text-muted-foreground">
                Mantente informado sobre las últimas noticias y actualizaciones del CEULT
              </p>
            </div>

            {/* Featured News */}
            {novedadDestacada && (
              <div className="mb-12">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">Destacado</Badge>
                      <Badge variant="outline">{novedadDestacada.categoria}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{novedadDestacada.titulo}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Calendar className="h-4 w-4" />
                      {new Date(novedadDestacada.fecha).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{novedadDestacada.resumen}</p>
                    <Button asChild>
                      <Link href={`/novedades/${novedadDestacada.slug}`}>
                        Leer más
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other News */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otrasNovedades.map((novedad) => (
                <Card key={novedad.slug} className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{novedad.categoria}</Badge>
                    </div>
                    <CardTitle className="text-lg">{novedad.titulo}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(novedad.fecha).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{novedad.resumen}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-normal text-primary hover:text-primary/80"
                    >
                      <Link href={`/novedades/${novedad.slug}`} className="flex items-center gap-1">
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <Card className="bg-muted/50">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-4">¿Querés recibir nuestras novedades?</h3>
                  <p className="text-muted-foreground mb-6">
                    Suscribite a nuestro boletín para recibir las últimas noticias y actualizaciones del CEULT
                    directamente en tu email.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/contacto">Suscribirme al boletín</Link>
                  </Button>
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
