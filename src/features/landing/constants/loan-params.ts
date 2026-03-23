export type ProductLoanConfig = {
  prowizjaRate: number
  flatFeeRate: number
  interestRate: number
  earlyRepayCoeff2: number
}

export const PRODUCT_LOAN_CONFIG: Record<string, ProductLoanConfig> = {
  "auto-drive": {
    prowizjaRate: 30,
    flatFeeRate: 1,
    interestRate: 12,
    earlyRepayCoeff2: 60,
  },
  "auto-start": {
    prowizjaRate: 30,
    flatFeeRate: 1,
    interestRate: 12,
    earlyRepayCoeff2: 60,
  },
  "auto-park": {
    prowizjaRate: 26,
    flatFeeRate: 0.95,
    interestRate: 12,
    earlyRepayCoeff2: 60,
  },
  "smart-plan": {
    prowizjaRate: 25,
    flatFeeRate: 0.95,
    interestRate: 12,
    earlyRepayCoeff2: 60,
  },
}

export const TERM_OPTIONS: Record<string, number[]> = {
  "auto-drive": [6, 12, 18, 24, 36, 48],
  "auto-start": [6, 12, 18, 24, 36, 48],
  "auto-park": [1, 2, 3, 4, 5, 6],
  "smart-plan": [6, 12, 18, 24, 36, 48],
}

export const ALL_TERM_OPTIONS = [
  ...new Set(Object.values(TERM_OPTIONS).flat()),
].sort((a, b) => a - b)

export const EARLY_REPAY_COEFF1: Record<number, number> = {
  18: 30.95,
  24: 31.95,
  36: 33.95,
  48: 34.95,
}
