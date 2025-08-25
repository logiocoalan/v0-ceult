"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EstadoData {
  inscripcionAbierta: boolean
  fechaLimite: string
  mensaje: string
}

export function StatusBand() {
  const [estado, setEstado] = useState<EstadoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/estado.json")
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

  return (
    <div
      className={`py-3 ${estado.inscripcionAbierta ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} border-b`}
    >
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className={`text-lg ${estado.inscripcionAbierta ? "text-green-600" : "text-red-600"}`}>
              {estado.inscripcionAbierta ? "🟢" : "🔒"}
            </span>
            <span className={`font-medium ${estado.inscripcionAbierta ? "text-green-800" : "text-red-800"}`}>
              {estado.mensaje}
            </span>
            {estado.inscripcionAbierta && (
              <span className={`${estado.inscripcionAbierta ? "text-green-700" : "text-red-700"}`}>
                · Hasta {estado.fechaLimite}
              </span>
            )}
          </div>
          <Button asChild size="sm" variant={estado.inscripcionAbierta ? "default" : "secondary"}>
            <Link href={estado.inscripcionAbierta ? "/postularme" : "/contacto"}>
              {estado.inscripcionAbierta ? "Postularme" : "Recibir aviso"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
