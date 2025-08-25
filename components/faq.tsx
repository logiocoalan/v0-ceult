import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    id: "item-1",
    question: "¿Quiénes pueden postularse para las becas de alojamiento?",
    answer:
      "Pueden postularse estudiantes universitarios de grado y posgrado que estudien en universidades de La Plata y cumplan con los requisitos de elegibilidad establecidos.",
  },
  {
    id: "item-2",
    question: "¿Cuáles son los requisitos principales para obtener una beca?",
    answer:
      "Los requisitos incluyen: ser estudiante regular de una universidad de La Plata, demostrar necesidad económica, tener buen rendimiento académico, y no poseer vivienda propia en la ciudad.",
  },
  {
    id: "item-3",
    question: "¿Cuándo abren las inscripciones para las becas?",
    answer:
      "Las inscripciones generalmente abren en febrero de cada año. Las fechas exactas se publican en nuestro sitio web y redes sociales.",
  },
  {
    id: "item-4",
    question: "¿Qué documentación necesito presentar?",
    answer:
      "Debes presentar: DNI, certificado de alumno regular, constancia de ingresos familiares, declaración jurada de bienes, y certificado de domicilio, entre otros documentos especificados en la convocatoria.",
  },
  {
    id: "item-5",
    question: "¿Cuál es el costo de la beca de alojamiento?",
    answer:
      "El costo varía según la modalidad de beca. Incluye una cuota mensual, un depósito equivalente a dos cuotas, y contribuciones adicionales para socios del CEULT.",
  },
  {
    id: "item-6",
    question: "¿Cómo se evalúan las postulaciones?",
    answer:
      "Las postulaciones se evalúan considerando la situación socioeconómica del postulante, el rendimiento académico, la distancia del domicilio familiar, y otros criterios establecidos en el reglamento.",
  },
  {
    id: "item-7",
    question: "¿Puedo renovar mi beca para el siguiente año?",
    answer:
      "Sí, las becas pueden renovarse anualmente cumpliendo con los requisitos de renovación, que incluyen mantener la condición de alumno regular y el rendimiento académico.",
  },
  {
    id: "item-8",
    question: "¿Qué servicios incluye el alojamiento en el CEULT?",
    answer:
      "El alojamiento incluye habitación amueblada, servicios básicos (luz, gas, agua), internet, espacios comunes, cocina equipada, y actividades recreativas y académicas.",
  },
  {
    id: "item-9",
    question: "¿Hay algún límite de edad para postularse?",
    answer:
      "No hay límite de edad específico, pero se priorizan estudiantes de grado. Los estudiantes de posgrado pueden postularse según disponibilidad de cupos.",
  },
  {
    id: "item-10",
    question: "¿Qué pasa si no soy seleccionado en la primera convocatoria?",
    answer:
      "Si no eres seleccionado, puedes quedar en lista de espera para posibles vacantes durante el año, o postularte nuevamente en la siguiente convocatoria.",
  },
]

export function FAQ() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
