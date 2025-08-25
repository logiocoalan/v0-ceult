import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const costos = [
  {
    titulo: "Cuota mensual",
    descripcion: "Pago mensual por el alojamiento y servicios incluidos",
    monto: "$25.000",
    detalles: [
      "Habitación amueblada",
      "Servicios básicos incluidos",
      "Internet y WiFi",
      "Espacios comunes",
      "Actividades recreativas",
    ],
  },
  {
    titulo: "Depósito de garantía",
    descripcion: "Equivalente a dos cuotas mensuales, se devuelve al finalizar",
    monto: "$50.000",
    detalles: [
      "Se paga al ingresar",
      "Garantiza el cumplimiento del contrato",
      "Se devuelve sin daños",
      "Puede descontarse de reparaciones",
    ],
  },
  {
    titulo: "Contribución especial",
    descripcion: "Descuento para socios contribuyentes del CEULT",
    monto: "15% OFF",
    detalles: [
      "Solo para socios contribuyentes",
      "Descuento sobre cuota mensual",
      "Beneficios adicionales",
      "Prioridad en renovaciones",
    ],
  },
]

export default function CostosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Costos de las becas</h1>
              <p className="text-lg text-muted-foreground">
                Conocé los costos asociados a las becas de alojamiento y las modalidades de pago
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {costos.map((costo, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{costo.titulo}</CardTitle>
                    <CardDescription>{costo.descripcion}</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">{costo.monto}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {costo.detalles.map((detalle, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span className="text-muted-foreground">{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Información sobre devoluciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Depósito de garantía</h4>
                  <ul className="space-y-1">
                    <li>• Se devuelve íntegramente si no hay daños</li>
                    <li>• Plazo de devolución: 30 días hábiles</li>
                    <li>• Se descuentan reparaciones necesarias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Modalidades de pago</h4>
                  <ul className="space-y-1">
                    <li>• Transferencia bancaria</li>
                    <li>• Pago en efectivo en sede</li>
                    <li>• Débito automático (próximamente)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button asChild size="lg">
                <Link href="/postularme">Postularme ahora</Link>
              </Button>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild variant="ghost">
                  <Link href="/becas/elegibilidad">Verificar elegibilidad</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contacto">Consultar costos</Link>
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
