"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PRODUCTS, type ProductColor } from "../constants/products"
import { useLanding } from "../context/landing-context"
import { HeroForm } from "./hero-form"

const HERO_SLIDES = [
  {
    id: "auto-drive",
    title: "Jedź dalej, a Twoje auto",
    titleAccent: "pracuje dla Ciebie",
    description:
      "Zabezpiecz pożyczkę swoim pojazdem i korzystaj z niego bez ograniczeń. Idealne rozwiązanie, gdy potrzebujesz środków na rozwój firmy.",
    car: "purple" as const,
  },
  {
    id: "auto-start",
    title: "Sfinansuj zakup",
    titleAccent: "wymarzonego pojazdu",
    description:
      "Znajdź auto dla firmy, a my zapewnimy finansowanie. Ty wybierasz pojazd — my załatwiamy resztę. Szybko i na uczciwych warunkach.",
    car: "green" as const,
  },
  {
    id: "auto-park",
    title: "Szybka gotówka",
    titleAccent: "nawet tego samego dnia",
    description:
      "Zostaw pojazd na naszym strzeżonym placu i odbierz gotówkę. Minimum formalności — maksimum szybkości.",
    car: "purple" as const,
  },
  {
    id: "smart-plan",
    title: "Sprzedaj auto i zachowaj",
    titleAccent: "opcję odkupu",
    description:
      "Odkupujemy Twój pojazd i dajemy Ci możliwość odkupu przez 36 miesięcy. Płacisz opłatę rezerwacyjną, a jeździsz dalej.",
    car: "green" as const,
  },
]

const COLOR_MAP: Record<
  ProductColor,
  { accent: string; icon: string; progress: string; btn: string }
> = {
  violet: {
    accent: "text-brand-500",
    icon: "text-brand-500",
    progress: "bg-brand-500",
    btn: "bg-brand-500 hover:bg-brand-600",
  },
  lime: {
    accent: "text-brand2-700",
    icon: "text-brand2-700",
    progress: "bg-brand2-700",
    btn: "bg-brand2-700 hover:bg-brand2-800",
  },
  plum: {
    accent: "text-brand-800",
    icon: "text-brand-800",
    progress: "bg-brand-800",
    btn: "bg-brand-800 hover:bg-brand-900",
  },
  olive: {
    accent: "text-brand2-900",
    icon: "text-brand2-900",
    progress: "bg-brand2-900",
    btn: "bg-brand2-900 hover:bg-brand2-950",
  },
}

const INTERVAL_MS = 6000
const RING_R = 22
const RING_C = Math.PI * 2 * RING_R

export function HeroSection() {
  const { selectedProductId, setSelectedProductId } = useLanding()
  const [progressKey, setProgressKey] = useState(0)
  const [stepsLeft, setStepsLeft] = useState(PRODUCTS.length)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const selfChangeRef = useRef(false)
  const mountedRef = useRef(false)

  const activeIndex = PRODUCTS.findIndex((p) => p.id === selectedProductId)
  const slide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0]
  const activeProduct = PRODUCTS[activeIndex] ?? PRODUCTS[0]
  const showPurple = slide.car === "purple"
  const animating = stepsLeft > 0

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    if (selfChangeRef.current) {
      selfChangeRef.current = false
      return
    }
    setStepsLeft(0)
    setProgressKey((k) => k + 1)
  }, [selectedProductId])

  useEffect(() => {
    if (!animating) return
    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % HERO_SLIDES.length
      selfChangeRef.current = true
      setStepsLeft((s) => s - 1)
      setSelectedProductId(PRODUCTS[next].id)
      setProgressKey((k) => k + 1)
    }, INTERVAL_MS)

    return () => clearTimeout(timer)
  }, [activeIndex, animating, setSelectedProductId])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setStepsLeft(0)
      },
      { threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = sliderRef.current
    if (!container) return
    const btn = container.children[activeIndex] as HTMLElement | undefined
    if (!btn) return
    container.scrollTo({ left: btn.offsetLeft - container.offsetLeft, behavior: "smooth" })
  }, [activeIndex])

  const handleSelect = (index: number) => {
    if (index === activeIndex) return
    selfChangeRef.current = true
    setStepsLeft(0)
    setSelectedProductId(PRODUCTS[index].id)
    setProgressKey((k) => k + 1)
  }

  const handleNext = () => {
    const next = (activeIndex + 1) % PRODUCTS.length
    selfChangeRef.current = true
    setStepsLeft(PRODUCTS.length - 1)
    setSelectedProductId(PRODUCTS[next].id)
    setProgressKey((k) => k + 1)
  }

  return (
    <section ref={sectionRef} className="relative -mt-16 overflow-hidden pt-26 pb-section lg:pt-32">
      <div className="mx-auto max-w-container px-5">
        {/* Hero content: text + car */}
        <div className="relative min-h-[260px] sm:min-h-[280px] lg:flex lg:items-center lg:min-h-0">
          {/* Mobile car — large square, mostly off-screen to the right */}
          <div className="pointer-events-none absolute -right-[130%] top-1/2 w-[185%] -translate-y-1/2 lg:hidden">
            <div className="relative aspect-square">
              <Image
                src="/car-ai-purple.png"
                alt=""
                fill
                priority
                sizes="70vw"
                className={cn(
                  "object-contain transition-opacity duration-700 ease-in-out",
                  showPurple ? "opacity-100" : "opacity-0"
                )}
              />
              <Image
                src="/car-ai-green.png"
                alt=""
                fill
                sizes="70vw"
                className={cn(
                  "object-contain transition-opacity duration-700 ease-in-out",
                  showPurple ? "opacity-0" : "opacity-100"
                )}
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div className="relative z-10 grid max-w-[60%] sm:max-w-[62%] lg:max-w-none lg:flex-1">
            {HERO_SLIDES.map((s, i) => {
              const isActive = i === activeIndex
              const c = COLOR_MAP[PRODUCTS[i].color]
              return (
                <div
                  key={s.id}
                  aria-hidden={!isActive}
                  className={cn(
                    "[grid-area:1/1] transition-opacity duration-500",
                    isActive
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  )}
                >
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                      {s.title}{" "}
                      <span className={cn("transition-colors duration-500", c.accent)}>
                        {s.titleAccent}
                      </span>
                    </h1>
                    <p className="max-w-[95%] text-lg text-muted-foreground lg:max-w-[85%]">
                      {s.description}
                    </p>
                  </div>
                  <Button
                    size="default"
                    tabIndex={isActive ? 0 : -1}
                    className={cn(
                      "mt-8 text-white transition-colors duration-500",
                      c.btn
                    )}
                  >
                    Złóż wniosek
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Desktop car — in-flow, contained within layout */}
          <div className="pointer-events-none relative hidden shrink-0 lg:block lg:w-[46%]">
            <div className="relative aspect-square">
              <Image
                src="/car-ai-purple.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 38vw"
                className={cn(
                  "object-contain transition-opacity duration-700 ease-in-out",
                  showPurple ? "opacity-100" : "opacity-0"
                )}
              />
              <Image
                src="/car-ai-green.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw"
                className={cn(
                  "object-contain transition-opacity duration-700 ease-in-out",
                  showPurple ? "opacity-0" : "opacity-100"
                )}
              />
            </div>
          </div>
        </div>

        {/* Product slider */}
        <nav
          className="mt-10 flex items-center gap-3 lg:mt-4"
          aria-label="Produkty"
        >
          <div ref={sliderRef} className="flex items-center gap-0.5 overflow-x-auto rounded-full bg-muted p-1">
            {PRODUCTS.map((p, index) => {
              const isActive = index === activeIndex
              const pColors = COLOR_MAP[p.color]
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(index)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <p.icon
                    className={cn(
                      "size-4 transition-colors duration-300",
                      isActive ? pColors.icon : ""
                    )}
                  />
                  {p.name}
                </button>
              )
            })}
          </div>

          <div className="relative shrink-0 size-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="size-full rounded-full bg-white hover:bg-white/80"
              aria-label="Następny produkt"
            >
              <ArrowRight className="size-4" />
            </Button>
            <svg
              className="pointer-events-none absolute inset-0 -rotate-90"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r={RING_R}
                stroke="currentColor"
                strokeWidth="2"
                className="text-border"
              />
              {animating && (
                <circle
                  key={progressKey}
                  cx="24"
                  cy="24"
                  r={RING_R}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={COLOR_MAP[activeProduct.color].icon}
                  style={{
                    strokeDasharray: RING_C,
                    strokeDashoffset: RING_C,
                    animation: `hero-ring ${INTERVAL_MS}ms linear forwards`,
                  }}
                />
              )}
            </svg>
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-container px-5 md:mt-0 lg:mt-16">
        <HeroForm />
      </div>
    </section>
  )
}
