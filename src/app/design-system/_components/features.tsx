import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { FeatureCard } from "@/components/feature-card"
import { Shield, Clock, TrendingUp } from "lucide-react"

const FEATURES = [
  {
    icon: <Shield />,
    title: "Bezpieczeństwo",
    description:
      "Transparentne warunki bez ukrytych kosztów. Wszystko jasne od pierwszego kontaktu.",
  },
  {
    icon: <Clock />,
    title: "Szybka decyzja",
    description:
      "Proces od wniosku do wypłaty trwa zaledwie kilka dni roboczych.",
  },
  {
    icon: <TrendingUp />,
    title: "Elastyczne warunki",
    description:
      "Preferencyjne warunki wcześniejszej spłaty i dopasowanie rat do Twoich możliwości.",
  },
]

export function Features() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <SectionHeading
          title="Dlaczego my?"
          subtitle="Zaufały nam setki firm z całej Polski"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
