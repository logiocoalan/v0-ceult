import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

interface FileCardProps {
  title: string
  description: string
  downloadUrl?: string
  exampleUrl?: string
}

export function FileCard({ title, description, downloadUrl, exampleUrl }: FileCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col sm:flex-row gap-2">
          {downloadUrl && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <a href={downloadUrl} download>
                <Download className="h-4 w-4 mr-2" />
                Descargar modelo
              </a>
            </Button>
          )}
          {exampleUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <a href={exampleUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                Ver ejemplo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
