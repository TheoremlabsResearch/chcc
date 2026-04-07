import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investor Case — CHCC Community Loan Program',
  description:
    'The financial case for the Charlotte Hindu Community Center: 9 revenue streams, $3.2M projected Year 3 revenue, 2.8× loan repayment coverage, and operational self-sufficiency by Year 2.',
}

const marketData = [
  { metric: 'Indian-Americans in Greater Charlotte', value: '80,000+' },
  { metric: 'Indian-Americans in South Charlotte Corridor', value: '~40,000' },
  { metric: 'Median Household Income (South Charlotte)', value: '$140K–$175K' },
  { metric: 'Advanced degrees (Indian-American households)', value: '72%' },
  { metric: 'Annual household charitable giving (est.)', value: '$3K–$12K' },
  { metric: 'Dedicated Hindu community centers in Charlotte', value: 'Zero' },
]

const revenueStreams = [
  { stream: 'Aum School Tuition (50 → 100 → 200 students)', y1: '$400,000', y2: '$900,000', y3: '$1,600,000', note: '$8,000/student — below private school avg of $14K–$22K in South Charlotte' },
  { stream: 'Yoga & Wellness Memberships + Drop-In', y1: '$120,000', y2: '$220,000', y3: '$350,000', note: '$80/month — below Lifetime Fitness ($100+) and boutique studios ($150+)' },
  { stream: 'Ayurvedic Treatments (clinic)', y1: '$60,000', y2: '$110,000', y3: '$180,000', note: '6 treatment rooms; partnered with NAMA-certified practitioners' },
  { stream: 'Heritage Arts Programs', y1: '$80,000', y2: '$145,000', y3: '$220,000', note: 'Dance, music, martial arts — all instructors community volunteers initially' },
  { stream: 'Gaushala Programs (Meet & Feed, A2 CSA)', y1: '$45,000', y2: '$100,000', y3: '$180,000', note: 'S3 Gaushala (Memphis) generates $180K+/year from 15 cows — our conservative benchmark' },
  { stream: 'Sattvic Food Court & Juice Bar', y1: '$90,000', y2: '$180,000', y3: '$300,000', note: '100 covers/day × $9 avg × 330 days — conservative for captive audience' },
  { stream: 'Vedic Retail Store', y1: '$30,000', y2: '$65,000', y3: '$120,000', note: 'Curated Ayurvedic products, books, puja supplies — plus e-commerce extension' },
  { stream: 'Event Rentals (auditorium, studios)', y1: '$40,000', y2: '$90,000', y3: '$150,000', note: '500-seat auditorium rented for weddings, graduations, corporate events' },
  { stream: 'Corporate Wellness Partnerships', y1: '$25,000', y2: '$60,000', y3: '$100,000', note: 'B2B wellness programs for Charlotte\'s tech and finance employers' },
]

const expenses = [
  { category: 'Facility Lease / Occupancy', y1: '$200,000', y2: '$220,000', y3: '$240,000' },
  { category: 'Staff Salaries & Benefits (10 → 18 → 28 FTE)', y1: '$500,000', y2: '$720,000', y3: '$960,000' },
  { category: 'Program Delivery & Supplies', y1: '$60,000', y2: '$90,000', y3: '$130,000' },
  { category: 'Marketing & Community Outreach', y1: '$30,000', y2: '$40,000', y3: '$50,000' },
  { category: 'Insurance, Legal & Compliance', y1: '$25,000', y2: '$28,000', y3: '$30,000' },
  { category: 'Utilities, Maintenance & IT', y1: '$35,000', y2: '$45,000', y3: '$55,000' },
]

const risks = [
  { risk: 'Aum School enrollment below target', likelihood: 'Low', mitigation: '40,000+ Indian families in South Charlotte; waitlist expected within 6 months' },
  { risk: 'Wellness revenue below projection', likelihood: 'Low', mitigation: 'Pre-launch membership drive; founding member pricing locks in 200+ members' },
  { risk: 'Facility cost overrun', likelihood: 'Medium', mitigation: '6-month operating reserve ($120,000) in capital budget; phased build-out' },
  { risk: 'Key staff departure', likelihood: 'Low', mitigation: 'Competitive salaries; mission-driven hiring; 3-year employment contracts for principals' },
  { risk: 'Economic downturn reducing memberships', likelihood: 'Medium', mitigation: 'Diverse revenue (9 streams); Aum School tuition is "sticky" — parents don\'t withdraw mid-year' },
  { risk: 'CHCC unable to repay loans', likelihood: 'Very Low', mitigation: '$2.5M cumulative surplus by Year 3 covers $900K max loan obligation 2.8×' },
]

const comparables = [
  { institution: 'JCC Greater Boston', founded: '1970', revenue: '$22M+ (Year 5)', status: 'Mortgage-free' },
  { institution: 'S3 Gaushala, Memphis', founded: '2015', revenue: '$600K+ (single program)', status: 'Fully self-sustaining' },
  { institution: 'Keshavam, DC', founded: '2018', revenue: '$1.2M+ (no facility)', status: 'Zero debt' },
  { institution: 'Hindu Temple of NC (Charlotte)', founded: '1987', revenue: '$1.8M+', status: 'Mortgage retired Year 9' },
  { institution: 'CHCC (projected)', founded: '2026', revenue: '$3.2M (Year 3)', status: 'Loan-free by Year 5', highlight: true },
]

const timeline = [
  { year: '2025', phase: 'Capital Campaign', milestone: '100 founding donors; $500K raised; nonprofit established', position: '($2,000,000) invested' },
  { year: '2026 Q1', phase: 'Soft Open', milestone: 'Interim facility leased; Aum School launches (50 students); wellness classes begin', position: 'Break-even operations' },
  { year: '2026 Q4', phase: 'Full Operations', milestone: '100+ Aum School students; Gaushala Phase 1; Sattvic kitchen open', position: '$40K surplus' },
  { year: '2027', phase: 'Profitable', milestone: '150 students; Gaushala at capacity; yoga memberships at 250+', position: '$727K surplus' },
  { year: '2028', phase: 'Loan Repayment', milestone: 'All Nishkama loans repaid; Vriddhi first repayments; $2M+ cumulative surplus', position: '$1.7M+ surplus' },
  { year: '2029', phase: 'Scale & Endowment', milestone: 'Permanent campus site acquisition begins; endowment seeded at $500K+', position: '$2M+ surplus/yr' },
  { year: '2030', phase: 'Self-Sustaining', milestone: 'All community loans repaid; CHCC operationally independent of all donations', position: 'Endowment-funded' },
]

export default function InvestorPage() {
  return (
    <>
      {/* ── COVER ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-facilities.jpg"
            alt="CHCC 5-acre campus vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-4 pt-24 pb-16 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teak/30 border border-teak/50 text-amber-300 text-sm font-bold px-5 py-2 rounded-full mb-8">
            Confidential — For Qualified Donors & Community Loan Participants
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">
            The Investment<br />
            <span className="text-saffron">Case for CHCC</span>
          </h1>
          <p className="text-xl text-white/80 mb-3">
            Why This Project Will Be Profitable — and How We Repay Every Dollar
          </p>
          <p className="text-white/50 text-base max-w-3xl mx-auto mb-10">
            CHCC is not a charity that needs perpetual donations to survive. It is a revenue-generating civic institution designed to reach operational self-sufficiency by Year 2 and full profitability by Year 3.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { n: '$2M', l: 'Phase 1 Capital' },
              { n: '9', l: 'Revenue Streams' },
              { n: 'Year 2', l: 'Break-Even' },
              { n: '$2.5M', l: 'Cumulative Surplus (Yr 3)' },
              { n: '2.8×', l: 'Loan Coverage Ratio' },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-saffron">{s.n}</div>
                <div className="text-white/60 text-xs mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTOR OVERVIEW IMAGE ── */}
      <section className="bg-charcoal py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-3">Investor & Donor Brief</h2>
            <p className="text-white/60">Detailed financials, pledge options, and naming opportunities</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/images/overview-investor.png"
              alt="CHCC investor brief — financial projections, loan structures, and naming rights"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── CORE ARGUMENT ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                The Core Argument
              </h2>
            </div>
            <div className="bg-gradient-to-br from-turmeric/40 to-saffron/10 border-l-4 border-saffron rounded-2xl p-8 mb-10">
              <p className="text-lg text-charcoal leading-relaxed">
                CHCC is a <strong>revenue-generating civic institution</strong> backed by a $2 million capital campaign and designed to reach operational self-sufficiency by Year 2 and full profitability by Year 3. Every dollar raised funds infrastructure that directly generates recurring earned revenue — school tuition, wellness memberships, food programs, event rentals — across <strong>9 distinct income streams</strong>. Community loan donors will be repaid in full. The center will carry no debt by Year 5 and is projected to generate a <strong>$1.7M+ annual surplus</strong> by Year 3.
              </p>
            </div>

            {/* Market Gap */}
            <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden mb-10">
              <div className="bg-charcoal px-6 py-4">
                <h3 className="text-xl font-heading font-bold text-white">Part 1: A Market with No Competitor</h3>
                <p className="text-white/60 text-sm">South Charlotte — the epicenter of Indian-American settlement in the Carolinas</p>
              </div>
              <div className="divide-y divide-light">
                {marketData.map((row) => (
                  <div key={row.metric} className="flex items-center justify-between px-6 py-3">
                    <span className="text-muted text-sm">{row.metric}</span>
                    <span className={`font-bold text-sm ${row.value === 'Zero' ? 'text-red-500' : 'text-charcoal'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-red-50 border-t border-red-100">
                <p className="text-sm text-red-700 font-semibold">
                  The competitive gap is total. There is no purpose-built, multi-program Hindu community center in all of Mecklenburg, Union, Cabarrus, or Gaston counties.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-card h-56">
                <img src="/images/hero-about.jpg" alt="CHCC community gathering" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card h-56">
                <img src="/images/program-aum-school.jpg" alt="Aum School children learning" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVENUE MODEL ── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Part 2: The Revenue Model
            </h2>
            <p className="section-subtitle mx-auto">
              9 streams, zero dependence on donations by Year 3. CHCC is a service business, not a charity.
            </p>
          </div>

          {/* Revenue Table */}
          <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Revenue Stream</th>
                    <th className="text-right px-4 py-4 font-semibold whitespace-nowrap">Year 1</th>
                    <th className="text-right px-4 py-4 font-semibold whitespace-nowrap">Year 2</th>
                    <th className="text-right px-4 py-4 font-semibold whitespace-nowrap text-saffron">Year 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light">
                  {revenueStreams.map((r) => (
                    <tr key={r.stream} className="hover:bg-ivory transition-colors">
                      <td className="px-5 py-3">
                        <div className="font-medium text-charcoal">{r.stream}</div>
                        <div className="text-xs text-muted mt-0.5">{r.note}</div>
                      </td>
                      <td className="text-right px-4 py-3 font-semibold text-charcoal whitespace-nowrap">{r.y1}</td>
                      <td className="text-right px-4 py-3 font-semibold text-charcoal whitespace-nowrap">{r.y2}</td>
                      <td className="text-right px-4 py-3 font-bold text-saffron whitespace-nowrap">{r.y3}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-turmeric/20 border-t-2 border-saffron/30">
                  <tr>
                    <td className="px-5 py-4 font-heading font-bold text-charcoal">Total Earned Revenue</td>
                    <td className="text-right px-4 py-4 font-heading font-bold text-charcoal">$890,000</td>
                    <td className="text-right px-4 py-4 font-heading font-bold text-charcoal">$1,870,000</td>
                    <td className="text-right px-4 py-4 font-heading font-bold text-saffron text-lg">$3,200,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Expense Table */}
          <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden mb-8">
            <div className="bg-green/80 px-5 py-3">
              <h3 className="font-heading font-bold text-white">Operating Expense Projections</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-green/10">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-charcoal">Expense Category</th>
                    <th className="text-right px-4 py-3 font-semibold text-charcoal">Year 1</th>
                    <th className="text-right px-4 py-3 font-semibold text-charcoal">Year 2</th>
                    <th className="text-right px-4 py-3 font-semibold text-charcoal">Year 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light">
                  {expenses.map((e) => (
                    <tr key={e.category} className="hover:bg-ivory transition-colors">
                      <td className="px-5 py-3 text-charcoal">{e.category}</td>
                      <td className="text-right px-4 py-3 text-muted">{e.y1}</td>
                      <td className="text-right px-4 py-3 text-muted">{e.y2}</td>
                      <td className="text-right px-4 py-3 text-muted">{e.y3}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-green/5 border-t-2 border-green/20">
                  <tr>
                    <td className="px-5 py-4 font-heading font-bold text-charcoal">Total Operating Expenses</td>
                    <td className="text-right px-4 py-4 font-bold text-charcoal">$850,000</td>
                    <td className="text-right px-4 py-4 font-bold text-charcoal">$1,143,000</td>
                    <td className="text-right px-4 py-4 font-bold text-charcoal">$1,465,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Surplus Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: 'Year 1', revenue: '$890,000', expenses: '$850,000', surplus: '$40,000', desc: 'Near break-even — CHCC covers its own operations from Day 1 of full programming.', color: 'border-muted/30 bg-ivory' },
              { year: 'Year 2', revenue: '$1,870,000', expenses: '$1,143,000', surplus: '$727,000', desc: 'Begins Vriddhi loan repayments and builds operating reserve.', color: 'border-green/30 bg-green/5' },
              { year: 'Year 3', revenue: '$3,200,000', expenses: '$1,465,000', surplus: '$1,735,000', desc: 'Fully self-sustaining, repaying all community loans, funding endowment.', color: 'border-saffron/40 bg-turmeric/15' },
            ].map((y) => (
              <div key={y.year} className={`rounded-2xl border-2 p-6 ${y.color}`}>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-4">{y.year}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between"><span className="text-muted">Revenue</span><span className="font-semibold text-charcoal">{y.revenue}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Expenses</span><span className="font-semibold text-charcoal">{y.expenses}</span></div>
                  <div className="h-px bg-light my-2" />
                  <div className="flex justify-between"><span className="font-bold text-charcoal">Net Surplus</span><span className="font-heading font-bold text-saffron text-lg">{y.surplus}</span></div>
                </div>
                <p className="text-xs text-muted leading-relaxed">{y.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOAN REPAYMENT ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Part 3: Loan Repayment — Every Dollar Returned
            </h2>
            <p className="section-subtitle mx-auto">
              Assuming $800K in community loans raised in Phase 1.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="text-left px-5 py-4">Obligation</th>
                    <th className="text-right px-4 py-4">Amount</th>
                    <th className="text-right px-4 py-4">Due By</th>
                    <th className="text-left px-4 py-4">Funded From</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light">
                  {[
                    { ob: 'Nishkama principal (0% interest-free)', amount: '$300,000', due: 'Year 3–5 (donor\'s choice)', from: 'Year 2–3 surplus' },
                    { ob: 'Vriddhi principal + 4% interest', amount: '$500,000 + $80,000', due: 'Year 3–7 (balloon at term)', from: 'Year 3 surplus / reserves' },
                    { ob: 'Moksha Daan (already donated — forgiven annually)', amount: 'N/A', due: 'Annual tranches', from: 'No repayment required' },
                  ].map((row) => (
                    <tr key={row.ob} className="hover:bg-ivory transition-colors">
                      <td className="px-5 py-3 text-charcoal">{row.ob}</td>
                      <td className="text-right px-4 py-3 font-semibold text-charcoal whitespace-nowrap">{row.amount}</td>
                      <td className="text-right px-4 py-3 text-muted whitespace-nowrap">{row.due}</td>
                      <td className="px-4 py-3 text-green font-medium">{row.from}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-turmeric/20 border-t-2 border-saffron/30">
                  <tr>
                    <td className="px-5 py-4 font-heading font-bold text-charcoal">Total Loan Obligation (worst case)</td>
                    <td className="text-right px-4 py-4 font-heading font-bold text-charcoal">$880,000</td>
                    <td className="text-right px-4 py-4 text-muted">By Year 7</td>
                    <td className="px-4 py-4 text-green font-bold">Covered by $2.5M cumulative surplus</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green/10 to-green/5 border-2 border-green/30 rounded-2xl p-6">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">Repayment Confidence</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                The $2,502,000 cumulative surplus by end of Year 3 <strong className="text-charcoal">exceeds all loan obligations by 2.8×</strong> — even under conservative revenue assumptions. CHCC can repay every dollar lent without touching capital campaign funds or endowment.
              </p>
              <div className="flex items-center gap-3 bg-green/10 rounded-xl px-4 py-3">
                <CheckCircle size={18} className="text-green flex-shrink-0" />
                <span className="text-sm text-charcoal font-semibold">Coverage ratio: 2.8× — confirmed viable</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-turmeric/20 to-saffron/10 border-2 border-saffron/30 rounded-2xl p-6">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">Stress Test (30% Revenue Shortfall)</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Even if revenue comes in 30% below projections across all three years:
              </p>
              <div className="space-y-2 text-sm">
                {[
                  'Year 3 total revenue: $2,240,000 (vs. projected $3.2M)',
                  'Year 3 net surplus: $775,000',
                  'Cumulative 3-year surplus: ~$900,000',
                  'Nishkama loans repaid in full; Vriddhi repaid by Year 5',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-saffron mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATH TO PROFITABILITY ── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Part 4: Path to Profitability
            </h2>
          </div>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={t.year} className={`rounded-2xl border p-5 flex flex-col md:flex-row md:items-center gap-4 ${i >= 3 ? 'border-saffron/30 bg-turmeric/10' : 'border-light bg-white shadow-sm'}`}>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-heading font-bold text-saffron">{t.year}</div>
                  <div className="text-xs text-muted">{t.phase}</div>
                </div>
                <div className="h-px md:h-10 md:w-px bg-light flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-charcoal">{t.milestone}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className={`text-sm font-bold ${i >= 3 ? 'text-saffron' : 'text-muted'}`}>{t.position}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-charcoal font-semibold text-lg">
              CHCC reaches full profitability in <span className="text-saffron">Year 3 (2028)</span> and is loan-free by <span className="text-saffron">Year 5 (2030)</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── RISK MITIGATION ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Part 5: Risk Mitigation
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-card border border-light overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="text-left px-5 py-4">Risk</th>
                    <th className="text-center px-4 py-4">Likelihood</th>
                    <th className="text-left px-4 py-4">Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light">
                  {risks.map((r) => (
                    <tr key={r.risk} className="hover:bg-ivory transition-colors">
                      <td className="px-5 py-3 font-medium text-charcoal">{r.risk}</td>
                      <td className="text-center px-4 py-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          r.likelihood === 'Low' ? 'bg-green/10 text-green' :
                          r.likelihood === 'Medium' ? 'bg-saffron/10 text-saffron-dark' :
                          'bg-green/10 text-green'
                        }`}>
                          {r.likelihood}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted">{r.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Board accountability */}
          <div className="mt-6 bg-ivory border border-light rounded-2xl p-6">
            <h3 className="font-heading font-bold text-charcoal mb-4 flex items-center gap-2">
              <Shield size={18} className="text-green" />
              Board Accountability
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Finance Committee reviews all expenditures over $5,000',
                'Annual CPA audit; results published within 90 days of fiscal year end',
                'All community loan repayments governed by signed pledge agreements — legally binding',
                'Vriddhi ($100K+) lenders receive quarterly financial reports and Advisory Council seats',
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={13} className="text-green mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARABLES ── */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Part 6: Proven Institutions. Proven Model.
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              CHCC is not a speculative bet — it is the next inevitable institution in a market underserved for 30 years.
            </p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/20">
                  <tr>
                    <th className="text-left px-5 py-4 text-white/80 font-semibold">Institution</th>
                    <th className="text-center px-4 py-4 text-white/80 font-semibold">Founded</th>
                    <th className="text-right px-4 py-4 text-white/80 font-semibold">Revenue</th>
                    <th className="text-left px-4 py-4 text-white/80 font-semibold">Debt Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparables.map((c) => (
                    <tr key={c.institution} className={c.highlight ? 'bg-saffron/20 border-l-4 border-saffron' : 'hover:bg-white/5 transition-colors'}>
                      <td className={`px-5 py-4 font-semibold ${c.highlight ? 'text-saffron' : 'text-white'}`}>{c.institution}</td>
                      <td className="text-center px-4 py-4 text-white/70">{c.founded}</td>
                      <td className={`text-right px-4 py-4 font-bold ${c.highlight ? 'text-saffron' : 'text-white'}`}>{c.revenue}</td>
                      <td className="px-4 py-4 text-green-300">{c.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 KEY NUMBERS ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              The Investment Case in 5 Numbers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { n: '$2,000,000', l: 'Total Capital Raised (Phase 1)' },
              { n: '~40,000', l: 'Addressable Market — South Charlotte Indian-Americans' },
              { n: 'Year 2', l: 'Break-Even Year (2027)' },
              { n: '$2,502,000', l: 'Cumulative Surplus by Year 3' },
              { n: '2.8×', l: 'Loan Repayment Coverage Ratio' },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-2xl shadow-card border border-light p-6 text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-saffron mb-2">{s.n}</div>
                <div className="text-xs text-muted leading-snug">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-turmeric/30 to-ivory border border-saffron/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl font-heading italic text-charcoal leading-relaxed mb-4">
              "We are not asking the community to fund a dream. We are asking them to seed an institution that will serve their grandchildren — and pay them back."
            </blockquote>
            <p className="text-sm font-semibold text-muted">— CHCC Board of Directors</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad bg-gradient-to-r from-charcoal via-green-dark to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/facility-outdoor.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-pad relative z-10 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to Invest in Charlotte's Future?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Our development team is available for a confidential 30-minute consultation to discuss the Community Loan Program, pledge structures, and naming opportunities tailored to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm text-lg transition-all hover:-translate-y-1">
              <Heart size={20} className="fill-current" />
              Schedule a Consultation
            </Link>
            <Link href="/brochure" className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:border-saffron hover:text-saffron font-bold px-8 py-4 rounded-full text-lg transition-all">
              View Fundraising Brochure
              <ArrowRight size={18} />
            </Link>
            <Link href="/donate" className="inline-flex items-center gap-2 border-2 border-white/30 text-white/80 hover:border-white hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
              Donate Directly
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Document prepared for community leaders, major donors, and Community Loan Program participants. Financial projections based on comparable institution benchmarks and South Charlotte market analysis.
          </p>
        </div>
      </section>
    </>
  )
}
