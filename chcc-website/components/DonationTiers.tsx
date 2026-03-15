'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'

interface Tier {
  name: string
  sanskrit: string
  amount: number
  icon: string
  color: string
  bgColor: string
  borderColor: string
  featured?: boolean
  benefits: string[]
  dedication?: string
}

const tiers: Tier[] = [
  {
    name: 'Seed Supporter',
    sanskrit: 'बीज दाता',
    amount: 108,
    icon: '🌱',
    color: 'text-green',
    bgColor: 'bg-green/5',
    borderColor: 'border-green/20',
    benefits: [
      'Digital certificate of appreciation',
      'Monthly e-newsletter',
      'Name in Annual Report',
      'Access to donor updates',
    ],
    dedication: 'Plant the seed of dharma',
  },
  {
    name: 'Community Friend',
    sanskrit: 'मित्र',
    amount: 251,
    icon: '🤝',
    color: 'text-teak',
    bgColor: 'bg-turmeric/30',
    borderColor: 'border-teak/20',
    benefits: [
      'All Seed benefits',
      'Priority event registration',
      'CHCC branded gift',
      'Quarterly impact report',
    ],
    dedication: 'Be a pillar of community',
  },
  {
    name: 'Wellness Patron',
    sanskrit: 'स्वास्थ्य दाता',
    amount: 501,
    icon: '🧘',
    color: 'text-saffron-dark',
    bgColor: 'bg-saffron/5',
    borderColor: 'border-saffron/30',
    benefits: [
      'All Community Friend benefits',
      'Free yoga class series',
      'Invitation to exclusive donor events',
      'Personalized thank-you call',
    ],
    dedication: 'Nurture health & wellbeing',
  },
  {
    name: 'Heritage Guardian',
    sanskrit: 'विरासत संरक्षक',
    amount: 1001,
    icon: '🏛️',
    color: 'text-saffron',
    bgColor: 'bg-saffron/10',
    borderColor: 'border-saffron',
    featured: true,
    benefits: [
      'All Wellness Patron benefits',
      'Name on Heritage Wall',
      'Private campus tour (when built)',
      'Special recognition at events',
      'Dedicated family seat at inaugural',
    ],
    dedication: 'Preserve culture for generations',
  },
  {
    name: 'Sewa Champion',
    sanskrit: 'सेवा नायक',
    amount: 2500,
    icon: '⭐',
    color: 'text-green-dark',
    bgColor: 'bg-green/10',
    borderColor: 'border-green/40',
    benefits: [
      'All Heritage Guardian benefits',
      'Named program sponsorship',
      'Social media recognition',
      'VIP access to all CHCC events',
      'Personal meeting with leadership',
    ],
    dedication: 'Champion service to all',
  },
  {
    name: 'Founding Pillar',
    sanskrit: 'संस्थापक स्तंभ',
    amount: 5001,
    icon: '🏆',
    color: 'text-teak',
    bgColor: 'bg-teak/5',
    borderColor: 'border-teak/30',
    benefits: [
      'All Sewa Champion benefits',
      'Named room / facility dedication',
      'Permanent legacy recognition',
      'Board invitation to key events',
      'Annual leadership dinner',
    ],
    dedication: 'Become a founding cornerstone',
  },
  {
    name: 'Visionary Benefactor',
    sanskrit: 'दूरदृष्टा',
    amount: 10001,
    icon: '💫',
    color: 'text-saffron-dark',
    bgColor: 'bg-gradient-to-br from-turmeric/50 to-saffron/10',
    borderColor: 'border-saffron-dark/40',
    benefits: [
      'All Founding Pillar benefits',
      'Named wing / outdoor space',
      'Advisory council seat',
      'Lifetime VIP membership',
      'Annual impact presentation',
    ],
    dedication: 'Shape the vision for decades',
  },
  {
    name: 'Dharma Legacy',
    sanskrit: 'धर्म विरासत',
    amount: 25000,
    icon: '🌺',
    color: 'text-charcoal',
    bgColor: 'bg-gradient-to-br from-charcoal/5 to-saffron/10',
    borderColor: 'border-charcoal/30',
    benefits: [
      'All Visionary Benefactor benefits',
      'Major facility naming rights',
      'Permanent bronze plaque',
      'Legacy recognition in perpetuity',
      'Invitation to co-design phase',
      'Featured in all CHCC media',
    ],
    dedication: 'Leave a dharmic legacy forever',
  },
]

interface DonationTiersProps {
  compact?: boolean
}

export default function DonationTiers({ compact = false }: DonationTiersProps) {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  if (compact) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tiers.slice(0, 4).map((tier) => (
          <Link
            key={tier.name}
            href="/donate"
            className={`p-4 rounded-xl border-2 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
              tier.featured ? 'border-saffron bg-turmeric/30' : `${tier.bgColor} ${tier.borderColor}`
            }`}
          >
            <div className="text-2xl mb-2">{tier.icon}</div>
            <div className={`text-xs font-bold ${tier.color} mb-1`}>{tier.name}</div>
            <div className="text-lg font-heading font-bold text-charcoal">
              ${tier.amount.toLocaleString()}
            </div>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer ${
            tier.featured
              ? 'border-saffron bg-turmeric/20 shadow-warm scale-[1.02]'
              : `${tier.bgColor} ${tier.borderColor} hover:shadow-card-hover hover:-translate-y-1`
          } ${hoveredTier === tier.name ? 'shadow-card-hover -translate-y-1' : ''}`}
          onMouseEnter={() => setHoveredTier(tier.name)}
          onMouseLeave={() => setHoveredTier(null)}
        >
          {tier.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Star size={10} className="fill-current" />
              Most Popular
            </div>
          )}

          <div className="text-3xl mb-3">{tier.icon}</div>
          <div className={`text-xs font-semibold mb-1 ${tier.color}`}>{tier.name}</div>
          <div className="font-devanagari text-xs text-muted mb-2">{tier.sanskrit}</div>
          <div className="text-2xl font-heading font-bold text-charcoal mb-1">
            ${tier.amount.toLocaleString()}
          </div>
          {tier.dedication && (
            <p className="text-xs text-muted italic mb-4 leading-relaxed">{tier.dedication}</p>
          )}

          <ul className="space-y-1.5 mb-5">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-xs text-charcoal">
                <Check size={13} className={`${tier.color} mt-0.5 flex-shrink-0`} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/donate"
            className={`block text-center text-sm font-bold py-2.5 rounded-full transition-all duration-300 ${
              tier.featured
                ? 'bg-saffron hover:bg-saffron-dark text-white shadow-warm'
                : 'border-2 border-current hover:bg-current/10'
            } ${tier.color}`}
          >
            Give ${tier.amount.toLocaleString()}
          </Link>
        </div>
      ))}
    </div>
  )
}
