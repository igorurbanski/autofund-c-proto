import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

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
    <div className="overflow-hidden rounded-[3rem] bg-brand-900">
      <Section>
        <SectionHeading
          title="Dlaczego AutoFund?"
          subtitle="Sprawdzony partner finansowy dla polskich przedsiębiorców — uczciwe warunki, zero niespodzianek."
          className="mx-auto max-w-narrow [&_h2]:text-white [&_div]:text-zinc-400"
        />

        <div className="mt-12 flex flex-col divide-y divide-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-1 flex-col items-center gap-4 py-10 text-center lg:px-10 lg:py-8"
            >
              <p className="text-7xl font-semibold tracking-tight text-white lg:text-8xl">
                {fact.value}
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-brand-300">{fact.label}</p>
                <p className="mx-auto max-w-[26ch] text-base text-white/60">{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
