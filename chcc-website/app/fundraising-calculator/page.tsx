'use client'

import { useState, useMemo } from 'react'

// ── Data ─────────────────────────────────────────────────────────────

const TIERS_A = [
  { name: 'Seed',      amount: 501,    impact: 'Curriculum materials — 1 month' },
  { name: 'Aqua',      amount: 1001,   impact: 'Gaushala feed & water — 1 month' },
  { name: 'Sunlight',  amount: 2501,   impact: 'Yoga instructor salary — 1 month' },
  { name: 'Sprout',    amount: 5001,   impact: 'Full dance studio equipment' },
  { name: 'Grow',      amount: 10001,  impact: 'Aum School scholarships — 5 students' },
  { name: 'Nurture',   amount: 25001,  impact: 'Ayurvedic treatment room fit-out' },
  { name: 'Cultivate', amount: 50001,  impact: 'Mallakhamba or Kalari arena — wing named' },
  { name: 'Endure',    amount: 100001, impact: 'Major facility space — named in perpetuity' },
]

const TIERS_B = [
  { name: 'Pratibaddha', sanskrit: 'प्रतिबद्ध', monthly: 21,  term: 3, impact: 'Funds one Aum School scholarship' },
  { name: 'Samarpan',    sanskrit: 'समर्पण',    monthly: 51,  term: 5, impact: 'Builds one yoga studio' },
  { name: 'Drishti',     sanskrit: 'दृष्टि',     monthly: 108, term: 7, impact: 'Funds full Gaushala sanctuary buildout' },
]

const LOAN_TYPES = [
  { key: 'nishkama', name: 'Nishkama',    sanskrit: 'निष्काम',   label: 'Interest-Free Loan',        color: '#4A7C59', rate: 0,    forgiven: false },
  { key: 'moksha',   name: 'Moksha Daan', sanskrit: 'मोक्ष दान', label: '100% Forgiven (Tax Spread)', color: '#8B5A2B', rate: 0,    forgiven: true  },
  { key: 'vriddhi',  name: 'Vriddhi',     sanskrit: 'वृद्धि',     label: '4% Deferred Interest',       color: '#F47C36', rate: 0.04, forgiven: false },
]

const AMOUNTS = [50000, 100000, 150000]
const TERMS   = [3, 5, 7]
const YEARS   = [1, 2, 3, 5, 7]
const GOAL    = 2_000_000

// ── Helpers ──────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n === 0) return '$0'
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1_000)     return '$' + Math.round(n / 1_000) + 'K'
  return '$' + Math.round(n).toLocaleString()
}

function dollar(n: number) {
  return n === 0 ? '$0' : '$' + Math.round(Math.abs(n)).toLocaleString()
}

type Tab = 'A' | 'B' | 'C' | 'summary'

// ── Sub-components (defined OUTSIDE main component) ──────────────────

function NumInput({ value, onUpdate }: { value: number; onUpdate: (n: number) => void }) {
  return (
    <input
      type="number"
      min={0}
      value={value || ''}
      placeholder="0"
      onChange={e => {
        const v = parseInt(e.target.value, 10)
        onUpdate(isNaN(v) || v < 0 ? 0 : v)
      }}
      className="w-16 text-center border border-gray-300 rounded px-1 py-1.5 text-sm font-semibold
                 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 bg-white"
    />
  )
}

function Card({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</div>
      <div className={`font-heading text-2xl font-bold ${color ?? 'text-charcoal'}`}>{value}</div>
      {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────

export default function FundraisingCalculator() {

  const [tab, setTab] = useState<Tab>('A')

  // state: [tier index] → donor count
  const [aDonors, setADonors] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0])
  const [bDonors, setBDonors] = useState<number[]>([0, 0, 0])

  // state: [loanType 0-2][amount 0-2][term 0-2]
  const [cDonors, setCDonors] = useState<number[][][]>([
    [[0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0],[0,0,0],[0,0,0]],
  ])

  // ── Updaters ─────────────────────────────────────────────────────
  const updA = (i: number, v: number) => {
    const next = [...aDonors]
    next[i] = v
    setADonors(next)
  }
  const updB = (i: number, v: number) => {
    const next = [...bDonors]
    next[i] = v
    setBDonors(next)
  }
  const updC = (ti: number, ai: number, trm: number, v: number) => {
    const next = cDonors.map(t => t.map(a => [...a]))
    next[ti][ai][trm] = v
    setCDonors(next)
  }

  // ── Track A totals ───────────────────────────────────────────────
  const aTotal = useMemo(
    () => TIERS_A.reduce((sum, tier, i) => sum + aDonors[i] * tier.amount, 0),
    [aDonors]
  )

  // ── Track B totals ───────────────────────────────────────────────
  const bMonthly = useMemo(
    () => TIERS_B.reduce((sum, t, i) => sum + bDonors[i] * t.monthly, 0),
    [bDonors]
  )
  const bFullCommitment = useMemo(
    () => TIERS_B.reduce((sum, t, i) => sum + bDonors[i] * t.monthly * t.term * 12, 0),
    [bDonors]
  )
  const bCumByYear = useMemo(
    () => YEARS.map(y => TIERS_B.reduce((sum, t, i) => sum + bDonors[i] * t.monthly * Math.min(y, t.term) * 12, 0)),
    [bDonors]
  )

  // ── Track C totals ───────────────────────────────────────────────
  const cCapital = useMemo(() => {
    let total = 0
    for (let ti = 0; ti < 3; ti++)
      for (let ai = 0; ai < 3; ai++)
        for (let trm = 0; trm < 3; trm++)
          total += cDonors[ti][ai][trm] * AMOUNTS[ai]
    return total
  }, [cDonors])

  const cDonorCount = useMemo(() => {
    let total = 0
    for (let ti = 0; ti < 3; ti++)
      for (let ai = 0; ai < 3; ai++)
        for (let trm = 0; trm < 3; trm++)
          total += cDonors[ti][ai][trm]
    return total
  }, [cDonors])

  const cRepayByYear = useMemo(
    () => YEARS.map(y => {
      let r = 0
      for (let ti = 0; ti < 3; ti++) {
        if (LOAN_TYPES[ti].forgiven) continue
        for (let ai = 0; ai < 3; ai++)
          for (let trm = 0; trm < 3; trm++)
            if (TERMS[trm] <= y)
              r += cDonors[ti][ai][trm] * AMOUNTS[ai] * (1 + LOAN_TYPES[ti].rate * TERMS[trm])
      }
      return r
    }),
    [cDonors]
  )

  const mokshaTotalForgiven = useMemo(() =>
    AMOUNTS.reduce((s, amt, ai) =>
      s + TERMS.reduce((s2, _, trm) => s2 + cDonors[1][ai][trm] * amt, 0), 0),
    [cDonors]
  )

  // ── Grand totals ─────────────────────────────────────────────────
  const grandByYear = useMemo(
    () => YEARS.map((_, i) => aTotal + bCumByYear[i] + cCapital),
    [aTotal, bCumByYear, cCapital]
  )
  const netByYear = useMemo(
    () => grandByYear.map((g, i) => g - cRepayByYear[i]),
    [grandByYear, cRepayByYear]
  )

  const totalProjected = grandByYear.reduce((m, v) => Math.max(m, v), 0)
  const goalPct = totalProjected > 0 ? Math.min((totalProjected / GOAL) * 100, 150) : 0
  const goalBar = Math.min(goalPct, 100)

  // ── Tab label helpers ────────────────────────────────────────────
  const tabBadge = (t: Tab) => {
    if (t === 'A' && aTotal > 0) return fmt(aTotal)
    if (t === 'B' && bFullCommitment > 0) return fmt(bFullCommitment)
    if (t === 'C' && cCapital > 0) return fmt(cCapital)
    return null
  }

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">

      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">
              Internal Planning Tool · /fundraising-calculator
            </p>
            <h1 className="font-heading text-2xl font-bold text-gray-900">
              CHCC Fundraising Scenario Calculator
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">
              Enter donor counts in each track — totals update live.
            </p>
          </div>
          <div className="flex gap-6 pt-1">
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide">Total Capital</div>
              <div className="font-heading text-2xl font-bold text-orange-500">{dollar(totalProjected)}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase tracking-wide">vs $2M Goal</div>
              <div className={`font-heading text-2xl font-bold ${goalPct >= 100 ? 'text-green-600' : goalPct >= 60 ? 'text-orange-500' : 'text-red-500'}`}>
                {goalPct.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex px-2">
          {(['A', 'B', 'C', 'summary'] as Tab[]).map(t => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-6 py-3.5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                tab === t
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              {t === 'summary' ? '📊 Summary' : `Track ${t}`}
              {tabBadge(t) && (
                <span className="ml-1.5 text-xs text-green-600 font-bold">({tabBadge(t)})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* ══════════════════════════════ TRACK A ══════════════════════════════ */}
        {tab === 'A' && (
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              Track A — Direct Donations
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              One-time gifts. Enter estimated donor count at each tier.
            </p>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-white text-xs uppercase tracking-wide">
                    <th className="text-left px-5 py-3">Tier</th>
                    <th className="text-right px-5 py-3">Min Gift</th>
                    <th className="text-left px-5 py-3">What It Funds</th>
                    <th className="text-center px-5 py-3"># Donors</th>
                    <th className="text-right px-5 py-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS_A.map((tier, i) => {
                    const sub = aDonors[i] * tier.amount
                    const big = i >= 5
                    return (
                      <tr key={tier.name} className={`border-b border-gray-100 ${big ? 'bg-orange-50' : 'hover:bg-gray-50'}`}>
                        <td className="px-5 py-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${big ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
                            {tier.name}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right font-heading font-bold text-orange-500">{dollar(tier.amount)}</td>
                        <td className="px-5 py-3 text-sm text-gray-500">{tier.impact}</td>
                        <td className="px-5 py-3 text-center">
                          <NumInput value={aDonors[i]} onUpdate={v => updA(i, v)} />
                        </td>
                        <td className="px-5 py-3 text-right font-heading font-bold text-gray-900">
                          {sub > 0 ? dollar(sub) : <span className="text-gray-300">—</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-orange-500 text-white">
                    <td colSpan={3} className="px-5 py-4 font-bold uppercase tracking-wide text-sm">Track A Total</td>
                    <td className="px-5 py-4 text-center font-bold">{aDonors.reduce((s, d) => s + d, 0)} donors</td>
                    <td className="px-5 py-4 text-right font-heading text-xl font-bold">{dollar(aTotal)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card label="Total Donors" value={String(aDonors.reduce((s, d) => s + d, 0))} />
              <Card label="Capital Raised (Track A)" value={dollar(aTotal)} color="text-orange-500" />
              <Card
                label="% of $2M Goal"
                value={`${(aTotal / GOAL * 100).toFixed(1)}%`}
                color={aTotal / GOAL >= 0.5 ? 'text-green-600' : 'text-orange-500'}
                sub={aTotal > 0 ? `Still need ${dollar(Math.max(0, GOAL - aTotal))}` : undefined}
              />
            </div>
          </div>
        )}

        {/* ══════════════════════════════ TRACK B ══════════════════════════════ */}
        {tab === 'B' && (
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              Track B — Monthly Pledge Program
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Recurring monthly pledges. Cumulative totals respect each tier's term length.
            </p>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-700 text-white text-xs uppercase tracking-wide">
                    <th className="text-left px-5 py-3">Pledge Tier</th>
                    <th className="text-center px-4 py-3">Monthly</th>
                    <th className="text-center px-4 py-3">Term</th>
                    <th className="text-center px-4 py-3">Per Donor</th>
                    <th className="text-center px-4 py-3"># Donors</th>
                    <th className="text-right px-4 py-3">Yr 1</th>
                    <th className="text-right px-4 py-3">Yr 3</th>
                    <th className="text-right px-4 py-3">Yr 5</th>
                    <th className="text-right px-4 py-3">Yr 7</th>
                    <th className="text-right px-5 py-3">Full Commitment</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS_B.map((tier, i) => {
                    const d = bDonors[i]
                    // year indices for [1, 3, 5, 7] in YEARS=[1,2,3,5,7] → indices 0,2,3,4
                    const yrCols = [0, 2, 3, 4].map(yi =>
                      d * tier.monthly * Math.min(YEARS[yi], tier.term) * 12
                    )
                    return (
                      <tr key={tier.name} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-5 py-3">
                          <div className="font-semibold text-gray-900">{tier.name}</div>
                          <div className="text-xs text-gray-400 font-devanagari">{tier.sanskrit}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{tier.impact}</div>
                        </td>
                        <td className="px-4 py-3 text-center font-heading font-bold text-green-600">${tier.monthly}/mo</td>
                        <td className="px-4 py-3 text-center text-gray-500">{tier.term} yrs</td>
                        <td className="px-4 py-3 text-center text-gray-500">{dollar(tier.monthly * tier.term * 12)}</td>
                        <td className="px-4 py-3 text-center">
                          <NumInput value={bDonors[i]} onUpdate={v => updB(i, v)} />
                        </td>
                        {yrCols.map((val, ci) => (
                          <td key={ci} className="px-4 py-3 text-right font-heading font-semibold text-gray-800 text-sm">
                            {val > 0 ? dollar(val) : <span className="text-gray-300">—</span>}
                          </td>
                        ))}
                        <td className="px-5 py-3 text-right font-heading font-bold text-green-600">
                          {d > 0 ? dollar(d * tier.monthly * tier.term * 12) : <span className="text-gray-300">—</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-green-700 text-white">
                    <td colSpan={4} className="px-5 py-4 font-bold uppercase tracking-wide text-sm">Track B Cumulative</td>
                    <td className="px-4 py-4 text-center font-bold">{bDonors.reduce((s, d) => s + d, 0)} donors</td>
                    {[0, 2, 3, 4].map(yi => (
                      <td key={yi} className="px-4 py-4 text-right font-heading font-bold">
                        {bCumByYear[yi] > 0 ? dollar(bCumByYear[yi]) : '—'}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right font-heading text-lg font-bold">{dollar(bFullCommitment)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Card label="Monthly Revenue" value={`${dollar(bMonthly)}/mo`} color="text-green-600" />
              <Card label="Annual Revenue (Yr 1)" value={dollar(bCumByYear[0])} color="text-green-600" />
              <Card label="Cumulative by Yr 5" value={dollar(bCumByYear[3])} />
              <Card label="Full Commitment" value={dollar(bFullCommitment)} color="text-orange-500" />
            </div>
          </div>
        )}

        {/* ══════════════════════════════ TRACK C ══════════════════════════════ */}
        {tab === 'C' && (
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              Track C — Community Loan Program
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Major donor loans — $50K, $100K, or $150K — across 3 loan structures and 3-year / 5-year / 7-year terms.
            </p>

            {LOAN_TYPES.map((lt, ti) => {
              const typeCapital = AMOUNTS.reduce((s, amt, ai) =>
                s + TERMS.reduce((s2, _, trm) => s2 + cDonors[ti][ai][trm] * amt, 0), 0)

              return (
                <div
                  key={lt.key}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6"
                  style={{ borderTop: `4px solid ${lt.color}` }}
                >
                  {/* sub-header */}
                  <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-lg font-bold text-gray-900">{lt.name}</span>
                      <span className="font-devanagari text-sm text-gray-400">{lt.sanskrit}</span>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full text-white font-semibold"
                        style={{ background: lt.color }}
                      >
                        {lt.label}
                      </span>
                    </div>
                    {typeCapital > 0 && (
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Capital from this structure</div>
                        <div className="font-heading text-lg font-bold" style={{ color: lt.color }}>{dollar(typeCapital)}</div>
                      </div>
                    )}
                  </div>

                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-200">
                        <th className="text-left px-5 py-2">Amount</th>
                        {TERMS.map(term => (
                          <th key={term} colSpan={2} className="text-center px-3 py-2 border-l border-gray-200 font-semibold">
                            {term}-Year Term
                          </th>
                        ))}
                        <th className="text-right px-5 py-2">Row Capital</th>
                      </tr>
                      <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-200">
                        <th className="px-5 py-1.5"></th>
                        {TERMS.flatMap(term => [
                          <th key={`${term}-d`} className="text-center px-3 py-1.5 border-l border-gray-200"># Donors</th>,
                          <th key={`${term}-r`} className="text-center px-3 py-1.5">
                            {lt.forgiven ? 'Deduct/yr' : `Repay Yr ${term}`}
                          </th>,
                        ])}
                        <th className="px-5 py-1.5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {AMOUNTS.map((amt, ai) => {
                        const rowCap = TERMS.reduce((s, _, trm) => s + cDonors[ti][ai][trm] * amt, 0)
                        return (
                          <tr key={amt} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-5 py-3 font-heading font-bold text-gray-900">{dollar(amt)}</td>
                            {TERMS.flatMap((term, trm) => {
                              const d = cDonors[ti][ai][trm]
                              const repayEach  = lt.forgiven ? 0 : amt * (1 + lt.rate * term)
                              const deductEach = lt.forgiven ? amt / term : 0
                              return [
                                <td key={`d-${trm}`} className="text-center px-3 py-3 border-l border-gray-100">
                                  <NumInput value={d} onUpdate={v => updC(ti, ai, trm, v)} />
                                </td>,
                                <td key={`r-${trm}`} className="text-center px-2 py-3 text-xs font-semibold" style={{ color: lt.color }}>
                                  {d > 0
                                    ? lt.forgiven
                                      ? `${dollar(deductEach)}/yr`
                                      : dollar(d * repayEach)
                                    : <span className="text-gray-300">—</span>
                                  }
                                </td>,
                              ]
                            })}
                            <td className="px-5 py-3 text-right font-heading font-bold text-gray-900">
                              {rowCap > 0 ? dollar(rowCap) : <span className="text-gray-300">—</span>}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr style={{ background: lt.color + '18' }}>
                        <td colSpan={7} className="px-5 py-3 text-sm font-bold" style={{ color: lt.color }}>
                          {lt.name} Subtotal
                          {lt.forgiven && ' — CHCC repays $0 · 100% becomes charitable tax deduction'}
                          {!lt.forgiven && lt.rate === 0 && ' — Full principal returned to donors at term end'}
                          {lt.rate > 0 && ' — Principal + 4% simple interest returned at term end'}
                        </td>
                        <td className="px-5 py-3 text-right font-heading text-lg font-bold" style={{ color: lt.color }}>
                          {dollar(typeCapital)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )
            })}

            <div className="grid grid-cols-3 gap-4">
              <Card
                label="Total Capital (Track C)"
                value={dollar(cCapital)}
                color="text-orange-500"
                sub={`${cDonorCount} loan donors`}
              />
              <Card
                label="Max Repayment Obligation"
                value={dollar(cRepayByYear.reduce((m, v) => Math.max(m, v), 0))}
                color="text-red-500"
                sub="Nishkama + Vriddhi at longest term end"
              />
              <Card
                label="Moksha Daan — Community Gift"
                value={dollar(mokshaTotalForgiven)}
                color="text-amber-700"
                sub="100% forgiven — CHCC repays $0"
              />
            </div>
          </div>
        )}

        {/* ══════════════════════════════ SUMMARY ══════════════════════════════ */}
        {tab === 'summary' && (
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              Campaign Summary — All Tracks Combined
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Year-by-year projection. Net position deducts loan repayments due by each year.
            </p>

            {/* Goal bar */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="flex justify-between items-end mb-3 flex-wrap gap-4">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">$2M Campaign Goal</div>
                  <div className="font-heading text-3xl font-bold text-gray-900">$2,000,000</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Track A</div>
                  <div className="font-heading text-xl font-bold text-orange-500">{dollar(aTotal)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Track B</div>
                  <div className="font-heading text-xl font-bold text-green-600">{dollar(bFullCommitment)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Track C</div>
                  <div className="font-heading text-xl font-bold text-amber-700">{dollar(cCapital)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Total Projected</div>
                  <div className={`font-heading text-3xl font-bold ${goalPct >= 100 ? 'text-green-600' : 'text-orange-500'}`}>
                    {dollar(totalProjected)}
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-gray-100 rounded-full h-5 overflow-hidden">
                <div
                  className="h-5 rounded-full transition-all duration-700"
                  style={{
                    width: `${goalBar}%`,
                    background: goalPct >= 100
                      ? 'linear-gradient(90deg,#16a34a,#4ade80)'
                      : 'linear-gradient(90deg,#f97316,#ea580c)',
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                <span>$0</span>
                <span className={`font-bold text-sm ${goalPct >= 100 ? 'text-green-600' : 'text-orange-500'}`}>
                  {goalPct.toFixed(1)}% of goal
                  {goalPct >= 100 && `  ✓ Surplus: ${dollar(totalProjected - GOAL)}`}
                  {goalPct > 0 && goalPct < 100 && `  · Still need: ${dollar(GOAL - totalProjected)}`}
                </span>
                <span>$2M Goal</span>
              </div>
            </div>

            {/* Year-by-year table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <div className="px-5 py-3 bg-gray-800 text-white">
                <span className="font-heading font-bold">Year-by-Year Capital Projection</span>
                <span className="ml-3 text-xs text-white/50">
                  Track A = one-time · Track B = cumulative receipts · Track C = capital in at Year 1
                </span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wide text-gray-400 border-b border-gray-200">
                    <th className="text-left px-5 py-3">Stream</th>
                    {YEARS.map(y => <th key={y} className="text-right px-4 py-3">Year {y}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">A</span>
                      <span className="text-sm">One-Time Donations</span>
                    </td>
                    {YEARS.map(y => (
                      <td key={y} className="px-4 py-3 text-right font-heading font-semibold text-orange-500 text-sm">
                        {aTotal > 0 ? dollar(aTotal) : <span className="text-gray-300">—</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">B</span>
                      <span className="text-sm">Pledges (Cumulative)</span>
                    </td>
                    {bCumByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-semibold text-green-600 text-sm">
                        {v > 0 ? dollar(v) : <span className="text-gray-300">—</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="bg-amber-700 text-white text-xs font-bold px-2 py-0.5 rounded">C</span>
                      <span className="text-sm">Community Loans</span>
                    </td>
                    {YEARS.map(y => (
                      <td key={y} className="px-4 py-3 text-right font-heading font-semibold text-amber-700 text-sm">
                        {cCapital > 0 ? dollar(cCapital) : <span className="text-gray-300">—</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-5 py-3 font-bold text-sm">Total Capital Raised</td>
                    {grandByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-bold text-gray-900">
                        {v > 0 ? dollar(v) : <span className="text-gray-300">—</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-red-50">
                    <td className="px-5 py-3 text-gray-500 text-sm">↩ Loan Repayments Due</td>
                    {cRepayByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-semibold text-red-400 text-sm">
                        {v > 0 ? `(${dollar(v)})` : <span className="text-gray-300">—</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-800 text-white">
                    <td className="px-5 py-4 font-bold uppercase tracking-wide text-xs">Net Capital Position</td>
                    {netByYear.map((v, i) => (
                      <td key={i} className={`px-4 py-4 text-right font-heading text-base font-bold
                        ${v >= GOAL ? 'text-green-400' : v >= GOAL * 0.5 ? 'text-yellow-300' : 'text-red-300'}`}>
                        {v !== 0 ? dollar(v) : <span className="opacity-30">—</span>}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Per-track summary cards */}
            <div className="grid grid-cols-3 gap-5 mb-6">
              <div className="bg-white rounded-xl p-5 border-t-4 border-orange-500 border border-gray-200">
                <div className="text-xs text-orange-500 uppercase tracking-widest font-bold mb-3">Track A · One-Time</div>
                <div className="font-heading text-3xl font-bold text-gray-900 mb-1">{dollar(aTotal)}</div>
                <div className="text-sm text-gray-400 mb-3">{aDonors.reduce((s, d) => s + d, 0)} donors</div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  {TIERS_A.map((t, i) => aDonors[i] > 0 ? `${aDonors[i]}× ${t.name}` : null).filter(Boolean).join(' · ') || 'No donors entered yet'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border-t-4 border-green-600 border border-gray-200">
                <div className="text-xs text-green-600 uppercase tracking-widest font-bold mb-3">Track B · Monthly</div>
                <div className="font-heading text-3xl font-bold text-gray-900 mb-1">{dollar(bFullCommitment)}</div>
                <div className="text-sm text-gray-400 mb-1">{bDonors.reduce((s, d) => s + d, 0)} donors · recurring</div>
                <div className="text-sm text-green-600 font-semibold">{dollar(bMonthly)}/month · {dollar(bCumByYear[0])}/year</div>
              </div>
              <div className="bg-white rounded-xl p-5 border-t-4 border-amber-700 border border-gray-200">
                <div className="text-xs text-amber-700 uppercase tracking-widest font-bold mb-3">Track C · Loans</div>
                <div className="font-heading text-3xl font-bold text-gray-900 mb-1">{dollar(cCapital)}</div>
                <div className="text-sm text-gray-400 mb-1">{cDonorCount} loan donors</div>
                <div className="text-sm text-red-400">Max repayment: {dollar(cRepayByYear.reduce((m, v) => Math.max(m, v), 0))}</div>
              </div>
            </div>

            {/* Talking points */}
            {totalProjected > 0 ? (
              <div className="bg-gray-800 rounded-xl p-6 text-white">
                <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Talking Points for Your Group Discussion
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div>✦ <strong>Total capital:</strong> {dollar(totalProjected)} ({goalPct.toFixed(0)}% of $2M goal)</div>
                  <div>✦ <strong>Monthly recurring:</strong> {dollar(bMonthly)}/mo from {bDonors.reduce((s, d) => s + d, 0)} pledge donors</div>
                  <div>✦ <strong>Max loan repayment:</strong> {dollar(cRepayByYear.reduce((m, v) => Math.max(m, v), 0))}</div>
                  <div>✦ <strong>Best net by Yr 7:</strong> {dollar(netByYear.reduce((m, v) => Math.max(m, v), 0))}</div>
                  {goalPct >= 100 && (
                    <div className="col-span-2 text-green-400 font-semibold">
                      ✓ This scenario fully funds Phase 1 — surplus: {dollar(totalProjected - GOAL)}
                    </div>
                  )}
                  {goalPct > 0 && goalPct < 100 && (
                    <div className="col-span-2 text-yellow-300">
                      △ Gap to $2M: {dollar(GOAL - totalProjected)} — add more donors in Track A, B, or C
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-10 border border-gray-200 text-center">
                <div className="font-heading text-lg text-gray-400 mb-2">No numbers entered yet</div>
                <p className="text-sm text-gray-400">Go to Track A, B, or C and enter donor counts to see projections here.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
