"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EstadoData {
  inscripcion: "abierta" | "cerrada"
  hasta: string
}

export function StatusBand() {
  const [estado, setEstado] = useState<EstadoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/datos/estado.json")
      .then((res) => res.json())
      .then((data: EstadoData) => {
        setEstado(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading estado:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="bg-muted py-3">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground">Cargando estado...</p>
        </div>
      </div>
    )
  }

  if (!estado) return null

  const isOpen = estado.inscripcion === "abierta"
  const fechaFormateada = new Date(estado.hasta).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
  })

  return (
    <div className={`py-3 ${isOpen ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} border-b`}>
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className={`text-lg ${isOpen ? "text-green-600" : "text-red-600"}`}>{isOpen ? "🟢" : "🔒"}</span>
            <span className={`font-medium ${isOpen ? "text-green-800" : "text-red-800"}`}>
              {isOpen ? "Inscripción abierta" : "Inscripción cerrada"}
            </span>
            {isOpen && <span className="text-green-700">· Hasta {fechaFormateada}</span>}
          </div>
          <Button asChild size="sm" variant={isOpen ? "default" : "secondary"}>
            <Link href={isOpen ? "/becas#pasos" : "/contacto"}>{isOpen ? "Postularme" : "Recibir aviso"}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
