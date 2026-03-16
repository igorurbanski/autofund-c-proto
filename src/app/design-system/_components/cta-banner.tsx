import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <Section className="bg-brand-900 text-brand-50">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Gotowy na rozwój swojego biznesu?
        </h2>
        <p className="max-w-xl text-brand-200">
          Złóż wniosek już dziś i przekonaj się, jak proste mogą być finanse
          firmowe. Bez zbędnych formalności.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-brand-300 text-brand-50 hover:bg-brand-800 hover:text-brand-50"
        >
          Złóż wniosek
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  )
}
