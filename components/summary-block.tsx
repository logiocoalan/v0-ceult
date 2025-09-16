import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SummaryBlockProps {
  title: string
  description: string
  href: string
  buttonText?: string
}

export function SummaryBlock({ title, description, href, buttonText = "Ver más" }: SummaryBlockProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button asChild variant="ghost" className="p-0 h-auto font-normal text-primary hover:primary-foreground/80">
          <Link href={href} className="flex items-center gap-1">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
