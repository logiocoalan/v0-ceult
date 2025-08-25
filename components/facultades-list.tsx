"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Facultad {
  nombre: string
  url: string
}

interface UnlpData {
  inscripcion_oficial: string
  catalogo_carreras: string
  bienestar: string
  calendario: string
  facultades: Facultad[]
}

export function FacultadesList() {
  const [unlpData, setUnlpData] = useState<UnlpData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/datos/unlp.json")
      .then((res) => res.json())
      .then((data: UnlpData) => {
        setUnlpData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading UNLP data:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!unlpData) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {unlpData.facultades.map((facultad, index) => (
        <Card key={index} className="h-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-base leading-tight">{facultad.nombre}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
              <a href={facultad.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visitar sitio
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
