import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FacultadesList } from "@/components/facultades-list"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, GraduationCap, MapPin, Calendar, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "UNLP y Carreras - CEULT",
  description:
    "Guía completa para estudiar en la Universidad Nacional de La Plata. Información sobre inscripciones, facultades, carreras y vida universitaria.",
}

export default function UnlpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl space-y-14 md:space-y-20">
            {/* Hero */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Estudiar en la UNLP
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tu guía completa para comenzar tu carrera universitaria en la Universidad Nacional de La Plata
              </p>
            </div>

            {/* Cómo inscribirse */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Cómo inscribirse a la UNLP
                  </CardTitle>
                  <CardDescription>Pasos para completar tu inscripción universitaria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {[
                      "Elegí tu carrera en el catálogo oficial de la UNLP",
                      "Completá la preinscripción online en el sistema SIU-Guaraní",
                      "Presentá la documentación requerida en la facultad elegida",
                      "Realizá el curso de ingreso (si corresponde a tu carrera)",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full size-6 flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </div>
                        <p className="text-sm">{text}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <a href="https://www.unlp.edu.ar/ingreso/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ir al sitio oficial de inscripción
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Facultades */}
            <section>
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">Facultades de la UNLP</h2>
                <p className="text-muted-foreground">Explorá todas las facultades y sus sitios oficiales</p>
              </div>
              <FacultadesList />
            </section>

            {/* Catálogo */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Catálogo de Carreras
                  </CardTitle>
                  <CardDescription>Explorá todas las carreras disponibles en la UNLP</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://unlp.edu.ar/oferta-academica/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver todas las carreras
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Bienestar */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Bienestar Universitario
                  </CardTitle>
                  <CardDescription>Recursos y servicios para tu vida universitaria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    La UNLP ofrece diversos servicios de apoyo para estudiantes: becas de estudio, asistencia médica,
                    actividades deportivas y culturales, y programas de bienestar estudiantil.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.unlp.edu.ar/bienestar-universitario/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Bienestar Universitario
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* FAQs */}
            <section>
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">Preguntas Frecuentes</h2>
                <p className="text-muted-foreground">Respuestas a las dudas más comunes de los ingresantes</p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuándo abren las inscripciones?</AccordionTrigger>
                  <AccordionContent>
                    Las inscripciones suelen abrirse entre octubre y diciembre. Consultá el sitio oficial de la UNLP
                    para fechas exactas según tu carrera de interés.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Todas las carreras tienen curso de ingreso?</AccordionTrigger>
                  <AccordionContent>
                    No todas las carreras lo requieren. Algunas tienen cursos introductorios, otras exámenes de ingreso,
                    y algunas son de ingreso libre.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Qué documentación necesito para inscribirme?</AccordionTrigger>
                  <AccordionContent>
                    Generalmente: DNI, certificado de estudios secundarios legalizado, certificado de nacimiento y
                    formulario de inscripción completo. Revisá requisitos específicos en tu facultad.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Puedo cambiar de carrera una vez inscripto?</AccordionTrigger>
                  <AccordionContent>
                    Sí, siguiendo los procedimientos de cada facultad. Algunos cambios pueden requerir requisitos
                    académicos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿La UNLP ofrece becas de estudio?</AccordionTrigger>
                  <AccordionContent>
                    Sí: becas de estudio, comedor, transporte y becas especiales. Consultá en Bienestar Universitario.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>¿Cómo funciona el sistema de correlatividades?</AccordionTrigger>
                  <AccordionContent>
                    Son materias que debés aprobar antes de cursar otras. Cada plan de estudios las define. Planificá tu
                    cursada teniendo esto en cuenta.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>¿Hay servicios de apoyo para estudiantes del interior?</AccordionTrigger>
                  <AccordionContent>
                    Sí, con programas sobre alojamiento, becas especiales y orientación para adaptarte a la vida
                    universitaria en La Plata.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20" />
    </div>
  )
}
