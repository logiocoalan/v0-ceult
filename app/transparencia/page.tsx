import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Eye, Users, DollarSign } from "lucide-react"

export const metadata = {
  title: "Transparencia - CEULT",
  description: "Información sobre transparencia, rendición de cuentas y documentos públicos del CEULT.",
}

export default function TransparenciaPage() {
  const documentos = [
    {
      categoria: "Reglamentos",
      items: [
        { nombre: "Reglamento de becas", archivo: "reglamento-becas.pdf" },
        { nombre: "Normas de convivencia", archivo: "normas-convivencia.pdf" },
        { nombre: "Estatuto del CEULT", archivo: "estatuto-ceult.pdf" },
      ],
    },
    {
      categoria: "Estados financieros",
      items: [
        { nombre: "Balance 2023", archivo: "balance-2023.pdf" },
        { nombre: "Memoria anual 2023", archivo: "memoria-2023.pdf" },
        { nombre: "Presupuesto 2024", archivo: "presupuesto-2024.pdf" },
      ],
    },
    {
      categoria: "Informes de gestión",
      items: [
        { nombre: "Informe de becas otorgadas 2023", archivo: "informe-becas-2023.pdf" },
        { nombre: "Estadísticas de ocupación", archivo: "estadisticas-ocupacion.pdf" },
        { nombre: "Actividades realizadas 2023", archivo: "actividades-2023.pdf" },
      ],
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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparencia</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Información pública sobre la gestión, finanzas y actividades del CEULT
              </p>
            </div>

            {/* Principles Section */}
            <div className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Nuestro compromiso con la transparencia
                  </CardTitle>
                  <CardDescription>Principios que guían nuestra gestión</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    En el CEULT creemos que la transparencia es fundamental para mantener la confianza de nuestra
                    comunidad estudiantil y la sociedad en general. Por eso, ponemos a disposición del público toda la
                    información relevante sobre nuestra gestión, finanzas y actividades.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Rendición de cuentas</h4>
                      <p className="text-sm text-muted-foreground">
                        Informamos regularmente sobre nuestras actividades y resultados
                      </p>
                    </div>
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Transparencia financiera</h4>
                      <p className="text-sm text-muted-foreground">
                        Publicamos nuestros estados financieros y presupuestos
                      </p>
                    </div>
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Acceso a la información</h4>
                      <p className="text-sm text-muted-foreground">Facilitamos el acceso a documentos y normativas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Documents Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">Documentos públicos</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {documentos.map((categoria, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{categoria.categoria}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {categoria.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Button asChild variant="ghost" className="w-full justify-start h-auto p-2 text-left">
                              <a href={`/docs/${item.archivo}`} target="_blank" rel="noopener noreferrer">
                                <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span className="text-sm">{item.nombre}</span>
                              </a>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics Section */}
            <div className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Datos y estadísticas</CardTitle>
                  <CardDescription>Información cuantitativa sobre nuestra gestión</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">150</div>
                      <div className="text-sm text-muted-foreground">Becarios actuales</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">85%</div>
                      <div className="text-sm text-muted-foreground">Tasa de renovación</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">12</div>
                      <div className="text-sm text-muted-foreground">Universidades representadas</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">25</div>
                      <div className="text-sm text-muted-foreground">Años de trayectoria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">¿Necesitás más información?</h3>
                  <p className="text-muted-foreground mb-6">
                    Si tenés consultas específicas sobre nuestra gestión o necesitás acceder a información adicional, no
                    dudes en contactarnos.
                  </p>
                  <Button asChild variant="outline">
                    <a href="mailto:transparencia@ceult.org.ar">Solicitar información</a>
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
