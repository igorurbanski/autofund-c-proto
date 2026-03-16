"use client"

import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const PRODUCTS = [
  {
    value: "zabezpieczenie",
    label: "Pod zastaw pojazdu",
    popular: false,
    cardSize: "default" as const,
    title: "Pożyczka pod zabezpieczenie",
    description: "Pojazd zostaje u Ciebie — korzystasz z niego jak dotychczas.",
    features: [
      "Kwota do 250 000 PLN",
      "Okres do 48 miesięcy",
      "Pojazd pozostaje u Ciebie",
      "Decyzja w 48h",
    ],
  },
  {
    value: "zakup",
    label: "Na zakup pojazdu",
    popular: true,
    cardSize: "default" as const,
    title: "Pożyczka na zakup pojazdu",
    description: "Sfinansuj zakup pojazdu do firmy na preferencyjnych warunkach.",
    features: [
      "Finansowanie do 80% wartości",
      "Okres do 60 miesięcy",
      "Elastyczny harmonogram spłat",
      "Bez ukrytych opłat",
    ],
  },
  {
    value: "krotkoterminowa",
    label: "Krótkoterminowa",
    popular: false,
    cardSize: "sm" as const,
    title: "Pożyczka krótkoterminowa",
    description: "Szybki zastrzyk gotówki — pojazd trafia na nasz parking na czas trwania umowy.",
    features: [
      "Kwota do 100 000 PLN",
      "Okres do 12 miesięcy",
      "Wypłata w 24h",
    ],
  },
]

export function Products() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          title="Nasze produkty"
          subtitle="Wybierz rozwiązanie dopasowane do Twoich potrzeb"
        />
        <Tabs defaultValue="zabezpieczenie">
          <TabsList>
            {PRODUCTS.map((product) => (
              <TabsTrigger key={product.value} value={product.value}>
                {product.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {PRODUCTS.map((product) => (
            <TabsContent key={product.value} value={product.value}>
              <Card size={product.cardSize} className="mt-6">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    {product.popular && (
                      <Badge variant="secondary">Popularne</Badge>
                    )}
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-base"
                      >
                        <Check className="size-4 shrink-0 text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Złóż wniosek</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  )
}
