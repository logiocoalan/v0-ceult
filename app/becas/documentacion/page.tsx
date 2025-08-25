import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { FileCard } from "@/components/file-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const documentos = [
  {
    title: "Formulario de postulación",
    description: "Formulario principal que debes completar con todos tus datos personales y académicos.",
    downloadUrl: "/docs/formulario-postulacion.pdf",
    exampleUrl: "/docs/ejemplo-formulario.pdf",
  },
  {
    title: "Declaración jurada de ingresos",
    description: "Documento donde declarás los ingresos familiares y tu situación socioeconómica.",
    downloadUrl: "/docs/declaracion-ingresos.pdf",
    exampleUrl: "/docs/ejemplo-declaracion.pdf",
  },
  {
    title: "Certificado de alumno regular",
    description: "Constancia oficial de tu universidad que acredite tu condición de estudiante regular.",
    downloadUrl: "/docs/modelo-certificado.pdf",
  },
  {
    title: "Constancia de domicilio",
    description: "Documento que acredite tu domicilio familiar fuera de La Plata.",
    downloadUrl: "/docs/constancia-domicilio.pdf",
    exampleUrl: "/docs/ejemplo-domicilio.pdf",
  },
  {
    title: "Declaración jurada de bienes",
    description: "Formulario donde declarás los bienes familiares y tu patrimonio.",
    downloadUrl: "/docs/declaracion-bienes.pdf",
    exampleUrl: "/docs/ejemplo-bienes.pdf",
  },
  {
    title: "Autorización de datos personales",
    description: "Autorización para el tratamiento de tus datos personales según la Ley 25.326.",
    downloadUrl: "/docs/autorizacion-datos.pdf",
  },
]

export default function DocumentacionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Documentación requerida</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descargá los formularios y conocé qué documentos necesitás presentar para tu postulación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {documentos.map((documento, index) => (
                <FileCard
                  key={index}
                  title={documento.title}
                  description={documento.description}
                  downloadUrl={documento.downloadUrl}
                  exampleUrl={documento.exampleUrl}
                />
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Información importante</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Todos los documentos deben estar firmados y con fecha actualizada</li>
                <li>• Las copias de documentos oficiales deben estar certificadas</li>
                <li>• Los formularios deben completarse con letra clara o a máquina</li>
                <li>• La documentación incompleta puede resultar en el rechazo de la postulación</li>
                <li>• Conservá copias de todos los documentos presentados</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <Button asChild size="lg">
                <Link href="/postularme">Ir al formulario de postulación</Link>
              </Button>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild variant="ghost">
                  <Link href="/becas/como-postular">Ver pasos para postular</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contacto">Consultar dudas</Link>
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
