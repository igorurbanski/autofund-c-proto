"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PRODUCTS, type ProductColor } from "../constants/products"
import { TERM_OPTIONS, ALL_TERM_OPTIONS } from "../constants/loan-params"
import { useLanding } from "../context/landing-context"

const COLOR_MAP: Record<ProductColor, { dot: string }> = {
  violet: { dot: "bg-brand-500" },
  lime: { dot: "bg-brand2-700" },
  plum: { dot: "bg-brand-800" },
  olive: { dot: "bg-brand2-900" },
}

const BORROWER_BASE = [
  { value: "firma-start", label: "Firma od pierwszego dnia założenia" },
  { value: "firma", label: "Firma" },
]

const BORROWER_WITH_PERSON = [
  ...BORROWER_BASE,
  { value: "osoba-fizyczna", label: "Osoba fizyczna" },
]

const BODY_TYPES = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Kombi",
  "Coupé",
  "Kabriolet",
  "Van",
  "Pick-up",
]

const FUEL_TYPES = ["Benzyna", "Diesel", "LPG", "Hybryda", "Elektryczny"]

const CURRENT_YEAR = new Date().getFullYear()
const MIN_YEAR = CURRENT_YEAR - 15

const selectClass =
  "h-12 w-full appearance-none rounded-4xl border border-input bg-input/30 pl-5 pr-12 py-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 md:text-sm"

export function ApplicationSection() {
  const {
    selectedProductId,
    setSelectedProductId,
    loanAmount,
    setLoanAmount,
    repaymentPeriod,
    setRepaymentPeriod,
  } = useLanding()
  const [appProductId, setAppProductId] = useState("")
  const [borrower, setBorrower] = useState("firma-start")
  const [yearError, setYearError] = useState("")
  const [emailError, setEmailError] = useState("")

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setAppProductId(selectedProductId)
  }, [selectedProductId])

  const selectedProduct = PRODUCTS.find((p) => p.id === appProductId)
  const isSmartPlan = selectedProduct?.id === "smart-plan"
  const borrowerOptions = isSmartPlan ? BORROWER_WITH_PERSON : BORROWER_BASE

  const handleProductChange = (id: string) => {
    setAppProductId(id)
    setSelectedProductId(id)
    if (id !== "smart-plan" && borrower === "osoba-fizyczna") {
      setBorrower("firma-start")
    }
    const newTerms = TERM_OPTIONS[id] ?? []
    if (repaymentPeriod && !newTerms.includes(Number(repaymentPeriod))) {
      setRepaymentPeriod("")
    }
  }

  const handleYearBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (!val) {
      setYearError("")
      return
    }
    const year = Number(val)
    if (year < MIN_YEAR) {
      setYearError(
        `Finansujemy pojazdy nie starsze niż ${MIN_YEAR} rok produkcji.`
      )
    } else if (year > CURRENT_YEAR) {
      setYearError("Rok produkcji nie może być z przyszłości.")
    } else {
      setYearError("")
    }
  }

  const validateEmail = (val: string) => {
    if (!val) {
      setEmailError("")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setEmailError("Podaj poprawny adres e-mail.")
    } else {
      setEmailError("")
    }
  }

  const handleEnterNav = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== "Enter") return
    const target = e.target as HTMLElement
    if (target.tagName === "TEXTAREA" || target.tagName === "BUTTON") return

    e.preventDefault()
    const focusable = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>(
        "input, select, textarea, button[type='submit']"
      )
    ).filter((el) => !(el as HTMLInputElement).disabled && el.tabIndex !== -1)

    const idx = focusable.indexOf(target as HTMLElement)
    if (idx >= 0 && idx < focusable.length - 1) {
      focusable[idx + 1].focus()
    }
  }

  return (
    <Section id="wniosek">
      <SectionHeading
        title="Złóż wniosek"
        subtitle="Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin."
      />

      <form
        noValidate
        onKeyDown={handleEnterNav}
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-10 max-w-3xl space-y-10"
      >
        {/* Product & borrower */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="app-product">Produkt</Label>
              <Link
                href="#oferta"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Nie wiesz, który wybrać?
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
            <div className="relative">
              <select
                id="app-product"
                value={appProductId}
                onChange={(e) => handleProductChange(e.target.value)}
                className={cn(selectClass, "pr-16")}
              >
                <option value="" disabled>
                  Wybierz...
                </option>
                {PRODUCTS.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} — {product.tagline}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-2">
                {selectedProduct && (
                  <span
                    className={cn(
                      "size-2.5 rounded-full",
                      COLOR_MAP[selectedProduct.color].dot
                    )}
                  />
                )}
                <ChevronDown className="size-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="app-borrower">Kto pożycza?</Label>
            <div className="relative">
              <select
                id="app-borrower"
                value={borrower}
                onChange={(e) => setBorrower(e.target.value)}
                className={selectClass}
              >
                {borrowerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Personal info */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="app-name">Imię i nazwisko</Label>
            <Input id="app-name" placeholder="Jan Kowalski" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="app-phone">Telefon</Label>
            <Input id="app-phone" type="text" inputMode="tel" placeholder="+48 000 000 000" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="app-email">Adres e-mail</Label>
            <Input
              id="app-email"
              type="text"
              inputMode="email"
              placeholder="jan@firma.pl"
              onBlur={(e) => validateEmail(e.target.value)}
              onChange={(e) => emailError && validateEmail(e.target.value)}
              aria-invalid={!!emailError}
            />
            {emailError && (
              <p className="text-sm text-destructive">{emailError}</p>
            )}
          </div>
        </div>

        {/* Loan details */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="app-amount">Kwota pożyczki (PLN)</Label>
            <Input
              id="app-amount"
              type="text"
              inputMode="numeric"
              placeholder="50 000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="app-term">Okres spłaty</Label>
            <div className="relative">
              <select
                id="app-term"
                value={repaymentPeriod}
                onChange={(e) => setRepaymentPeriod(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Wybierz...
                </option>
                {(appProductId ? TERM_OPTIONS[appProductId] ?? [] : ALL_TERM_OPTIONS).map((m) => (
                  <option key={m} value={String(m)}>
                    {m} {m === 1 ? "miesiąc" : m >= 2 && m <= 4 ? "miesiące" : "miesięcy"}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="space-y-2">
          <Label htmlFor="app-purpose">Cel pożyczki</Label>
          <Textarea
            id="app-purpose"
            placeholder="Opisz krótko, na co potrzebujesz finansowania..."
            className="min-h-24"
          />
        </div>

        {/* Vehicle info */}
        <div className="space-y-5">
          <h3 className="text-lg font-medium">Informacje o pojeździe</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="app-brand">Marka</Label>
              <Input id="app-brand" placeholder="np. BMW" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-model">Model</Label>
              <Input id="app-model" placeholder="np. Seria 3" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-year">Rok produkcji</Label>
              <Input
                id="app-year"
                type="text"
                inputMode="numeric"
                placeholder={String(CURRENT_YEAR)}
                onBlur={handleYearBlur}
                onChange={() => yearError && setYearError("")}
                aria-invalid={!!yearError}
              />
              {yearError && (
                <p className="text-sm text-destructive">{yearError}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-mileage">Przebieg (km)</Label>
              <Input id="app-mileage" type="text" inputMode="numeric" placeholder="80 000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-body">Rodzaj nadwozia</Label>
              <div className="relative">
                <select id="app-body" className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Wybierz...
                  </option>
                  {BODY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-fuel">Rodzaj paliwa</Label>
              <div className="relative">
                <select id="app-fuel" className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Wybierz...
                  </option>
                  {FUEL_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-damaged">Czy pojazd jest uszkodzony?</Label>
              <div className="relative">
                <select id="app-damaged" className={selectClass} defaultValue="">
                  <option value="" disabled>
                    Wybierz...
                  </option>
                  <option value="nie">Nie</option>
                  <option value="tak">Tak</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* RODO consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez AutoFund
            w celu rozpatrzenia wniosku o pożyczkę, zgodnie z{" "}
            <Link
              href="/polityka-prywatnosci"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Polityką Prywatności
            </Link>
            .
          </span>
        </label>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Złóż wniosek
        </Button>
      </form>
    </Section>
  )
}
