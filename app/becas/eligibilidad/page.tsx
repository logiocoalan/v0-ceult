"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusBand } from "@/components/status-band"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

const requisitos = [
  {
    id: "estudiante-regular",
    text: "Soy estudiante regular de una universidad de La Plata",
    required: true,
  },
  {
    id: "no-vivienda",
    text: "No poseo vivienda propia en La Plata ni en el Gran La Plata",
    required: true,
  },
  {
    id: "situacion-economica",
    text: "Mi situación socioeconómica justifica la necesidad de una beca",
    required: true,
  },
  {
    id: "rendimiento-academico",
    text: "Tengo buen rendimiento académico (promedio mínimo según reglamento)",
    required: true,
  },
  {
    id: "documentacion",
    text: "Puedo presentar toda la documentación requerida",
    required: true,
  },
  {
    id: "compromiso",
    text: "Me comprometo a cumplir con las normas de convivencia del CEULT",
    required: true,
  },
  {
    id: "disponibilidad",
    text: "Tengo disponibilidad para participar en actividades comunitarias",
    required: false,
  },
]

export default function ElegibilidadPage() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleCheck = (id: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, id])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id))
    }
  }

  const requiredCount = requisitos.filter((req) => req.required).length
  const checkedRequired = checkedItems.filter((id) => requisitos.find((req) => req.id === id)?.required).length
  const totalChecked = checkedItems.length

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StatusBand />

      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Requisitos de elegibilidad</h1>
              <p className="text-lg text-muted-foreground">
                Verificá si cumplís con los requisitos para postularte a una beca de alojamiento
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lista de verificación</CardTitle>
                <CardDescription>Marcá cada requisito que cumplís. Los primeros 6 son obligatorios.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {requisitos.map((requisito) => (
                  <div key={requisito.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={requisito.id}
                      checked={checkedItems.includes(requisito.id)}
                      onCheckedChange={(checked) => handleCheck(requisito.id, !!checked)}
                      className="mt-1"
                    />
                    <label
                      htmlFor={requisito.id}
                      className={`text-sm leading-relaxed cursor-pointer ${
                        requisito.required ? "font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {requisito.text}
                      {requisito.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Resultado de elegibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold">
                    Cumplís {totalChecked}/{requisitos.length} requisitos
                  </div>
                  <div className="text-lg">
                    Requisitos obligatorios: {checkedRequired}/{requiredCount}
                  </div>

                  {checkedRequired === requiredCount ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium mb-2">
                        ¡Excelente! Cumplís con todos los requisitos obligatorios.
                      </p>
                      <p className="text-green-700 text-sm">
                        Podés proceder con tu postulación para una beca de alojamiento.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 font-medium mb-2">
                        Necesitás cumplir con todos los requisitos obligatorios para postularte.
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Revisá los requisitos marcados con * y asegurate de cumplir con todos.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              {checkedRequired === requiredCount ? (
                <Button asChild size="lg">
                  <Link href="/postularme">Postularme ahora</Link>
                </Button>
              ) : (
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">Consultar requisitos</Link>
                </Button>
              )}

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild variant="ghost">
                  <Link href="/becas/como-postular">Ver cómo postular</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/becas/documentacion">Ver documentación</Link>
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
