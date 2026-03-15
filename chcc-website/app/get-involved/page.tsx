import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Building, Users, Heart, CheckCircle } from 'lucide-react'
import VolunteerForm from '@/components/VolunteerForm'

export const metadata: Metadata = {
  title: 'Get Involved — Volunteer, Membership & Ambassador Program',
  description:
    'Join CHCC as a volunteer, ambassador, or member. Multi-step volunteer form, ambassador program details, membership tiers, and corporate partnership opportunities.',
}

const volunteerAreas = [
  {
    area: 'Education & Programs',
    icon: '📚',
    color: 'bg-green/10 border-green/20',
    accent: 'text-green',
    roles: [
      { role: 'Aum School Teaching Assistant', commitment: '8–15 hrs/week', skills: 'Education background or subject expertise' },
      { role: 'Pathashala Sunday Teacher', commitment: '3 hrs/Sunday', skills: 'Knowledge of Vedic texts, Sanskrit a plus' },
      { role: 'Youth Program Facilitator', commitment: '4–8 hrs/week', skills: 'Experience with youth ages 5–18' },
      { role: 'Yoga Instructor', commitment: 'Flexible', skills: 'RYT-200 or equivalent certification' },
    ],
  },
  {
    area: 'Gaushala & Sustainability',
    icon: '🐄',
    color: 'bg-teak/10 border-teak/20',
    accent: 'text-teak',
    roles: [
      { role: 'Cow Caretaker & Feeder', commitment: 'Morning slots (6–8am)', skills: 'Comfort with animals, reliable schedule' },
      { role: 'Gaushala Educator (Field Trips)', commitment: '1–2 visits/month', skills: 'Knowledge of Gau Seva and Indian breeds' },
      { role: 'Garden & Compost Coordinator', commitment: '3–5 hrs/week', skills: 'Gardening, organic farming knowledge' },
      { role: 'A2 Milk CSA Distribution', commitment: 'Weekends', skills: 'Organized, reliable, good with logistics' },
    ],
  },
  {
    area: 'Events & Community',
    icon: '🎉',
    color: 'bg-saffron/10 border-saffron/20',
    accent: 'text-saffron-dark',
    roles: [
      { role: 'Festival Coordinator', commitment: 'Seasonal intensive', skills: 'Event management, vendor coordination' },
      { role: 'Community Outreach Representative', commitment: '4–6 hrs/week', skills: 'Interpersonal skills, community connections' },
      { role: 'Volunteer Marshal (Events)', commitment: 'Event-based', skills: 'Leadership, crowd management comfort' },
      { role: 'Photography & Videography', commitment: 'Event-based', skills: 'Photography, video editing, social media' },
    ],
  },
  {
    area: 'Sewa & Social Impact',
    icon: '🤝',
    color: 'bg-green/10 border-green/20',
    accent: 'text-green-dark',
    roles: [
      { role: 'Food Drive Organizer', commitment: 'Monthly coordination', skills: 'Logistics, partnerships with food banks' },
      { role: 'Disaster Relief Team Lead', commitment: 'On-call, project-based', skills: 'Emergency management or logistics' },
      { role: 'Youth Mentor', commitment: '2–4 hrs/month per mentee', skills: 'Professional, background check required' },
      { role: 'Senior Oasis Companion', commitment: '2 hrs/week', skills: 'Patience, empathy, bilingual a plus' },
    ],
  },
  {
    area: 'Operations & Professional',
    icon: '💼',
    color: 'bg-charcoal/5 border-charcoal/20',
    accent: 'text-charcoal',
    roles: [
      { role: 'Accounting & Finance Volunteer', commitment: 'Quarterly (tax time)', skills: 'CPA or accounting background' },
      { role: 'Legal Advisory (Pro Bono)', commitment: 'As needed', skills: 'Nonprofit law, employment, real estate' },
      { role: 'Marketing & Social Media', commitment: '5–8 hrs/week', skills: 'Content creation, design, analytics' },
      { role: 'Web & Technology Support', commitment: 'Project-based', skills: 'Web development, IT infrastructure' },
    ],
  },
]

const membershipTiers = [
  {
    tier: 'Individual',
    amount: 150,
    period: '/year',
    icon: '👤',
    color: 'bg-saffron/10 border-saffron/30',
    accent: 'text-saffron-dark',
    benefits: [
      'Priority program registration',
      'Member rate for events',
      'Monthly insider newsletter',
      'Digital CHCC membership card',
      'Voting rights in community decisions',
    ],
  },
  {
    tier: 'Family',
    amount: 300,
    period: '/year',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-green/10 border-green/30',
    accent: 'text-green',
    featured: true,
    benefits: [
      'All Individual benefits (up to 6 members)',
      'Aum School sibling discount (5%)',
      'Reserved seating at major events',
      'Annual family photo at Gaushala',
      'Personalized member welcome package',
    ],
  },
  {
    tier: 'Senior',
    amount: 75,
    period: '/year',
    icon: '🌅',
    color: 'bg-teak/10 border-teak/20',
    accent: 'text-teak',
    benefits: [
      'All Individual benefits',
      'Free Senior Oasis programs',
      'Transportation coordination',
      'Monthly wellness check-in call',
      'Priority Vedanta Circle seating',
    ],
  },
  {
    tier: 'Student',
    amount: 50,
    period: '/year',
    icon: '🎓',
    color: 'bg-turmeric/30 border-saffron/20',
    accent: 'text-teak',
    benefits: [
      'Full Individual benefits',
      'Free attendance at workshops',
      'Student leadership opportunities',
      'Mentorship program access',
      'Internship opportunities at CHCC',
    ],
  },
]

const corporatePartners = [
  {
    tier: 'Community Sponsor',
    amount: '$2,500/yr',
    icon: '🤝',
    benefits: ['Logo on website & event materials', 'Employee volunteer day', '2 event table sponsorships'],
  },
  {
    tier: 'Heritage Partner',
    amount: '$10,000/yr',
    icon: '⭐',
    benefits: ['Named program sponsorship', 'Annual gala table (10 seats)', 'Featured in all media', 'Employee wellness day at CHCC'],
  },
  {
    tier: 'Founding Corporate Partner',
    amount: '$25,000/yr',
    icon: '🏆',
    benefits: ['Named space on campus', 'Executive advisory seat', 'Custom employee programs', 'Permanent recognition'],
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80"
            alt="Volunteers smiling community service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Heart size={14} />
            Join the Movement
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Get Involved With <span className="text-saffron">CHCC</span>
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            There is no CHCC without community. Whether you have 2 hours or 20, a professional skill or a loving heart — there is a place for you here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="#volunteer" className="btn-primary">Volunteer Now</a>
            <a href="#membership" className="btn-secondary">Become a Member</a>
          </div>
        </div>
      </section>

      {/* Quick Impact */}
      <div className="bg-saffron py-5">
        <div className="container-pad">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { number: '200+', label: 'Active Volunteers' },
              { number: '1,200+', label: 'Sewa Hours Logged' },
              { number: '18+', label: 'Volunteer Roles' },
              { number: '0', label: 'Cost to Start Volunteering' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-heading font-bold text-2xl">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Volunteer Opportunities
            </h2>
            <p className="section-subtitle mx-auto">
              Find the role that matches your skills, schedule, and passion. All roles come with training, community, and purpose.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {volunteerAreas.map((area) => (
              <div key={area.area} className={`rounded-2xl border-2 overflow-hidden ${area.color}`}>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/50 border-b border-current/10">
                  <span className="text-4xl">{area.icon}</span>
                  <h3 className={`text-xl font-heading font-bold ${area.accent}`}>{area.area}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  {area.roles.map((roleItem) => (
                    <div key={roleItem.role} className="bg-white/70 rounded-xl p-4">
                      <div className="font-semibold text-charcoal mb-1">{roleItem.role}</div>
                      <div className="text-xs text-muted mb-1">
                        <span className="font-medium">Time:</span> {roleItem.commitment}
                      </div>
                      <div className="text-xs text-muted">
                        <span className="font-medium">Skills:</span> {roleItem.skills}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section id="ambassador" className="section-pad bg-gradient-to-br from-turmeric/40 to-ivory">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-saffron/20 text-saffron-dark text-sm font-bold px-4 py-2 rounded-full mb-5">
                <Star size={14} />
                CHCC Ambassador Program
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-5">
                Become a CHCC Ambassador
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                CHCC Ambassadors are community leaders who serve as the living extension of our mission — hosting small gatherings, spreading awareness in their neighborhoods, workplaces, and faith communities, and actively recruiting members and donors.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                As an Ambassador, you&apos;re not just a volunteer — you&apos;re a founding steward of CHCC&apos;s future. This is a 6-month commitment designed for people who want to make a meaningful, sustained impact.
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-charcoal">Ambassador Responsibilities:</h4>
                {[
                  'Host 1–2 community interest gatherings per month (living room, office, or community space)',
                  'Introduce a minimum of 5 new community members to CHCC per quarter',
                  'Attend monthly Ambassador briefing call with CHCC leadership',
                  'Share CHCC updates on personal social media (1–2x/week)',
                  'Support 1 major fundraising event per semester',
                ].map((resp) => (
                  <div key={resp} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle size={14} className="text-saffron mt-0.5 flex-shrink-0" />
                    {resp}
                  </div>
                ))}
              </div>

              <div className="bg-white border border-saffron/20 rounded-2xl p-5">
                <h4 className="font-semibold text-charcoal mb-3">Ambassador Benefits:</h4>
                {[
                  'Exclusive Ambassador badge & recognition',
                  'Early access to programs and event tickets',
                  'Monthly leadership briefing with CHCC board',
                  'Named in CHCC annual report as founding ambassador',
                  'Invitation to annual Ambassador Appreciation Dinner',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-charcoal py-1">
                    <Star size={12} className="text-saffron fill-current" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-charcoal to-green-dark rounded-3xl p-8 text-white">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-heading font-bold mb-4">Who We&apos;re Looking For</h3>
              <div className="space-y-3 mb-6">
                {[
                  'Community connectors who know everyone in their zip code',
                  'Young professionals active in Charlotte&apos;s tech, finance, or healthcare sectors',
                  'Parents passionate about cultural education for their children',
                  'Faith community leaders with strong congregation networks',
                  'Entrepreneurs and business owners who give back locally',
                ].map((trait) => (
                  <div key={trait} className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle size={13} className="text-saffron mt-0.5 flex-shrink-0" />
                    {trait}
                  </div>
                ))}
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-5">
                <div className="text-saffron font-semibold mb-1">Commitment</div>
                <div className="text-white/70 text-sm">6-month term · ~4 hours/month · Renewable</div>
              </div>
              <a
                href="#volunteer-form"
                className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm transition-all hover:-translate-y-0.5 w-full justify-center"
              >
                Apply to Be an Ambassador
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Apply to Volunteer
            </h2>
            <p className="section-subtitle mx-auto">
              Complete our 4-step application and we&apos;ll match you with the perfect role within 3–5 business days.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              CHCC Membership
            </h2>
            <p className="section-subtitle mx-auto">
              Become an official member of the CHCC family and enjoy priority access, discounts, and community recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {membershipTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`rounded-2xl border-2 p-6 relative hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ${tier.color} ${tier.featured ? 'scale-[1.02]' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className={`text-xl font-heading font-bold ${tier.accent} mb-1`}>{tier.tier}</h3>
                <div className="flex items-baseline gap-0.5 mb-4">
                  <span className="text-3xl font-heading font-bold text-charcoal">${tier.amount}</span>
                  <span className="text-muted text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle size={12} className={`${tier.accent} mt-0.5 flex-shrink-0`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/donate"
                  className={`block text-center text-sm font-bold py-2.5 rounded-full transition-all ${
                    tier.featured
                      ? 'bg-green hover:bg-green-dark text-white shadow-card'
                      : `border-2 border-current ${tier.accent} hover:bg-current/10`
                  }`}
                >
                  Join — ${tier.amount}/yr
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-charcoal/10 text-charcoal text-sm font-bold px-4 py-2 rounded-full mb-5">
              <Building size={14} />
              Corporate Partnerships
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Partner With CHCC
            </h2>
            <p className="section-subtitle mx-auto">
              Align your brand with Charlotte&apos;s fastest-growing community institution. Corporate partnerships offer employee engagement, community visibility, and cultural impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {corporatePartners.map((partner) => (
              <div key={partner.tier} className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-1">{partner.tier}</h3>
                <div className="text-2xl font-heading font-bold text-saffron mb-4">{partner.amount}</div>
                <ul className="space-y-2 mb-6">
                  {partner.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle size={13} className="text-saffron mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-bold px-5 py-2.5 rounded-full transition-all text-sm"
                >
                  Inquire
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted text-sm mb-4">Custom partnership packages available for groups, foundations, and in-kind sponsors.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-green-dark text-white font-bold px-8 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              Contact Our Partnership Team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
