'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Shield, CheckCircle, ChevronDown, ChevronUp, ArrowRight, Star } from 'lucide-react'
import DonationTiers from '@/components/DonationTiers'
import PledgeProgram from '@/components/PledgeProgram'
import CommunityLoan from '@/components/CommunityLoan'

const presetAmounts = [51, 108, 251, 501, 1001, 2500]

const budgetItems = [
  { label: 'Aum School & Education', percentage: 32, color: 'bg-saffron' },
  { label: 'Gaushala Sanctuary', percentage: 22, color: 'bg-green' },
  { label: 'Wellness & Arts Programs', percentage: 18, color: 'bg-teak' },
  { label: 'Sewa & Community Outreach', percentage: 12, color: 'bg-green-dark' },
  { label: 'Operations & Admin (capped)', percentage: 10, color: 'bg-muted' },
  { label: 'Capital Reserve (Building)', percentage: 6, color: 'bg-sandalwood' },
]

const faqs = [
  {
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes! CHCC is a registered 501(c)(3) nonprofit organization (EIN: 88-XXXXXXX). All donations are tax-deductible to the extent permitted by law. You will receive an official tax receipt via email immediately after your gift.',
  },
  {
    question: 'How will my donation be used?',
    answer:
      'Donations support CHCC programs (Aum School, Yoga, Gaushala, Sewa), operational costs, and our capital campaign to purchase land and build the campus. We maintain an 87% program efficiency ratio — only 13% goes to administration.',
  },
  {
    question: 'Can I give stock, property, or assets?',
    answer:
      'Yes. Gifts of appreciated stock, real estate, or other assets can be arranged by contacting our development office at development@chcc.org. These gifts often offer significant tax advantages beyond cash donations.',
  },
  {
    question: 'What is a Donor-Advised Fund (DAF)?',
    answer:
      'A DAF is an investment account used exclusively for charitable giving. If you have a DAF through Fidelity Charitable, Schwab Charitable, or another sponsor, you can recommend grants to CHCC (EIN: 88-XXXXXXX). Contact us for the exact account details.',
  },
  {
    question: 'Can I set up a recurring monthly gift?',
    answer:
      'Absolutely. Choose "Monthly" in the donation form to set up a recurring gift that can be cancelled anytime. You can also enroll in our Track B Pledge Program for multi-year commitments with special recognition.',
  },
  {
    question: 'Is there a minimum donation?',
    answer:
      'There is no minimum donation. Even $5 is received with gratitude. Our 2498 Challenge asks for $108, and our monthly programs start at $21/month — but every amount moves us forward.',
  },
  {
    question: 'How do I include CHCC in my estate plans?',
    answer:
      'Legacy giving through wills, trusts, life insurance beneficiary designations, or IRAs is one of the most powerful ways to support CHCC in perpetuity. Contact us for a confidential consultation with our legacy planning advisor.',
  },
  {
    question: 'Can companies donate or match gifts?',
    answer:
      'Yes! Many Charlotte employers offer corporate matching gift programs. Check with your HR department to double or triple your personal gift. CHCC is registered with most major matching gift platforms including Benevity, YourCause, and Double the Donation.',
  },
]

const otherWays = [
  {
    icon: '📈',
    title: 'Appreciated Stock',
    description: 'Donate shares of stock directly and avoid capital gains taxes while receiving a deduction for full market value.',
    cta: 'Get Brokerage Details',
  },
  {
    icon: '💼',
    title: 'Donor-Advised Fund (DAF)',
    description: 'Recommend a grant from your DAF to CHCC. We accept grants from all major DAF sponsors.',
    cta: 'Get DAF Instructions',
  },
  {
    icon: '🏛️',
    title: 'Estate & Legacy Gift',
    description: 'Include CHCC in your will or trust. A legacy gift ensures our mission continues for generations.',
    cta: 'Plan Your Legacy Gift',
  },
  {
    icon: '🤝',
    title: 'In-Kind Contributions',
    description: 'Donate professional services, equipment, land, building materials, or other non-cash assets.',
    cta: 'Discuss In-Kind Giving',
  },
  {
    icon: '🔄',
    title: 'Employer Match',
    description: 'Many employers match charitable gifts 1:1 or 2:1. Ask your HR department — your gift could double instantly.',
    cta: 'Check Your Match',
  },
  {
    icon: '📱',
    title: 'Zelle / Venmo',
    description: 'Quick mobile giving. Send to payments@chcc.org via Zelle or @CHCC-Charlotte on Venmo.',
    cta: 'Get Payment Details',
  },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(108)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formStep, setFormStep] = useState<'amount' | 'details'>('amount')
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0)

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
            alt="People at community event interacting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-saffron-dark/80" />
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10" />
        <div className="container-pad relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                <Heart size={14} className="fill-current" />
                Campaign in Progress
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Help Build Charlotte&apos;s<br />
                <span className="text-white/80">Hindu Community Center</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We are raising $2 million to purchase land and break ground on our 5-acre campus. Your gift today builds tomorrow&apos;s legacy.
              </p>

              {/* Progress Bar */}
              <div className="bg-white/20 rounded-full h-5 mb-3 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                  style={{ width: '22.5%' }}
                >
                  <span className="text-xs font-bold text-saffron-dark">22.5%</span>
                </div>
              </div>
              <div className="flex justify-between text-white text-sm">
                <span className="font-bold text-white text-lg">$450,000 raised</span>
                <span className="text-white/70">$2,000,000 goal</span>
              </div>
              <div className="text-white/60 text-xs mt-1">1,847 donors · Campaign ends December 2026</div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {[
                { icon: <Shield size={20} />, label: '501(c)(3) Nonprofit', desc: 'Federally registered' },
                { icon: <CheckCircle size={20} />, label: 'Secure Giving', desc: '256-bit SSL encryption' },
                { icon: <Star size={20} className="fill-current" />, label: 'Transparent', desc: '87% program efficiency' },
                { icon: <Heart size={20} className="fill-current" />, label: 'Tax Deductible', desc: 'Receipt emailed instantly' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
                  <div className="text-saffron">{badge.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{badge.label}</div>
                    <div className="text-white/60 text-xs">{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form + Tiers */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Donation Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
                <h2 className="text-xl font-heading font-bold text-charcoal mb-5">
                  Make Your Gift
                </h2>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green" />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal text-lg mb-2">Thank You!</h3>
                    <p className="text-muted text-sm mb-4">
                      Your gift of <span className="text-saffron font-bold">${finalAmount}</span> {frequency === 'monthly' ? '/month' : ''} has been received. A tax receipt will be emailed to you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setSelectedAmount(108); setCustomAmount('') }}
                      className="text-saffron text-sm font-semibold hover:underline"
                    >
                      Make another gift
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDonate}>
                    {/* Frequency Toggle */}
                    <div className="flex bg-ivory rounded-xl p-1 mb-5">
                      <button
                        type="button"
                        onClick={() => setFrequency('one-time')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                          frequency === 'one-time'
                            ? 'bg-white text-charcoal shadow-sm'
                            : 'text-muted hover:text-charcoal'
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                          frequency === 'monthly'
                            ? 'bg-white text-charcoal shadow-sm'
                            : 'text-muted hover:text-charcoal'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>

                    {/* Preset Amounts */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}
                          className={`py-2.5 rounded-xl text-sm font-bold transition-all ${
                            selectedAmount === amount
                              ? 'bg-saffron text-white shadow-warm'
                              : 'bg-ivory border border-light text-charcoal hover:border-saffron/40'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="relative mb-5">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted font-semibold">$</span>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                        className="form-input pl-7 text-sm"
                        min="1"
                      />
                    </div>

                    {finalAmount > 0 && (
                      <div className="bg-turmeric/30 border border-saffron/20 rounded-xl p-3 mb-4 text-center">
                        <span className="text-sm text-charcoal">
                          Your gift: <span className="font-bold text-saffron text-lg">${finalAmount}</span>
                          {frequency === 'monthly' ? '/month' : ' one-time'}
                        </span>
                      </div>
                    )}

                    {/* Donor Details */}
                    <div className="space-y-3 mb-4">
                      <input type="text" placeholder="Full Name" className="form-input text-sm" required />
                      <input type="email" placeholder="Email Address" className="form-input text-sm" required />
                      <input type="text" placeholder="Card Number (demo only)" className="form-input text-sm" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder="MM/YY" className="form-input text-sm" />
                        <input type="text" placeholder="CVC" className="form-input text-sm" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                      <Heart size={18} className="fill-current" />
                      {frequency === 'monthly' ? `Give $${finalAmount}/Month` : `Donate $${finalAmount}`}
                    </button>

                    <p className="text-xs text-muted text-center mt-3">
                      🔒 Secure &amp; encrypted. Tax receipt emailed instantly.<br />
                      Cancel recurring gifts anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Track A: Donation Tiers */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-turmeric text-teak text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Track A — Grow Together
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
                  Choose Your Giving Level
                </h2>
                <p className="text-muted mb-6">
                  Eight tiers of giving — each named for the journey of a community from seed to legacy.
                </p>
                <DonationTiers />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track B: Pledge Program */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <PledgeProgram />
        </div>
      </section>

      {/* Track C: Community Loan Program */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <CommunityLoan />
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Where Your Money Goes
              </h2>
              <p className="text-muted">
                Financial transparency is a core CHCC value. Here is how every donated dollar is allocated.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="space-y-5">
                {budgetItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-charcoal">{item.label}</span>
                      <span className="font-bold text-charcoal">{item.percentage}%</span>
                    </div>
                    <div className="bg-ivory rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-700`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-light flex items-center justify-between">
                <div className="text-sm text-muted">
                  <span className="font-bold text-green text-lg">87%</span> Program Efficiency Ratio
                </div>
                <div className="text-xs text-muted">
                  CHCC maintains a best-practice overhead of ≤13%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Other Ways to Give
            </h2>
            <p className="section-subtitle mx-auto">
              Cash isn&apos;t the only way. Here are six additional paths to support CHCC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherWays.map((way) => (
              <div key={way.title} className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-2">{way.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{way.description}</p>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-saffron text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  {way.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Giving FAQs
              </h2>
              <p className="text-muted">Everything you need to know about donating to CHCC.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={faq.question} className="bg-white rounded-2xl shadow-sm border border-light overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-ivory transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                    {openFaq === idx ? (
                      <ChevronUp size={18} className="text-saffron flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-muted flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-light pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-dark to-saffron">
        <div className="container-pad text-center">
          <div className="font-devanagari text-4xl text-white/30 mb-4">ॐ</div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Every Gift Builds Something Eternal
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            A community center is not built in a day — it is built gift by gift, brick by brick, by people who believe in something larger than themselves.
          </p>
          <a href="#donate-form" className="inline-flex items-center gap-2 bg-white text-saffron-dark hover:bg-ivory font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1">
            <Heart size={18} className="fill-current" />
            Donate Today
          </a>
        </div>
      </section>
    </>
  )
}
