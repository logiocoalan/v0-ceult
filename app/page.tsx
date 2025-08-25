import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { SummaryBlock } from "@/components/summary-block"
import Link from "next/link"

export default function HomePage() {
  const summaryBlocks = [
    {
      title: "Elegibilidad",
      description: "Conocé si cumplís con los requisitos para postularte a una beca de alojamiento.",
      href: "/becas#eligibilidad",
      buttonText: "Verificar requisitos",
    },
    {
      title: "Cómo postular",
      description: "Seguí los pasos necesarios para completar tu postulación de manera exitosa.",
      href: "/becas#pasos",
      buttonText: "Ver pasos",
    },
    {
      title: "Cronograma",
      description: "Consultá las fechas importantes del proceso de postulación y selección.",
      href: "/becas#cronograma",
      buttonText: "Ver fechas",
    },
    {
      title: "Documentación",
      description: "Descargá los formularios y conocé qué documentos necesitás presentar.",
      href: "/becas#documentacion",
      buttonText: "Ver documentos",
    },
    {
      title: "Costos",
      description: "Informate sobre los costos de la beca y las modalidades de pago disponibles.",
      href: "/becas#costos",
      buttonText: "Ver costos",
    },
    {
      title: "UNLP y Carreras",
      description: "Guía completa para ingresantes a la Universidad Nacional de La Plata.",
      href: "/unlp",
      buttonText: "Ver guía",
    },
    {
      title: "Preguntas frecuentes",
      description: "Encontrá respuestas a las consultas más comunes sobre las becas.",
      href: "/becas#faq",
      buttonText: "Ver FAQs",
    },
    {
      title: "Novedades",
      description: "Mantente informado sobre las últimas noticias y actualizaciones del CEULT.",
      href: "/novedades",
      buttonText: "Ver novedades",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Becas de alojamiento para estudiar en La Plata
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                El CEULT ofrece becas de alojamiento para estudiantes universitarios que necesitan residencia durante
                sus estudios en La Plata. Conocé cómo postularte y formar parte de nuestra comunidad estudiantil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/becas#pasos">Postularme</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                  <Link href="/becas#eligibilidad">¿Soy elegible?</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Blocks Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Todo lo que necesitás saber</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explorá toda la información sobre las becas de alojamiento del CEULT
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {summaryBlocks.map((block, index) => (
                  <SummaryBlock
                    key={index}
                    title={block.title}
                    description={block.description}
                    href={block.href}
                    buttonText={block.buttonText}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Vivir en el CEULT</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Descubrí la experiencia de vivir en nuestra residencia estudiantil
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Ambiente de estudio</h3>
                      <p className="text-muted-foreground">
                        Espacios diseñados para el estudio y la concentración, con salas comunes y biblioteca.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Comunidad estudiantil</h3>
                      <p className="text-muted-foreground">
                        Convivencia con estudiantes de diferentes carreras y facultades de la UNLP.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Ubicación estratégica</h3>
                      <p className="text-muted-foreground">
                        Cerca de las principales facultades y con fácil acceso al transporte público.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img
                    src="/estudiantes-en-residencia-universitaria-estudiando.png"
                    alt="Estudiantes estudiando en la residencia"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <img
                    src="/sala-com-n-de-residencia-estudiantil-moderna.png"
                    alt="Sala común de la residencia"
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <img
                    src="/habitaci-n-de-residencia-universitaria-ordenada.png"
                    alt="Habitación de la residencia"
                    className="rounded-lg object-cover w-full h-48 sm:col-span-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">¿Listo para postularte?</h2>
              <p className="text-lg text-muted-foreground">
                No pierdas la oportunidad de formar parte de la comunidad estudiantil del CEULT. Las becas son limitadas
                y se otorgan por orden de mérito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/becas#pasos">Ver cómo postular</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/becas#cronograma">Ver cronograma</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile spacing for sticky CTA */}
      <div className="md:hidden h-20"></div>
    </div>
  )
}
