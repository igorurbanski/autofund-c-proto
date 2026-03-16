import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

const STATS = [
  { value: "500+", label: "Obsłużonych firm" },
  { value: "48h", label: "Średni czas decyzji", tooltip: "Od momentu złożenia kompletnego wniosku" },
  { value: "60 tys.", label: "Średnia kwota pożyczki" },
  { value: "98%", label: "Pozytywnych opinii" },
]

export function Stats() {
  return (
    <Section className="bg-brand-50">
      <div className="flex flex-col gap-8">
        <SectionHeading
          title="Liczby mówią same za siebie"
          subtitle="Zaufanie budowane od lat"
        />
        <Separator />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-bold text-brand-900">
                {stat.value}
              </span>
              <span className="flex items-center gap-1 text-base text-muted-foreground">
                {stat.label}
                {stat.tooltip && (
                  <Tooltip>
                    <TooltipTrigger className="inline-flex">
                      <Info className="size-3.5 text-muted-foreground/60" />
                    </TooltipTrigger>
                    <TooltipContent>{stat.tooltip}</TooltipContent>
                  </Tooltip>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
