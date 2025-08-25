"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

interface EventoTimeline {
  id: string
  titulo: string
  fecha: string
}

export function Timeline() {
  const [cronograma, setCronograma] = useState<EventoTimeline[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/datos/cronograma.json")
      .then((res) => res.json())
      .then((data: EventoTimeline[]) => {
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

  const today = new Date()

  return (
    <div className="space-y-6">
      {cronograma.map((evento, index) => {
        const eventDate = new Date(evento.fecha)
        const isCompleted = eventDate < today
        const fechaFormateada = eventDate.toLocaleDateString("es-AR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })

        return (
          <div key={evento.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`p-1 rounded-full ${isCompleted ? "text-green-600" : "text-muted-foreground"}`}>
                {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
              </div>
              {index < cronograma.length - 1 && <div className="w-px h-12 bg-border mt-2"></div>}
            </div>
            <Card className="flex-1">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className={`font-semibold ${isCompleted ? "text-green-800" : "text-foreground"}`}>
                      {evento.titulo}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-primary">{fechaFormateada}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
