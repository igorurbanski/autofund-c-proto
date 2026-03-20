import { Section } from "@/components/section"

const YEARS_ON_MARKET = new Date().getFullYear() - 2014

const FACTS = [
  {
    value: `${YEARS_ON_MARKET}+`,
    label: "lat na rynku",
    text: "Działamy nieprzerwanie od 2014 roku — znamy rynek i jego zasady.",
  },
  {
    value: "0",
    label: "ukrytych opłat",
    text: "Wszystkie koszty znasz zanim podpiszesz cokolwiek.",
  },
  {
    value: "48h",
    label: "do umowy",
    text: "Szybka decyzja i sprawna realizacja — nie czekasz tygodniami.",
  },
]

export function TrustSection() {
  return (
    <Section>
      <div>
        <div className="mx-auto max-w-narrow text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Dlaczego <span className="text-brand-900">AutoFund</span>?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Sprawdzony partner finansowy dla polskich przedsiębiorców — uczciwe
            warunki, zero niespodzianek.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:gap-12">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex-1 border-l-2 border-brand2-600 pl-6"
            >
              <p className="text-4xl font-bold tracking-tight">{fact.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
