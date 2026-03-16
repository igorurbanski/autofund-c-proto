import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    name: "Tomasz Kowalski",
    role: "Właściciel firmy transportowej",
    initials: "TK",
    quote:
      "Proces był szybki i bezproblemowy. Pożyczka pozwoliła mi rozbudować flotę o dwa nowe samochody dostawcze.",
  },
  {
    name: "Anna Nowak",
    role: "CEO, NowaLogistyka Sp. z o.o.",
    initials: "AN",
    quote:
      "Doceniam przejrzystość warunków. Żadnych ukrytych opłat, wszystko zgodnie z umową. Polecam każdemu przedsiębiorcy.",
  },
  {
    name: "Marek Wiśniewski",
    role: "Właściciel warsztatu samochodowego",
    initials: "MW",
    quote:
      "Dzięki pożyczce krótkoterminowej mogłem szybko zainwestować w nowy sprzęt diagnostyczny. Zwrot był błyskawiczny.",
  },
]

export function Testimonials() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <SectionHeading
          title="Co mówią nasi klienci"
          subtitle="Opinie firm, które nam zaufały"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="flex flex-col gap-6">
                <p className="text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-medium">{testimonial.name}</p>
                    <p className="text-base text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
