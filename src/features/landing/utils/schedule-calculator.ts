export type LoanParams = {
  netLoan: number
  months: number
  prowizjaRate: number
  flatFeeRate: number
  interestRate: number
  earlyRepayCoeff1: number
  earlyRepayCoeff2: number
}

export type ScheduleRow = {
  month: number
  interest: number
  principal: number
  payment: number
  balance: number
  earlyRepayment: number | null
}

export type ScheduleSummary = {
  netLoan: number
  totalFinanced: number
  monthlyPayment: number
  months: number
  prowizja: number
  flatFee: number
  totalInterest: number
  totalPayments: number
}

export type ScheduleResult = {
  summary: ScheduleSummary
  rows: ScheduleRow[]
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

export function calculateSchedule(params: LoanParams): ScheduleResult {
  const {
    netLoan,
    months,
    prowizjaRate,
    flatFeeRate,
    interestRate,
    earlyRepayCoeff1,
    earlyRepayCoeff2,
  } = params

  const prowizja = round2(netLoan * prowizjaRate / 100)
  const base = netLoan + prowizja
  const flatFee = round2(base * flatFeeRate / 100 * months)
  const totalFinanced = base + flatFee

  const r = interestRate / 100 / 12
  const pmtRaw = totalFinanced * r / (1 - Math.pow(1 + r, -months))
  const pmt = round2(pmtRaw)

  const rows: ScheduleRow[] = []
  let balance = totalFinanced

  for (let i = 1; i <= months; i++) {
    const interestExact = balance * r
    const interestDisplay = round2(interestExact)

    let principalDisplay: number
    let payment: number

    if (i === months) {
      principalDisplay = round2(balance)
      payment = interestDisplay + principalDisplay
    } else {
      payment = pmt
      principalDisplay = round2(pmt - interestDisplay)
    }

    balance -= (pmtRaw - interestExact)
    if (i === months) balance = 0

    rows.push({
      month: i,
      interest: interestDisplay,
      principal: principalDisplay,
      payment,
      balance,
      earlyRepayment: null,
    })
  }

  // --- Early repayment (Spłata całkowita) ---
  // Periods are 12-month blocks. The last period has no preferential discount.
  // Chain: target at end of each period determines how much early repayment costs.
  //   target_end_period_0 = netLoan (starting value)
  //   target_end_period_1 = prev_target * (1 + coeff/100) - monthsInPeriod * pmt
  // Discount per period = balance_at_period_end - target_at_period_end (constant within period)
  // Spłata_n = balance_n - discount_for_period

  const periodsCount = Math.ceil(months / 12)

  let target = netLoan
  const periodEndTargets: (number | null)[] = []

  for (let p = 0; p < periodsCount; p++) {
    const isLast = p === periodsCount - 1
    if (isLast) {
      periodEndTargets.push(null)
    } else {
      const coeff = p === 0 ? earlyRepayCoeff1 : earlyRepayCoeff2
      const monthsInPeriod = Math.min(12, months - p * 12)
      target = target * (1 + coeff / 100) - monthsInPeriod * pmtRaw
      periodEndTargets.push(target)
    }
  }

  const discounts: number[] = []
  for (let p = 0; p < periodsCount; p++) {
    const endTarget = periodEndTargets[p]
    if (endTarget === null) {
      discounts.push(0)
    } else {
      const lastIdx = Math.min((p + 1) * 12, months) - 1
      discounts.push(rows[lastIdx].balance - endTarget)
    }
  }

  for (let i = 0; i < months; i++) {
    if (i === months - 1) {
      rows[i].earlyRepayment = null
    } else {
      const periodIdx = Math.floor(i / 12)
      rows[i].earlyRepayment = round2(rows[i].balance - discounts[periodIdx])
    }
  }

  const totalInterest = round2(rows.reduce((s, row) => s + row.interest, 0))
  const totalPayments = round2(rows.reduce((s, row) => s + row.payment, 0))

  return {
    summary: {
      netLoan,
      totalFinanced: round2(totalFinanced),
      monthlyPayment: pmt,
      months,
      prowizja,
      flatFee,
      totalInterest,
      totalPayments,
    },
    rows,
  }
}
