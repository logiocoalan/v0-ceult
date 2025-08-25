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
      {/* Header component */}
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Estudiar en la UNLP</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tu guía completa para comenzar tu carrera universitaria en la Universidad Nacional de La Plata
            </p>
          </div>

          {/* Cómo inscribirse */}
          <section className="mb-12">
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
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <p className="text-sm">Elegí tu carrera en el catálogo oficial de la UNLP</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <p className="text-sm">Completá la preinscripción online en el sistema SIU-Guaraní</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <p className="text-sm">Presentá la documentación requerida en la facultad elegida</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <p className="text-sm">Realizá el curso de ingreso (si corresponde a tu carrera)</p>
                  </div>
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
          <section className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Facultades de la UNLP</h2>
              <p className="text-muted-foreground">Explorá todas las facultades y sus sitios oficiales</p>
            </div>
            <FacultadesList />
          </section>

          {/* Buscar carreras y recursos */}
          <section className="mb-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Catálogo de Carreras
                  </CardTitle>
                  <CardDescription>Explorá todas las carreras disponibles en la UNLP</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <a href="https://www.unlp.edu.ar/oferta-academica/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver todas las carreras
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Calendario Académico
                  </CardTitle>
                  <CardDescription>Fechas importantes del año lectivo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="https://www.unlp.edu.ar/calendario-academico/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver calendario
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vida práctica y bienestar */}
          <section className="mb-12">
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
                <div className="flex flex-col sm:flex-row gap-3">
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
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQs para ingresantes */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground">Respuestas a las dudas más comunes de los ingresantes</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cuándo abren las inscripciones?</AccordionTrigger>
                <AccordionContent>
                  Las inscripciones para el ciclo lectivo siguiente suelen abrirse entre octubre y diciembre. Consultá
                  el sitio oficial de la UNLP para fechas exactas según tu carrera de interés.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>¿Todas las carreras tienen curso de ingreso?</AccordionTrigger>
                <AccordionContent>
                  No todas las carreras requieren curso de ingreso. Algunas facultades tienen cursos introductorios,
                  otras tienen exámenes de ingreso, y algunas son de ingreso libre. Verificá los requisitos específicos
                  de tu carrera.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>¿Qué documentación necesito para inscribirme?</AccordionTrigger>
                <AccordionContent>
                  Generalmente necesitás: DNI, certificado de estudios secundarios legalizado, certificado de
                  nacimiento, y formulario de inscripción completo. Cada facultad puede tener requisitos adicionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿Puedo cambiar de carrera una vez inscripto?</AccordionTrigger>
                <AccordionContent>
                  Sí, podés solicitar cambio de carrera siguiendo los procedimientos establecidos por cada facultad.
                  Algunos cambios pueden requerir cumplir ciertos requisitos académicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>¿La UNLP ofrece becas de estudio?</AccordionTrigger>
                <AccordionContent>
                  Sí, la UNLP ofrece diferentes tipos de becas: becas de estudio, becas de comedor, becas de transporte
                  y becas especiales. Consultá en Bienestar Universitario para más información.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>¿Cómo funciona el sistema de correlatividades?</AccordionTrigger>
                <AccordionContent>
                  Las correlatividades son materias que debés aprobar antes de cursar otras. Cada plan de estudios
                  especifica qué materias son correlativas. Es importante planificar tu cursada considerando este
                  sistema.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>¿Hay servicios de apoyo para estudiantes del interior?</AccordionTrigger>
                <AccordionContent>
                  Sí, la UNLP cuenta con programas específicos para estudiantes del interior, incluyendo información
                  sobre alojamiento, becas especiales y orientación para la adaptación a la vida universitaria en La
                  Plata.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>

      {/* Footer component */}
      <Footer />

      {/* Mobile spacing for sticky CTA */}
      <div className="md:hidden h-20"></div>
    </div>
  )
}
