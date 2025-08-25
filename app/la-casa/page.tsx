import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Home, Users, Wifi, Car, Book, Coffee } from "lucide-react"

const servicios = [
  {
    icon: Home,
    titulo: "Habitaciones amuebladas",
    descripcion: "Habitaciones individuales completamente equipadas con cama, escritorio, armario y calefacción.",
  },
  {
    icon: Wifi,
    titulo: "Internet de alta velocidad",
    descripcion: "Conexión WiFi gratuita en todas las áreas comunes y habitaciones.",
  },
  {
    icon: Coffee,
    titulo: "Cocina equipada",
    descripcion: "Cocinas comunitarias con heladera, microondas, hornalla y todos los utensilios necesarios.",
  },
  {
    icon: Car,
    titulo: "Estacionamiento",
    descripcion: "Espacio de estacionamiento disponible para residentes con vehículo.",
  },
  {
    icon: Book,
    titulo: "Sala de estudio",
    descripcion: "Espacios silenciosos dedicados al estudio y trabajo académico.",
  },
  {
    icon: Users,
    titulo: "Actividades comunitarias",
    descripcion: "Eventos, talleres y actividades para fomentar la integración entre residentes.",
  },
]

export const metadata = {
  title: "Vivir en el CEULT - Centro de Estudiantes Universitarios de La Plata",
  description:
    "Conocé cómo es la experiencia de vivir en la residencia estudiantil del CEULT. Servicios, instalaciones y vida comunitaria.",
}

export default function LaCasaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vivir en el CEULT</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubrí cómo es la experiencia de vivir en nuestra residencia estudiantil y formar parte de una
                comunidad comprometida con la educación
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="mb-12">
              <img
                src="/modern-student-residence.png"
                alt="Edificio del CEULT - Residencia estudiantil"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* About Section */}
            <div className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Nuestra residencia</CardTitle>
                  <CardDescription>Un hogar para estudiantes universitarios en La Plata</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    El CEULT es más que una residencia estudiantil: es una comunidad donde los estudiantes
                    universitarios encuentran no solo un lugar donde vivir, sino también un espacio para crecer,
                    aprender y formar vínculos duraderos.
                  </p>
                  <p className="text-muted-foreground">
                    Ubicada estratégicamente en La Plata, nuestra residencia ofrece fácil acceso a las principales
                    universidades de la ciudad, transporte público y servicios esenciales. Contamos con instalaciones
                    modernas y un ambiente que favorece tanto el estudio como la convivencia.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">Servicios e instalaciones</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicios.map((servicio, index) => {
                  const Icon = servicio.icon
                  return (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Icon className="h-5 w-5 text-primary" />
                          {servicio.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Community Section */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Vida comunitaria</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      En el CEULT fomentamos un ambiente de respeto, solidaridad y compañerismo. Organizamos
                      regularmente actividades que permiten a los residentes conocerse, compartir experiencias y crear
                      una red de apoyo mutuo.
                    </p>
                    <p>
                      Desde talleres académicos hasta eventos recreativos, nuestra programación está diseñada para
                      enriquecer la experiencia universitaria y promover el desarrollo integral de nuestros residentes.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="/students-studying.png"
                    alt="Estudiantes en área común del CEULT"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">¿Te interesa formar parte del CEULT?</h3>
                  <p className="text-muted-foreground mb-6">
                    Conocé más sobre nuestras becas de alojamiento y cómo postularte para vivir en nuestra residencia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/postularme">Postularme</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/becas/elegibilidad">Ver requisitos</Link>
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
