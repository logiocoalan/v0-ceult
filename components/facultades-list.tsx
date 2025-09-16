"use client"

import * as React from "react"
import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ExternalLink } from "lucide-react"

interface Facultad {
  nombre: string
  url: string
  icon: keyof typeof Icons
}

interface UnlpData {
  facultades: Facultad[]
}

export function FacultadesList() {
  const [unlpData, setUnlpData] = useState<UnlpData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/datos/unlp.json")
      .then((res) => res.json())
      .then((data: UnlpData) => setUnlpData(data))
      .catch((error) => console.error("Error loading UNLP data:", error))
      .finally(() => setLoading(false))
  }, [])

  const facultadesOrdenadas = useMemo(() => {
    const list = unlpData?.facultades ?? []
    return [...list].sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    )
  }, [unlpData])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="border bg-card/95 shadow-sm animate-pulse">
            <CardContent className="p-5 space-y-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="h-4 bg-muted rounded w-2/3" />
              <div className="h-8 bg-muted rounded w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!unlpData) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {facultadesOrdenadas.map((fac, idx) => {
        // Tipado explícito para evitar el error TS2604/TS2786
        const ResolvedIcon = (Icons[fac.icon] as LucideIcon) ?? (Icons.School as LucideIcon)

        return (
          <Card
            key={idx}
            className="h-full border bg-card/95 shadow-sm transition-shadow hover:shadow-md"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center rounded-full bg-primary/10 text-primary size-10">
                  <ResolvedIcon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-base leading-snug">
                  {fac.nombre}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a
                  href={fac.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar sitio oficial de ${fac.nombre}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" aria-hidden />
                  Visitar sitio
                </a>
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
