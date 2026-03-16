import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-8 text-center">
        <Badge variant="secondary">Nowa platforma</Badge>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight lg:text-5xl">
          Rozwiązania finansowe dla{" "}
          <span className="text-brand-900">nowoczesnych firm</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Prosta, przejrzysta i uczciwa oferta pożyczek zabezpieczonych
          pojazdem. Rozwijaj swój biznes na własnych warunkach.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">
            Złóż wniosek
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button variant="outline" size="lg">
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </Section>
  )
}
