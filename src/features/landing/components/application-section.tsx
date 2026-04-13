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
  violet: { dot: "bg-orange-400" },
  lime: { dot: "bg-lime-400" },
  plum: { dot: "bg-brand-800" },
  olive: { dot: "bg-brand-300" },
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
  "h-12 w-full appearance-none rounded-4xl border border-input bg-input/30 pl-5 pr-12 py-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"

const selectErrorClass =
  "border-destructive ring-[3px] ring-destructive/20"

type Errors = Record<string, string>

function clearError(id: string, setErrors: React.Dispatch<React.SetStateAction<Errors>>) {
  setErrors((prev) => {
    if (!prev[id]) return prev
    const next = { ...prev }
    delete next[id]
    return next
  })
}

export function ApplicationSection() {
  const {
    selectedProductId,
    setSelectedProductId,
    vehicleValue,
    setVehicleValue,
    loanAmount,
    setLoanAmount,
    repaymentPeriod,
    setRepaymentPeriod,
  } = useLanding()

  const [appProductId, setAppProductId] = useState("")
  const [borrower, setBorrower] = useState("firma-start")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [mileage, setMileage] = useState("")
  const [body, setBody] = useState("")
  const [fuel, setFuel] = useState("")
  const [damaged, setDamaged] = useState("")
  const [purpose, setPurpose] = useState("")
  const [rodo, setRodo] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

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
    clearError("app-product", setErrors)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: Errors = {}

    if (!appProductId) newErrors["app-product"] = "Wybierz produkt."
    if (!name.trim()) newErrors["app-name"] = "Podaj imię i nazwisko."
    if (!phone.trim()) newErrors["app-phone"] = "Podaj numer telefonu."
    if (!email.trim()) {
      newErrors["app-email"] = "Podaj adres e-mail."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors["app-email"] = "Podaj poprawny adres e-mail."
    }
    if (!loanAmount.trim()) newErrors["app-amount"] = "Podaj kwotę pożyczki."
    if (!repaymentPeriod) newErrors["app-term"] = "Wybierz okres spłaty."
    if (!brand.trim()) newErrors["app-brand"] = "Podaj markę pojazdu."
    if (!model.trim()) newErrors["app-model"] = "Podaj model pojazdu."
    if (!year.trim()) {
      newErrors["app-year"] = "Podaj rok produkcji."
    } else {
      const y = Number(year)
      if (y < MIN_YEAR)
        newErrors["app-year"] = `Finansujemy pojazdy nie starsze niż ${MIN_YEAR} rok produkcji.`
      else if (y > CURRENT_YEAR)
        newErrors["app-year"] = "Rok produkcji nie może być z przyszłości."
    }
    if (!mileage.trim()) newErrors["app-mileage"] = "Podaj przebieg pojazdu."
    if (!body) newErrors["app-body"] = "Wybierz rodzaj nadwozia."
    if (!fuel) newErrors["app-fuel"] = "Wybierz rodzaj paliwa."
    if (!vehicleValue.trim()) newErrors["app-value"] = "Podaj wartość pojazdu."
    if (!damaged) newErrors["app-damaged"] = "Wybierz odpowiedź."
    if (!rodo) newErrors["rodo"] = "Wymagana zgoda na przetwarzanie danych."

    setErrors(newErrors)

    const firstId = Object.keys(newErrors)[0]
    if (firstId) {
      const el = document.getElementById(firstId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
        el.focus()
      }
    }
  }

  return (
    <Section id="wniosek" narrow>
      <SectionHeading
        title={
          <>
            Złóż{" "}
            <span className="relative inline-block">
              wniosek
              <svg
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-3 w-full"
                viewBox="0 0 200 14"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0 12C60 0 150 2 200 6L200 9C150 7 60 5 0 14Z" />
              </svg>
            </span>
          </>
        }
        subtitle="Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin."
        className="[&_h2]:text-brand-800"
      />

      <form
        noValidate
        onKeyDown={handleEnterNav}
        onSubmit={handleSubmit}
        className="mt-12 space-y-12"
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
                className={cn(selectClass, "pr-16", errors["app-product"] && selectErrorClass)}
                aria-invalid={!!errors["app-product"]}
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
            {errors["app-product"] && (
              <p className="text-sm text-destructive">{errors["app-product"]}</p>
            )}
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
            <Input
              id="app-name"
              placeholder="Jan Kowalski"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError("app-name", setErrors) }}
              aria-invalid={!!errors["app-name"]}
            />
            {errors["app-name"] && (
              <p className="text-sm text-destructive">{errors["app-name"]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="app-phone">Telefon</Label>
            <Input
              id="app-phone"
              type="text"
              inputMode="tel"
              placeholder="+48 000 000 000"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); clearError("app-phone", setErrors) }}
              aria-invalid={!!errors["app-phone"]}
            />
            {errors["app-phone"] && (
              <p className="text-sm text-destructive">{errors["app-phone"]}</p>
            )}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="app-email">Adres e-mail</Label>
            <Input
              id="app-email"
              type="text"
              inputMode="email"
              placeholder="jan@firma.pl"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError("app-email", setErrors) }}
              aria-invalid={!!errors["app-email"]}
            />
            {errors["app-email"] && (
              <p className="text-sm text-destructive">{errors["app-email"]}</p>
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
              onChange={(e) => { setLoanAmount(e.target.value); clearError("app-amount", setErrors) }}
              aria-invalid={!!errors["app-amount"]}
            />
            {errors["app-amount"] && (
              <p className="text-sm text-destructive">{errors["app-amount"]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="app-term">Okres spłaty</Label>
            <div className="relative">
              <select
                id="app-term"
                value={repaymentPeriod}
                onChange={(e) => { setRepaymentPeriod(e.target.value); clearError("app-term", setErrors) }}
                className={cn(selectClass, errors["app-term"] && selectErrorClass)}
                aria-invalid={!!errors["app-term"]}
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
            {errors["app-term"] && (
              <p className="text-sm text-destructive">{errors["app-term"]}</p>
            )}
          </div>
        </div>

        {/* Purpose */}
        <div className="space-y-2">
          <Label htmlFor="app-purpose">Cel pożyczki</Label>
          <Textarea
            id="app-purpose"
            placeholder="Opisz krótko, na co potrzebujesz finansowania. Pamiętaj, aby celem pożyczki była inwestycja."
            className="min-h-24"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>

        {/* Vehicle info */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Informacje o pojeździe</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="app-brand">Marka</Label>
              <Input
                id="app-brand"
                placeholder="np. BMW"
                value={brand}
                onChange={(e) => { setBrand(e.target.value); clearError("app-brand", setErrors) }}
                aria-invalid={!!errors["app-brand"]}
              />
              {errors["app-brand"] && (
                <p className="text-sm text-destructive">{errors["app-brand"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-model">Model</Label>
              <Input
                id="app-model"
                placeholder="np. Seria 3"
                value={model}
                onChange={(e) => { setModel(e.target.value); clearError("app-model", setErrors) }}
                aria-invalid={!!errors["app-model"]}
              />
              {errors["app-model"] && (
                <p className="text-sm text-destructive">{errors["app-model"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-year">Rok produkcji</Label>
              <Input
                id="app-year"
                type="text"
                inputMode="numeric"
                placeholder={String(CURRENT_YEAR)}
                value={year}
                onChange={(e) => { setYear(e.target.value); clearError("app-year", setErrors) }}
                aria-invalid={!!errors["app-year"]}
              />
              {errors["app-year"] && (
                <p className="text-sm text-destructive">{errors["app-year"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-mileage">Przebieg (km)</Label>
              <Input
                id="app-mileage"
                type="text"
                inputMode="numeric"
                placeholder="80 000"
                value={mileage}
                onChange={(e) => { setMileage(e.target.value); clearError("app-mileage", setErrors) }}
                aria-invalid={!!errors["app-mileage"]}
              />
              {errors["app-mileage"] && (
                <p className="text-sm text-destructive">{errors["app-mileage"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-body">Rodzaj nadwozia</Label>
              <div className="relative">
                <select
                  id="app-body"
                  value={body}
                  onChange={(e) => { setBody(e.target.value); clearError("app-body", setErrors) }}
                  className={cn(selectClass, errors["app-body"] && selectErrorClass)}
                  aria-invalid={!!errors["app-body"]}
                >
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
              {errors["app-body"] && (
                <p className="text-sm text-destructive">{errors["app-body"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-fuel">Rodzaj paliwa</Label>
              <div className="relative">
                <select
                  id="app-fuel"
                  value={fuel}
                  onChange={(e) => { setFuel(e.target.value); clearError("app-fuel", setErrors) }}
                  className={cn(selectClass, errors["app-fuel"] && selectErrorClass)}
                  aria-invalid={!!errors["app-fuel"]}
                >
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
              {errors["app-fuel"] && (
                <p className="text-sm text-destructive">{errors["app-fuel"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-value">Wartość pojazdu (PLN)</Label>
              <Input
                id="app-value"
                type="text"
                inputMode="numeric"
                placeholder="60 000"
                value={vehicleValue}
                onChange={(e) => { setVehicleValue(e.target.value); clearError("app-value", setErrors) }}
                aria-invalid={!!errors["app-value"]}
              />
              {errors["app-value"] && (
                <p className="text-sm text-destructive">{errors["app-value"]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-damaged">Czy pojazd jest uszkodzony?</Label>
              <div className="relative">
                <select
                  id="app-damaged"
                  value={damaged}
                  onChange={(e) => { setDamaged(e.target.value); clearError("app-damaged", setErrors) }}
                  className={cn(selectClass, errors["app-damaged"] && selectErrorClass)}
                  aria-invalid={!!errors["app-damaged"]}
                >
                  <option value="" disabled>
                    Wybierz...
                  </option>
                  <option value="nie">Nie</option>
                  <option value="tak">Tak</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              {errors["app-damaged"] && (
                <p className="text-sm text-destructive">{errors["app-damaged"]}</p>
              )}
            </div>
          </div>
        </div>

        {/* RODO consent */}
        <div className="space-y-1.5">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              id="rodo"
              type="checkbox"
              className="mt-1 size-4 shrink-0 accent-primary"
              checked={rodo}
              onChange={(e) => { setRodo(e.target.checked); clearError("rodo", setErrors) }}
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
          {errors["rodo"] && (
            <p className="text-sm text-destructive">{errors["rodo"]}</p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Złóż wniosek
        </Button>
      </form>
    </Section>
  )
}
