import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CASES = [
  {
    title: "Finansowanie floty dla firmy transportowej",
    product: "AutoDrive",
    amount: "120 000 PLN",
    description:
      "Właściciel firmy transportowej potrzebował środków na rozbudowę floty. Zabezpieczeniem była ciężarówka o wartości 180 000 PLN. Pieniądze na koncie w 48h, a pojazd cały czas pracował na trasach.",
  },
  {
    title: "Kapitał obrotowy dla warsztatu samochodowego",
    product: "AutoZastaw",
    amount: "45 000 PLN",
    description:
      "Właściciel warsztatu potrzebował szybkiego zastrzyku gotówki na zakup części i sprzętu. Pod zastaw zostawił samochód osobowy, a umowę podpisał w ciągu dwóch dni od pierwszego kontaktu.",
  },
]

export function CaseStudySection() {
  return (
    <Section>
      <SectionHeading
        title="Przykłady finansowania"
        subtitle="Zobacz, jak pomagamy naszym klientom."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {CASES.map((c) => (
          <Card key={c.title}>
            <CardContent className="flex flex-col gap-3 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{c.product}</Badge>
                <Badge variant="outline">{c.amount}</Badge>
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
