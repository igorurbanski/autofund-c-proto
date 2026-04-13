"use client"

import { useState } from "react"

const DEFAULTS = [
  { product: "AutoPark", color: "#d4a0c0" },
  { product: "AutoStart", color: "#b8d4a0" },
  { product: "SmartPlan", color: "#a0c4d4" },
]

export function ColorPlayground() {
  const [colors, setColors] = useState(DEFAULTS.map((d) => d.color))

  function updateColor(index: number, value: string) {
    setColors((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  return (
    <div className="rounded-2xl border border-border p-6">
      <div className="mb-6 grid grid-cols-4 gap-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-semibold tracking-tight text-brand-800">
            AutoDrive
          </p>
          <span className="text-xs text-muted-foreground">Plum 800 (fixed)</span>
        </div>

        {DEFAULTS.map((d, i) => (
          <div key={d.product} className="flex flex-col items-center gap-2">
            <p
              className="text-3xl font-semibold tracking-tight"
              style={{ color: colors[i] }}
            >
              {d.product}
            </p>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colors[i]}
                onChange={(e) => updateColor(i, e.target.value)}
                className="h-7 w-7 cursor-pointer rounded-md border border-border bg-transparent p-0"
              />
              <input
                type="text"
                value={colors[i]}
                onChange={(e) => updateColor(i, e.target.value)}
                className="w-20 rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-xs"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="rounded-full bg-brand-800 px-5 py-2 text-sm font-semibold text-white"
          >
            Złóż wniosek
          </button>
        </div>
        {DEFAULTS.map((d, i) => (
          <div key={d.product} className="flex flex-col items-center gap-2">
            <button
              type="button"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: colors[i] }}
            >
              Złóż wniosek
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
