import type { Metadata } from "next"
import { LandingProvider } from "@/features/landing/context/landing-context"
import { HeroSection } from "@/features/landing/components/hero-section"
import { ProductsProcessSections } from "@/features/landing/components/products-process-sections"
import { TrustSection } from "@/features/landing/components/trust-section"
import { ApplicationSection } from "@/features/landing/components/application-section"
import { ReviewsSection } from "@/features/landing/components/reviews-section"
import { CaseStudySection } from "@/features/landing/components/case-study-section"
import { FaqSection } from "@/features/landing/components/faq-section"

export const metadata: Metadata = {
  title: "AutoFund — Pożyczki pod zabezpieczenie pojazdu dla firm",
  description:
    "Szybka pożyczka pod zastaw pojazdu dla Twojej firmy. Transparentne warunki, brak ukrytych kosztów, preferencyjne warunki wcześniejszej spłaty.",
  openGraph: {
    title: "AutoFund — Pożyczki pod zabezpieczenie pojazdu dla firm",
    description:
      "Szybka pożyczka pod zastaw pojazdu dla Twojej firmy. Transparentne warunki, brak ukrytych kosztów.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <LandingProvider>
      <main>
        <HeroSection />
        <ProductsProcessSections />
        <TrustSection />
        <ApplicationSection />
        <FaqSection />
        <ReviewsSection />
        <CaseStudySection />
      </main>
    </LandingProvider>
  )
}
