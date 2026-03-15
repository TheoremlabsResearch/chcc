'use client'

import { useState } from 'react'
import { Check, ChevronDown, ChevronUp, ArrowRight, Info } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type LoanType = 'nishkama' | 'moksha' | 'vriddhi'
type Term = 3 | 5 | 7
type Amount = 50000 | 100000 | 150000

interface LoanResult {
  totalLent: number
  annualForgiven?: number
  totalForgiven?: number
  repaidAtEnd: number
  totalReturn?: number
  effectiveGift: number
  deductionPerYear?: number
  totalDeduction?: number
}

// ─── Loan Calculators ────────────────────────────────────────────────────────

function calcNishkama(amount: Amount, term: Term): LoanResult {
  // 0% interest — capital returned in full; effective gift is opportunity cost at ~5%
  const opportunityCost = amount * 0.05 * term
  return {
    totalLent: amount,
    repaidAtEnd: amount,
    effectiveGift: Math.round(opportunityCost),
  }
}

function calcMoksha(amount: Amount, term: Term): LoanResult {
  // 0% interest with annual forgiveness — 100% becomes a tax-deductible donation
  const annualPct = 1 / term
  const annualForgiven = Math.round(amount * annualPct)
  return {
    totalLent: amount,
    annualForgiven,
    totalForgiven: amount,
    repaidAtEnd: 0,
    effectiveGift: amount,
    deductionPerYear: annualForgiven,
    totalDeduction: amount,
  }
}

function calcVriddhi(amount: Amount, term: Term): LoanResult {
  // 4% simple interest, deferred — paid as balloon at end of term
  const RATE = 0.04
  const interest = Math.round(amount * RATE * term)
  return {
    totalLent: amount,
    repaidAtEnd: amount + interest,
    totalReturn: interest,
    effectiveGift: 0,
  }
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const loanTypes = [
  {
    id: 'nishkama' as LoanType,
    name: 'Nishkama',
    sanskrit: 'निष्काम',
    subtitle: 'Interest-Free Community Loan',
    tagline: '"My capital builds the community. Return it when you\'re ready."',
    color: 'text-green',
    bgColor: 'bg-green/5',
    border: 'border-green/30',
    activeBg: 'bg-green',
    icon: '🤝',
    idealFor: 'Business owners, retirees, and donors who want their capital returned once CHCC is self-sustaining.',
    taxNote: 'The loan itself is not immediately tax-deductible. However, any amount you later choose to forgive becomes a charitable deduction at that time.',
    highlights: [
      '0% interest — CHCC returns your exact principal',
      'Repayment schedule: quarterly installments or balloon',
      'Convert to a donation (fully or partially) at any time',
      '"Community Builder" permanent recognition regardless of term',
      'Your foregone interest is a meaningful effective gift to CHCC',
    ],
  },
  {
    id: 'moksha' as LoanType,
    name: 'Moksha Daan',
    sanskrit: 'मोक्ष दान',
    subtitle: 'Graduated Forgiveness Loan',
    tagline: '"I want to donate — but spread the tax benefit intelligently over time."',
    color: 'text-saffron-dark',
    bgColor: 'bg-turmeric/30',
    border: 'border-saffron/40',
    activeBg: 'bg-saffron',
    icon: '🪔',
    idealFor: 'High-income professionals (physicians, attorneys, engineers, entrepreneurs) who want to give $25K+ but benefit from spreading deductions across multiple tax years.',
    taxNote: 'Each year\'s forgiven amount is a recognized charitable contribution, generating a tax deduction in that tax year. This is especially powerful for donors who would otherwise exceed the 60% AGI limit on cash donations in a single year.',
    highlights: [
      '0% interest — entire principal becomes a donation over time',
      'Each annual forgiveness tranche = tax-deductible contribution',
      'Spread deductions across 3, 5, or 7 tax years',
      'CHCC repays $0 at term end (100% donated)',
      'Named space dedication in the facility',
    ],
  },
  {
    id: 'vriddhi' as LoanType,
    name: 'Vriddhi',
    sanskrit: 'वृद्धि',
    subtitle: 'Deferred-Interest Ethical Investment',
    tagline: '"I want a fair return — and the knowledge that my capital built something eternal."',
    color: 'text-teak',
    bgColor: 'bg-teak/5',
    border: 'border-teak/30',
    activeBg: 'bg-teak',
    icon: '📈',
    idealFor: 'Community members whose idle capital is earning below 4%; those who want to participate as investors in CHCC\'s growth story; advisory council candidates.',
    taxNote: 'This is a true investment loan — the interest earned is taxable income to you. However, at any time you may elect to convert all or part of your loan (principal + accrued interest) into a tax-deductible charitable contribution.',
    highlights: [
      '4% simple interest per annum — no payments during the term',
      'Full balloon repayment (principal + interest) at term end',
      'Convert to a donation at any time — full tax deduction',
      'Quarterly financial reports on CHCC operational health',
      'Advisory Council seat for pledges of $100,000+',
    ],
  },
]

const amounts: Amount[] = [50000, 100000, 150000]
const terms: Term[] = [3, 5, 7]

// ─── Formatters ───────────────────────────────────────────────────────────────

const fmt = (n: number) => `$${n.toLocaleString()}`

// ─── Sub-components ──────────────────────────────────────────────────────────

function ResultTable({
  loanType,
  amount,
  term,
}: {
  loanType: LoanType
  amount: Amount
  term: Term
}) {
  const result =
    loanType === 'nishkama'
      ? calcNishkama(amount, term)
      : loanType === 'moksha'
      ? calcMoksha(amount, term)
      : calcVriddhi(amount, term)

  const type = loanTypes.find((t) => t.id === loanType)!

  return (
    <div className={`rounded-2xl border ${type.border} ${type.bgColor} p-6`}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className={`text-sm font-bold ${type.color}`}>
            {fmt(amount)} · {term}-Year {type.subtitle}
          </span>
        </div>
        <div className={`text-2xl`}>{type.icon}</div>
      </div>

      <div className="space-y-3">
        <Row label="You lend CHCC" value={fmt(result.totalLent)} />

        {loanType === 'nishkama' && (
          <>
            <Row label="Interest rate" value="0%" />
            <Row label="CHCC repays at end of year" value={`${term} — ${fmt(result.repaidAtEnd)}`} />
            <Row
              label={`Your effective gift (5% opp. cost × ${term} yrs)`}
              value={fmt(result.effectiveGift)}
              highlight
              color={type.color}
            />
          </>
        )}

        {loanType === 'moksha' && (
          <>
            <Row label="Interest rate" value="0%" />
            <Row label={`Forgiven each year (${Math.round(100 / term)}%)`} value={fmt(result.annualForgiven!)} />
            <Row label={`Tax deduction per year`} value={fmt(result.deductionPerYear!)} highlight color={type.color} />
            <Row label={`Total deduction over ${term} years`} value={fmt(result.totalDeduction!)} />
            <Row label="CHCC repays at term end" value="$0 — fully donated ✓" />
          </>
        )}

        {loanType === 'vriddhi' && (
          <>
            <Row label="Interest rate" value="4% simple interest p.a." />
            <Row label="Payments during term" value="None — fully deferred" />
            <Row label={`CHCC repays at end of year ${term}`} value={fmt(result.repaidAtEnd)} highlight color={type.color} />
            <Row label="Your interest earned" value={fmt(result.totalReturn!)} />
            <Row label="Option to convert to donation" value="Anytime — full tax deduction" />
          </>
        )}
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  highlight,
  color,
}: {
  label: string
  value: string
  highlight?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex justify-between items-start gap-4 py-2 border-b border-black/5 last:border-0 ${
        highlight ? 'rounded-lg px-3 -mx-3 bg-white/60' : ''
      }`}
    >
      <span className="text-sm text-muted leading-tight">{label}</span>
      <span className={`text-sm font-bold text-right shrink-0 ${highlight && color ? color : 'text-charcoal'}`}>
        {value}
      </span>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CommunityLoan() {
  const [activeLoan, setActiveLoan] = useState<LoanType>('nishkama')
  const [activeTerm, setActiveTerm] = useState<Term>(5)
  const [activeAmount, setActiveAmount] = useState<Amount>(100000 as Amount)
  const [showTaxNote, setShowTaxNote] = useState(false)

  const activeType = loanTypes.find((t) => t.id === activeLoan)!

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-charcoal/5 text-charcoal text-sm font-semibold px-4 py-2 rounded-full mb-4">
          Track C — Community Loan Program
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
          For Visionary Donors: $50,000 · $100,000 · $150,000
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          Large-scale giving should work for both the donor and the community.
          Our three loan structures let you contribute on your own financial terms —
          whether you want your capital back, maximum tax efficiency, or a modest return.
        </p>
      </div>

      {/* Step 1: Choose Loan Type */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4 text-center">
          Step 1 — Choose Your Loan Structure
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loanTypes.map((loan) => (
            <button
              key={loan.id}
              onClick={() => setActiveLoan(loan.id)}
              className={`text-left rounded-2xl border-2 p-5 transition-all duration-300 ${
                activeLoan === loan.id
                  ? `${loan.border} ${loan.bgColor} shadow-lg -translate-y-1`
                  : 'border-light bg-white hover:border-light/80 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{loan.icon}</span>
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    activeLoan === loan.id ? `${loan.border} ${loan.activeBg}` : 'border-light'
                  }`}
                />
              </div>
              <div className={`text-lg font-heading font-bold mb-0.5 ${activeLoan === loan.id ? loan.color : 'text-charcoal'}`}>
                {loan.name}
              </div>
              <div className="font-devanagari text-xs text-muted mb-2">{loan.sanskrit}</div>
              <div className="text-sm font-semibold text-charcoal mb-2">{loan.subtitle}</div>
              <p className="text-xs text-muted leading-relaxed italic">{loan.tagline}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Choose Term */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4 text-center">
          Step 2 — Choose Your Term
        </p>
        <div className="flex justify-center gap-4">
          {terms.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTerm(t)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeTerm === t
                  ? `${activeType.activeBg} text-white shadow-md`
                  : 'bg-ivory border border-light text-charcoal hover:border-saffron/40'
              }`}
            >
              {t} Years
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Choose Amount */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-4 text-center">
          Step 3 — Choose Your Amount
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {amounts.map((a) => (
            <button
              key={a}
              onClick={() => setActiveAmount(a)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeAmount === a
                  ? `${activeType.activeBg} text-white shadow-md`
                  : 'bg-ivory border border-light text-charcoal hover:border-saffron/40'
              }`}
            >
              {fmt(a)}
            </button>
          ))}
          <button className="px-8 py-3 rounded-full font-bold text-sm bg-ivory border border-dashed border-muted text-muted hover:border-saffron/40 hover:text-charcoal transition-all">
            Custom →
          </button>
        </div>
      </div>

      {/* Live Result Card */}
      <div className="max-w-lg mx-auto mb-10">
        <ResultTable loanType={activeLoan} amount={activeAmount} term={activeTerm} />
      </div>

      {/* Full Detail Panel */}
      <div className={`rounded-2xl border ${activeType.border} ${activeType.bgColor} p-8 mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div>
            <h4 className={`font-heading font-bold text-lg mb-4 ${activeType.color}`}>
              {activeType.icon} {activeType.name} — What You Get
            </h4>
            <ul className="space-y-3">
              {activeType.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <Check size={15} className={`${activeType.color} mt-0.5 shrink-0`} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For + Tax Note */}
          <div className="space-y-5">
            <div>
              <h4 className="font-heading font-bold text-base text-charcoal mb-2">
                🎯 Ideal For
              </h4>
              <p className="text-sm text-muted leading-relaxed">{activeType.idealFor}</p>
            </div>

            <div>
              <button
                onClick={() => setShowTaxNote(!showTaxNote)}
                className="flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-saffron transition-colors"
              >
                <Info size={14} />
                Tax Implications
                {showTaxNote ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {showTaxNote && (
                <p className="text-xs text-muted leading-relaxed mt-2 p-3 bg-white/70 rounded-xl border border-light">
                  {activeType.taxNote}{' '}
                  <span className="font-semibold">Always consult your CPA or tax advisor before structuring a large gift.</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden mb-10">
        <div className="bg-charcoal px-6 py-4">
          <h3 className="font-heading font-bold text-white text-lg">
            All-Option Comparison — {fmt(activeAmount)} Pledge
          </h3>
          <p className="text-white/60 text-sm">How each structure performs at your selected amount</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ivory border-b border-light">
                <th className="text-left px-5 py-3 font-semibold text-charcoal">Structure</th>
                {terms.map((t) => (
                  <th key={t} className={`text-center px-4 py-3 font-semibold ${activeTerm === t ? 'text-saffron' : 'text-charcoal'}`}>
                    {t}-Year {activeTerm === t && '✦'}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Nishkama rows */}
              <tr className="border-b border-light/60 bg-green/3">
                <td className="px-5 py-3 font-semibold text-green" colSpan={4}>
                  🤝 Nishkama — Interest-Free
                </td>
              </tr>
              <tr className="border-b border-light/40">
                <td className="px-5 py-2 text-muted pl-8">You receive back</td>
                {terms.map((t) => {
                  const r = calcNishkama(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-charcoal ${activeTerm === t ? 'bg-green/5' : ''}`}>{fmt(r.repaidAtEnd)}</td>
                })}
              </tr>
              <tr className="border-b border-light/60">
                <td className="px-5 py-2 text-muted pl-8">Effective gift to CHCC</td>
                {terms.map((t) => {
                  const r = calcNishkama(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-green ${activeTerm === t ? 'bg-green/5' : ''}`}>{fmt(r.effectiveGift)}</td>
                })}
              </tr>

              {/* Moksha Daan rows */}
              <tr className="border-b border-light/60 bg-turmeric/20">
                <td className="px-5 py-3 font-semibold text-saffron-dark" colSpan={4}>
                  🪔 Moksha Daan — Forgiveness Loan
                </td>
              </tr>
              <tr className="border-b border-light/40">
                <td className="px-5 py-2 text-muted pl-8">Tax deduction / year</td>
                {terms.map((t) => {
                  const r = calcMoksha(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-saffron-dark ${activeTerm === t ? 'bg-turmeric/20' : ''}`}>{fmt(r.deductionPerYear!)}</td>
                })}
              </tr>
              <tr className="border-b border-light/60">
                <td className="px-5 py-2 text-muted pl-8">Total tax deduction</td>
                {terms.map((t) => {
                  const r = calcMoksha(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-charcoal ${activeTerm === t ? 'bg-turmeric/20' : ''}`}>{fmt(r.totalDeduction!)}</td>
                })}
              </tr>
              <tr className="border-b border-light/60">
                <td className="px-5 py-2 text-muted pl-8">CHCC repays at end</td>
                {terms.map((t) => (
                  <td key={t} className={`text-center px-4 py-2 font-semibold text-charcoal ${activeTerm === t ? 'bg-turmeric/20' : ''}`}>$0 ✓</td>
                ))}
              </tr>

              {/* Vriddhi rows */}
              <tr className="border-b border-light/60 bg-teak/5">
                <td className="px-5 py-3 font-semibold text-teak" colSpan={4}>
                  📈 Vriddhi — Deferred Interest (4%)
                </td>
              </tr>
              <tr className="border-b border-light/40">
                <td className="px-5 py-2 text-muted pl-8">CHCC repays at end</td>
                {terms.map((t) => {
                  const r = calcVriddhi(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-teak ${activeTerm === t ? 'bg-teak/5' : ''}`}>{fmt(r.repaidAtEnd)}</td>
                })}
              </tr>
              <tr>
                <td className="px-5 py-2 text-muted pl-8">Interest earned</td>
                {terms.map((t) => {
                  const r = calcVriddhi(activeAmount, t)
                  return <td key={t} className={`text-center px-4 py-2 font-semibold text-charcoal ${activeTerm === t ? 'bg-teak/5' : ''}`}>{fmt(r.totalReturn!)}</td>
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Naming Rights */}
      <div className="bg-charcoal rounded-2xl p-8 mb-10 text-white">
        <h3 className="font-heading font-bold text-xl mb-2">
          🏛️ Permanent Naming Rights — Your Legacy in Stone
        </h3>
        <p className="text-white/60 text-sm mb-6">
          Every Community Loan donor receives a permanent named dedication in the CHCC facility, regardless of loan structure chosen.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { amount: '$50,000', space: 'Named Dance Studio, Kalari Arena, or Ayurvedic Suite' },
            { amount: '$100,000', space: 'Named Wing — Aum School, Wellness Wing, or Gaushala' },
            { amount: '$150,000', space: 'Named Hall — Auditorium, Community Center, or Outdoor Pavilion' },
            { amount: '$250,000+', space: 'Lead Campus Naming — Entire Building or Main Entrance' },
          ].map(({ amount, space }) => (
            <div key={amount} className="bg-white/8 border border-white/15 rounded-xl p-4">
              <div className="text-saffron font-heading font-bold text-lg mb-1">{amount}</div>
              <div className="text-white/70 text-xs leading-relaxed">{space}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-muted text-sm mb-5">
          Ready to begin? Our development team will walk you through the pledge agreement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Schedule a Pledge Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-bold px-8 py-4 rounded-full transition-all"
          >
            Download Pledge Agreement (PDF)
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          Pledge amounts activated within 30 days of CHCC's permanent facility being identified. All structures governed by a signed pledge agreement. Consult your financial advisor.
        </p>
      </div>
    </div>
  )
}
