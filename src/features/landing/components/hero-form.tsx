"use client"

import { useState } from "react"
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
import { useLanding } from "../context/landing-context"

const MAX_LTV = 0.8

function parseNumeric(val: string) {
  return Number(val.replace(/\s/g, "")) || 0
}

export function HeroForm() {
  const {
    vehicleValue,
    setVehicleValue,
    loanAmount,
    setLoanAmount,
    repaymentPeriod,
    setRepaymentPeriod,
  } = useLanding()
  const [loanError, setLoanError] = useState("")

  const validateLoan = (loan: string, vehicle: string) => {
    const loanNum = parseNumeric(loan)
    const vehicleNum = parseNumeric(vehicle)
    if (!loanNum || !vehicleNum) {
      setLoanError("")
      return
    }
    if (loanNum > vehicleNum * MAX_LTV) {
      setLoanError("Kwota pożyczki nie może przekraczać 80% wartości pojazdu.")
    } else {
      setLoanError("")
    }
  }

  const handleSubmit = () => {
    if (loanError) return
    document.getElementById("wniosek")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sprawdź koszty swojej pożyczki</CardTitle>
        <CardDescription>
          Podaj parametry i wygeneruj harmonogram spłaty — zobaczysz dokładne raty, odsetki i całkowity koszt. Bez zobowiązań.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className="grid gap-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
        >
          <div className="grid gap-2.5">
            <Label htmlFor="vehicle-value">Wartość pojazdu</Label>
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
            <Input
              id="repayment-period"
              type="number"
              inputMode="numeric"
              placeholder="6–48"
              min={6}
              max={48}
              value={repaymentPeriod}
              onChange={(e) => setRepaymentPeriod(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Wygeneruj harmonogram
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
