import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, CheckCircle, Leaf, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gaushala — Charlotte\'s Desi Cow Sanctuary',
  description:
    'CHCC Gaushala is Charlotte\'s only desi cow sanctuary, home to Gir, Tharparkar, and Sahiwal breeds. Learn about our campaigns: 2498 Challenge, Nourish to Flourish, and My Cow My Support.',
}

const breeds = [
  {
    name: 'Gir',
    origin: 'Gujarat, India',
    known: 'Best known A2 milk producers in the world. Gentle, social temperament — ideal for community interaction.',
    color: 'Reddish-brown with white patches',
    icon: '🐄',
    color2: 'bg-saffron/10 border-saffron/20',
  },
  {
    name: 'Tharparkar',
    origin: 'Rajasthan & Sindh',
    known: 'Hardy desert breed with excellent heat tolerance — perfectly suited for Carolina summers. Mild-mannered and curious.',
    color: 'White to grayish-white',
    icon: '🐂',
    color2: 'bg-green/10 border-green/20',
  },
  {
    name: 'Sahiwal',
    origin: 'Punjab (Pakistan/India)',
    known: 'Among the highest A2 milk-producing desi breeds. Affectionate and calm — perfect for children\'s educational visits.',
    color: 'Reddish-brown to dark brown',
    icon: '🐄',
    color2: 'bg-teak/10 border-teak/20',
  },
]

const cowAdoptionTiers = [
  {
    tier: 'Gau Mitra',
    sanskrit: 'गौ मित्र',
    meaning: 'Cow Friend',
    amount: 21,
    period: '/month',
    commitment: 'Monthly, cancel anytime',
    benefits: [
      'Monthly photo update of your cow',
      'Named tag on sponsored cow',
      'Digital certificate of adoption',
      'Annual Gaushala e-newsletter',
    ],
    color: 'bg-green/10 border-green/30 text-green',
    buttonStyle: 'border-2 border-green text-green hover:bg-green hover:text-white',
  },
  {
    tier: 'Gau Seva',
    sanskrit: 'गौ सेवा',
    meaning: 'Cow Caretaker',
    amount: 51,
    period: '/month',
    commitment: 'Monthly, cancel anytime',
    featured: true,
    benefits: [
      'All Gau Mitra benefits',
      'Priority scheduling for cow visits',
      'Video call with your cow (quarterly)',
      'Gau Seva recognition at sanctuary',
      'Invitation to Go Puja ceremonies',
    ],
    color: 'bg-saffron/10 border-saffron text-saffron-dark',
    buttonStyle: 'bg-saffron hover:bg-saffron-dark text-white shadow-warm',
  },
  {
    tier: 'Gau Raksha',
    sanskrit: 'गौ रक्षा',
    meaning: 'Cow Protector',
    amount: 108,
    period: '/month',
    commitment: 'Monthly, cancel anytime',
    benefits: [
      'All Gau Seva benefits',
      'Named legacy recognition at Gaushala',
      'A2 ghee gift (annually)',
      'Private Go Puja on your occasion',
      'VIP access to all sanctuary events',
      'Annual impact report with photos',
    ],
    color: 'bg-teak/10 border-teak/30 text-teak',
    buttonStyle: 'border-2 border-teak text-teak hover:bg-teak hover:text-white',
  },
]

export default function GaushalaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1920&q=80"
            alt="Cow in green field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teak/30 border border-teak/40 text-sandalwood text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Leaf size={14} />
              Gau Seva — Cow Sanctuary
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              CHCC Gaushala
              <span className="block text-saffron text-2xl md:text-3xl mt-2">
                Charlotte&apos;s Only Desi Cow Sanctuary
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl">
              A place of profound peace — where Gir, Tharparkar, and Sahiwal desi cows are cared for with love, reverence, and ancient tradition. Come meet, feed, and support the herd.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#adopt"
                className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <Heart size={16} className="fill-current" />
                Adopt a Cow
              </Link>
              <Link
                href="#campaigns"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                Support Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-teak py-6">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '3', label: 'Desi Breeds' },
              { value: 'A2', label: 'Pure Milk Produced' },
              { value: '100%', label: 'Ethically Raised' },
              { value: 'Open', label: 'For Visits & Sewa' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-heading font-bold text-xl">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sanctuary Overview */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="mb-10 rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
              alt="Peaceful cows grazing"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                The Sanctuary & Our Herd
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  The CHCC Gaushala is more than a farm — it is a living sanctuary rooted in the Vedic tradition of Gau Seva (cow service). In Hindu tradition, the cow is revered as a symbol of abundance, ahimsa (non-harm), and the nurturing principle of the universe.
                </p>
                <p>
                  Our Gaushala houses desi (native Indian) breeds: Gir from Gujarat, Tharparkar from Rajasthan, and Sahiwal from Punjab. These ancient breeds produce pure A2 milk — nutritionally superior to commercial A1 milk — and thrive in loving, ethically managed environments.
                </p>
                <p>
                  The sanctuary serves Charlotte&apos;s Hindu community as a place of peaceful connection, educational experience, and spiritual renewal. School field trips, Go Puja ceremonies, and weekend open visits bring hundreds of families to the Gaushala each month.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Pure A2 milk & ghee', icon: '🥛' },
                  { label: 'Vedic Go Puja ceremonies', icon: '🙏' },
                  { label: 'School field trips', icon: '🚌' },
                  { label: 'Weekend open visits', icon: '🌿' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-charcoal">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Breeds */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4">Our Desi Breeds</h3>
              {breeds.map((breed) => (
                <div key={breed.name} className={`rounded-2xl border-2 p-5 ${breed.color2}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{breed.icon}</div>
                    <div className="flex-1">
                      <div className="font-heading font-bold text-charcoal text-lg">{breed.name}</div>
                      <div className="text-xs text-muted mb-2">Origin: {breed.origin} · Color: {breed.color}</div>
                      <p className="text-sm text-muted leading-relaxed">{breed.known}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Campaigns */}
      <section id="campaigns" className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-turmeric text-teak text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Heart size={14} />
              Three Ways to Support the Gaushala
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Our Grassroots Campaigns
            </h2>
            <p className="section-subtitle mx-auto">
              Every campaign is designed so any member of our community can participate — no matter their budget.
            </p>
          </div>

          {/* Campaign 1: 2498 Challenge */}
          <div className="bg-white rounded-3xl shadow-card overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-saffron to-saffron-dark p-10 text-white">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-3xl font-heading font-bold mb-2">The 2498 Challenge</h3>
                <div className="font-devanagari text-2xl text-white/60 mb-4">गौ रक्षा अभियान</div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our boldest community campaign: if just 2,498 people each give $108, we fund the entire Gaushala sanctuary construction — $270,000 total. It takes a village to build a sanctuary.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                  $108 <span className="font-normal text-white/60 text-lg">per person</span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h4 className="text-xl font-heading font-bold text-charcoal mb-4">Why 2498?</h4>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  The number 2498 holds meaning — in Hindu numerology, 2+4+9+8 = 23 = 2+3 = 5, the number of the five elements (Pancha Mahabhuta). Building a sanctuary for living beings with the five elements as our goal.
                </p>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  The contribution of $108 also carries sacred significance — 108 is the most revered number in Hindu tradition, appearing in Vedic math, Sanskrit, and the arrangement of the sun, earth, and moon.
                </p>
                <div className="bg-turmeric/30 border border-saffron/20 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-charcoal">Progress</span>
                    <span className="text-sm text-muted">847 of 2,498 people</span>
                  </div>
                  <div className="bg-light rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-saffron rounded-full" style={{ width: '33.9%' }} />
                  </div>
                  <div className="text-xs text-muted mt-1">$91,476 raised of $269,784 goal</div>
                </div>
                <Link
                  href="/donate"
                  className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm transition-all hover:-translate-y-0.5 w-full justify-center"
                >
                  Join the Challenge — $108
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Campaign 2: Nourish to Flourish */}
          <div className="bg-white rounded-3xl shadow-card overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 order-2 md:order-1">
                <h4 className="text-xl font-heading font-bold text-charcoal mb-4">What&apos;s Included</h4>
                <div className="space-y-3 mb-6">
                  {[
                    'Go Puja performed in your name/occasion',
                    'Feeding ceremony with fresh fodder & treats',
                    'Personalized puja prasad distributed',
                    'Commemorative digital certificate',
                    'Photos & short video of ceremony',
                    'Virtual attendance link for family abroad',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-charcoal">
                      <CheckCircle size={14} className="text-green" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted italic mb-6">
                  Perfect for: Birthdays · Anniversaries · Janma Nakshatra · Shraddha · Business openings · New home blessings
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-green hover:bg-green-dark text-white font-bold px-6 py-3 rounded-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 w-full justify-center"
                >
                  Book an Occasion
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green to-green-dark p-10 text-white order-1 md:order-2">
                <div className="text-6xl mb-4">🌸</div>
                <h3 className="text-3xl font-heading font-bold mb-2">Nourish to Flourish</h3>
                <div className="font-devanagari text-2xl text-white/60 mb-4">पोषण से उत्कर्ष</div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Sponsor a sacred Go Puja (cow worship ceremony) in honor of a special occasion. Your contribution of $251 funds a full day of premium care for the entire herd — with a personalized ceremony in your family&apos;s name.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                  $251 <span className="font-normal text-white/60 text-lg">per occasion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign 3: My Cow My Support */}
          <div id="adopt" className="bg-white rounded-3xl shadow-card p-8 md:p-10">
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-3xl font-heading font-bold text-charcoal mb-2">My Cow My Support</h3>
              <div className="font-devanagari text-xl text-muted mb-4">मेरी गाय मेरा सहयोग</div>
              <p className="text-muted max-w-2xl mx-auto">
                Become a monthly supporter of the Gaushala and receive regular updates from your personally adopted cow. Choose the level that fits your heart and your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {cowAdoptionTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className={`rounded-2xl border-2 p-6 relative transition-all hover:-translate-y-1 hover:shadow-card-hover ${
                    tier.featured ? 'border-saffron bg-turmeric/10 scale-[1.02]' : 'border-light bg-ivory'
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={10} className="fill-current" />
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-5">
                    <div className="font-heading font-bold text-charcoal text-xl">{tier.tier}</div>
                    <div className="font-devanagari text-sm text-muted">{tier.sanskrit}</div>
                    <div className="text-xs text-muted italic mb-3">{tier.meaning}</div>
                    <div className="text-4xl font-heading font-bold text-charcoal">
                      ${tier.amount}
                      <span className="text-muted text-base font-normal">{tier.period}</span>
                    </div>
                    <div className="text-xs text-muted mt-1">{tier.commitment}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-charcoal">
                        <CheckCircle size={13} className="text-green mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/donate"
                    className={`block text-center text-sm font-bold py-3 rounded-full transition-all ${tier.buttonStyle}`}
                  >
                    Adopt at ${tier.amount}/mo
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet & Feed */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Meet & Feed Program
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Experience the profound peace of being in the presence of these gentle creatures. The Meet & Feed program is open to all CHCC community members and their families — with rotating time slots to ensure an intimate experience.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { time: 'Saturday mornings', slot: '8:00am – 10:00am (limited to 20 visitors)' },
                  { time: 'Sunday mornings', slot: '7:30am – 9:30am (family priority slots)' },
                  { time: 'School field trips', slot: 'Weekdays by appointment (groups of up to 30)' },
                ].map((item) => (
                  <div key={item.time} className="flex items-start gap-3 bg-ivory border border-light rounded-xl p-3">
                    <div className="text-lg">🕐</div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{item.time}</div>
                      <div className="text-xs text-muted">{item.slot}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm transition-all hover:-translate-y-0.5"
              >
                Reserve a Visit Slot
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* A2 Milk Info */}
            <div className="bg-gradient-to-br from-teak/10 to-turmeric/30 border border-teak/20 rounded-3xl p-8">
              <div className="text-4xl mb-4">🥛</div>
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">A2 Milk CSA Subscription</h3>
              <p className="text-muted leading-relaxed mb-4">
                Subscribe to our Community-Supported Agriculture (CSA) program for weekly deliveries of pure A2 milk, hand-made ghee, and fresh yogurt from our Gaushala cows.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  'Pure A2 beta-casein protein — easier to digest',
                  'No added hormones or antibiotics — ever',
                  'Traditional bilona-churned ghee available',
                  'Weekly or bi-weekly delivery or pickup',
                  'Supports the Gaushala directly',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-charcoal">
                    <CheckCircle size={13} className="text-teak" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 text-center text-sm">
                <div className="bg-white/60 rounded-xl p-3">
                  <div className="font-bold text-charcoal">$8/half-gallon</div>
                  <div className="text-xs text-muted">A2 Fresh Milk</div>
                </div>
                <div className="bg-white/60 rounded-xl p-3">
                  <div className="font-bold text-charcoal">$32/8oz jar</div>
                  <div className="text-xs text-muted">Bilona Ghee</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-5 flex items-center justify-center gap-2 border-2 border-teak text-teak hover:bg-teak hover:text-white font-bold px-6 py-3 rounded-full transition-all w-full"
              >
                Subscribe to CSA
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Value */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Educational Value for Schools
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The CHCC Gaushala is an exceptional field trip destination for Charlotte-area schools — public, private, and homeschool groups.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🌱', title: 'Ecology & Agriculture', desc: 'Regenerative farming, composting, and sustainable animal husbandry' },
              { icon: '🧬', title: 'Biology & Animal Science', desc: 'Desi vs hybrid breeds, A1 vs A2 milk proteins, cow anatomy' },
              { icon: '🌍', title: 'Cultural Studies', desc: 'The role of cows in Indian civilization, religion, and economy' },
              { icon: '🧘', title: 'Mindfulness & Empathy', desc: 'Animal-assisted calming, presence, and non-verbal communication' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
                <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-3 rounded-full shadow-warm transition-all hover:-translate-y-0.5"
            >
              <Users size={16} />
              Book a School Field Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
