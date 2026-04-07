import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, TrendingUp, Users, Building, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Vision, Mission & Story',
  description:
    'Learn about the Charlotte Hindu Community Center — our mission, vision, the story behind CHCC, comparable models, and our ambitious development timeline.',
}

const timeline = [
  {
    phase: 'Phase 0',
    years: '2022–2024',
    title: 'Groundwork & Community Building',
    status: 'Complete',
    statusColor: 'bg-green text-white',
    items: [
      'Incorporated as 501(c)(3) nonprofit',
      '127+ community events hosted',
      '8,400+ attendees served',
      'Core volunteer team of 200+ established',
      'Gaushala pilot program launched',
      'Aum School pilot cohort completed',
    ],
  },
  {
    phase: 'Phase 1',
    years: '2025–2026',
    title: 'Fundraising & Land Acquisition',
    status: 'In Progress',
    statusColor: 'bg-saffron text-white',
    items: [
      'Capital campaign: $2M goal',
      'Site selection for 5-acre campus',
      'Architectural master plan commission',
      'Founding donor recognition program',
      'Legal/zoning groundwork',
      'Gaushala interim site operations',
    ],
  },
  {
    phase: 'Phase 2',
    years: '2027–2028',
    title: 'Core Campus Construction',
    status: 'Planned',
    statusColor: 'bg-muted text-white',
    items: [
      'Break ground ceremony',
      'Wing A: Aum School & Pathashala',
      'Wing B: Yoga Studios & Wellness',
      'Gaushala sanctuary build-out',
      'Community garden & meditation path',
      'Soft opening events begin',
    ],
  },
  {
    phase: 'Phase 3',
    years: '2029–2030',
    title: 'Full Campus Opening',
    status: 'Planned',
    statusColor: 'bg-muted text-white',
    items: [
      'Wing C: Sattvic Food Court & Retail',
      'Wing D: Auditorium & Mandir',
      'Sewa Center & volunteer hub',
      'Grand opening celebration',
      'Full programming across all wings',
      'A2 milk CSA distribution begins',
    ],
  },
  {
    phase: 'Phase 4',
    years: '2031–2032',
    title: 'Expansion & Legacy',
    status: 'Vision',
    statusColor: 'bg-teak text-white',
    items: [
      'Endowment fund established',
      'National model replication',
      'Ayurveda clinic licensing',
      'Senior residential planning',
      'Regional satellite locations',
      'CHCC foundation for grants',
    ],
  },
]

const comparables = [
  {
    name: 'Keshavam — DC',
    location: 'Washington, D.C. Metro',
    founded: '2018',
    members: '12,000+',
    highlight: 'Raised $8M in 18 months with 2,400 donors. Proof that Indian-American communities fund their own institutions.',
    icon: '🏛️',
  },
  {
    name: 'S3 Gaushala',
    location: 'Memphis, TN',
    founded: '2015',
    members: '5,000+',
    highlight: 'Operating Gaushala with Gir cows, A2 milk CSA, and educational field trips. Our Gaushala follows this blueprint.',
    icon: '🐄',
  },
  {
    name: 'Jewish Community Center',
    location: 'Charlotte, NC',
    founded: '1938',
    members: '18,000+',
    highlight: 'The JCC model shows how a cultural-faith organization becomes a city institution. CHCC aspires to this civic stature.',
    icon: '⭐',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-about.jpg"
            alt="Indian-American community potluck and cultural fair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 text-center pt-24 pb-16">
          <div className="font-devanagari text-5xl text-saffron mb-4">ॐ</div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Story, Mission &<br />
            <span className="text-saffron">Vision</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            CHCC was born from a simple truth: Charlotte&apos;s 80,000+ Indian-Americans deserve a home — a place to worship, learn, heal, and serve together.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-turmeric/40 to-saffron/10 border border-saffron/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Our Mission</h2>
              <p className="text-charcoal leading-relaxed text-lg">
                To establish and operate Charlotte&apos;s premier Hindu Community Center — a welcoming, inclusive 501(c)(3) institution that preserves Vedic heritage, promotes holistic wellness, fosters intergenerational community, and serves greater Charlotte through selfless sewa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green/10 to-green/5 border border-green/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🌟</div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Our Vision</h2>
              <p className="text-charcoal leading-relaxed text-lg">
                A Charlotte where every Hindu family has access to a vibrant cultural home; where children grow up proud of their heritage; where wellness is rooted in ancient wisdom; and where our community is known citywide as a beacon of seva, learning, and harmony.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-8">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: 'Dharma', desc: 'Right action & integrity', icon: '⚖️' },
                { value: 'Ahimsa', desc: 'Non-harm & compassion', icon: '🕊️' },
                { value: 'Seva', desc: 'Selfless service', icon: '🤲' },
                { value: 'Satya', desc: 'Truth & transparency', icon: '💎' },
                { value: 'Sangha', desc: 'Community & belonging', icon: '🪔' },
                { value: 'Vidya', desc: 'Knowledge & learning', icon: '📚' },
              ].map((item) => (
                <div
                  key={item.value}
                  className="flex flex-col items-center p-5 bg-ivory border border-light rounded-2xl w-36 hover:shadow-card transition-shadow"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="font-heading font-bold text-charcoal">{item.value}</span>
                  <span className="text-xs text-muted mt-1 text-center">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                The Story Behind CHCC
              </h2>
              <div className="w-16 h-1 bg-saffron mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  CHCC was founded in 2022 by a small group of Charlotte-area families who kept asking the same question at temple, at potlucks, at Diwali gatherings: <em className="text-charcoal not-italic font-medium">&ldquo;Why doesn&apos;t Charlotte have a real community center?&rdquo;</em>
                </p>
                <p>
                  Cities like D.C., Houston, New York, and Atlanta had long had dedicated Hindu community institutions. Charlotte — one of the fastest-growing cities in the country with one of the fastest-growing South Asian populations — had nothing purpose-built for the community.
                </p>
                <p>
                  So we started small. Park yoga sessions on Saturday mornings. Diwali celebrations in rented halls. Holi festivals in parking lots. Vedanta study circles in living rooms. Food drives from temple kitchens.
                </p>
                <p>
                  And something extraordinary happened: <span className="text-charcoal font-semibold">thousands showed up.</span> Not dozens — thousands. Families drove 45 minutes from Huntersville. Seniors called from Ballantyne. Young professionals asked to lead programs. Children performed classical dance at community halls.
                </p>
                <p>
                  The community was already here. It just needed a home.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="/images/story-founding.jpg"
                    alt="CHCC founding community planning session"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-saffron">
                  <div className="font-devanagari text-3xl text-saffron mb-2">वसुधैव कुटुम्बकम्</div>
                  <p className="text-charcoal italic">&ldquo;The world is one family.&rdquo;</p>
                  <p className="text-xs text-muted mt-2">— Maha Upanishad 6.72</p>
                </div>

                <div className="bg-white rounded-2xl shadow-card p-6">
                  <h4 className="font-semibold text-charcoal mb-4">CHCC By the Numbers (2022–2025)</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Community events organized', value: '127+' },
                      { label: 'Unique attendees served', value: '8,400+' },
                      { label: 'Active volunteers', value: '200+' },
                      { label: 'Sewa hours logged', value: '1,200+' },
                      { label: 'Pounds of food donated', value: '3,200 lbs' },
                      { label: 'Cities & suburbs represented', value: '18+' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between text-sm border-b border-light pb-2">
                        <span className="text-muted">{stat.label}</span>
                        <span className="font-bold text-charcoal">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Charlotte, Why Now */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Why Charlotte? Why Now?
            </h2>
            <p className="section-subtitle mx-auto">
              The data makes an undeniable case for a Hindu Community Center in Charlotte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Users size={28} className="text-saffron" />,
                number: '80,000+',
                label: 'Indian-Americans in the Charlotte Metro',
                detail: 'One of the fastest-growing South Asian populations in the Southeast.',
                bg: 'bg-turmeric/20',
                border: 'border-saffron/20',
              },
              {
                icon: <Building size={28} className="text-green" />,
                number: '0',
                label: 'Dedicated Hindu Community Centers',
                detail: 'Charlotte is the largest metro in the eastern US without a purpose-built institution.',
                bg: 'bg-green/5',
                border: 'border-green/20',
              },
              {
                icon: <TrendingUp size={28} className="text-teak" />,
                number: '#1',
                label: 'Fastest-Growing Major City',
                detail: 'Charlotte adds 30,000+ residents per year. The need will only grow with time.',
                bg: 'bg-teak/5',
                border: 'border-teak/20',
              },
            ].map((item) => (
              <div key={item.label} className={`${item.bg} border ${item.border} rounded-2xl p-8 text-center`}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-4xl font-heading font-bold text-charcoal mb-2">{item.number}</div>
                <div className="font-semibold text-charcoal mb-2">{item.label}</div>
                <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Additional stats */}
          <div className="bg-ivory border border-light rounded-2xl p-8">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-6 text-center">
              Charlotte&apos;s South Asian Community Snapshot
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: '30,000/yr', label: 'New residents added' },
                { stat: '45 min', label: 'Avg drive to nearest Hindu center (outside state)' },
                { stat: '$125K', label: 'Median household income (Indian-Americans)' },
                { stat: '65%', label: 'CHCC survey: want dedicated youth programs' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-heading font-bold text-saffron mb-1">{item.stat}</div>
                  <div className="text-xs text-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparable Models */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Proven Models Guide Our Path
            </h2>
            <p className="section-subtitle mx-auto">
              We&apos;ve studied and learned from successful institutions across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparables.map((model) => (
              <div key={model.name} className="card p-6">
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-1">{model.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted mb-4">
                  <MapPin size={13} />
                  {model.location} · Est. {model.founded}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Users size={14} className="text-green" />
                  <span className="text-sm font-semibold text-green">{model.members} members</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{model.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Development Timeline
            </h2>
            <p className="section-subtitle mx-auto">
              A five-phase roadmap from community building to a fully operational campus.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((phase, idx) => (
              <div key={phase.phase} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-charcoal to-green-dark p-6 md:w-48 flex flex-col justify-center text-center md:text-left">
                    <div className="text-saffron text-sm font-semibold mb-1">{phase.phase}</div>
                    <div className="text-white font-bold">{phase.years}</div>
                    <div className="mt-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${phase.statusColor}`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">{phase.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-muted">
                          <CheckCircle
                            size={14}
                            className={`mt-0.5 flex-shrink-0 ${
                              phase.status === 'Complete' ? 'text-green' : 'text-light'
                            }`}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Economic Impact Projections
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              CHCC will be a significant economic and cultural asset to Charlotte — not just the Hindu community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { number: '$4.2M', label: 'Annual Economic Impact', desc: 'Projected within 3 years of opening' },
              { number: '85+', label: 'Jobs Created', desc: 'Full-time and part-time positions' },
              { number: '25,000+', label: 'Annual Visitors', desc: 'Projected first-year attendance' },
              { number: '$750K', label: 'Annual Program Revenue', desc: 'From classes, events & memberships' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-saffron mb-2">
                  {item.number}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-white/50 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Heart size={18} className="fill-current" />
              Support the Vision
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Our Leadership
            </h2>
            <p className="section-subtitle mx-auto">
              CHCC is led by passionate community members committed to making this vision real.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Anand Patel', role: 'Executive Director', initials: 'AP' },
              { name: 'Priya Sharma', role: 'Board Chair', initials: 'PS' },
              { name: 'Rajan Nair', role: 'Chief Programs Officer', initials: 'RN' },
              { name: 'Sunita Reddy', role: 'Development Director', initials: 'SR' },
              { name: 'Vikram Gupta', role: 'Legal & Governance', initials: 'VG' },
              { name: 'Meera Iyer', role: 'Aum School Principal', initials: 'MI' },
              { name: 'Suresh Kumar', role: 'Gaushala Coordinator', initials: 'SK' },
              { name: 'Deepa Joshi', role: 'Wellness Director', initials: 'DJ' },
            ].map((person) => (
              <div key={person.name} className="card p-5 text-center hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-saffron-dark rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold">
                  {person.initials}
                </div>
                <div className="font-semibold text-charcoal text-sm">{person.name}</div>
                <div className="text-xs text-muted mt-1">{person.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community in Action Gallery */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Community in Action</h2>
            <p className="section-subtitle mx-auto">Real moments from CHCC events and programs across Charlotte.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/HCC1.png', alt: 'CHCC community event in Charlotte' },
              { src: '/images/HCC2.png', alt: 'CHCC gathering and celebration' },
              { src: '/images/story-potluck.jpg', alt: 'Community potluck with Indian vegetarian food' },
              { src: '/images/story-sewa-hands.jpg', alt: 'Hands passing food at a CHCC sewa food drive' },
              { src: '/images/hero-homepage1.jpg', alt: 'CHCC outdoor community yoga gathering' },
              { src: '/images/event-navratri.jpg', alt: 'Navratri Garba night celebration' },
              { src: '/images/event-holi.jpg', alt: 'Holi festival of colors celebration' },
              { src: '/images/event-aum-school-show.jpg', alt: 'Aum School children cultural performance' },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-square overflow-hidden rounded-2xl shadow-card">
                <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Our Community Partners
            </h2>
            <p className="section-subtitle mx-auto">
              CHCC builds bridges across Charlotte&apos;s diverse communities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Sri Venkateswara Temple Charlotte',
              'Hindu Center of Charlotte',
              'Charlotte Latin School',
              'Atma Center',
              'Second Harvest Food Bank',
              'Charlotte Mecklenburg Schools',
              'University of North Carolina Charlotte',
              'Indian American Cultural Association',
              'North Carolina A&T State University',
              'Charlotte Chamber of Commerce',
            ].map((partner) => (
              <div
                key={partner}
                className="px-5 py-3 bg-white border border-light rounded-xl text-sm font-medium text-muted hover:border-saffron/40 hover:text-charcoal transition-all shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor & Brochure Materials */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Project Overview Materials
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Review our campus overview and investor brief — designed for community leaders, donors, and institutional partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/Overview.png"
                  alt="CHCC Campus Overview — investor and donor brief"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">Campus Overview</h3>
                <p className="text-white/60 text-sm mb-4">
                  A visual summary of the CHCC 5-acre campus plan, program pillars, community impact, and development phases.
                </p>
                <a
                  href="/images/Overview.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  View Full Overview
                </a>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/Overview 1.png"
                  alt="CHCC Investor Case — PDF brochure for major donors"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">Investor & Donor Brief</h3>
                <p className="text-white/60 text-sm mb-4">
                  Detailed financials, pledge options, economic impact projections, and naming opportunities for major donors and institutional partners.
                </p>
                <a
                  href="/images/Overview 1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  View Investor Brief
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
