import { Star } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const REVIEWS = [
  {
    name: "Tomasz K.",
    initials: "TK",
    rating: 5,
    text: "Szybko, sprawnie i bez zbędnych formalności. Pieniądze na koncie w ciągu doby. Polecam każdemu, kto potrzebuje finansowania na rozwój firmy.",
    date: "3 miesiące temu",
  },
  {
    name: "Marta W.",
    initials: "MW",
    rating: 5,
    text: "Bardzo profesjonalna obsługa. Pan na infolinii wytłumaczył wszystko dokładnie, żadnych ukrytych kosztów. Umowa jasna i przejrzysta.",
    date: "2 miesiące temu",
  },
  {
    name: "Ewa S.",
    initials: "ES",
    rating: 4,
    text: "Sprawna obsługa, konkurencyjne warunki. Jedyne co bym poprawiła to czas oczekiwania na wizytę u notariusza, ale to już nie zależy od AutoFund.",
    date: "6 miesięcy temu",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < count ? "fill-brand2-300 text-brand2-300" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3">
        <SectionHeading
          title="Opinie klientów"
          subtitle="Co mówią o nas nasi klienci."
        />
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Opinie z Google
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <Card key={review.name} className="h-full">
            <CardContent className="flex h-full flex-col gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="text-sm">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <Stars count={review.rating} />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
