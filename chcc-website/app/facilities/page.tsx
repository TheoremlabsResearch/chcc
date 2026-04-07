import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Leaf, Building, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facilities — 5-Acre Master Campus Plan',
  description:
    'Explore the CHCC 5-acre master campus plan — Gaushala, Aum School, yoga studios, auditorium, Sattvic food court, community garden, and Mandir.',
}

const wings = [
  {
    id: 'gaushala',
    label: 'Outdoor Campus',
    icon: '🌿',
    color: 'bg-green/15 border-green/30',
    accent: 'text-green',
    accentBg: 'bg-green',
    gridPos: 'col-span-2',
    imageSrc: '/images/facility-outdoor.jpg',
    imageAlt: 'Community garden and Gaushala sanctuary on the CHCC campus grounds',
    spaces: [
      { name: 'Gaushala Sanctuary', size: '2 acres', desc: 'Desi cow shelter, organic pasture, compost garden' },
      { name: 'Community Garden', size: '0.5 acres', desc: 'Medicinal herbs, Ayurvedic plants, seasonal vegetables' },
      { name: 'Recreation Fields', size: '1 acre', desc: 'Kho-kho, cricket nets, Mallakhamba training ground' },
      { name: 'Meditation Path', size: '0.25 acres', desc: 'Labyrinth walk, open-air meditation pavilion, koi pond' },
      { name: 'Amphitheater Lawn', size: '0.25 acres', desc: 'Outdoor performances, Holi/Navratri celebrations' },
    ],
  },
  {
    id: 'cultural',
    label: 'Wing A — Education',
    icon: '📚',
    color: 'bg-saffron/10 border-saffron/30',
    accent: 'text-saffron-dark',
    accentBg: 'bg-saffron',
    gridPos: 'col-span-1',
    imageSrc: '/images/facility-education.jpg',
    imageAlt: 'Modern educational wing with children working in a warm bright classroom',
    spaces: [
      { name: 'Aum School Classrooms', size: '12 rooms', desc: 'K–8 smart classrooms with flexible learning layouts' },
      { name: 'Pathashala Hall', size: '1 large room', desc: 'Sunday school, shloka recitation, group puja space' },
      { name: 'Heritage Library', size: '2,500 sq ft', desc: 'Sanskrit texts, Puranas, Vedas, bilingual children\'s books' },
      { name: 'Cultural Museum', size: '1,200 sq ft', desc: 'Interactive exhibits on Indian civilization, artifacts, art' },
      { name: 'Science Lab', size: '800 sq ft', desc: 'STEM+Dharma curriculum space with Vedic science exhibits' },
    ],
  },
  {
    id: 'wellness',
    label: 'Wing B — Wellness & Arts',
    icon: '🧘',
    color: 'bg-turmeric/40 border-teak/20',
    accent: 'text-teak',
    accentBg: 'bg-teak',
    gridPos: 'col-span-1',
    imageSrc: '/images/facility-wellness.jpg',
    imageAlt: 'High-ceilinged yoga and dance studio with hardwood floors and natural light',
    spaces: [
      { name: 'Kalari Training Hall', size: '2,000 sq ft', desc: 'Traditional red mud floor, weapon storage, training equipment' },
      { name: 'Mallakhamba Studio', size: '1,200 sq ft', desc: 'High ceilings for pole gymnastics, rope training, mats' },
      { name: 'Bharatanatyam Studio', size: '1,500 sq ft', desc: 'Sprung hardwood floor, mirrors, tabla/mridangam space' },
      { name: 'Yoga Studios (×3)', size: '800 sq ft each', desc: 'Traditional heated and non-heated Hatha yoga rooms' },
      { name: 'Ayurveda Clinic', size: '600 sq ft', desc: 'Treatment rooms, consultation office, herbal dispensary' },
    ],
  },
  {
    id: 'wingC',
    label: 'Wing C — Culinary & Retail',
    icon: '🥘',
    color: 'bg-saffron/10 border-saffron/20',
    accent: 'text-saffron',
    accentBg: 'bg-saffron-dark',
    gridPos: 'col-span-1',
    imageSrc: '/images/facility-culinary.jpg',
    imageAlt: 'Sattvic community kitchen with staff plating vegetarian food',
    spaces: [
      { name: 'Sattvic Food Court', size: '3,000 sq ft', desc: 'Community dining, sattvic menu, teaching kitchen, event catering' },
      { name: 'A2 Milk Juice Bar', size: '600 sq ft', desc: 'Fresh A2 lassi, ayurvedic tonics, herbal teas, smoothies' },
      { name: 'Vedic Retail Shop', size: '1,200 sq ft', desc: 'Books, puja supplies, Ayurvedic products, handmade crafts' },
      { name: 'CSA Distribution Hub', size: '400 sq ft', desc: 'Weekly A2 milk, ghee, and produce distribution point' },
    ],
  },
  {
    id: 'wingD',
    label: 'Wing D — Civic & Spiritual',
    icon: '🏛️',
    color: 'bg-charcoal/5 border-charcoal/20',
    accent: 'text-charcoal',
    accentBg: 'bg-charcoal',
    gridPos: 'col-span-1',
    imageSrc: '/images/facility-mandir.jpg',
    imageAlt: 'Multi-faith Mandir and auditorium with warm amber lighting',
    spaces: [
      { name: 'Multi-faith Mandir', size: '4,000 sq ft', desc: 'Sanctuaries for multiple deities, traditional Shilpa Shastra design' },
      { name: 'Auditorium', size: '500 seats', desc: 'Performance hall for cultural shows, lectures, graduations, weddings' },
      { name: 'Sewa Center', size: '1,500 sq ft', desc: 'Food pantry, volunteer coordination hub, disaster relief staging' },
      { name: 'Board & Meeting Rooms', size: '3 rooms', desc: 'Professional meeting space for nonprofit operations and community groups' },
      { name: 'Childcare Center', size: '800 sq ft', desc: 'Licensed daycare during programs, events, and yoga classes' },
    ],
  },
]

const timeline = [
  { phase: 'Phase 1 (2025–26)', milestone: 'Land acquisition & architectural design commissioned', status: 'active' },
  { phase: 'Phase 2 (2027)', milestone: 'Groundbreaking ceremony — Gaushala & Wing A begin', status: 'planned' },
  { phase: 'Phase 3 (2028)', milestone: 'Wing B (Wellness) & outdoor campus complete', status: 'planned' },
  { phase: 'Phase 4 (2029)', milestone: 'Wings C & D complete — Grand Opening Celebration', status: 'planned' },
  { phase: 'Phase 5 (2030+)', milestone: 'Expansion, Ayurveda licensing, Endowment launch', status: 'vision' },
]

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-facilities.jpg"
            alt="Aerial view of the CHCC 5-acre campus with green lawns and modern buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Building size={14} />
            5-Acre Master Campus Plan
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Future Campus
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            A 5-acre sanctuary designed with Vastu Shastra principles — five interconnected wings serving every dimension of community life, from education to worship, wellness to cuisine.
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section id="master-plan" className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              The 5-Acre Campus Vision
            </h2>
            <p className="section-subtitle mx-auto">
              Five interconnected wings, designed for harmony. Every space serves a purpose; every purpose serves the community.
            </p>
          </div>

          {/* Visual Campus Map */}
          <div className="bg-ivory border-2 border-light rounded-3xl p-6 md:p-10 mb-12">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-muted uppercase tracking-wider">
                Campus Schematic — Not to Scale
              </span>
            </div>

            {/* Outer ring: Outdoor / Grounds */}
            <div className="border-2 border-dashed border-green/40 rounded-2xl p-4 bg-green/5 relative">
              <div className="absolute -top-3 left-6 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">
                🌿 Outdoor Campus — Grounds & Gaushala
              </div>

              {/* Inner grid of wings */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {/* Wing A */}
                <div className="bg-saffron/15 border-2 border-saffron/40 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="font-bold text-saffron-dark text-sm">Wing A</div>
                  <div className="text-xs text-muted">Education</div>
                  <div className="text-xs text-charcoal mt-1">Aum School · Library · Museum</div>
                </div>

                {/* Wing B */}
                <div className="bg-teak/10 border-2 border-teak/30 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🧘</div>
                  <div className="font-bold text-teak text-sm">Wing B</div>
                  <div className="text-xs text-muted">Wellness & Arts</div>
                  <div className="text-xs text-charcoal mt-1">Yoga · Kalari · Dance</div>
                </div>

                {/* Wing C */}
                <div className="bg-saffron/10 border-2 border-saffron/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🥘</div>
                  <div className="font-bold text-saffron text-sm">Wing C</div>
                  <div className="text-xs text-muted">Culinary & Retail</div>
                  <div className="text-xs text-charcoal mt-1">Food Court · Juice Bar · Shop</div>
                </div>

                {/* Wing D */}
                <div className="bg-charcoal/10 border-2 border-charcoal/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🏛️</div>
                  <div className="font-bold text-charcoal text-sm">Wing D</div>
                  <div className="text-xs text-muted">Civic & Spiritual</div>
                  <div className="text-xs text-charcoal mt-1">Mandir · Auditorium · Sewa</div>
                </div>
              </div>

              {/* Central Courtyard */}
              <div className="mt-4 bg-turmeric/30 border border-saffron/20 rounded-2xl p-3 text-center">
                <div className="font-devanagari text-2xl text-saffron">ॐ</div>
                <div className="text-xs font-semibold text-teak">Central Courtyard — Gathering Heart of the Campus</div>
                <div className="text-xs text-muted">Banyan tree, water feature, community benches</div>
              </div>

              {/* Gaushala */}
              <div className="mt-4 bg-green/15 border-2 border-green/30 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">🐄</div>
                <div className="text-xs font-semibold text-green">Gaushala Sanctuary — 2 Acres</div>
                <div className="text-xs text-muted">Desi cow shelter · Organic pasture · Compost · A2 production</div>
              </div>
            </div>
          </div>

          {/* Total Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { stat: '5 Acres', label: 'Total campus size' },
              { stat: '38,000+', label: 'Sq ft under roof' },
              { stat: '500', label: 'Auditorium seats' },
              { stat: '5 Wings', label: 'Interconnected spaces' },
              { stat: '85+', label: 'Jobs to be created' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-light rounded-2xl p-4 text-center shadow-sm">
                <div className="text-2xl font-heading font-bold text-saffron mb-1">{item.stat}</div>
                <div className="text-xs text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wing Details */}
      {wings.map((wing, idx) => (
        <section
          key={wing.id}
          id={wing.id}
          className={`section-pad ${idx % 2 === 0 ? 'bg-ivory' : 'bg-cream'}`}
        >
          <div className="container-pad">
            <div className="mb-8">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 shadow-card">
                <img
                  src={wing.imageSrc}
                  alt={wing.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40" />
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <div className={`w-10 h-10 ${wing.accentBg} rounded-full flex items-center justify-center text-xl`}>
                    {wing.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
                    {wing.label}
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wing.spaces.map((space) => (
                <div
                  key={space.name}
                  className={`rounded-2xl border-2 p-5 ${wing.color} hover:shadow-card transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-charcoal">{space.name}</h3>
                    <span className={`text-xs font-bold ${wing.accent} bg-white/60 px-2.5 py-1 rounded-full whitespace-nowrap ml-2`}>
                      {space.size}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{space.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Vastu Shastra */}
      <section className="section-pad bg-gradient-to-br from-turmeric/40 to-ivory">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">🏛️</div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Designed by Vastu Shastra
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Every dimension of the CHCC campus will be guided by Vastu Shastra — the ancient Indian science of architecture and spatial harmony. The campus will orient the Mandir to the east, place the Gaushala in the north-east (the direction of Ishanya, associated with spirituality and water), and position the educational wing in the west (Vayavya — associated with learning and air).
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { direction: 'East', space: 'Mandir Entry', element: 'Fire (Agni)', icon: '🌅' },
                { direction: 'North-East', space: 'Gaushala', element: 'Water (Jal)', icon: '🐄' },
                { direction: 'West', space: 'Education Wing', element: 'Air (Vayu)', icon: '📚' },
                { direction: 'South', space: 'Auditorium', element: 'Earth (Prithvi)', icon: '🏛️' },
              ].map((item) => (
                <div key={item.direction} className="bg-white border border-light rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-charcoal text-sm">{item.direction}</div>
                  <div className="text-xs text-saffron font-semibold">{item.space}</div>
                  <div className="text-xs text-muted">{item.element}</div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-saffron/20 rounded-2xl p-6 text-left">
              <div className="font-devanagari text-2xl text-saffron mb-2 text-center">
                वास्तु शास्त्र
              </div>
              <p className="text-sm text-muted leading-relaxed text-center">
                &ldquo;Vastu Shastra is not superstition — it is the science of building in alignment with natural energy flows. Just as a hospital is designed for healing and a school for learning, a CHCC campus designed with Vastu principles is built for harmony, community, and spiritual flourishing.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Development Timeline</h2>
            <p className="section-subtitle mx-auto">
              A phased approach ensures quality construction and financial sustainability.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {timeline.map((item, idx) => (
              <div key={item.phase} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                      item.status === 'active'
                        ? 'bg-saffron'
                        : item.status === 'planned'
                        ? 'bg-green/70'
                        : 'bg-muted'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-8 bg-light mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="font-semibold text-charcoal">{item.phase}</div>
                  <div className="text-sm text-muted">{item.milestone}</div>
                  <div className="flex gap-2 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.status === 'active'
                          ? 'bg-saffron/20 text-saffron-dark'
                          : item.status === 'planned'
                          ? 'bg-green/15 text-green'
                          : 'bg-light text-muted'
                      }`}
                    >
                      {item.status === 'active' ? 'In Progress' : item.status === 'planned' ? 'Planned' : 'Vision'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Help Build This Campus
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Every donation brings us closer to breaking ground. Name a room, fund a wing, or plant a seed — every gift matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="flex items-center gap-2 bg-white text-saffron-dark hover:bg-ivory font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Heart size={18} className="fill-current" />
              Donate to the Campaign
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              <MapPin size={18} />
              Ask About Naming Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
