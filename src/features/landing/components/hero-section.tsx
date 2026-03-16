import Image from "next/image"
import { Button } from "@/components/ui/button"

import { HeroForm } from "./hero-form"

export function HeroSection() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-26 pb-section lg:pt-32">
      <div className="pointer-events-none absolute -right-24 top-[45%] z-0 aspect-square w-[28rem] -translate-y-1/2 rounded-full border-[1.5rem] border-brand2-200 lg:-right-56 lg:top-[-6rem] lg:w-[48rem] lg:translate-y-0 lg:border-[3rem]" />

      <div className="relative z-10">
        <div className="pointer-events-none absolute -top-16 -bottom-16 right-0 hidden w-1/2 lg:block">
          <Image
            src="/3d-car-front-quarter-view.png"
            alt=""
            fill
            priority
            className="object-contain object-right"
          />
        </div>

        <div className="mx-auto max-w-container px-6">
          <div className="flex flex-col gap-6 lg:max-w-[40%]">
            <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
              Rozwijaj firmę z pożyczką zabezpieczoną{" "}
              <span className="text-brand-900">pojazdem</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Szybko, przejrzyście i na uczciwych warunkach. Twój pojazd pracuje
              dla Ciebie — zabezpiecz nim pożyczkę i zyskaj środki na rozwój
              biznesu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Złóż wniosek</Button>
              <Button size="lg" variant="outline" className="border-muted-foreground/30 bg-muted text-muted-foreground hover:bg-muted/80">
                Zadzwoń do nas
              </Button>
            </div>
          </div>

          <div className="relative -mr-6 mt-6 ml-auto aspect-4/3 w-[calc(100%+1.5rem)] max-w-[512px] md:mt-0 lg:hidden">
            <Image
              src="/3d-car-front-quarter-view.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-container px-6 md:mt-0 lg:mt-24">
        <HeroForm />
      </div>
    </section>
  )
}
