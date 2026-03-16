"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { PRODUCTS } from "../constants/products"

type LandingContextValue = {
  selectedProductId: string
  setSelectedProductId: (id: string) => void
  vehicleValue: string
  setVehicleValue: (v: string) => void
  loanAmount: string
  setLoanAmount: (v: string) => void
  repaymentPeriod: string
  setRepaymentPeriod: (v: string) => void
}

const LandingContext = createContext<LandingContextValue | null>(null)

export function LandingProvider({ children }: { children: ReactNode }) {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id)
  const [vehicleValue, setVehicleValue] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [repaymentPeriod, setRepaymentPeriod] = useState("")

  return (
    <LandingContext value={{
      selectedProductId,
      setSelectedProductId,
      vehicleValue,
      setVehicleValue,
      loanAmount,
      setLoanAmount,
      repaymentPeriod,
      setRepaymentPeriod,
    }}>
      {children}
    </LandingContext>
  )
}

export function useLanding() {
  const ctx = useContext(LandingContext)
  if (!ctx) throw new Error("useLanding must be used within LandingProvider")
  return ctx
}
