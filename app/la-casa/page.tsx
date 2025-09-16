import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "La casa – CEULT",
  description: "Información textual y detallada de la casa del CEULT.",
}

function CardImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-muted mb-3">
      {src ? (
        // podés cambiar <img> por next/image si preferís
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full grid place-items-center text-muted-foreground text-sm">
          Imagen
        </div>
      )}
    </div>
  )
}

export default function LaCasaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {/* Título + subtítulo */}
            <section className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Vivir en el CEULT</h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubrí la experiencia de vivir en nuestra residencia estudiantil.
              </p>
            </section>

            {/* Descripciones generales (más limpio y consistente) */}
            <section className="max-w-3xl mx-auto space-y-6">
              <Card className="shadow-sm border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl md:text-2xl">La casa</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Av. 1 n.º 1423, entre 61 y 62 – La Plata
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 leading-relaxed text-muted-foreground">
                  <p>
                    El Centro de Estudiantes de Los Toldos es un verdadero hogar en el corazón de La Plata. Ubicado en Av. 1 n.º 1423,
                    entre 61 y 62, nuestra casa ofrece un espacio seguro y cómodo para el crecimiento académico y personal de todos los becados.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl md:text-2xl">Descubre Nuestros Espacios</CardTitle>
                </CardHeader>
                <CardContent className="leading-relaxed text-muted-foreground">
                  <p>
                    Nuestra casa está diseñada para que cada rincón fomente el estudio, la convivencia y el descanso.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Grid de espacios: cada uno en su card, con slot de imagen */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="h-full shadow-sm border bg-card md:col-span-2">
                  <CardHeader>
                    <CardTitle>Habitaciones</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <p>
                      Contamos con seis habitaciones amuebladas para nuestros estudiantes. Cada una incluye su respectivo colchón y, pensando
                      en los estudiantes, también dispone de al menos un escritorio y/o mesa con sillas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card">
                  <CardHeader>
                    <CardTitle>Baños</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <CardImage src="" alt="Baños" />
                    <p>
                      Para la comodidad de todos, la casa posee tres baños completos. Uno de ellos, ubicado en la parte frontal, posee un
                      antebaño con tres lavamanos y un espejo horizontal; los otros dos están en la parte trasera, con un antebaño cada uno.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card">
                  <CardHeader>
                    <CardTitle>Cocina-Comedor</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <CardImage src="" alt="Cocina-Comedor" />
                    <p>
                      El verdadero corazón de la casa, un espacio amplio y dinámico donde la comunidad se encuentra. Está totalmente equipada con
                      tres heladeras, un freezer, tres cocinas y todos los utensilios necesarios. Una puerta ventana amplia conecta este espacio
                      directamente con el patio, permitiendo que entre luz natural todo el día. Las dos mesas grandes con bancos, el pizarrón y
                      una televisión (con servicio de Fibertel) hacen de este lugar el sitio ideal para compartir comidas y momentos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card md:col-span-2">
                  <CardHeader>
                    <CardTitle>Zonas de estudio</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <p>
                      Entendemos la importancia de tener espacios destinados al estudio, la calma y la concentración. Por eso, además de las
                      habitaciones, la casa ofrece áreas comunes para, principalmente, afrontar jornadas de estudio:
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card">
                  <CardHeader>
                    <CardTitle>Biblioteca</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <CardImage src="" alt="Biblioteca" />
                    <p>
                      Ubicada estratégicamente en el patio para garantizar tranquilidad, es el lugar preferido para estudiar. Equipada con una mesa
                      amplia, escritorios y un banco de libros (tanto académicos como literarios), ofrece excelente iluminación y espacio para tus
                      jornadas de estudio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card">
                  <CardHeader>
                    <CardTitle>Sala de Estudio</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <CardImage src="" alt="Sala de Estudio" />
                    <p>
                      Con una gran mesa central, un escritorio y dos ventanas de batientes que dan al patio, esta sala es otra excelente opción
                      para concentrarse y trabajar en grupo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card md:col-span-2">
                  <CardHeader>
                    <CardTitle>Galería y Patio</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <CardImage src="" alt="Galería y Patio" />
                    <p>
                      Nuestros espacios al aire libre son el complemento perfecto para la vida de estudiante. La galería, con su abundante luz
                      natural, funciona como el pulmón de la casa. Equipada con sillones y una mesa ratona, es el rincón ideal para leer, conversar
                      o simplemente disfrutar de un momento de tranquilidad. Además, es la principal fuente de ventilación para las habitaciones internas.
                    </p>
                    <p className="mt-3">
                      El patio, un lugar amplio y versátil, está diseñado para que te sientas en casa. Hacia el final del terreno, un sector se
                      convierte en el epicentro de la convivencia, con mesas y sillas para compartir comidas al aire libre o estudiar en un entorno
                      diferente. También cuenta con una parrilla de piso para esos asados de fin de semana y tendederos para colgar la ropa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card md:col-span-2">
                  <CardHeader>
                    <CardTitle>Otros servicios</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <p>
                      A lo largo del patio, encontrarás espacios clave como el lavadero (con dos? lavarropas, una bacha con mesada y artículos
                      de limpieza), el depósito (con caja de herramientas y elementos para el mantenimiento) y la sala de huéspedes (con una cama
                      cucheta, una marinera, un mueble y un escritorio), todo pensado para la comodidad de la comunidad ceultiana.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-sm border bg-card md:col-span-2">
                  <CardHeader>
                    <CardTitle>Características Generales</CardTitle>
                  </CardHeader>
                  <CardContent className="leading-relaxed text-muted-foreground">
                    <p>
                      El bienestar térmico es clave para afrontar las épocas otoñales e invernales. Todos los espacios de la casa cuentan con
                      calefacción a gas, excepto las tres habitaciones del medio que no tienen salida. En esos cuartos, se utilizan paneles de yeso
                      para mantener el ambiente cálido. La cocina, por su parte, no posee calefacción.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cierre textual + CTA de contacto */}
            <section className="max-w-4xl mx-auto space-y-6">
              <Card className="shadow-none border bg-muted/40">
                <CardContent className="pt-6 leading-relaxed">
                  <p>
                    ¿Hay algo más que te gustaría saber sobre nuestras instalaciones? Podes contactarte con nosotros en Instagram y Facebook.
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contacto">Contacto</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <div className="md:hidden h-20" />
    </div>
  )
}
