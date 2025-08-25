import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app this would come from a CMS or database
const novedadesData = {
  "apertura-inscripciones-2024": {
    titulo: "Apertura de inscripciones para becas 2024",
    fecha: "2024-02-01",
    categoria: "Becas",
    contenido: `
# Apertura de inscripciones para becas 2024

Nos complace anunciar que ya están **abiertas las inscripciones** para las becas de alojamiento del CEULT correspondientes al período académico 2024.

## Novedades importantes

Este año hemos implementado algunas mejoras en el proceso de postulación:

- **Formulario online simplificado**: Hemos rediseñado el formulario de postulación para hacerlo más intuitivo y fácil de completar.
- **Nuevos criterios de evaluación**: Se han actualizado los criterios para una evaluación más justa y transparente.
- **Mayor cantidad de becas disponibles**: Este año contamos con 20 becas adicionales gracias a las mejoras en nuestras instalaciones.

## Fechas importantes

- **Inicio de inscripciones**: 1 de febrero de 2024
- **Cierre de inscripciones**: 15 de marzo de 2024
- **Publicación de resultados**: 5 de abril de 2024
- **Inicio del período de beca**: 15 de abril de 2024

## Requisitos principales

Para postularte, debés cumplir con los siguientes requisitos:

1. Ser estudiante regular de una universidad de La Plata
2. No poseer vivienda propia en La Plata ni en el Gran La Plata
3. Demostrar necesidad socioeconómica
4. Tener buen rendimiento académico
5. Poder presentar toda la documentación requerida

## Cómo postularse

El proceso de postulación es completamente online y consta de los siguientes pasos:

1. **Verificá tu elegibilidad** en nuestra página de requisitos
2. **Descargá y completá** todos los formularios necesarios
3. **Subí tu documentación** al sistema online
4. **Enviá tu postulación** antes de la fecha límite

¡No dejes pasar esta oportunidad! Las becas son limitadas y se otorgan por orden de mérito.

---

*Para más información, visitá nuestra sección de [becas](/becas) o [contactanos](/contacto) directamente.*
    `,
  },
  "nuevas-instalaciones-cocina": {
    titulo: "Renovación completa de las cocinas comunitarias",
    fecha: "2024-01-15",
    categoria: "Instalaciones",
    contenido: `
# Renovación completa de las cocinas comunitarias

Nos enorgullece anunciar que hemos finalizado la **renovación completa** de todas las cocinas comunitarias del CEULT, mejorando significativamente la experiencia de nuestros residentes.

## Nuevas mejoras

Las cocinas renovadas incluyen:

- **Electrodomésticos modernos**: Nuevas heladeras, microondas, hornallas y hornos de última generación
- **Mobiliario funcional**: Alacenas y mesadas con mayor capacidad de almacenamiento
- **Mejor iluminación**: Sistema de iluminación LED para un ambiente más cómodo
- **Ventilación mejorada**: Nuevos extractores para mantener el aire limpio

## Beneficios para los residentes

Estas mejoras representan:

- Mayor comodidad para cocinar y almacenar alimentos
- Mejor eficiencia energética
- Espacios más higiénicos y fáciles de limpiar
- Ambiente más agradable para la convivencia

La inversión realizada demuestra nuestro compromiso continuo con el bienestar de nuestros becarios.
    `,
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function NovedadPage({ params }: PageProps) {
  const novedad = novedadesData[params.slug as keyof typeof novedadesData]

  if (!novedad) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-4">
                <Link href="/novedades">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a novedades
                </Link>
              </Button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{novedad.categoria}</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{novedad.titulo}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(novedad.fecha).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {novedad.contenido.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {line.slice(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {line.slice(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="ml-4">
                        {line.slice(2)}
                      </li>
                    )
                  }
                  if (line.startsWith("1. ") || line.match(/^\d+\. /)) {
                    return (
                      <li key={index} className="ml-4 list-decimal">
                        {line.replace(/^\d+\. /, "")}
                      </li>
                    )
                  }
                  if (line.trim() === "") {
                    return <br key={index} />
                  }
                  if (line.startsWith("---")) {
                    return <hr key={index} className="my-8 border-border" />
                  }

                  // Handle bold text
                  const boldText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

                  return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: boldText }} />
                })}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/postularme">Postularme</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/novedades">Ver más novedades</Link>
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
