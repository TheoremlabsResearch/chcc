'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Calendar, Users, TrendingUp } from 'lucide-react'

interface PledgeOption {
  id: string
  name: string
  sanskrit: string
  monthlyAmount: number
  annualAmount: number
  term: string
  icon: React.ReactNode
  color: string
  bgColor: string
  borderColor: string
  description: string
  benefits: string[]
  impact: string
}

const pledgeOptions: PledgeOption[] = [
  {
    id: 'pratibaddha',
    name: 'Pratibaddha',
    sanskrit: 'प्रतिबद्ध',
    monthlyAmount: 21,
    annualAmount: 252,
    term: '3-Year Pledge',
    icon: <Calendar size={20} />,
    color: 'text-green',
    bgColor: 'bg-green/5',
    borderColor: 'border-green/30',
    description: 'Start small, stay committed. Perfect for individuals beginning their CHCC journey.',
    benefits: [
      'Monthly giving at $21/month',
      'Annual giving statement for taxes',
      'Recognition in quarterly newsletter',
      'Free attendance at community events',
    ],
    impact: 'Your 3-year pledge funds one full Aum School scholarship.',
  },
  {
    id: 'samarpan',
    name: 'Samarpan',
    sanskrit: 'समर्पण',
    monthlyAmount: 51,
    annualAmount: 612,
    term: '5-Year Pledge',
    icon: <Users size={20} />,
    color: 'text-saffron-dark',
    bgColor: 'bg-turmeric/30',
    borderColor: 'border-saffron/40',
    description: 'Deep commitment from families and professionals who want to see CHCC grow.',
    benefits: [
      'Monthly giving at $51/month',
      'Dedicated family recognition',
      'Priority program registration',
      'Invitation to annual donor gala',
      'Named in Heritage Wall directory',
    ],
    impact: 'Your 5-year pledge helps build one yoga studio facility.',
  },
  {
    id: 'drishti',
    name: 'Drishti',
    sanskrit: 'दृष्टि',
    monthlyAmount: 108,
    annualAmount: 1296,
    term: '7-Year Legacy Pledge',
    icon: <TrendingUp size={20} />,
    color: 'text-teak',
    bgColor: 'bg-teak/5',
    borderColor: 'border-teak/30',
    description: 'Vision-level giving for community champions who want to leave a lasting legacy.',
    benefits: [
      'Monthly giving at $108/month',
      'Named family dedication on campus',
      'Seat at advisory roundtable',
      'Annual private leadership briefing',
      'Permanent legacy recognition',
      'VIP access to all CHCC programming',
    ],
    impact: 'Your 7-year legacy pledge funds the entire Gaushala sanctuary buildout.',
  },
]

export default function PledgeProgram() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-turmeric/50 text-teak text-sm font-semibold px-4 py-2 rounded-full mb-4">
          <Calendar size={14} />
          Track B — Community Pledge Program
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
          Make a Recurring Commitment
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Spread your giving over time. Multi-year pledges provide the stable, predictable funding that allows us to break ground and build confidently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pledgeOptions.map((option) => (
          <div
            key={option.id}
            className={`rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
              selected === option.id
                ? `${option.borderColor} ${option.bgColor} shadow-card-hover -translate-y-1`
                : 'border-light bg-white hover:shadow-card hover:-translate-y-0.5'
            }`}
            onClick={() => setSelected(selected === option.id ? null : option.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${option.bgColor} ${option.borderColor} border flex items-center justify-center ${option.color}`}>
                {option.icon}
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${option.bgColor} ${option.color}`}>
                {option.term}
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-charcoal mb-0.5">{option.name}</h3>
            <div className="font-devanagari text-sm text-muted mb-3">{option.sanskrit}</div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-heading font-bold text-charcoal">${option.monthlyAmount}</span>
              <span className="text-muted text-sm">/month</span>
              <span className="text-xs text-muted ml-2">(${option.annualAmount}/yr)</span>
            </div>

            <p className="text-sm text-muted mb-4 leading-relaxed">{option.description}</p>

            <ul className="space-y-2 mb-5">
              {option.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-charcoal">
                  <Check size={14} className={`${option.color} mt-0.5 flex-shrink-0`} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className={`p-3 rounded-xl ${option.bgColor} border ${option.borderColor} mb-4`}>
              <p className={`text-xs font-semibold ${option.color}`}>
                💡 {option.impact}
              </p>
            </div>

            <div
              className={`w-4 h-4 rounded-full border-2 mx-auto transition-all ${
                selected === option.id
                  ? `border-saffron bg-saffron`
                  : 'border-light'
              }`}
            />
          </div>
        ))}
      </div>

      {selected && (
        <div className="bg-turmeric/30 border border-saffron/30 rounded-2xl p-6 text-center animate-fade-in">
          <p className="text-charcoal font-semibold mb-4">
            Ready to start your{' '}
            <span className="text-saffron">
              {pledgeOptions.find((p) => p.id === selected)?.name}
            </span>{' '}
            pledge?
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-3 rounded-full shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Set Up My Pledge
          </Link>
          <p className="text-xs text-muted mt-3">
            Cancel or modify anytime. Secure processing. 100% goes to CHCC.
          </p>
        </div>
      )}

      {!selected && (
        <div className="text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-3 rounded-full shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Choose a Pledge Level
          </Link>
        </div>
      )}
    </div>
  )
}
