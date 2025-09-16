"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

type EventoJSON = {
  id: number | string
  titulo: string
  fecha: string                 // "DD/MM/YYYY" o "DD/MM/YYYY - DD/MM/YYYY" o "00/00/2025"
  descripcion?: string
  completado?: boolean
}

type EventoTimeline = {
  id: string
  titulo: string
  fechaRaw: string              // para mostrar tal cual
  isCompleted: boolean
}

function parseDDMMYYYY(s: string): Date | null {
  // ignora fechas tipo "00/00/2025"
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s.trim())
  if (!m) return null
  const [_, dd, mm, yyyy] = m
  if (dd === "00" || mm === "00") return null
  const iso = `${yyyy}-${mm}-${dd}T00:00:00`
  const d = new Date(iso)
  return isNaN(d.getTime()) ? null : d
}

function lastDateFrom(fecha: string): Date | null {
  // "16/03/2024 - 30/03/2024" → toma la derecha
  if (fecha.includes("-")) {
    const parts = fecha.split("-")
    const right = parts[parts.length - 1].trim()
    return parseDDMMYYYY(right)
  }
  return parseDDMMYYYY(fecha)
}

export function Timeline() {
  const [items, setItems] = useState<EventoTimeline[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/cronograma.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: { eventos?: EventoJSON[] }) => {
        const today = new Date()
        const arr = Array.isArray(data?.eventos) ? data.eventos : []
        const mapped: EventoTimeline[] = arr.map((e) => {
          const end = lastDateFrom(e.fecha)
          const isCompleted = typeof e.completado === "boolean"
            ? e.completado
            : (end ? end < today : false)
          return {
            id: String(e.id),
            titulo: e.titulo,
            fechaRaw: e.fecha,   // mostramos tal cual
            isCompleted,
          }
        })
        setItems(mapped)
      })
      .catch((err) => {
        console.error("Error loading cronograma:", err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="shadow-none border bg-card/95">
            <CardContent className="p-3">
              <div className="h-3.5 bg-muted rounded w-2/3 mb-1.5" />
              <div className="h-3 bg-muted rounded w-1/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
  if (!items) return null

  return (
    <div className="space-y-3">
      {items.map((ev, idx) => (
        <div key={ev.id} className="flex gap-3">
          {/* estado */}
          <div className="flex flex-col items-center">
            <div className={`rounded-full ${ev.isCompleted ? "text-green-600" : "text-muted-foreground/70"}`}>
              {ev.isCompleted
                ? <CheckCircle2 className="h-4 w-4" />
                : <Circle className="h-4 w-4" />
              }
            </div>
            {idx < items.length - 1 && <div className="w-px h-10 bg-border/60 mt-1" />}
          </div>

          {/* item */}
          <Card className="flex-1 shadow-none border bg-card/95 rounded-lg">
            <CardContent className="p-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <h3 className="text-[15px] md:text-base font-medium text-foreground">
                  {ev.titulo}
                </h3>
                {/* fecha tal cual del JSON */}
                <div className="text-sm font-medium text-primary">
                  {ev.fechaRaw}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
