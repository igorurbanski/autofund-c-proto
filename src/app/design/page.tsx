import type { Metadata } from "next"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Car, KeyRound, Timer, ArrowLeftRight } from "lucide-react"
import { ColorPlayground } from "./color-playground"

export const metadata: Metadata = {
  title: "Design System — Color Palette",
  robots: { index: false, follow: false },
}

const BRAND_COLORS = [
  { step: "50", bg: "bg-brand-50", tw: "brand-50", cssVar: "--brand-50", L: 0.95 },
  { step: "100", bg: "bg-brand-100", tw: "brand-100", cssVar: "--brand-100", L: 0.86 },
  { step: "200", bg: "bg-brand-200", tw: "brand-200", cssVar: "--brand-200", L: 0.76 },
  { step: "300", bg: "bg-brand-300", tw: "brand-300", cssVar: "--brand-300", L: 0.68 },
  { step: "400", bg: "bg-brand-400", tw: "brand-400", cssVar: "--brand-400", L: 0.59 },
  { step: "500", bg: "bg-brand-500", tw: "brand-500", cssVar: "--brand-500", L: 0.52 },
  { step: "600", bg: "bg-brand-600", tw: "brand-600", cssVar: "--brand-600", L: 0.45 },
  { step: "700", bg: "bg-brand-700", tw: "brand-700", cssVar: "--brand-700", L: 0.38 },
  { step: "800", bg: "bg-brand-800", tw: "brand-800", cssVar: "--brand-800", L: 0.32 },
  { step: "900", bg: "bg-brand-900", tw: "brand-900", cssVar: "--brand-900", L: 0.22 },
  { step: "950", bg: "bg-brand-950", tw: "brand-950", cssVar: "--brand-950", L: 0.14 },
]

const BRAND2_COLORS = [
  { step: "50", bg: "bg-brand2-50", tw: "brand2-50", cssVar: "--brand2-50", L: 0.99 },
  { step: "100", bg: "bg-brand2-100", tw: "brand2-100", cssVar: "--brand2-100", L: 0.97 },
  { step: "200", bg: "bg-brand2-200", tw: "brand2-200", cssVar: "--brand2-200", L: 0.96 },
  { step: "300", bg: "bg-brand2-300", tw: "brand2-300", cssVar: "--brand2-300", L: 0.95 },
  { step: "400", bg: "bg-brand2-400", tw: "brand2-400", cssVar: "--brand2-400", L: 0.93 },
  { step: "500", bg: "bg-brand2-500", tw: "brand2-500", cssVar: "--brand2-500", L: 0.93 },
  { step: "600", bg: "bg-brand2-600", tw: "brand2-600", cssVar: "--brand2-600", L: 0.80 },
  { step: "700", bg: "bg-brand2-700", tw: "brand2-700", cssVar: "--brand2-700", L: 0.66 },
  { step: "800", bg: "bg-brand2-800", tw: "brand2-800", cssVar: "--brand2-800", L: 0.52 },
  { step: "900", bg: "bg-brand2-900", tw: "brand2-900", cssVar: "--brand2-900", L: 0.37 },
  { step: "950", bg: "bg-brand2-950", tw: "brand2-950", cssVar: "--brand2-950", L: 0.20 },
]

const SEMANTIC_COLORS = [
  { token: "background", bg: "bg-background", fg: "text-foreground", cssVar: "--background", L: 1 },
  { token: "foreground", bg: "bg-foreground", fg: "text-background", cssVar: "--foreground", L: 0.141 },
  { token: "primary", bg: "bg-primary", fg: "text-primary-foreground", cssVar: "--primary → --brand-800", L: 0.32 },
  { token: "primary-fg", bg: "bg-primary-foreground", fg: "text-primary", cssVar: "--primary-foreground", L: 1 },
  { token: "secondary", bg: "bg-secondary", fg: "text-secondary-foreground", cssVar: "--secondary", L: 0.967 },
  { token: "secondary-fg", bg: "bg-secondary-foreground", fg: "text-secondary", cssVar: "--secondary-foreground", L: 0.21 },
  { token: "muted", bg: "bg-muted", fg: "text-muted-foreground", cssVar: "--muted", L: 0.967 },
  { token: "muted-fg", bg: "bg-muted-foreground", fg: "text-muted", cssVar: "--muted-foreground", L: 0.552 },
  { token: "accent", bg: "bg-accent", fg: "text-accent-foreground", cssVar: "--accent", L: 0.967 },
  { token: "accent-fg", bg: "bg-accent-foreground", fg: "text-accent", cssVar: "--accent-foreground", L: 0.21 },
  { token: "destructive", bg: "bg-destructive", fg: "text-background", cssVar: "--destructive", L: 0.577 },
  { token: "card", bg: "bg-card", fg: "text-card-foreground", cssVar: "--card", L: 1 },
  { token: "card-fg", bg: "bg-card-foreground", fg: "text-card", cssVar: "--card-foreground", L: 0.141 },
  { token: "popover", bg: "bg-popover", fg: "text-popover-foreground", cssVar: "--popover", L: 1 },
  { token: "popover-fg", bg: "bg-popover-foreground", fg: "text-popover", cssVar: "--popover-foreground", L: 0.141 },
  { token: "border", bg: "bg-border", fg: "text-foreground", cssVar: "--border", L: 0.92 },
  { token: "input", bg: "bg-input", fg: "text-foreground", cssVar: "--input", L: 0.92 },
  { token: "ring", bg: "bg-ring", fg: "text-background", cssVar: "--ring", L: 0.552 },
]

const CHART_COLORS = [
  { n: 1, bg: "bg-chart-1", tw: "chart-1", cssVar: "--chart-1", L: 0.809 },
  { n: 2, bg: "bg-chart-2", tw: "chart-2", cssVar: "--chart-2", L: 0.623 },
  { n: 3, bg: "bg-chart-3", tw: "chart-3", cssVar: "--chart-3", L: 0.546 },
  { n: 4, bg: "bg-chart-4", tw: "chart-4", cssVar: "--chart-4", L: 0.488 },
  { n: 5, bg: "bg-chart-5", tw: "chart-5", cssVar: "--chart-5", L: 0.424 },
]

const COLOR_CANDIDATES = [
  {
    id: 1,
    name: "Rose",
    hue: 15,
    tint: "oklch(0.96 0.02 15)",
    main: "oklch(0.85 0.08 15)",
    dark: "oklch(0.55 0.15 15)",
    tintL: 96, mainL: 85, darkL: 55,
  },
  {
    id: 2,
    name: "Peach",
    hue: 55,
    tint: "oklch(0.96 0.03 55)",
    main: "oklch(0.87 0.08 55)",
    dark: "oklch(0.58 0.13 55)",
    tintL: 96, mainL: 87, darkL: 58,
  },
  {
    id: 3,
    name: "Honey",
    hue: 80,
    tint: "oklch(0.97 0.03 80)",
    main: "oklch(0.89 0.09 80)",
    dark: "oklch(0.60 0.14 80)",
    tintL: 97, mainL: 89, darkL: 60,
  },
  {
    id: 4,
    name: "Pistachio",
    hue: 140,
    tint: "oklch(0.97 0.03 140)",
    main: "oklch(0.90 0.09 140)",
    dark: "oklch(0.56 0.13 140)",
    tintL: 97, mainL: 90, darkL: 56,
  },
  {
    id: 5,
    name: "Mint",
    hue: 170,
    tint: "oklch(0.97 0.02 170)",
    main: "oklch(0.89 0.07 170)",
    dark: "oklch(0.52 0.10 170)",
    tintL: 97, mainL: 89, darkL: 52,
  },
  {
    id: 6,
    name: "Teal",
    hue: 200,
    tint: "oklch(0.96 0.02 200)",
    main: "oklch(0.86 0.06 200)",
    dark: "oklch(0.50 0.09 200)",
    tintL: 96, mainL: 86, darkL: 50,
  },
  {
    id: 7,
    name: "Sky",
    hue: 235,
    tint: "oklch(0.97 0.02 235)",
    main: "oklch(0.88 0.07 235)",
    dark: "oklch(0.54 0.12 235)",
    tintL: 97, mainL: 88, darkL: 54,
  },
  {
    id: 8,
    name: "Lavender",
    hue: 285,
    tint: "oklch(0.96 0.02 285)",
    main: "oklch(0.85 0.07 285)",
    dark: "oklch(0.53 0.13 285)",
    tintL: 96, mainL: 85, darkL: 53,
  },
  {
    id: 9,
    name: "Orchid",
    hue: 330,
    tint: "oklch(0.96 0.02 330)",
    main: "oklch(0.85 0.08 330)",
    dark: "oklch(0.53 0.14 330)",
    tintL: 96, mainL: 85, darkL: 53,
  },
  {
    id: 10,
    name: "Sage",
    hue: 155,
    tint: "oklch(0.97 0.02 155)",
    main: "oklch(0.88 0.05 155)",
    dark: "oklch(0.52 0.08 155)",
    tintL: 97, mainL: 88, darkL: 52,
  },
]

const PLUM_MAIN = "oklch(0.85 0.08 304)"

const COMBOS = [
  {
    id: 1,
    label: "Rose + Pistachio + Sky",
    colors: [
      { product: "AutoPark", name: "Rose", oklch: "oklch(0.85 0.08 15)", L: 85, hue: 15 },
      { product: "AutoStart", name: "Pistachio", oklch: "oklch(0.90 0.09 140)", L: 90, hue: 140 },
      { product: "SmartPlan", name: "Sky", oklch: "oklch(0.88 0.07 235)", L: 88, hue: 235 },
    ],
  },
  {
    id: 2,
    label: "Peach + Mint + Lavender",
    colors: [
      { product: "AutoPark", name: "Peach", oklch: "oklch(0.87 0.08 55)", L: 87, hue: 55 },
      { product: "AutoStart", name: "Mint", oklch: "oklch(0.89 0.07 170)", L: 89, hue: 170 },
      { product: "SmartPlan", name: "Lavender", oklch: "oklch(0.85 0.07 285)", L: 85, hue: 285 },
    ],
  },
  {
    id: 3,
    label: "Honey + Teal + Orchid",
    colors: [
      { product: "AutoPark", name: "Honey", oklch: "oklch(0.89 0.09 80)", L: 89, hue: 80 },
      { product: "AutoStart", name: "Teal", oklch: "oklch(0.86 0.06 200)", L: 86, hue: 200 },
      { product: "SmartPlan", name: "Orchid", oklch: "oklch(0.85 0.08 330)", L: 85, hue: 330 },
    ],
  },
  {
    id: 4,
    label: "Rose + Sage + Sky",
    colors: [
      { product: "AutoPark", name: "Rose", oklch: "oklch(0.85 0.08 15)", L: 85, hue: 15 },
      { product: "AutoStart", name: "Sage", oklch: "oklch(0.88 0.05 155)", L: 88, hue: 155 },
      { product: "SmartPlan", name: "Sky", oklch: "oklch(0.88 0.07 235)", L: 88, hue: 235 },
    ],
  },
  {
    id: 5,
    label: "Peach + Pistachio + Lavender",
    colors: [
      { product: "AutoPark", name: "Peach", oklch: "oklch(0.87 0.08 55)", L: 87, hue: 55 },
      { product: "AutoStart", name: "Pistachio", oklch: "oklch(0.90 0.09 140)", L: 90, hue: 140 },
      { product: "SmartPlan", name: "Lavender", oklch: "oklch(0.85 0.07 285)", L: 85, hue: 285 },
    ],
  },
  {
    id: 6,
    label: "Orchid + Pistachio + Teal",
    colors: [
      { product: "AutoPark", name: "Orchid", oklch: "oklch(0.85 0.08 330)", L: 85, hue: 330 },
      { product: "AutoStart", name: "Pistachio", oklch: "oklch(0.90 0.09 140)", L: 90, hue: 140 },
      { product: "SmartPlan", name: "Teal", oklch: "oklch(0.86 0.06 200)", L: 86, hue: 200 },
    ],
  },
  {
    id: 7,
    label: "Honey + Mint + Rose",
    colors: [
      { product: "AutoPark", name: "Honey", oklch: "oklch(0.89 0.09 80)", L: 89, hue: 80 },
      { product: "AutoStart", name: "Mint", oklch: "oklch(0.89 0.07 170)", L: 89, hue: 170 },
      { product: "SmartPlan", name: "Rose", oklch: "oklch(0.85 0.08 15)", L: 85, hue: 15 },
    ],
  },
  {
    id: 8,
    label: "Sage + Sky + Peach",
    colors: [
      { product: "AutoPark", name: "Sage", oklch: "oklch(0.88 0.05 155)", L: 88, hue: 155 },
      { product: "AutoStart", name: "Sky", oklch: "oklch(0.88 0.07 235)", L: 88, hue: 235 },
      { product: "SmartPlan", name: "Peach", oklch: "oklch(0.87 0.08 55)", L: 87, hue: 55 },
    ],
  },
  {
    id: 9,
    label: "Mint + Honey + Lavender",
    colors: [
      { product: "AutoPark", name: "Mint", oklch: "oklch(0.89 0.07 170)", L: 89, hue: 170 },
      { product: "AutoStart", name: "Honey", oklch: "oklch(0.89 0.09 80)", L: 89, hue: 80 },
      { product: "SmartPlan", name: "Lavender", oklch: "oklch(0.85 0.07 285)", L: 85, hue: 285 },
    ],
  },
  {
    id: 10,
    label: "Teal + Rose + Pistachio",
    colors: [
      { product: "AutoPark", name: "Teal", oklch: "oklch(0.86 0.06 200)", L: 86, hue: 200 },
      { product: "AutoStart", name: "Rose", oklch: "oklch(0.85 0.08 15)", L: 85, hue: 15 },
      { product: "SmartPlan", name: "Pistachio", oklch: "oklch(0.90 0.09 140)", L: 90, hue: 140 },
    ],
  },
]

const PLUM_800 = "oklch(0.32 0.13 304)"

const THEMED_COMBOS = [
  {
    id: 1, name: "Whisper",
    lime: "oklch(0.93 0.06 135)", orange: "oklch(0.92 0.06 65)", purple: "oklch(0.92 0.04 305)",
  },
  {
    id: 2, name: "Cloud",
    lime: "oklch(0.90 0.08 135)", orange: "oklch(0.89 0.08 65)", purple: "oklch(0.90 0.05 305)",
  },
  {
    id: 3, name: "Sorbet",
    lime: "oklch(0.88 0.10 130)", orange: "oklch(0.86 0.10 60)", purple: "oklch(0.87 0.07 306)",
  },
  {
    id: 4, name: "Garden",
    lime: "oklch(0.85 0.12 135)", orange: "oklch(0.84 0.11 65)", purple: "oklch(0.85 0.08 305)",
  },
  {
    id: 5, name: "Citrus",
    lime: "oklch(0.88 0.15 130)", orange: "oklch(0.83 0.14 60)", purple: "oklch(0.83 0.09 306)",
  },
  {
    id: 6, name: "Sunset",
    lime: "oklch(0.82 0.12 140)", orange: "oklch(0.80 0.15 55)", purple: "oklch(0.80 0.10 304)",
  },
  {
    id: 7, name: "Fresh",
    lime: "oklch(0.86 0.16 135)", orange: "oklch(0.82 0.15 65)", purple: "oklch(0.82 0.10 308)",
  },
  {
    id: 8, name: "Meadow",
    lime: "oklch(0.80 0.14 140)", orange: "oklch(0.78 0.13 60)", purple: "oklch(0.78 0.11 305)",
  },
  {
    id: 9, name: "Tropical",
    lime: "oklch(0.84 0.18 130)", orange: "oklch(0.78 0.17 55)", purple: "oklch(0.76 0.12 306)",
  },
  {
    id: 10, name: "Punch",
    lime: "oklch(0.78 0.18 135)", orange: "oklch(0.75 0.17 60)", purple: "oklch(0.74 0.13 304)",
  },
  {
    id: 11, name: "Sage",
    lime: "oklch(0.85 0.06 145)", orange: "oklch(0.84 0.07 70)", purple: "oklch(0.86 0.05 308)",
  },
  {
    id: 12, name: "Linen",
    lime: "oklch(0.91 0.04 140)", orange: "oklch(0.90 0.05 68)", purple: "oklch(0.91 0.03 305)",
  },
  {
    id: 13, name: "Dusty",
    lime: "oklch(0.78 0.08 140)", orange: "oklch(0.76 0.09 65)", purple: "oklch(0.77 0.07 306)",
  },
  {
    id: 14, name: "Earth",
    lime: "oklch(0.72 0.10 140)", orange: "oklch(0.70 0.12 60)", purple: "oklch(0.72 0.09 304)",
  },
  {
    id: 15, name: "Nectar",
    lime: "oklch(0.86 0.12 125)", orange: "oklch(0.82 0.16 50)", purple: "oklch(0.84 0.08 310)",
  },
  {
    id: 16, name: "Spring",
    lime: "oklch(0.88 0.15 140)", orange: "oklch(0.85 0.10 70)", purple: "oklch(0.86 0.07 300)",
  },
  {
    id: 17, name: "Coral",
    lime: "oklch(0.84 0.10 145)", orange: "oklch(0.80 0.15 45)", purple: "oklch(0.82 0.09 308)",
  },
  {
    id: 18, name: "Vitamin",
    lime: "oklch(0.82 0.20 130)", orange: "oklch(0.76 0.18 55)", purple: "oklch(0.78 0.14 306)",
  },
  {
    id: 19, name: "Mineral",
    lime: "oklch(0.75 0.12 145)", orange: "oklch(0.73 0.11 68)", purple: "oklch(0.75 0.08 305)",
  },
  {
    id: 20, name: "Neon Soft",
    lime: "oklch(0.86 0.22 130)", orange: "oklch(0.80 0.20 60)", purple: "oklch(0.76 0.16 304)",
  },
]

const BRAND300 = "oklch(0.68 0.16 307)"

const BRAND300_COMBOS = [
  {
    id: 1, name: "Airy",
    lime: "oklch(0.78 0.12 135)", orange: "oklch(0.76 0.10 60)",
  },
  {
    id: 2, name: "Balanced",
    lime: "oklch(0.72 0.14 130)", orange: "oklch(0.70 0.13 55)",
  },
  {
    id: 3, name: "Warm",
    lime: "oklch(0.74 0.10 140)", orange: "oklch(0.72 0.15 50)",
  },
  {
    id: 4, name: "Cool",
    lime: "oklch(0.70 0.12 145)", orange: "oklch(0.74 0.10 70)",
  },
  {
    id: 5, name: "Vivid",
    lime: "oklch(0.72 0.18 130)", orange: "oklch(0.70 0.17 55)",
  },
  {
    id: 6, name: "Muted",
    lime: "oklch(0.74 0.08 140)", orange: "oklch(0.72 0.07 65)",
  },
  {
    id: 7, name: "Spring",
    lime: "oklch(0.76 0.15 135)", orange: "oklch(0.74 0.12 60)",
  },
  {
    id: 8, name: "Earth",
    lime: "oklch(0.66 0.10 145)", orange: "oklch(0.65 0.12 60)",
  },
  {
    id: 9, name: "Citrus",
    lime: "oklch(0.75 0.17 125)", orange: "oklch(0.72 0.16 50)",
  },
  {
    id: 10, name: "Soft",
    lime: "oklch(0.80 0.10 135)", orange: "oklch(0.78 0.08 65)",
  },
]

const BRAND300_ROUND2 = [
  {
    id: 1, name: "Vivid Warm",
    lime: "oklch(0.73 0.19 128)", orange: "oklch(0.71 0.18 52)",
  },
  {
    id: 2, name: "Citrus Bright",
    lime: "oklch(0.76 0.18 126)", orange: "oklch(0.73 0.17 48)",
  },
  {
    id: 3, name: "Electric Zest",
    lime: "oklch(0.74 0.20 130)", orange: "oklch(0.72 0.19 54)",
  },
  {
    id: 4, name: "Juicy",
    lime: "oklch(0.70 0.17 132)", orange: "oklch(0.68 0.16 56)",
  },
  {
    id: 5, name: "Tangerine Pop",
    lime: "oklch(0.74 0.17 127)", orange: "oklch(0.70 0.19 50)",
  },
  {
    id: 6, name: "Chartreuse Kick",
    lime: "oklch(0.76 0.20 125)", orange: "oklch(0.74 0.16 53)",
  },
  {
    id: 7, name: "Tropical Punch",
    lime: "oklch(0.72 0.19 126)", orange: "oklch(0.69 0.18 48)",
  },
  {
    id: 8, name: "Sun & Lime",
    lime: "oklch(0.75 0.18 133)", orange: "oklch(0.73 0.18 52)",
  },
  {
    id: 9, name: "Neon Grove",
    lime: "oklch(0.73 0.21 128)", orange: "oklch(0.71 0.20 55)",
  },
  {
    id: 10, name: "Amber Leaf",
    lime: "oklch(0.71 0.18 130)", orange: "oklch(0.70 0.17 50)",
  },
]

const BRAND300_ROUND3 = [
  {
    id: 1, name: "Bright Vivid",
    lime: "oklch(0.79 0.19 128)", orange: "oklch(0.77 0.18 52)",
  },
  {
    id: 2, name: "Bright Citrus",
    lime: "oklch(0.82 0.18 126)", orange: "oklch(0.79 0.17 48)",
  },
  {
    id: 3, name: "Luminous Zest",
    lime: "oklch(0.80 0.20 130)", orange: "oklch(0.78 0.19 54)",
  },
  {
    id: 4, name: "Sunny Juice",
    lime: "oklch(0.76 0.17 132)", orange: "oklch(0.74 0.16 56)",
  },
  {
    id: 5, name: "Tangerine Glow",
    lime: "oklch(0.80 0.17 127)", orange: "oklch(0.76 0.19 50)",
  },
  {
    id: 6, name: "Lime Flash",
    lime: "oklch(0.82 0.20 125)", orange: "oklch(0.80 0.16 53)",
  },
  {
    id: 7, name: "Tropic Bright",
    lime: "oklch(0.78 0.19 126)", orange: "oklch(0.75 0.18 48)",
  },
  {
    id: 8, name: "Golden Lime",
    lime: "oklch(0.81 0.18 133)", orange: "oklch(0.79 0.18 52)",
  },
  {
    id: 9, name: "Neon Glow",
    lime: "oklch(0.79 0.21 128)", orange: "oklch(0.77 0.20 55)",
  },
  {
    id: 10, name: "Amber Bright",
    lime: "oklch(0.77 0.18 130)", orange: "oklch(0.76 0.17 50)",
  },
]

const LIME_FIXED = "oklch(0.81 0.19 125)"

const ORANGE_EXPERIMENTS = [
  { id: 1,  name: "Amber Classic",      orange: "oklch(0.76 0.16 52)"  },
  { id: 2,  name: "Warm Amber",         orange: "oklch(0.76 0.16 48)"  },
  { id: 3,  name: "Golden Amber",       orange: "oklch(0.76 0.16 58)"  },
  { id: 4,  name: "Bright Amber",       orange: "oklch(0.80 0.16 52)"  },
  { id: 5,  name: "Deep Amber",         orange: "oklch(0.71 0.16 52)"  },
  { id: 6,  name: "Punchy Orange",      orange: "oklch(0.76 0.20 52)"  },
  { id: 7,  name: "Muted Orange",       orange: "oklch(0.76 0.11 52)"  },
  { id: 8,  name: "Rich Tangerine",     orange: "oklch(0.73 0.19 48)"  },
  { id: 9,  name: "Bright Tangerine",   orange: "oklch(0.80 0.19 48)"  },
  { id: 10, name: "Red-Orange",         orange: "oklch(0.73 0.19 42)"  },
  { id: 11, name: "Yellow-Orange",      orange: "oklch(0.78 0.17 65)"  },
  { id: 12, name: "Saffron",            orange: "oklch(0.78 0.16 72)"  },
  { id: 13, name: "Burnt Sienna",       orange: "oklch(0.68 0.14 45)"  },
  { id: 14, name: "Candied Orange",     orange: "oklch(0.78 0.22 50)"  },
  { id: 15, name: "Papaya",             orange: "oklch(0.81 0.14 58)"  },
  { id: 16, name: "Peach-Orange",       orange: "oklch(0.82 0.12 55)"  },
  { id: 17, name: "Deep Tangerine",     orange: "oklch(0.68 0.20 48)"  },
  { id: 18, name: "Vivid Clementine",   orange: "oklch(0.77 0.21 54)"  },
  { id: 19, name: "Apricot",            orange: "oklch(0.82 0.13 62)"  },
  { id: 20, name: "Tiger",              orange: "oklch(0.72 0.22 46)"  },
]

const PRODUCT_THEMES = [
  {
    name: "AutoPark",
    color: "violet",
    icon: Timer,
    description: "brand palette middle tones",
    swatches: [
      { label: "accent", bg: "bg-brand-500", fg: "text-white", tw: "brand-500", L: 0.52 },
      { label: "ring", bg: "bg-brand-500", fg: "text-white", tw: "brand-500", L: 0.52 },
      { label: "number", bg: "bg-brand-200", fg: "text-brand-900", tw: "brand-200", L: 0.76 },
      { label: "tileBg", bg: "bg-brand-50", fg: "text-brand-900", tw: "brand-50", L: 0.95 },
      { label: "btn", bg: "bg-brand-500", fg: "text-white", tw: "brand-500", L: 0.52 },
      { label: "btn:hover", bg: "bg-brand-600", fg: "text-white", tw: "brand-600", L: 0.45 },
    ],
  },
  {
    name: "AutoStart",
    color: "lime",
    icon: KeyRound,
    description: "brand2 palette middle-dark tones",
    swatches: [
      { label: "accent", bg: "bg-brand2-700", fg: "text-white", tw: "brand2-700", L: 0.66 },
      { label: "ring", bg: "bg-brand2-700", fg: "text-white", tw: "brand2-700", L: 0.66 },
      { label: "number", bg: "bg-brand2-300", fg: "text-brand2-950", tw: "brand2-300", L: 0.95 },
      { label: "tileBg", bg: "bg-brand2-50", fg: "text-brand2-950", tw: "brand2-50", L: 0.99 },
      { label: "btn", bg: "bg-brand2-700", fg: "text-white", tw: "brand2-700", L: 0.66 },
      { label: "btn:hover", bg: "bg-brand2-800", fg: "text-white", tw: "brand2-800", L: 0.52 },
    ],
  },
  {
    name: "AutoDrive",
    color: "plum",
    icon: Car,
    description: "brand palette dark tones",
    swatches: [
      { label: "accent", bg: "bg-brand-800", fg: "text-white", tw: "brand-800", L: 0.32 },
      { label: "ring", bg: "bg-brand-800", fg: "text-white", tw: "brand-800", L: 0.32 },
      { label: "number", bg: "bg-brand-300", fg: "text-brand-950", tw: "brand-300", L: 0.68 },
      { label: "tileBg", bg: "bg-brand-100", fg: "text-brand-900", tw: "brand-100", L: 0.86 },
      { label: "btn", bg: "bg-brand-800", fg: "text-white", tw: "brand-800", L: 0.32 },
      { label: "btn:hover", bg: "bg-brand-900", fg: "text-white", tw: "brand-900", L: 0.22 },
    ],
  },
  {
    name: "SmartPlan",
    color: "olive",
    icon: ArrowLeftRight,
    description: "brand2 palette darkest tones",
    swatches: [
      { label: "accent", bg: "bg-brand2-900", fg: "text-white", tw: "brand2-900", L: 0.37 },
      { label: "ring", bg: "bg-brand2-800", fg: "text-white", tw: "brand2-800", L: 0.52 },
      { label: "number", bg: "bg-brand2-400", fg: "text-brand2-950", tw: "brand2-400", L: 0.93 },
      { label: "tileBg", bg: "bg-brand2-100", fg: "text-brand2-950", tw: "brand2-100", L: 0.97 },
      { label: "btn", bg: "bg-brand2-900", fg: "text-white", tw: "brand2-900", L: 0.37 },
      { label: "btn:hover", bg: "bg-brand2-950", fg: "text-white", tw: "brand2-950", L: 0.20 },
    ],
  },
]

function formatL(value: number) {
  return (value * 100).toFixed(0) + "%"
}

function PaletteSwatch({
  bg,
  tw,
  cssVar,
  L,
}: {
  bg: string
  tw: string
  cssVar: string
  L: number
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`h-16 w-full rounded-xl border border-border/40 ${bg}`} />
      <span className="text-xs font-semibold tabular-nums">{formatL(L)}</span>
      <code className="text-[10px] leading-tight text-muted-foreground">{tw}</code>
      <code className="text-[10px] leading-tight text-muted-foreground/60">{cssVar}</code>
    </div>
  )
}

function SemanticSwatch({
  bg,
  fg,
  label,
  cssVar,
  L,
}: {
  bg: string
  fg: string
  label: string
  cssVar: string
  L: number
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex h-16 w-full items-center justify-center rounded-xl border border-border/40 ${bg} ${fg}`}
      >
        <span className="text-xs font-bold">Aa</span>
      </div>
      <span className="text-xs font-semibold tabular-nums">{formatL(L)}</span>
      <code className="text-[10px] leading-tight text-muted-foreground">{label}</code>
      <code className="max-w-full truncate text-[10px] leading-tight text-muted-foreground/60">
        {cssVar}
      </code>
    </div>
  )
}

function ProductSwatch({
  bg,
  fg,
  label,
  tw,
  L,
}: {
  bg: string
  fg: string
  label: string
  tw: string
  L: number
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex h-16 w-full items-center justify-center rounded-xl border border-border/40 ${bg} ${fg}`}
      >
        <span className="text-xs font-bold">Aa</span>
      </div>
      <span className="text-xs font-semibold tabular-nums">{formatL(L)}</span>
      <code className="text-[10px] leading-tight text-muted-foreground">{label}</code>
      <code className="text-[10px] leading-tight text-muted-foreground/60">{tw}</code>
    </div>
  )
}

export default function DesignPage() {
  return (
    <main className="pb-section">
      <Section>
        <SectionHeading
          title="Color Palette"
          subtitle="Complete visual reference for every color token in the design system"
        />
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Brand <span className="text-brand-500">(purple)</span>
        </h2>
        <div className="grid grid-cols-11 gap-3">
          {BRAND_COLORS.map((c) => (
            <PaletteSwatch key={c.step} bg={c.bg} tw={c.tw} cssVar={c.cssVar} L={c.L} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Brand2 <span className="text-brand2-700">(lime / green)</span>
        </h2>
        <div className="grid grid-cols-11 gap-3">
          {BRAND2_COLORS.map((c) => (
            <PaletteSwatch key={c.step} bg={c.bg} tw={c.tw} cssVar={c.cssVar} L={c.L} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Semantic Tokens
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {SEMANTIC_COLORS.map((c) => (
            <SemanticSwatch
              key={c.token}
              bg={c.bg}
              fg={c.fg}
              label={c.token}
              cssVar={c.cssVar}
              L={c.L}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Chart Colors
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {CHART_COLORS.map((c) => (
            <PaletteSwatch key={c.n} bg={c.bg} tw={c.tw} cssVar={c.cssVar} L={c.L} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Current Product Color Themes
        </h2>
        <div className="grid gap-10">
          {PRODUCT_THEMES.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="rounded-2xl border border-border p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${product.swatches[0].bg}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                        {product.color}
                      </code>
                      {" — "}
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                  {product.swatches.map((swatch) => (
                    <ProductSwatch
                      key={swatch.label}
                      bg={swatch.bg}
                      fg={swatch.fg}
                      label={swatch.label}
                      tw={swatch.tw}
                      L={swatch.L}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Product Color Exploration"
          subtitle={
            <>
              10 pastel color candidates for AutoPark, AutoStart, and SmartPlan.
              <br />
              AutoDrive keeps <span className="text-brand-800">plum</span>.
              Each row shows tile background → main pastel → button/accent dark.
            </>
          }
        />
      </Section>

      <Section className="pt-0">
        <div className="mb-8 rounded-2xl border border-brand-200 bg-brand-50 p-5">
          <p className="text-sm font-medium text-brand-900">
            Reference — AutoDrive (plum, kept as-is):
            <span className="ml-2 font-mono text-xs text-brand-700">
              oklch(0.32 0.13 304)
            </span>
          </p>
          <div className="mt-3 flex gap-3">
            <div className="h-10 w-20 rounded-lg bg-brand-100" />
            <div className="h-10 w-20 rounded-lg bg-brand-300" />
            <div className="h-10 w-20 rounded-lg bg-brand-800" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {COLOR_CANDIDATES.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-border p-5"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-lg font-semibold">
                  {c.id}. {c.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  hue {c.hue}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="h-20 w-full rounded-xl border border-border/40"
                    style={{ backgroundColor: c.tint }}
                  />
                  <span className="text-xs font-semibold tabular-nums">L {c.tintL}%</span>
                  <span className="text-[10px] text-muted-foreground">tile bg</span>
                  <code className="text-[10px] leading-tight text-muted-foreground/70">
                    {c.tint}
                  </code>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="h-20 w-full rounded-xl border border-border/40"
                    style={{ backgroundColor: c.main }}
                  />
                  <span className="text-xs font-semibold tabular-nums">L {c.mainL}%</span>
                  <span className="text-[10px] text-muted-foreground">main pastel</span>
                  <code className="text-[10px] leading-tight text-muted-foreground/70">
                    {c.main}
                  </code>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="flex h-20 w-full items-center justify-center rounded-xl"
                    style={{ backgroundColor: c.dark, color: "white" }}
                  >
                    <span className="text-sm font-bold">Aa</span>
                  </div>
                  <span className="text-xs font-semibold tabular-nums">L {c.darkL}%</span>
                  <span className="text-[10px] text-muted-foreground">btn / accent</span>
                  <code className="text-[10px] leading-tight text-muted-foreground/70">
                    {c.dark}
                  </code>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-9 items-center rounded-full px-5 text-xs font-semibold text-white"
                  style={{ backgroundColor: c.dark }}
                >
                  Złóż wniosek
                </div>
                <div
                  className="flex h-9 items-center rounded-full border px-5 text-xs font-semibold"
                  style={{ borderColor: c.dark, color: c.dark }}
                >
                  Dowiedz się więcej
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="4-Color Combinations"
          subtitle="10 suggested product palettes — plum (AutoDrive) is fixed, the other three vary"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border p-6"
            >
              <p className="mb-5 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.label}
              </p>

              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="h-24 w-full rounded-xl"
                    style={{ backgroundColor: PLUM_MAIN }}
                  />
                  <span className="text-sm font-semibold">Plum</span>
                  <span className="text-xs text-muted-foreground">AutoDrive</span>
                  <code className="text-[10px] text-muted-foreground/70">
                    {PLUM_MAIN}
                  </code>
                </div>

                {combo.colors.map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-2">
                    <div
                      className="h-24 w-full rounded-xl"
                      style={{ backgroundColor: c.oklch }}
                    />
                    <span className="text-sm font-semibold">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.product}</span>
                    <code className="text-[10px] text-muted-foreground/70">
                      {c.oklch}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="4-Color Combinations — as Text"
          subtitle="Same 10 combos applied to heading text. Plum uses the dark brand-800 weight."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border p-6"
            >
              <p className="mb-5 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.label}
              </p>

              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p
                    className="text-3xl font-semibold tracking-tight text-brand-800"
                  >
                    AutoDrive
                  </p>
                  <span className="text-xs text-muted-foreground">Plum 800</span>
                </div>

                {combo.colors.map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-2">
                    <p
                      className="text-3xl font-semibold tracking-tight"
                      style={{ color: c.oklch }}
                    >
                      {c.product}
                    </p>
                    <span className="text-xs text-muted-foreground">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          title="Plum + Lime + Orange + Light Purple — 20 Variations"
          subtitle="Each row varies tone and saturation. Plum (AutoDrive) is fixed at brand-800."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {THEMED_COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border p-6"
            >
              <p className="mb-5 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.name}
              </p>

              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="h-20 w-full rounded-xl"
                    style={{ backgroundColor: PLUM_800 }}
                  />
                  <p className="text-2xl font-semibold tracking-tight text-brand-800">
                    AutoDrive
                  </p>
                  <span className="text-xs text-muted-foreground">Plum 800</span>
                  <code className="text-[10px] text-muted-foreground/70">{PLUM_800}</code>
                </div>

                {([
                  { product: "AutoStart", label: "Lime", oklch: combo.lime },
                  { product: "AutoPark", label: "Orange", oklch: combo.orange },
                  { product: "SmartPlan", label: "Lt. Purple", oklch: combo.purple },
                ] as const).map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-2">
                    <div
                      className="h-20 w-full rounded-xl"
                      style={{ backgroundColor: c.oklch }}
                    />
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: c.oklch }}
                    >
                      {c.product}
                    </p>
                    <span className="text-xs text-muted-foreground">{c.label}</span>
                    <code className="text-[10px] text-muted-foreground/70">{c.oklch}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={<>Plum + <span className="text-brand-300">Brand-300</span> + Lime + Orange</>}
          subtitle="Brand-300 is fixed alongside plum. 10 lime & orange companions at matching weight."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {BRAND300_COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border px-6 py-5"
            >
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.name}
              </p>

              <div className="grid grid-cols-4 gap-5">
                {([
                  { product: "AutoDrive", label: "Plum 800", color: PLUM_800 },
                  { product: "AutoStart", label: "Lime", color: combo.lime },
                  { product: "SmartPlan", label: "Orange", color: combo.orange },
                  { product: "AutoPark", label: "Brand-300", color: BRAND300 },
                ] as const).map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-3">
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: c.color }}
                    >
                      {c.product}
                    </p>
                    <button
                      type="button"
                      className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      Złóż wniosek
                    </button>
                    <span className="text-xs text-muted-foreground">{c.label}</span>
                    <code className="text-[10px] text-muted-foreground/70">{c.color}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={<>Vivid & Citrus — Round 2</>}
          subtitle="10 more high-chroma lime + orange combos inspired by #5 Vivid and #9 Citrus"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {BRAND300_ROUND2.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border px-6 py-5"
            >
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.name}
              </p>

              <div className="grid grid-cols-4 gap-5">
                {([
                  { product: "AutoDrive", label: "Plum 800", color: PLUM_800 },
                  { product: "AutoStart", label: "Lime", color: combo.lime },
                  { product: "SmartPlan", label: "Orange", color: combo.orange },
                  { product: "AutoPark", label: "Brand-300", color: BRAND300 },
                ] as const).map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-3">
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: c.color }}
                    >
                      {c.product}
                    </p>
                    <button
                      type="button"
                      className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      Złóż wniosek
                    </button>
                    <span className="text-xs text-muted-foreground">{c.label}</span>
                    <code className="text-[10px] text-muted-foreground/70">{c.color}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={<>Vivid & Citrus — Round 3 (Brighter)</>}
          subtitle="Same high-chroma character, lightness bumped +0.06 across the board"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {BRAND300_ROUND3.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border px-6 py-5"
            >
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.name}
              </p>

              <div className="grid grid-cols-4 gap-5">
                {([
                  { product: "AutoDrive", label: "Plum 800", color: PLUM_800 },
                  { product: "AutoStart", label: "Lime", color: combo.lime },
                  { product: "SmartPlan", label: "Orange", color: combo.orange },
                  { product: "AutoPark", label: "Brand-300", color: BRAND300 },
                ] as const).map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-3">
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: c.color }}
                    >
                      {c.product}
                    </p>
                    <button
                      type="button"
                      className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      Złóż wniosek
                    </button>
                    <span className="text-xs text-muted-foreground">{c.label}</span>
                    <code className="text-[10px] text-muted-foreground/70">{c.color}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Orange Experiments"
          subtitle={<>Green fixed at <code className="rounded bg-muted px-1.5 py-0.5 text-xs">oklch(0.81 0.19 125)</code> — 20 orange variations in lightness, chroma & hue</>}
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6">
          {ORANGE_EXPERIMENTS.map((combo) => (
            <div
              key={combo.id}
              className="rounded-2xl border border-border px-6 py-5"
            >
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                <span className="mr-2 text-base font-semibold text-foreground">
                  #{combo.id}
                </span>
                {combo.name}
                <code className="ml-3 text-[11px] text-muted-foreground/70">{combo.orange}</code>
              </p>

              <div className="grid grid-cols-4 gap-5">
                {([
                  { product: "AutoDrive", label: "Plum 800",  color: PLUM_800   },
                  { product: "AutoStart", label: "Lime",      color: LIME_FIXED  },
                  { product: "SmartPlan", label: "Orange",    color: combo.orange },
                  { product: "AutoPark",  label: "Brand-300", color: BRAND300    },
                ] as const).map((c) => (
                  <div key={c.product} className="flex flex-col items-center gap-3">
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: c.color }}
                    >
                      {c.product}
                    </p>
                    <button
                      type="button"
                      className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      Złóż wniosek
                    </button>
                    <span className="text-xs text-muted-foreground">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Final Product Palette"
          subtitle="The four chosen colors — one per product"
        />
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {([
            { product: "AutoDrive", tagline: "Pożyczka pod zabezpieczenie", color: "oklch(0.32 0.13 304)", name: "Plum",     textColor: "white" },
            { product: "AutoStart", tagline: "Pożyczka na zakup",           color: "oklch(0.81 0.19 125)", name: "Lime",     textColor: "white" },
            { product: "AutoPark",  tagline: "Zostaw auto u nas",           color: "oklch(0.80 0.18 45)",  name: "Orange",   textColor: "white" },
            { product: "SmartPlan", tagline: "Sprzedaj — jeździj dalej",    color: "oklch(0.68 0.16 307)", name: "Purple",   textColor: "white" },
          ] as const).map((c) => (
            <div
              key={c.product}
              className="flex flex-col overflow-hidden rounded-2xl border border-border"
            >
              <div
                className="flex h-36 items-end p-5"
                style={{ backgroundColor: c.color }}
              >
                <span className="text-3xl font-semibold tracking-tight text-white">
                  {c.product}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <p className="text-base font-semibold">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.tagline}</p>
                </div>
                <code className="text-xs text-muted-foreground">{c.color}</code>
                <div className="mt-auto flex flex-col gap-2">
                  <button
                    type="button"
                    className="w-full rounded-full py-2.5 text-sm font-semibold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    Złóż wniosek
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-full border py-2.5 text-sm font-semibold"
                    style={{ borderColor: c.color, color: c.color }}
                  >
                    Dowiedz się więcej
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border p-6">
          <p className="mb-5 text-sm font-medium text-muted-foreground">As text headings</p>
          <div className="grid grid-cols-4 gap-5">
            {([
              { product: "AutoDrive", color: "oklch(0.32 0.13 304)", name: "Plum" },
              { product: "AutoStart", color: "oklch(0.81 0.19 125)", name: "Lime" },
              { product: "AutoPark",  color: "oklch(0.80 0.18 45)",  name: "Orange" },
              { product: "SmartPlan", color: "oklch(0.68 0.16 307)", name: "Purple" },
            ] as const).map((c) => (
              <div key={c.product} className="flex flex-col items-center gap-3">
                <p
                  className="text-2xl font-semibold tracking-tight"
                  style={{ color: c.color }}
                >
                  {c.product}
                </p>
                <button
                  type="button"
                  className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: c.color }}
                >
                  Złóż wniosek
                </button>
                <span className="text-xs text-muted-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Color Playground"
          subtitle="Pick any color for the three products — AutoDrive stays plum 800"
        />
      </Section>

      <Section className="pt-0">
        <ColorPlayground />
      </Section>
    </main>
  )
}
