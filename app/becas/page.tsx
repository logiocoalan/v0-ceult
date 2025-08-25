import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { SummaryBlock } from "@/components/summary-block"

export default function BecasPage() {
  const becasBlocks = [
    {
      title: "Elegibilidad",
      description: "Verificá si cumplís con los requisitos para postularte a una beca de alojamiento.",
      href: "/becas/eligibilidad",
      buttonText: "Verificar requisitos",
    },
    {
      title: "Cómo postular",
      description: "Conocé los pasos necesarios para completar tu postulación exitosamente.",
      href: "/becas/como-postular",
      buttonText: "Ver pasos",
    },
    {
      title: "Documentación",
      description: "Descargá formularios y conocé qué documentos necesitás presentar.",
      href: "/becas/documentacion",
      buttonText: "Ver documentos",
    },
    {
      title: "Cronograma",
      description: "Consultá las fechas importantes del proceso de postulación y selección.",
      href: "/becas/cronograma",
      buttonText: "Ver cronograma",
    },
    {
      title: "Costos",
      description: "Informate sobre los costos de la beca y modalidades de pago.",
      href: "/becas/costos",
      buttonText: "Ver costos",
    },
    {
      title: "Renovación",
      description: "Conocé cómo renovar tu beca para el siguiente período académico.",
      href: "/becas/renovacion",
      buttonText: "Ver renovación",
    },
    {
      title: "Preguntas frecuentes",
      description: "Encontrá respuestas a las consultas más comunes sobre las becas.",
      href: "/becas/faq",
      buttonText: "Ver FAQs",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Becas de alojamiento</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Toda la información que necesitás sobre las becas de alojamiento del CEULT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {becasBlocks.map((block, index) => (
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
      </main>

      <Footer />
      <div className="md:hidden h-20"></div>
    </div>
  )
}
