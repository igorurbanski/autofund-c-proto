"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { useLanding } from "../context/landing-context"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { PRODUCTS, type ProductColor } from "../constants/products"

const COLOR_CLASSES: Record<
  ProductColor,
  { accent: string; ring: string; number: string; tileBg: string; btn: string }
> = {
  violet: {
    accent: "text-brand-500",
    ring: "ring-brand-500",
    number: "text-brand-200",
    tileBg: "bg-brand-50",
    btn: "bg-brand-500 hover:bg-brand-600",
  },
  lime: {
    accent: "text-brand2-700",
    ring: "ring-brand2-700",
    number: "text-brand2-300",
    tileBg: "bg-brand2-50",
    btn: "bg-brand2-700 hover:bg-brand2-800",
  },
  plum: {
    accent: "text-brand-800",
    ring: "ring-brand-800",
    number: "text-brand-300",
    tileBg: "bg-brand-100",
    btn: "bg-brand-800 hover:bg-brand-900",
  },
  olive: {
    accent: "text-brand2-900",
    ring: "ring-brand2-800",
    number: "text-brand2-400",
    tileBg: "bg-brand2-100",
    btn: "bg-brand2-900 hover:bg-brand2-950",
  },
}

export function ProductsProcessSections() {
  const { selectedProductId: selectedId, setSelectedProductId: setSelectedId } =
    useLanding()
  const [pickerOpen, setPickerOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)
  const selected = PRODUCTS.find((p) => p.id === selectedId)!
  const colors = COLOR_CLASSES[selected.color]

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false)
      }
    }
    if (pickerOpen) {
      document.addEventListener("mousedown", onClickOutside)
    }
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [pickerOpen])

  const handleSelect = (id: string) => {
    setSelectedId(id)
    setTimeout(() => {
      document.getElementById("jak-to-dziala")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }, 50)
  }

  return (
    <>
      <Section id="oferta">
        <SectionHeading
          title={
            <>
              Trzy sposoby na{" "}
              <span className="text-brand-800">finansowanie</span>
            </>
          }
          subtitle="Dopasuj produkt do swojej sytuacji. Każda opcja to inna forma współpracy — wybierz tę, która Ci odpowiada."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const isSelected = selectedId === product.id
            const pColors = COLOR_CLASSES[product.color]

            return (
              <Card
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className={cn(
                  "flex h-full cursor-pointer flex-col shadow-sm transition-all duration-200",
                  isSelected
                    ? cn("ring-2 shadow-md", pColors.ring)
                    : ""
                )}
              >
                <CardHeader>
                  <product.icon
                    className={cn("mb-1 size-6", pColors.accent)}
                  />
                  <CardTitle className={cn("text-xl", pColors.accent)}>
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-base text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button
                    onClick={() => handleSelect(product.id)}
                    className={cn(
                      "text-white",
                      pColors.btn
                    )}
                  >
                    Zobacz kroki
                    <ArrowDown className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Section>

      <Section id="jak-to-dziala" className="scroll-mt-20">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Jak to działa?
          </h2>
          <div className="text-lg text-muted-foreground">
            Poznaj kroki dla{" "}
            <span ref={pickerRef} className="relative inline-block">
              <button
                onClick={() => setPickerOpen(!pickerOpen)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-current/20 px-4 py-0.5 font-bold transition-colors hover:bg-muted",
                  colors.accent
                )}
              >
                {selected.name}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    pickerOpen && "rotate-180"
                  )}
                />
              </button>

              {pickerOpen && (
                <div className="absolute left-1/2 top-full z-20 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-card p-1.5 shadow-lg">
                  {PRODUCTS.map((product) => {
                    const pColors = COLOR_CLASSES[product.color]
                    const isActive = product.id === selectedId
                    return (
                      <button
                        key={product.id}
                        onClick={() => {
                          handleSelect(product.id)
                          setPickerOpen(false)
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          isActive ? "bg-muted" : "hover:bg-muted/60"
                        )}
                      >
                        <product.icon
                          className={cn("size-5 shrink-0", pColors.accent)}
                        />
                        <span
                          className={cn("text-sm font-semibold", pColors.accent)}
                        >
                          {product.name}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </span>
          </div>
        </div>

        <div
          key={selected.id}
          className="mt-14 grid grid-cols-1 gap-8 animate-in fade-in duration-300 md:grid-cols-3"
        >
          {selected.steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 md:block"
            >
              <div
                className={cn(
                  "flex aspect-square w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl md:aspect-4/3 md:w-auto",
                  colors.tileBg
                )}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={240}
                  height={240}
                  className="size-4/5 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center md:pt-4">
                <span
                  className={cn(
                    "text-2xl font-extrabold md:text-3xl",
                    colors.number
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-semibold md:text-lg">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
