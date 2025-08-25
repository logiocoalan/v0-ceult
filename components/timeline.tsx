"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

interface EventoTimeline {
  id: number
  titulo: string
  fecha: string
  descripcion: string
  completado: boolean
}

interface CronogramaData {
  eventos: EventoTimeline[]
}

export function Timeline() {
  const [cronograma, setCronograma] = useState<CronogramaData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/cronograma.json")
      .then((res) => res.json())
      .then((data: CronogramaData) => {
        setCronograma(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading cronograma:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!cronograma) return null

  return (
    <div className="space-y-6">
      {cronograma.eventos.map((evento, index) => (
        <div key={evento.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`p-1 rounded-full ${evento.completado ? "text-green-600" : "text-muted-foreground"}`}>
              {evento.completado ? <CheckCircle className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
            </div>
            {index < cronograma.eventos.length - 1 && <div className="w-px h-12 bg-border mt-2"></div>}
          </div>
          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className={`font-semibold ${evento.completado ? "text-green-800" : "text-foreground"}`}>
                    {evento.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{evento.descripcion}</p>
                </div>
                <div className="text-sm font-medium text-primary">{evento.fecha}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
