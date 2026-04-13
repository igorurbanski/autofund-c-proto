"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import type { ScheduleResult } from "../utils/schedule-calculator"
import type { ProductColor } from "../constants/products"

const PRODUCT_COLORS: Record<ProductColor, { border: string; bg: string; text: string }> = {
  plum:   { border: "border-brand-800",  bg: "bg-brand-50",   text: "text-brand-800"  },
  lime:   { border: "border-lime-400",   bg: "bg-lime-50",    text: "text-lime-600"   },
  violet: { border: "border-orange-400", bg: "bg-orange-50",  text: "text-orange-500" },
  olive:  { border: "border-brand-300",  bg: "bg-brand-50",   text: "text-brand-600"  },
}

type ScheduleDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: ScheduleResult | null
  productColor?: ProductColor
}

function fmt(n: number) {
  return n.toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function getEarlyRepaymentHighlights(data: ScheduleResult) {
  const highlights: { month: number; amount: number }[] = []
  const { rows } = data
  const periodsCount = Math.ceil(rows.length / 12)

  for (let p = 0; p < periodsCount - 1; p++) {
    const lastIdx = Math.min((p + 1) * 12, rows.length) - 1
    const row = rows[lastIdx]
    if (row.earlyRepayment !== null && row.earlyRepayment > 0) {
      highlights.push({ month: row.month, amount: row.earlyRepayment })
    }
  }
  return highlights
}

function useScrollShadow() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const check = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollRight(
      el.scrollWidth > el.clientWidth + el.scrollLeft + 1
    )
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    check()
    el.addEventListener("scroll", check, { passive: true })
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", check)
      ro.disconnect()
    }
  }, [check])

  return { scrollRef, canScrollRight }
}

export function ScheduleDialog({ open, onOpenChange, data, productColor = "plum" }: ScheduleDialogProps) {
  const { scrollRef, canScrollRight } = useScrollShadow()

  if (!data) return null

  const { summary, rows } = data
  const highlights = getEarlyRepaymentHighlights(data)
  const colors = PRODUCT_COLORS[productColor]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent scrollable className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Harmonogram spłaty</DialogTitle>
          <DialogDescription className="text-lg font-medium">
            {summary.months} równych, miesięcznych rat kapitałowo-odsetkowych
            z możliwością wcześniejszej spłaty na preferencyjnych warunkach.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          <div className="flex-1 rounded-lg bg-muted/50 px-4 py-3">
            <p className="text-sm text-muted-foreground">Kwota do wypłaty</p>
            <p className="text-base font-medium">{fmt(summary.netLoan)} PLN</p>
          </div>
          <div className="flex-1 rounded-lg bg-muted/50 px-4 py-3">
            <p className="text-sm text-muted-foreground">Okres spłaty</p>
            <p className="text-base font-medium">{summary.months} mies.</p>
          </div>
          <div className={cn("flex-1 rounded-xl px-4 py-3", colors.bg)}>
            <p className="text-sm text-muted-foreground">Rata miesięczna</p>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-2xl font-semibold tabular-nums tracking-tight", colors.text)}>
                {fmt(summary.monthlyPayment)}
              </span>
              <span className="text-sm text-muted-foreground">PLN</span>
            </div>
          </div>
        </div>

        {highlights.length > 0 && (
          <div className={cn("rounded-xl border px-4 py-3", colors.border, colors.bg)}>
            <p className="mb-1 text-base font-semibold">
              Preferencyjne warunki wcześniejszej spłaty
            </p>
            <ul className="space-y-0.5 text-base text-muted-foreground">
              {highlights.map((h) => (
                <li key={h.month}>
                  Spłata całkowita w {h.month} mies:{" "}
                  <span className="font-medium text-foreground">
                    {fmt(h.amount)} PLN
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative -mx-6 min-w-0 border-t">
          <div ref={scrollRef} className="max-h-96 overflow-auto">
            <table className="w-full caption-bottom text-base">
              <TableHeader className="sticky top-0 z-10 bg-background">
                <TableRow>
                  <TableHead className="w-12">Nr</TableHead>
                  <TableHead>Odsetki</TableHead>
                  <TableHead>Kapitał</TableHead>
                  <TableHead>Rata</TableHead>
                  <TableHead className="text-right">Spłata całkowita</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell className="tabular-nums">{row.month}</TableCell>
                    <TableCell className="tabular-nums">
                      {fmt(row.interest)}
                    </TableCell>
                    <TableCell className="tabular-nums">
                      {fmt(row.principal)}
                    </TableCell>
                    <TableCell className="tabular-nums">
                      {fmt(row.payment)}
                    </TableCell>
                    <TableCell className="tabular-nums text-right">
                      {row.earlyRepayment !== null
                        ? fmt(row.earlyRepayment)
                        : "–"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </div>
          <div
            className={cn(
              "pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-linear-to-l from-background to-transparent transition-opacity duration-150",
              canScrollRight ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <p className="text-xs text-muted-foreground">
          Powyższe wyliczenie pełni funkcję poglądową, nie stanowi oferty
          w rozumieniu art. 66, ust. 1 Kodeksu Cywilnego. Preferencyjne warunki
          wcześniejszej spłaty są dedykowane wyłącznie pożyczkobiorcom terminowym,
          nie posiadającym zaległości w spłatach rat.
        </p>

        <Button
          className="w-full"
          onClick={() => {
            onOpenChange(false)
            document.getElementById("wniosek")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Złóż wniosek
        </Button>
      </DialogContent>
    </Dialog>
  )
}
