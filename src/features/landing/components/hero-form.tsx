"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { PRODUCTS, type ProductColor } from "../constants/products"
import { useLanding } from "../context/landing-context"
import { PRODUCT_LOAN_CONFIG, TERM_OPTIONS, EARLY_REPAY_COEFF1 } from "../constants/loan-params"
import { calculateSchedule, type ScheduleResult } from "../utils/schedule-calculator"
import { ScheduleDialog } from "./schedule-dialog"

const MAX_LTV: Record<string, number> = {
  "auto-drive": 0.8,
  "auto-start": 0.8,
  "auto-park": 0.4,
  "smart-plan": 0.8,
}
const DEFAULT_LTV = 0.8

const TILE_LABELS: Record<string, { title: string; desc: string }> = {
  "auto-drive": { title: "Pożyczka pod pojazd", desc: "Jeździsz dalej — auto jest zabezpieczeniem" },
  "auto-start": { title: "Zakup pojazdu", desc: "Finansujemy auto, które wybierzesz" },
  "auto-park": { title: "Szybka gotówka", desc: "Zostawiasz auto, odbierasz po spłacie" },
  "smart-plan": { title: "Odkup z opcją zwrotu", desc: "Sprzedajesz auto i możesz je odkupić" },
}

const TILE_COLORS: Record<ProductColor, { border: string; radio: string; title: string }> = {
  violet: { border: "border-brand-500", radio: "data-checked:bg-brand-500 data-checked:border-brand-500", title: "text-brand-500" },
  lime: { border: "border-brand2-700", radio: "data-checked:bg-brand2-700 data-checked:border-brand2-700", title: "text-brand2-700" },
  plum: { border: "border-brand-800", radio: "data-checked:bg-brand-800 data-checked:border-brand-800", title: "text-brand-800" },
  olive: { border: "border-brand2-900", radio: "data-checked:bg-brand2-900 data-checked:border-brand2-900", title: "text-brand2-900" },
}

function parseNumeric(val: string) {
  return Number(val.replace(/\s/g, "")) || 0
}

function formatMonths(n: number) {
  if (n === 1) return "miesiąc"
  if (n >= 2 && n <= 4) return "miesiące"
  return "miesięcy"
}

export function HeroForm() {
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
  const [loanError, setLoanError] = useState("")
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [scheduleData, setScheduleData] = useState<ScheduleResult | null>(null)

  const termOptions = TERM_OPTIONS[selectedProductId] ?? []

  const getMaxLtv = (productId: string) => MAX_LTV[productId] ?? DEFAULT_LTV

  const validateLoan = (loan: string, vehicle: string, productId: string = selectedProductId) => {
    const loanNum = parseNumeric(loan)
    const vehicleNum = parseNumeric(vehicle)
    if (!loanNum || !vehicleNum) {
      setLoanError("")
      return
    }
    const ltv = getMaxLtv(productId)
    if (loanNum > vehicleNum * ltv) {
      setLoanError(`Kwota pożyczki nie może przekraczać ${Math.round(ltv * 100)}% wartości pojazdu.`)
    } else {
      setLoanError("")
    }
  }

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id)
    const newTerms = TERM_OPTIONS[id] ?? []
    if (repaymentPeriod && !newTerms.includes(Number(repaymentPeriod))) {
      setRepaymentPeriod("")
    }
    if (loanAmount && vehicleValue) {
      validateLoan(loanAmount, vehicleValue, id)
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

  const canOpenSchedule = () => {
    const loanNum = parseNumeric(loanAmount)
    if (!loanNum) return false
    if (!repaymentPeriod) return false

    if (vehicleValue) {
      const vehicleNum = parseNumeric(vehicleValue)
      if (vehicleNum && loanNum > vehicleNum * getMaxLtv(selectedProductId)) return false
    }

    return true
  }

  const handleSubmit = () => {
    validateLoan(loanAmount, vehicleValue)
    if (!canOpenSchedule()) return

    const months = Number(repaymentPeriod)
    const config = PRODUCT_LOAN_CONFIG[selectedProductId]
    const result = calculateSchedule({
      netLoan: parseNumeric(loanAmount),
      months,
      prowizjaRate: config.prowizjaRate,
      flatFeeRate: config.flatFeeRate,
      interestRate: config.interestRate,
      earlyRepayCoeff1: EARLY_REPAY_COEFF1[months] ?? 0,
      earlyRepayCoeff2: config.earlyRepayCoeff2,
    })
    setScheduleData(result)
    setScheduleOpen(true)
  }

  return (
    <>
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sprawdź koszty swojej pożyczki</CardTitle>
        <CardDescription>
          Podaj parametry i wygeneruj harmonogram spłaty — zobaczysz dokładne raty, odsetki i całkowity koszt. Bez zobowiązań.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="mb-6 grid gap-2.5">
        <Label>Rodzaj finansowania</Label>
        <RadioGroup
          value={selectedProductId}
          onValueChange={handleProductSelect}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product) => {
            const isSelected = selectedProductId === product.id
            const colors = TILE_COLORS[product.color]
            const label = TILE_LABELS[product.id]
            return (
              <label
                key={product.id}
                className={cn(
                  "relative cursor-pointer rounded-xl border p-3 pr-8 transition-colors",
                  isSelected
                    ? cn(colors.border, "bg-muted/60")
                    : "border-input bg-muted/30 hover:bg-muted/50"
                )}
              >
                <RadioGroupItem value={product.id} className={cn("absolute top-3 right-3", colors.radio)} />
                <div className="grid gap-0.5">
                  <span className={cn("text-sm font-medium leading-tight", colors.title)}>{label.title}</span>
                  <span className="text-sm leading-snug text-muted-foreground">{label.desc}</span>
                </div>
              </label>
            )
          })}
        </RadioGroup>
        </div>

        <form
          noValidate
          onKeyDown={handleEnterNav}
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className="grid gap-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-start"
        >
          <div className="grid gap-2.5">
            <Label htmlFor="vehicle-value">Wartość pojazdu (opcjonalne)</Label>
            <div className="relative">
              <Input
                id="vehicle-value"
                type="text"
                inputMode="numeric"
                placeholder="np. 60 000"
                className="pr-12"
                value={vehicleValue}
                onChange={(e) => {
                  setVehicleValue(e.target.value)
                  if (loanError) validateLoan(loanAmount, e.target.value)
                }}
              />
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-base text-muted-foreground">
                PLN
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Finansujemy pojazdy nie starsze niż 14 lat.
            </p>
          </div>

          <div className="grid gap-2.5">
            <Label htmlFor="loan-amount">Kwota pożyczki</Label>
            <div className="relative">
              <Input
                id="loan-amount"
                type="text"
                inputMode="numeric"
                placeholder="np. 40 000"
                className="pr-12"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(e.target.value)
                  if (loanError) validateLoan(e.target.value, vehicleValue)
                }}
                onBlur={(e) => validateLoan(e.target.value, vehicleValue)}
                aria-invalid={!!loanError}
              />
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-base text-muted-foreground">
                PLN
              </span>
            </div>
            {loanError && (
              <p className="text-sm text-destructive">{loanError}</p>
            )}
          </div>

          <div className="grid gap-2.5">
            <Label htmlFor="repayment-period">Okres spłaty</Label>
            <div className="relative">
              <select
                id="repayment-period"
                value={repaymentPeriod}
                onChange={(e) => setRepaymentPeriod(e.target.value)}
                className="h-12 w-full appearance-none rounded-4xl border border-input bg-input/30 pl-5 pr-12 py-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
              >
                <option value="">Wybierz okres</option>
                {termOptions.map((m) => (
                  <option key={m} value={String(m)}>
                    {m} {formatMonths(m)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <div className="grid gap-2.5">
            <Label className="invisible hidden md:block" aria-hidden="true">&nbsp;</Label>
            <Button type="submit" className="w-full md:w-auto">
              Wygeneruj harmonogram
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    <ScheduleDialog open={scheduleOpen} onOpenChange={setScheduleOpen} data={scheduleData} />
    </>
  )
}
