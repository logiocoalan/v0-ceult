import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contacto - CEULT",
  description:
    "Contactá al Centro de Estudiantes Universitarios de La Plata. Información de contacto, horarios y formulario de consultas.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h1>
              <p className="text-lg text-muted-foreground">¿Tenés dudas o consultas? Estamos aquí para ayudarte</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de contacto</CardTitle>
                    <CardDescription>Podés contactarnos por cualquiera de estos medios</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Dirección</h4>
                        <p className="text-sm text-muted-foreground">
                          Calle 123 N° 456
                          <br />
                          La Plata, Buenos Aires
                          <br />
                          Argentina (1900)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Teléfono</h4>
                        <p className="text-sm text-muted-foreground">
                          +54 221 123-4567
                          <br />
                          WhatsApp: +54 9 221 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          info@ceult.org.ar
                          <br />
                          becas@ceult.org.ar
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Horarios de atención</h4>
                        <p className="text-sm text-muted-foreground">
                          Lunes a Viernes: 9:00 - 17:00
                          <br />
                          Sábados: 9:00 - 13:00
                          <br />
                          Domingos: Cerrado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ubicación</CardTitle>
                    <CardDescription>Encontranos en el centro de La Plata</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Mapa interactivo</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Envianos tu consulta</CardTitle>
                    <CardDescription>Completá el formulario y te responderemos a la brevedad</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre *</Label>
                          <Input id="nombre" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apellido">Apellido *</Label>
                          <Input id="apellido" placeholder="Tu apellido" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" type="tel" placeholder="+54 9 11 1234-5678" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asunto">Asunto *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccioná el tema de tu consulta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="becas">Consulta sobre becas</SelectItem>
                            <SelectItem value="postulacion">Proceso de postulación</SelectItem>
                            <SelectItem value="documentacion">Documentación requerida</SelectItem>
                            <SelectItem value="costos">Costos y pagos</SelectItem>
                            <SelectItem value="instalaciones">Instalaciones y servicios</SelectItem>
                            <SelectItem value="renovacion">Renovación de beca</SelectItem>
                            <SelectItem value="otro">Otro tema</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Escribí tu consulta aquí..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <div className="text-xs text-muted-foreground">* Campos obligatorios</div>

                      <Button type="submit" className="w-full">
                        Enviar consulta
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-16 text-center">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">¿Buscás respuestas rápidas?</h3>
                  <p className="text-muted-foreground mb-6">
                    Antes de contactarnos, revisá nuestras preguntas frecuentes. Quizás encuentres la respuesta que
                    buscás.
                  </p>
                  <Button asChild variant="outline">
                    <a href="/becas/faq">Ver preguntas frecuentes</a>
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
