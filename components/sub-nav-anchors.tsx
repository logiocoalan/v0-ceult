"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const anchors = [
  { id: "eligibilidad", label: "Elegibilidad" },
  { id: "pasos", label: "Pasos" },
  { id: "documentacion", label: "Documentación" },
  { id: "cronograma", label: "Cronograma" },
  { id: "costos", label: "Costos" },
  { id: "faq", label: "FAQ" },
]

export function SubNavAnchors() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = anchors.map((anchor) => document.getElementById(anchor.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(anchors[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b">
      <div className="container px-4">
        <nav className="flex overflow-x-auto py-3 gap-6">
          {anchors.map((anchor) => (
            <Link
              key={anchor.id}
              href={`#${anchor.id}`}
              className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
                activeSection === anchor.id ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              }`}
            >
              {anchor.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
