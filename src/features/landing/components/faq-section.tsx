"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "Ile mogę pożyczyć?",
    a: "Możesz otrzymać pożyczkę do 80% wartości pojazdu. Pożyczamy kwoty od 10 000 do 250 000 zł.",
  },
  {
    q: "Jaki jest okres spłaty pożyczki?",
    a: "Udzielamy pożyczek na okres do 48 miesięcy. Harmonogram spłat ustalamy indywidualnie, dopasowując go do produktu.",
  },
  {
    q: "Czy mogę spłacić pożyczkę wcześniej?",
    a: "Tak — możesz spłacić pożyczkę w dowolnym momencie bez żadnych dodatkowych kosztów z tego tytułu.",
  },
  {
    q: "Jak szybko otrzymam pieniądze?",
    a: "Środki przelejemy w ciągu 1 dnia roboczego od momentu zawarcia umowy i ustanowienia zabezpieczeń.",
  },
  {
    q: "Kto może otrzymać pożyczkę?",
    a: "Jednoosobowe działalności gospodarcze, spółki cywilne, spółki z o.o. i firmy od pierwszego dnia założenia.",
  },
  {
    q: "Na co mogę przeznaczyć środki?",
    a: "Na zakup pojazdu lub na dowolny cel — jeśli posiadasz auto, które może być zabezpieczeniem pożyczki.",
  },
  {
    q: "Jakie warunki musi spełniać pojazd?",
    a: "Samochód osobowy lub dostawczy (do 3,5 T), nie starszy niż 14 lat. Auto musi posiadać kartę pojazdu i polisę OC. Na pojeździe nie mogą być ustanowione inne zabezpieczenia.",
  },
  {
    q: "Czy muszę przerejestrować pojazd?",
    a: "W zależności od produktu pożyczkowego, przerejestrowanie może być wymagane.",
  },
  {
    q: "Czy wymagane jest zaświadczenie o dochodach?",
    a: "Opcjonalnie.",
  },
  {
    q: "Czy są jakieś ukryte koszty?",
    a: "Nie. Całkowita kwota pożyczki wypłacana jest bez jakichkolwiek potrąceń. Wszystkie koszty znasz przed podpisaniem umowy.",
  },
  {
    q: "Co się stanie, jeśli nie spłacę pożyczki?",
    a: "Jeśli Twoja sytuacja utrudnia terminową spłatę, skontaktuj się z nami — wspólnie znajdziemy rozwiązanie. Zależy nam na tym, żeby unikać konieczności sprzedaży zabezpieczenia.",
  },
]

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left text-base font-semibold transition-colors hover:text-brand-700"
      >
        {q}
        <ChevronDown
          className={cn(
            "ml-4 size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-base leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section narrow className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-72 top-1/2 z-0 aspect-square w-[48rem] -translate-y-1/2 rounded-full border-[2rem] border-brand-50 lg:-left-64 lg:w-[56rem] lg:border-[3rem]" />

      <div className="relative z-10">
        <SectionHeading
          title="Pytania i odpowiedzi"
          subtitle="Najczęściej zadawane pytania o nasze usługi."
        />

        <div className="mt-12">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
