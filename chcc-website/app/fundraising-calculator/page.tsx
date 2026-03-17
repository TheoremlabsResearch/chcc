'use client'

import { useState, useMemo } from 'react'

// ── Data ────────────────────────────────────────────────────────────

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

// ── Helpers ─────────────────────────────────────────────────────────

const dollar = (n: number) =>
  n === 0 ? '$0' : '$' + Math.round(Math.abs(n)).toLocaleString()

const short = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`
  return `$${Math.round(n)}`
}

function Num({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <input
      type="number"
      min={0}
      value={value === 0 ? '' : value}
      placeholder="0"
      onChange={e => onChange(Math.max(0, parseInt(e.target.value) || 0))}
      className="w-16 text-center border border-light rounded px-1 py-1.5 text-sm font-semibold
                 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron bg-white"
    />
  )
}

type Tab = 'A' | 'B' | 'C' | 'summary'

// ── Page ─────────────────────────────────────────────────────────────

export default function FundraisingCalculator() {
  const [tab, setTab] = useState<Tab>('A')

  // Track A: donor count per tier index
  const [aDonors, setADonors] = useState<number[]>(Array(8).fill(0))

  // Track B: donor count per tier index
  const [bDonors, setBDonors] = useState<number[]>(Array(3).fill(0))

  // Track C: [typeIndex 0-2][amountIndex 0-2][termIndex 0-2]
  const [cDonors, setCDonors] = useState<number[][][]>(
    Array(3).fill(null).map(() => Array(3).fill(null).map(() => Array(3).fill(0)))
  )

  function setA(i: number, v: number) {
    const n = [...aDonors]; n[i] = v; setADonors(n)
  }
  function setB(i: number, v: number) {
    const n = [...bDonors]; n[i] = v; setBDonors(n)
  }
  function setC(ti: number, ai: number, trm: number, v: number) {
    const n = cDonors.map(t => t.map(a => [...a])); n[ti][ai][trm] = v; setCDonors(n)
  }

  // ── Track A ──────────────────────────────────────────────────────
  const trackATotal = useMemo(
    () => TIERS_A.reduce((s, t, i) => s + (aDonors[i] || 0) * t.amount, 0),
    [aDonors]
  )

  // ── Track B ──────────────────────────────────────────────────────
  // Cumulative by projection year (respects term expiry)
  const bByYear = useMemo(
    () => YEARS.map(y =>
      TIERS_B.reduce((s, t, i) => s + (bDonors[i] || 0) * t.monthly * Math.min(y, t.term) * 12, 0)
    ),
    [bDonors]
  )
  const bMonthly    = useMemo(() => TIERS_B.reduce((s, t, i) => s + (bDonors[i] || 0) * t.monthly, 0), [bDonors])
  const bCommitment = useMemo(() => TIERS_B.reduce((s, t, i) => s + (bDonors[i] || 0) * t.monthly * t.term * 12, 0), [bDonors])

  // ── Track C ──────────────────────────────────────────────────────
  const cCapital = useMemo(() => {
    let t = 0
    for (let ti = 0; ti < 3; ti++)
      for (let ai = 0; ai < 3; ai++)
        for (let trm = 0; trm < 3; trm++)
          t += (cDonors[ti][ai][trm] || 0) * AMOUNTS[ai]
    return t
  }, [cDonors])

  // Total repayments that fall due ON OR BEFORE each projection year
  const cRepayByYear = useMemo(
    () => YEARS.map(y => {
      let r = 0
      for (let ti = 0; ti < 3; ti++) {
        if (LOAN_TYPES[ti].forgiven) continue
        for (let ai = 0; ai < 3; ai++)
          for (let trm = 0; trm < 3; trm++)
            if (TERMS[trm] <= y)
              r += (cDonors[ti][ai][trm] || 0) * AMOUNTS[ai] * (1 + LOAN_TYPES[ti].rate * TERMS[trm])
      }
      return r
    }),
    [cDonors]
  )

  const cDonorCount = useMemo(() => {
    let t = 0
    for (let ti = 0; ti < 3; ti++)
      for (let ai = 0; ai < 3; ai++)
        for (let trm = 0; trm < 3; trm++)
          t += cDonors[ti][ai][trm] || 0
    return t
  }, [cDonors])

  const mokshaTotalForgiven = useMemo(() =>
    AMOUNTS.reduce((s, amt, ai) =>
      s + TERMS.reduce((s2, _, trm) => s2 + (cDonors[1][ai][trm] || 0) * amt, 0), 0),
    [cDonors]
  )

  // ── Grand totals ─────────────────────────────────────────────────
  const grandByYear = useMemo(
    () => YEARS.map((_, i) => trackATotal + bByYear[i] + cCapital),
    [trackATotal, bByYear, cCapital]
  )
  const netByYear = useMemo(
    () => grandByYear.map((g, i) => g - cRepayByYear[i]),
    [grandByYear, cRepayByYear]
  )

  const totalProjected = Math.max(...grandByYear)
  const goalPct = Math.min((totalProjected / GOAL) * 100, 150)
  const goalBar = Math.min(goalPct, 100)

  // ── Shared stat card ─────────────────────────────────────────────
  function StatBox({ label, value, sub, color = 'text-charcoal' }: { label: string; value: string; sub?: string; color?: string }) {
    return (
      <div className="bg-white rounded-xl p-5 border border-light shadow-card">
        <div className="text-xs text-muted uppercase tracking-widest mb-1">{label}</div>
        <div className={`font-heading text-2xl font-bold ${color}`}>{value}</div>
        {sub && <div className="text-xs text-muted mt-1">{sub}</div>}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory">

      {/* ── Top banner ── */}
      <div className="bg-charcoal text-white py-7 px-6">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-6">
          <div>
            <div className="text-xs text-saffron font-bold uppercase tracking-widest mb-1.5">
              Internal Planning Tool · Not Public · /fundraising-calculator
            </div>
            <h1 className="font-heading text-3xl font-bold mb-1.5">
              CHCC Fundraising Scenario Calculator
            </h1>
            <p className="text-white/55 text-sm max-w-2xl">
              Model donor assumptions across all 3 tracks. Adjust numbers to explore scenarios
              and project total capital raised over 1–7 years. Use the Summary tab to build your
              presentation narrative.
            </p>
          </div>
          <div className="flex gap-5 shrink-0">
            <div className="text-right">
              <div className="text-xs text-white/40 uppercase tracking-wide">Total Capital</div>
              <div className="font-heading text-2xl font-bold text-saffron">{dollar(totalProjected)}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/40 uppercase tracking-wide">vs $2M Goal</div>
              <div className={`font-heading text-2xl font-bold ${goalPct >= 100 ? 'text-green' : goalPct >= 60 ? 'text-saffron' : 'text-red-400'}`}>
                {goalPct.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white border-b border-light sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex">
          {(['A', 'B', 'C', 'summary'] as Tab[]).map(t => {
            const label = t === 'summary' ? '📊 Summary' : `Track ${t}`
            const badge = t === 'A' && trackATotal > 0 ? short(trackATotal)
              : t === 'B' && bCommitment > 0 ? short(bCommitment)
              : t === 'C' && cCapital > 0 ? short(cCapital)
              : null
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3.5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  tab === t ? 'border-saffron text-saffron' : 'border-transparent text-muted hover:text-charcoal'
                }`}
              >
                {label}
                {badge && (
                  <span className="ml-1.5 text-xs text-green font-bold">({badge})</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ════════════════════════════════════════
            TRACK A
        ════════════════════════════════════════ */}
        {tab === 'A' && (
          <div>
            <div className="mb-5">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1">
                Track A — "Grow Together" Direct Donations
              </h2>
              <p className="text-muted text-sm">
                One-time gifts during the capital campaign. Enter estimated donor count at each tier.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-card border border-light overflow-hidden mb-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white text-xs uppercase tracking-wide">
                    <th className="text-left px-5 py-3 w-28">Tier</th>
                    <th className="text-right px-5 py-3 w-32">Min. Gift</th>
                    <th className="text-left px-5 py-3">What It Funds</th>
                    <th className="text-center px-5 py-3 w-28"># Donors</th>
                    <th className="text-right px-5 py-3 w-36">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS_A.map((tier, i) => {
                    const sub = (aDonors[i] || 0) * tier.amount
                    const big = i >= 5
                    return (
                      <tr key={tier.name} className={`border-b border-light/60 ${big ? 'bg-turmeric/20' : 'hover:bg-ivory'}`}>
                        <td className="px-5 py-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${big ? 'bg-saffron text-white' : 'bg-ivory text-charcoal'}`}>
                            {tier.name}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right font-heading font-bold text-saffron">{dollar(tier.amount)}</td>
                        <td className="px-5 py-3 text-sm text-muted">{tier.impact}</td>
                        <td className="px-5 py-3 text-center">
                          <Num value={aDonors[i]} onChange={v => setA(i, v)} />
                        </td>
                        <td className="px-5 py-3 text-right font-heading font-bold text-charcoal">
                          {sub > 0 ? dollar(sub) : <span className="text-light">—</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-saffron text-white">
                    <td colSpan={3} className="px-5 py-4 font-bold uppercase tracking-wide text-sm">Track A Total</td>
                    <td className="px-5 py-4 text-center font-bold">{aDonors.reduce((s, d) => s + d, 0)} donors</td>
                    <td className="px-5 py-4 text-right font-heading text-xl font-bold">{dollar(trackATotal)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <StatBox label="Total Donors" value={String(aDonors.reduce((s, d) => s + d, 0))} />
              <StatBox label="Capital Raised (Track A)" value={dollar(trackATotal)} color="text-saffron" />
              <StatBox label="% of $2M Goal" value={`${(trackATotal / GOAL * 100).toFixed(1)}%`}
                color={trackATotal / GOAL >= 0.5 ? 'text-green' : 'text-saffron'}
                sub={trackATotal > 0 ? `Still need ${dollar(Math.max(0, GOAL - trackATotal))}` : undefined}
              />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════
            TRACK B
        ════════════════════════════════════════ */}
        {tab === 'B' && (
          <div>
            <div className="mb-5">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1">
                Track B — Community Pledge Program (Monthly Recurring)
              </h2>
              <p className="text-muted text-sm">
                Recurring monthly pledges with 3, 5, or 7-year commitments. Cumulative totals respect each tier's term — donors stop contributing after their term ends.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-card border border-light overflow-hidden mb-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-green text-white text-xs uppercase tracking-wide">
                    <th className="text-left px-5 py-3">Pledge Tier</th>
                    <th className="text-center px-4 py-3">Monthly</th>
                    <th className="text-center px-4 py-3">Term</th>
                    <th className="text-center px-4 py-3">Per Donor</th>
                    <th className="text-center px-4 py-3 w-24"># Donors</th>
                    <th className="text-right px-4 py-3">Yr 1</th>
                    <th className="text-right px-4 py-3">Yr 3</th>
                    <th className="text-right px-4 py-3">Yr 5</th>
                    <th className="text-right px-4 py-3">Yr 7</th>
                    <th className="text-right px-5 py-3">Full Commitment</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS_B.map((tier, i) => {
                    const d = bDonors[i] || 0
                    // cumulative at projection years [1,2,3,5,7] → indices [0,1,2,3,4]
                    const cols = [0, 2, 3, 4].map(yi =>
                      d * tier.monthly * Math.min(YEARS[yi], tier.term) * 12
                    )
                    return (
                      <tr key={tier.name} className="border-b border-light/60 hover:bg-ivory">
                        <td className="px-5 py-3">
                          <div className="font-semibold text-charcoal">{tier.name}</div>
                          <div className="text-xs text-muted font-devanagari">{tier.sanskrit}</div>
                          <div className="text-xs text-muted mt-0.5">{tier.impact}</div>
                        </td>
                        <td className="px-4 py-3 text-center font-heading font-bold text-green">${tier.monthly}/mo</td>
                        <td className="px-4 py-3 text-center text-muted">{tier.term} yrs</td>
                        <td className="px-4 py-3 text-center text-muted">{dollar(tier.monthly * tier.term * 12)}</td>
                        <td className="px-4 py-3 text-center">
                          <Num value={bDonors[i]} onChange={v => setB(i, v)} />
                        </td>
                        {cols.map((val, ci) => (
                          <td key={ci} className="px-4 py-3 text-right font-heading font-semibold text-charcoal text-sm">
                            {val > 0 ? dollar(val) : <span className="text-light">—</span>}
                          </td>
                        ))}
                        <td className="px-5 py-3 text-right font-heading font-bold text-green">
                          {d > 0 ? dollar(d * tier.monthly * tier.term * 12) : <span className="text-light">—</span>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-green text-white">
                    <td colSpan={4} className="px-5 py-4 font-bold uppercase tracking-wide text-sm">Track B Cumulative</td>
                    <td className="px-4 py-4 text-center font-bold">{bDonors.reduce((s, d) => s + d, 0)} donors</td>
                    {[0, 2, 3, 4].map(yi => (
                      <td key={yi} className="px-4 py-4 text-right font-heading font-bold">
                        {bByYear[yi] > 0 ? dollar(bByYear[yi]) : '—'}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right font-heading text-lg font-bold">{dollar(bCommitment)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <StatBox label="Monthly Revenue" value={`${dollar(bMonthly)}/mo`} color="text-green" />
              <StatBox label="Annual Revenue (Year 1)" value={dollar(bByYear[0])} color="text-green" />
              <StatBox label="Cumulative by Year 5" value={dollar(bByYear[3])} />
              <StatBox label="Full Commitment Total" value={dollar(bCommitment)} color="text-saffron" />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════
            TRACK C
        ════════════════════════════════════════ */}
        {tab === 'C' && (
          <div>
            <div className="mb-5">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1">
                Track C — Community Loan Program
              </h2>
              <p className="text-muted text-sm">
                Major donor loans — capital raised upfront at facility identification. Choose loan structure, amount ($50K / $100K / $150K), and term (3 / 5 / 7 years). The "Result" column shows repayment per donor for Nishkama/Vriddhi, or annual tax deduction for Moksha Daan.
              </p>
            </div>

            {LOAN_TYPES.map((lt, ti) => {
              const typeCapital = AMOUNTS.reduce((s, amt, ai) =>
                s + TERMS.reduce((s2, _, trm) => s2 + (cDonors[ti][ai][trm] || 0) * amt, 0), 0)

              return (
                <div key={lt.key} className="bg-white rounded-xl shadow-card border border-light overflow-hidden mb-6"
                  style={{ borderTop: `4px solid ${lt.color}` }}>

                  {/* Sub-header */}
                  <div className="px-5 py-4 border-b border-light flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-lg font-bold text-charcoal">{lt.name}</span>
                      <span className="font-devanagari text-sm text-muted">{lt.sanskrit}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full text-white font-semibold"
                        style={{ background: lt.color }}>{lt.label}</span>
                    </div>
                    {typeCapital > 0 && (
                      <div className="text-right">
                        <div className="text-xs text-muted">Capital from this structure</div>
                        <div className="font-heading text-lg font-bold" style={{ color: lt.color }}>{dollar(typeCapital)}</div>
                      </div>
                    )}
                  </div>

                  <table className="w-full">
                    <thead>
                      {/* Term group headers */}
                      <tr className="bg-gray-50 text-xs text-muted border-b border-light">
                        <th className="text-left px-5 py-2 w-32">Amount</th>
                        {TERMS.map(term => (
                          <th key={term} colSpan={2} className="text-center px-3 py-2 border-l border-light/60 font-semibold">
                            {term}-Year Term
                          </th>
                        ))}
                        <th className="text-right px-5 py-2 w-36">Row Capital</th>
                      </tr>
                      <tr className="bg-gray-50 text-xs text-muted border-b border-light">
                        <th className="px-5 py-1.5"></th>
                        {TERMS.map(term => (
                          <>
                            <th key={`${term}-d`} className="text-center px-3 py-1.5 border-l border-light/60"># Donors</th>
                            <th key={`${term}-r`} className="text-center px-3 py-1.5">
                              {lt.forgiven ? 'Deduct/yr' : `Repay Yr ${term}`}
                            </th>
                          </>
                        ))}
                        <th className="px-5 py-1.5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {AMOUNTS.map((amt, ai) => {
                        const rowCapital = TERMS.reduce((s, _, trm) => s + (cDonors[ti][ai][trm] || 0) * amt, 0)
                        return (
                          <tr key={amt} className="border-b border-light/60 hover:bg-ivory">
                            <td className="px-5 py-3 font-heading font-bold text-charcoal">{dollar(amt)}</td>
                            {TERMS.flatMap((term, trm) => {
                              const d = cDonors[ti][ai][trm] || 0
                              const repayEach = lt.forgiven ? 0 : amt * (1 + lt.rate * term)
                              const deductEach = lt.forgiven ? amt / term : 0
                              return [
                                <td key={`d-${trm}`} className="text-center px-3 py-3 border-l border-light/40">
                                  <Num value={d} onChange={v => setC(ti, ai, trm, v)} />
                                </td>,
                                <td key={`r-${trm}`} className="text-center px-2 py-3 text-xs font-semibold" style={{ color: lt.color }}>
                                  {d > 0
                                    ? lt.forgiven
                                      ? `${dollar(deductEach)}/yr`
                                      : dollar(d * repayEach)
                                    : <span className="text-light">—</span>
                                  }
                                </td>,
                              ]
                            })}
                            <td className="px-5 py-3 text-right font-heading font-bold text-charcoal">
                              {rowCapital > 0 ? dollar(rowCapital) : <span className="text-light">—</span>}
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
              <StatBox label="Total Capital Raised (Track C)" value={dollar(cCapital)}
                color="text-saffron" sub={`${cDonorCount} loan donors`} />
              <StatBox label="Max Repayment Obligation" value={dollar(Math.max(...cRepayByYear))}
                color="text-red-500" sub="Nishkama + Vriddhi loans at longest term end" />
              <StatBox label="Moksha Daan — Community Gift" value={dollar(mokshaTotalForgiven)}
                color="text-teak" sub="100% forgiven — CHCC repays $0" />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════
            SUMMARY
        ════════════════════════════════════════ */}
        {tab === 'summary' && (
          <div>
            <div className="mb-5">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1">
                Campaign Summary — All Tracks Combined
              </h2>
              <p className="text-muted text-sm">
                Full year-by-year projection. Net position deducts loan repayments that fall due by each year.
                Use this table in your group discussion to test scenarios.
              </p>
            </div>

            {/* Goal bar */}
            <div className="bg-white rounded-xl p-6 border border-light shadow-card mb-6">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <div className="text-xs text-muted uppercase tracking-widest mb-0.5">$2M Campaign Goal</div>
                  <div className="font-heading text-3xl font-bold text-charcoal">$2,000,000</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted uppercase tracking-widest mb-0.5">Track A (Donations)</div>
                  <div className="font-heading text-xl font-bold text-saffron">{dollar(trackATotal)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted uppercase tracking-widest mb-0.5">Track B (Pledges Full)</div>
                  <div className="font-heading text-xl font-bold text-green">{dollar(bCommitment)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted uppercase tracking-widest mb-0.5">Track C (Loans)</div>
                  <div className="font-heading text-xl font-bold text-teak">{dollar(cCapital)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted uppercase tracking-widest mb-0.5">Total Projected</div>
                  <div className={`font-heading text-3xl font-bold ${goalPct >= 100 ? 'text-green' : 'text-saffron'}`}>
                    {dollar(totalProjected)}
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-ivory rounded-full h-5 overflow-hidden">
                {/* $2M goal marker */}
                <div className="absolute top-0 bottom-0 w-px bg-charcoal/30 z-10" style={{ left: `${Math.min((GOAL / totalProjected) * goalBar, 100)}%` }} />
                <div
                  className="h-5 rounded-full transition-all duration-700 relative"
                  style={{
                    width: `${goalBar}%`,
                    background: goalPct >= 100
                      ? 'linear-gradient(90deg,#4A7C59,#6BA07A)'
                      : 'linear-gradient(90deg,#F47C36,#D4621E)',
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-muted">
                <span>$0</span>
                <span className={`font-bold text-sm ${goalPct >= 100 ? 'text-green' : 'text-saffron'}`}>
                  {goalPct.toFixed(1)}% of goal
                  {goalPct >= 100 && `  ✓ Surplus: ${dollar(totalProjected - GOAL)}`}
                  {goalPct < 100 && `  · Still need: ${dollar(GOAL - totalProjected)}`}
                </span>
                <span>$2M Goal</span>
              </div>
            </div>

            {/* Year-by-year table */}
            <div className="bg-white rounded-xl shadow-card border border-light overflow-hidden mb-6">
              <div className="px-5 py-3 bg-charcoal text-white">
                <span className="font-heading font-bold">Year-by-Year Capital Projection</span>
                <span className="ml-3 text-xs text-white/40">Track A = one-time total (same every year) · Track B = cumulative receipts · Track C = capital in at Year 1</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wide text-muted border-b border-light">
                    <th className="text-left px-5 py-3">Stream</th>
                    {YEARS.map(y => <th key={y} className="text-right px-4 py-3">Year {y}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {/* Row A */}
                  <tr className="border-b border-light/60 hover:bg-ivory">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="inline-block bg-saffron text-white text-xs font-bold px-2 py-0.5 rounded">A</span>
                      <span className="text-sm">One-Time Donations</span>
                    </td>
                    {YEARS.map(y => (
                      <td key={y} className="px-4 py-3 text-right font-heading font-semibold text-saffron text-sm">
                        {trackATotal > 0 ? dollar(trackATotal) : <span className="text-light">—</span>}
                      </td>
                    ))}
                  </tr>
                  {/* Row B */}
                  <tr className="border-b border-light/60 hover:bg-ivory">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="inline-block bg-green text-white text-xs font-bold px-2 py-0.5 rounded">B</span>
                      <span className="text-sm">Pledges (Cumulative)</span>
                    </td>
                    {bByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-semibold text-green text-sm">
                        {v > 0 ? dollar(v) : <span className="text-light">—</span>}
                      </td>
                    ))}
                  </tr>
                  {/* Row C */}
                  <tr className="border-b border-light/60 hover:bg-ivory">
                    <td className="px-5 py-3 flex items-center gap-2">
                      <span className="inline-block bg-teak text-white text-xs font-bold px-2 py-0.5 rounded">C</span>
                      <span className="text-sm">Community Loans (Capital In)</span>
                    </td>
                    {YEARS.map(y => (
                      <td key={y} className="px-4 py-3 text-right font-heading font-semibold text-teak text-sm">
                        {cCapital > 0 ? dollar(cCapital) : <span className="text-light">—</span>}
                      </td>
                    ))}
                  </tr>
                  {/* Total */}
                  <tr className="border-b border-light bg-ivory">
                    <td className="px-5 py-3 font-bold text-sm">Total Capital Raised</td>
                    {grandByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-bold text-charcoal">
                        {v > 0 ? dollar(v) : <span className="text-light">—</span>}
                      </td>
                    ))}
                  </tr>
                  {/* Repayments */}
                  <tr className="border-b border-light/60 hover:bg-red-50">
                    <td className="px-5 py-3 text-muted text-sm flex items-center gap-1">
                      <span className="text-red-400">↩</span> Loan Repayments Due by Year
                    </td>
                    {cRepayByYear.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-right font-heading font-semibold text-red-400 text-sm">
                        {v > 0 ? `(${dollar(v)})` : <span className="text-light">—</span>}
                      </td>
                    ))}
                  </tr>
                  {/* Net */}
                  <tr className="bg-charcoal text-white">
                    <td className="px-5 py-4 font-bold uppercase tracking-wide text-xs">Net Capital Position</td>
                    {netByYear.map((v, i) => (
                      <td key={i} className={`px-4 py-4 text-right font-heading text-base font-bold
                        ${v >= GOAL ? 'text-green-300' : v >= GOAL * 0.5 ? 'text-yellow-300' : 'text-red-300'}`}>
                        {v !== 0 ? dollar(v) : <span className="opacity-30">—</span>}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Per-track summary cards */}
            <div className="grid grid-cols-3 gap-5 mb-6">
              <div className="bg-white rounded-xl p-5 border-t-4 border-saffron border border-light shadow-card">
                <div className="text-xs text-saffron uppercase tracking-widest font-bold mb-3">Track A · One-Time</div>
                <div className="font-heading text-3xl font-bold text-charcoal mb-1">{dollar(trackATotal)}</div>
                <div className="text-sm text-muted mb-3">{aDonors.reduce((s, d) => s + d, 0)} donors</div>
                <div className="text-xs text-muted leading-relaxed">
                  {TIERS_A.map((t, i) => aDonors[i] > 0 ? `${aDonors[i]}× ${t.name}` : null).filter(Boolean).join(' · ') || 'No donors entered yet'}
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border-t-4 border-green border border-light shadow-card">
                <div className="text-xs text-green uppercase tracking-widest font-bold mb-3">Track B · Monthly</div>
                <div className="font-heading text-3xl font-bold text-charcoal mb-1">{dollar(bCommitment)}</div>
                <div className="text-sm text-muted mb-1">{bDonors.reduce((s, d) => s + d, 0)} donors · recurring</div>
                <div className="text-sm text-green font-semibold">{dollar(bMonthly)}/month · {dollar(bByYear[0])}/year</div>
              </div>
              <div className="bg-white rounded-xl p-5 border-t-4 border-teak border border-light shadow-card">
                <div className="text-xs text-teak uppercase tracking-widest font-bold mb-3">Track C · Loans</div>
                <div className="font-heading text-3xl font-bold text-charcoal mb-1">{dollar(cCapital)}</div>
                <div className="text-sm text-muted mb-1">{cDonorCount} loan donors</div>
                <div className="text-sm text-red-400">Max repayment: {dollar(Math.max(0, ...cRepayByYear))}</div>
              </div>
            </div>

            {/* Presentation talking points */}
            {totalProjected > 0 && (
              <div className="bg-charcoal rounded-xl p-6 text-white">
                <div className="text-saffron text-xs font-bold uppercase tracking-widest mb-3">
                  Talking Points for Your Group Discussion
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div>✦ <strong>Total capital:</strong> {dollar(totalProjected)} ({goalPct.toFixed(0)}% of $2M goal)</div>
                  <div>✦ <strong>Monthly recurring income:</strong> {dollar(bMonthly)}/month from {bDonors.reduce((s, d) => s + d, 0)} pledge donors</div>
                  <div>✦ <strong>Max loan repayment:</strong> {dollar(Math.max(0, ...cRepayByYear))} (net obligation)</div>
                  <div>✦ <strong>Best-case net by Year 7:</strong> {dollar(Math.max(...netByYear))}</div>
                  {goalPct >= 100 && (
                    <div className="col-span-2 text-green-400 font-semibold">
                      ✓ This scenario fully funds Phase 1 with a surplus of {dollar(totalProjected - GOAL)}
                    </div>
                  )}
                  {goalPct < 100 && (
                    <div className="col-span-2 text-yellow-300">
                      △ Gap to $2M goal: {dollar(GOAL - totalProjected)} — consider more Track A/B donors or additional Track C loans
                    </div>
                  )}
                  <div className="col-span-2 text-white/40 text-xs pt-2 border-t border-white/10 mt-1">
                    Track B Yr 3 surplus covers operations · Track C Vriddhi repayments funded from Year 3 earned revenue ($3.2M projected)
                  </div>
                </div>
              </div>
            )}

            {totalProjected === 0 && (
              <div className="bg-white rounded-xl p-10 border border-light text-center">
                <div className="font-heading text-lg text-muted mb-2">No numbers entered yet</div>
                <p className="text-sm text-muted">Go to Track A, B, or C and enter donor counts to see projections here.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
