import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, ArrowRight, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fundraising Brochure — Lay the Foundation Campaign',
  description:
    'CHCC Phase 1 Capital Campaign: $2M goal to build Charlotte\'s first Hindu Community Center. Explore donation tiers, pledge options, and community loan structures.',
}

const pillars = [
  { icon: '🧘', sanskrit: 'Dhyan & Swasthya', english: 'Pray & Wellness', desc: 'Yoga, Meditation, Ayurveda, Mandir' },
  { icon: '📚', sanskrit: 'Vidya', english: 'Learn', desc: 'Aum School, Pathashala, Vedanta, Heritage Arts' },
  { icon: '🪔', sanskrit: 'Sangha', english: 'Gather', desc: 'Festivals, Potlucks, Networking, Intergenerational Bonds' },
  { icon: '🤲', sanskrit: 'Sewa', english: 'Serve', desc: 'Food Drives, Street Cleanups, Disaster Relief, Mentorship' },
]

const impactMetrics = [
  { number: '127+', label: 'Community Events Hosted' },
  { number: '8,400+', label: 'Total Attendees Served' },
  { number: '200+', label: 'Active Volunteers' },
  { number: '3,200 lbs', label: 'Food Donated (Sewa Diwali)' },
]

const donationTiers = [
  { name: 'Seed', amount: '$501', icon: '🌱', funds: 'One month of curriculum materials for Aum School', recognition: 'Name on digital Founding Donor wall', color: 'border-green/30 bg-green/5' },
  { name: 'Aqua', amount: '$1,001', icon: '💧', funds: 'Water and feed for Gaushala for one month', recognition: 'Above + Certificate of gratitude', color: 'border-blue-300/40 bg-blue-50/50' },
  { name: 'Sunlight', amount: '$2,501', icon: '☀️', funds: 'One month of a yoga instructor\'s salary', recognition: 'Above + Name on physical donor board', color: 'border-saffron/30 bg-turmeric/10' },
  { name: 'Sprout', amount: '$5,001', icon: '🌿', funds: 'Full equipment for one dance studio', recognition: 'Above + VIP invitation to annual gala', color: 'border-green/30 bg-green/5', featured: true },
  { name: 'Grow', amount: '$10,001', icon: '🌳', funds: 'One semester of Aum School scholarships (5 students)', recognition: 'Above + Named scholarship fund', color: 'border-teak/30 bg-teak/5' },
  { name: 'Nurture', amount: '$25,001', icon: '🏛️', funds: 'Full fit-out of one Ayurvedic treatment room', recognition: 'Room dedicated in donor\'s name (Phase 1)', color: 'border-saffron/40 bg-turmeric/20' },
  { name: 'Cultivate', amount: '$50,001', icon: '🎭', funds: 'One full Mallakhamba or Kalari arena', recognition: 'Wing section dedicated in donor\'s name', color: 'border-charcoal/20 bg-ivory' },
  { name: 'Endure', amount: '$100,001+', icon: '⭐', funds: 'Anchors a major facility space', recognition: 'Building wing named in perpetuity', color: 'border-saffron bg-gradient-to-br from-turmeric/40 to-saffron/10', featured: true },
]

const pledgeTiers = [
  { name: 'Pratibaddha', sanskrit: 'प्रतिबद्ध', monthly: '$21', annual: '$252', term: '3 years', total: '$756', impact: 'Funds one Aum School scholarship' },
  { name: 'Samarpan', sanskrit: 'समर्पण', monthly: '$51', annual: '$612', term: '5 years', total: '$3,060', impact: 'Builds one yoga studio', featured: true },
  { name: 'Drishti', sanskrit: 'दृष्टि', monthly: '$108', annual: '$1,296', term: '7 years', total: '$9,072', impact: 'Funds entire Gaushala sanctuary buildout' },
]

const loanOptions = [
  {
    name: 'Nishkama',
    sanskrit: 'निष्काम',
    subtitle: 'Interest-Free Community Loan',
    quote: '"My capital builds the community. Return it when you\'re ready."',
    color: 'border-green/30 bg-green/5',
    accent: 'text-green',
    amounts: ['$50,000', '$100,000', '$150,000'],
    terms: ['3 years', '5 years', '7 years'],
    keyFact: '0% interest — full principal returned at end of term',
    idealFor: 'Business owners with accessible capital; donors who want capital optionality',
  },
  {
    name: 'Moksha Daan',
    sanskrit: 'मोक्ष दान',
    subtitle: 'Graduated Forgiveness Loan',
    quote: '"I want to donate — but spread the tax benefit intelligently over time."',
    color: 'border-saffron/30 bg-turmeric/10',
    accent: 'text-saffron-dark',
    amounts: ['$50,000', '$100,000', '$150,000'],
    terms: ['3 years', '5 years', '7 years'],
    keyFact: '100% becomes a tax-deductible donation — spread across multiple tax years',
    idealFor: 'High-income professionals who want to donate fully but prefer spreading deductions',
  },
  {
    name: 'Vriddhi',
    sanskrit: 'वृद्धि',
    subtitle: 'Deferred-Interest Ethical Investment',
    quote: '"I want a fair return — and the knowledge that my capital built something eternal."',
    color: 'border-teak/30 bg-teak/5',
    accent: 'text-teak',
    amounts: ['$50,000', '$100,000', '$150,000'],
    terms: ['3 years', '5 years', '7 years'],
    keyFact: '4% simple interest — deferred, repaid as balloon at term end from earned revenue',
    idealFor: 'Community members whose idle capital earns less than 4%; Advisory Council candidates',
  },
]

const namingRights = [
  { amount: '$50,000', naming: 'Named dance studio, Kalari arena, or Ayurvedic Suite' },
  { amount: '$100,000', naming: 'Named wing — Aum School Wing, Wellness Wing, or Gaushala' },
  { amount: '$150,000', naming: 'Named hall — main auditorium section or Gaushala sanctuary' },
  { amount: '$250,000+', naming: 'Lead campus naming — entire building or main entrance' },
]

const milestones = [
  { milestone: 'Founding 100 Donors', target: 'Q1 2025', amount: '$250,000' },
  { milestone: 'Soft Launch', target: 'Q2 2025', amount: '$500,000' },
  { milestone: 'Public Campaign Launch', target: 'Q3 2025', amount: '$750,000' },
  { milestone: 'Facility Lease Signed', target: 'Q4 2025', amount: '$1,000,000' },
  { milestone: 'Aum School Opens', target: 'Q1 2026', amount: '$1,500,000' },
  { milestone: 'Phase 1 Complete', target: 'Q4 2026', amount: '$2,000,000' },
]

export default function BrochurePage() {
  return (
    <>
      {/* ── COVER ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-homepage.jpg"
            alt="CHCC community gathering — Where Heritage Meets Harmony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-4 pt-24 pb-16 max-w-4xl mx-auto">
          <div className="font-devanagari text-6xl text-saffron mb-6">ॐ</div>
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/40 text-saffron text-sm font-bold px-5 py-2 rounded-full mb-8">
            501(c)(3) Nonprofit · EIN: 88-XXXXXXX
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Charlotte Hindu<br />
            <span className="text-saffron">Community Center</span>
          </h1>
          <p className="text-2xl text-white/80 font-heading italic mb-4">
            "Lay the Foundation" — Phase 1 Capital Campaign
          </p>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Raising $2,000,000 to build Charlotte's first dedicated Hindu Community Center —
            a 5-acre home for every generation, rooted in Heritage, Wellness, and Harmony.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm text-lg transition-all hover:-translate-y-1">
              <Heart size={20} className="fill-current" />
              Donate Now
            </Link>
            <a href="#pledge" className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:border-saffron hover:text-saffron font-bold px-8 py-4 rounded-full text-lg transition-all">
              Explore Pledge Options
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN OVERVIEW IMAGE ── */}
      <section className="bg-charcoal py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-3">Campaign Overview</h2>
            <p className="text-white/60">The complete vision for Charlotte's Hindu Community Center</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/images/overview-campus.png"
              alt="CHCC campus overview — 5-acre master plan, programs, and impact"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-devanagari text-4xl text-saffron mb-6">वसुधैव कुटुम्बकम्</div>
            <p className="text-muted italic text-xl mb-2">"The world is one family."</p>
            <p className="text-xs text-muted mb-12">— Maha Upanishad 6.72</p>

            <blockquote className="bg-gradient-to-br from-turmeric/40 to-saffron/10 border-l-4 border-saffron rounded-2xl p-8 text-left mb-12">
              <p className="text-xl text-charcoal font-heading leading-relaxed italic">
                "To create a welcoming, inclusive sanctuary rooted in Dharmic values where every member of the Charlotte community — regardless of faith, background, or age — can learn, heal, gather, and serve."
              </p>
              <p className="text-muted text-sm mt-4 font-semibold not-italic">— CHCC Mission Statement</p>
            </blockquote>

            <div className="bg-ivory border border-light rounded-2xl p-8">
              <p className="text-muted text-lg leading-relaxed">
                Charlotte's 80,000+ Indian-Americans have <span className="text-charcoal font-semibold">no dedicated community center</span>.
                We gather in rented church halls, hotel ballrooms, and private backyards. CHCC changes that — permanently.
                The community is already here. <span className="text-saffron font-semibold">It just needs a home.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY IN ACTION ── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              The Community Is Already Here
            </h2>
            <p className="section-subtitle mx-auto">Before a single brick is laid — this is CHCC today.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((m) => (
              <div key={m.label} className="bg-white rounded-2xl shadow-card p-6 text-center border border-light">
                <div className="text-3xl md:text-4xl font-heading font-bold text-saffron mb-2">{m.number}</div>
                <div className="text-sm text-muted leading-snug">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-card h-64">
              <img src="/images/HCC1.png" alt="CHCC community event in Charlotte" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <img src="/images/HCC2.png" alt="CHCC gathering and celebration" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/event-holi.jpg', alt: 'Holi festival of colors' },
              { src: '/images/event-navratri.jpg', alt: 'Navratri Garba celebration' },
              { src: '/images/program-sewa.jpg', alt: 'CHCC sewa volunteers' },
              { src: '/images/event-aum-school-show.jpg', alt: 'Aum School cultural show' },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-square rounded-xl overflow-hidden shadow-sm">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { quote: '"CHCC gave my mother — who speaks almost no English — a community where she is understood, respected, and celebrated. She hasn\'t been this happy since we moved from Hyderabad."', name: 'Dr. Suresh Rao', role: 'Cardiologist, Matthews, NC' },
              { quote: '"My son is 9. He doesn\'t know India — he knows Charlotte. CHCC is the first place where he\'s excited to learn about where his family comes from. He asked me to tell his teacher about Vedic Math."', name: 'Vikram & Anitha Nair', role: 'Ballantyne, NC' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-saffron">
                <p className="text-muted italic leading-relaxed mb-4">"{t.quote}"</p>
                <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ── */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Four Pillars, One Community
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Every CHCC program flows from four timeless principles of Dharmic living.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.english} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl mb-4">{p.icon}</div>
                <div className="font-devanagari text-saffron text-lg mb-1">{p.sanskrit}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{p.english}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS PROGRAMS ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">What $2M Builds</h2>
            <p className="section-subtitle mx-auto">Every dollar funds a program that will serve Charlotte for generations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: '/images/program-aum-school.jpg', alt: 'Aum School children', title: 'Aum School', budget: '$350,000', desc: 'Holistic K–8 education: Vedic Math, Sanskrit, STEM+Dharma, daily yoga. 200 students at full enrollment.' },
              { img: '/images/program-gaushala.jpg', alt: 'Gaushala sanctuary', title: 'Gaushala Sanctuary', budget: '$200,000', desc: 'Charlotte\'s first desi cow sanctuary. Meet & Feed programs, A2 milk CSA, school field trips.' },
              { img: '/images/facility-wellness.jpg', alt: 'Wellness studio', title: 'Wellness Wing', budget: '$150,000', desc: 'Three yoga studios, Ayurvedic clinic, Bharatanatyam studio, Kalari arena, Mallakhamba facility.' },
              { img: '/images/program-heritage-arts.jpg', alt: 'Heritage arts', title: 'Heritage Arts', budget: '$120,000', desc: 'Bharatanatyam, Kathak, Kalaripayattu, classical music — preserving India\'s living traditions.' },
              { img: '/images/facility-culinary.jpg', alt: 'Sattvic kitchen', title: 'Sattvic Kitchen', budget: '$100,000', desc: 'Full vegetarian food court, zero-waste bicycle juice bar, community cooking nights, catering.' },
              { img: '/images/program-seniors.jpg', alt: 'Senior programs', title: 'Senior Oasis', budget: 'From operating budget', desc: 'Vedanta study circles, health screenings, weekly social gatherings, and holiday meal deliveries.' },
            ].map((item) => (
              <div key={item.title} className="card overflow-hidden hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-charcoal">{item.title}</h3>
                    <span className="text-xs font-bold text-saffron bg-turmeric/30 px-2 py-1 rounded-full">{item.budget}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Budget Breakdown */}
          <div className="mt-12 bg-white rounded-2xl shadow-card p-8 border border-light">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-6 text-center">Use of Funds — $2,000,000 Campaign</h3>
            <div className="space-y-3">
              {[
                { item: 'Facility Lease (5,000–8,000 sq ft, 3 years)', amount: '$720,000', pct: 36 },
                { item: 'Aum School Setup (furniture, curriculum, tech, licensing)', amount: '$350,000', pct: 17.5 },
                { item: 'Gaushala Infrastructure (Phase 1: 10–15 cows, enclosure)', amount: '$200,000', pct: 10 },
                { item: 'Wellness Wing Build-Out (yoga studios, Ayurvedic rooms)', amount: '$150,000', pct: 7.5 },
                { item: 'Arts & Culture Wing (dance floors, sound systems)', amount: '$120,000', pct: 6 },
                { item: 'Sattvic Kitchen & Juice Bar (commercial equipment)', amount: '$100,000', pct: 5 },
                { item: 'Kalari & Mallakhamba Arena', amount: '$80,000', pct: 4 },
                { item: 'Operating Reserve (6-month buffer)', amount: '$120,000', pct: 6 },
                { item: 'Legal, Licensing & Professional Services', amount: '$60,000', pct: 3 },
                { item: 'Technology & Website Infrastructure', amount: '$40,000', pct: 2 },
                { item: 'Community Programs & Events (Year 1)', amount: '$60,000', pct: 3 },
              ].map((row) => (
                <div key={row.item}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-charcoal">{row.item}</span>
                    <span className="font-bold text-charcoal whitespace-nowrap ml-4">{row.amount}</span>
                  </div>
                  <div className="h-2 bg-ivory rounded-full overflow-hidden">
                    <div className="h-full bg-saffron rounded-full" style={{ width: `${(row.pct / 36) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACK A: DONATION TIERS ── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron-dark text-sm font-bold px-4 py-2 rounded-full mb-5">Track A</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              "Grow Together" — Donation Tiers
            </h2>
            <p className="section-subtitle mx-auto">
              Every tier funds something specific and tangible. Your name — and your impact — will be part of CHCC forever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {donationTiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border-2 p-5 relative hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ${tier.color} ${tier.featured ? 'ring-2 ring-saffron ring-offset-2' : ''}`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} className="fill-current" /> Popular
                  </div>
                )}
                <div className="text-4xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-1">{tier.name}</h3>
                <div className="text-2xl font-heading font-bold text-saffron mb-3">{tier.amount}</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-charcoal text-xs uppercase tracking-wide">Funds:</span>
                    <p className="text-muted mt-0.5 leading-snug">{tier.funds}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal text-xs uppercase tracking-wide">Recognition:</span>
                    <p className="text-muted mt-0.5 leading-snug">{tier.recognition}</p>
                  </div>
                </div>
                <Link href="/donate" className="mt-4 block text-center bg-saffron hover:bg-saffron-dark text-white font-bold py-2.5 rounded-full text-sm transition-colors">
                  Give {tier.amount}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-light text-sm text-muted">
            <span className="font-semibold text-charcoal">Additional options: </span>
            Company Matching · Endowment Gift · Recurring Monthly Giving · In-Kind Donations · Estate & Legacy Gifts · Stocks & Securities · DAF Grants
          </div>
        </div>
      </section>

      {/* ── TRACK B: PLEDGE PROGRAM ── */}
      <section id="pledge" className="section-pad bg-gradient-to-br from-turmeric/30 to-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-bold px-4 py-2 rounded-full mb-5">Track B</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Community Pledge Program
            </h2>
            <p className="section-subtitle mx-auto">
              Multi-year monthly pledges give CHCC the stable, predictable funding needed to break ground and build with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pledgeTiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border-2 p-7 text-center relative hover:-translate-y-1 transition-all duration-300 ${tier.featured ? 'border-green bg-green/5 shadow-card-hover' : 'border-light bg-white shadow-card'}`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                )}
                <div className="font-devanagari text-3xl text-saffron mb-2">{tier.sanskrit}</div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-heading font-bold text-charcoal">{tier.monthly}</span>
                  <span className="text-muted text-sm">/month</span>
                </div>
                <div className="text-sm text-muted mb-4">{tier.annual}/year · {tier.term} term</div>
                <div className="bg-ivory rounded-xl p-3 mb-5">
                  <div className="text-2xl font-heading font-bold text-saffron">{tier.total}</div>
                  <div className="text-xs text-muted">Total commitment</div>
                </div>
                <p className="text-sm text-charcoal font-medium mb-5">{tier.impact}</p>
                <Link href="/donate" className={`block text-center font-bold py-3 rounded-full text-sm transition-colors ${tier.featured ? 'bg-green hover:bg-green-dark text-white' : 'border-2 border-saffron text-saffron hover:bg-saffron hover:text-white'}`}>
                  Start Pledge
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted">
            All pledge donors receive named recognition on the CHCC Heritage Wall, priority program registration, and invitations to the annual donor gala.
          </p>
        </div>
      </section>

      {/* ── TRACK C: COMMUNITY LOANS ── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teak/10 text-teak text-sm font-bold px-4 py-2 rounded-full mb-5">Track C — Major Donors</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Community Loan Program
            </h2>
            <p className="section-subtitle mx-auto">
              For visionary donors at $50,000 · $100,000 · $150,000 — three structures, nine combinations, maximum flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {loanOptions.map((loan) => (
              <div key={loan.name} className={`rounded-2xl border-2 p-7 hover:shadow-card-hover transition-all hover:-translate-y-1 ${loan.color}`}>
                <div className="font-devanagari text-3xl text-saffron mb-2">{loan.sanskrit}</div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-1">{loan.name}</h3>
                <p className={`text-sm font-semibold mb-4 ${loan.accent}`}>{loan.subtitle}</p>
                <blockquote className="border-l-2 border-saffron/40 pl-4 text-muted italic text-sm mb-5 leading-relaxed">
                  {loan.quote}
                </blockquote>
                <div className="bg-white/70 rounded-xl p-4 mb-4">
                  <div className="text-xs font-bold text-charcoal uppercase tracking-wide mb-1">Key Structure</div>
                  <p className="text-sm text-charcoal">{loan.keyFact}</p>
                </div>
                <div className="mb-5">
                  <div className="text-xs font-bold text-charcoal uppercase tracking-wide mb-2">Amounts Available</div>
                  <div className="flex gap-2">
                    {loan.amounts.map((a) => (
                      <span key={a} className="text-xs bg-white border border-light px-2.5 py-1.5 rounded-full font-semibold text-charcoal">{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal uppercase tracking-wide mb-1">Ideal For</div>
                  <p className="text-xs text-muted leading-relaxed">{loan.idealFor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Naming Rights */}
          <div className="bg-gradient-to-br from-charcoal to-green-dark rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-2 text-center">Naming Rights — Your Legacy in the CHCC Campus</h3>
            <p className="text-white/60 text-sm text-center mb-8">Every Community Loan donor receives a permanent named dedication.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {namingRights.map((n) => (
                <div key={n.amount} className="flex items-start gap-4 bg-white/10 border border-white/20 rounded-xl p-4">
                  <div className="text-saffron font-heading font-bold text-lg whitespace-nowrap">{n.amount}</div>
                  <div className="text-white/80 text-sm leading-relaxed">{n.naming}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN TIMELINE ── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Campaign Milestones</h2>
            <p className="section-subtitle mx-auto">A clear roadmap from first donor to facility opening.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-saffron/20 hidden md:block" />
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.milestone} className="flex items-center gap-6 bg-white rounded-2xl shadow-card p-5 border border-light">
                  <div className="hidden md:flex w-12 h-12 bg-saffron rounded-full items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-warm z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="font-heading font-bold text-charcoal">{m.milestone}</div>
                        <div className="text-sm text-muted">{m.target}</div>
                      </div>
                      <div className="text-xl font-heading font-bold text-saffron whitespace-nowrap">{m.amount}</div>
                    </div>
                    <div className="mt-2 h-2 bg-ivory rounded-full overflow-hidden border border-light">
                      <div className="h-full bg-gradient-to-r from-saffron to-saffron-dark rounded-full" style={{ width: `${(i + 1) * (100 / milestones.length)}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad bg-gradient-to-r from-saffron-dark via-saffron to-amber-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-programs.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-pad relative z-10 text-center">
          <div className="font-devanagari text-5xl text-white mb-6">ॐ</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Be a Founding Donor
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            "A community that does not preserve its roots cannot sustain its branches.
            The Charlotte Hindu Community Center is not just a building — it is an investment in who we are and who our children will become."
          </p>
          <p className="text-white/70 text-sm mb-10">— CHCC Board of Directors</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-saffron-dark hover:bg-ivory font-bold px-8 py-4 rounded-full shadow-xl text-lg transition-all hover:-translate-y-1">
              <Heart size={20} className="fill-current" />
              Donate Now
            </Link>
            <Link href="/investor" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full text-lg transition-all">
              View Investor Case
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:border-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
              Schedule a Call
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-8">
            CHCC is a registered 501(c)(3) nonprofit · EIN: 88-XXXXXXX · All donations are tax-deductible
          </p>
        </div>
      </section>
    </>
  )
}
