import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programs — Yoga, Aum School, Gaushala, Heritage Arts & More',
  description:
    'Explore CHCC\'s full lineup of programs: Aum School, Yoga & Wellness, Bharatanatyam, Gaushala, Senior Oasis, Sewa, and Sattvic culinary classes.',
}

const programCategories = [
  {
    id: 'youth',
    icon: '🎒',
    title: 'Early Education & Youth',
    subtitle: 'Bala Kendra',
    color: 'from-green/10 to-green/5',
    accent: 'text-green',
    border: 'border-green/20',
    tagColor: 'bg-green/10 text-green',
    imageId: '1488521787991-ed7bbaae773c',
    imageAlt: 'Kids playing together outdoors',
    programs: [
      {
        name: 'Aum School',
        ages: 'K–8 (5–13 yrs)',
        schedule: 'Mon–Fri, 8am–3pm',
        description:
          'Our flagship holistic school weaving Vedic math, Sanskrit, yoga, STEM+Dharma, and character education. Students graduate with a dual heritage — confident in both their American identity and their Indian roots.',
        highlights: ['Vedic Math & Sanskrit', 'STEM+Dharma Integration', 'Daily Yoga & Pranayama', 'Character Education'],
        cta: 'Learn More',
        href: '/programs/aum-school',
        badge: 'Flagship Program',
      },
      {
        name: 'Pathashala (Sunday School)',
        ages: '5–16 yrs',
        schedule: 'Sundays, 10am–1pm',
        description:
          'Weekly religious education covering Puranas, Bhagavad Gita, Ramayana stories, puja rituals, and dharmic values — all made engaging and age-appropriate.',
        highlights: ['Bhagavad Gita study', 'Puja & ritual education', 'Sanskrit shloka recitation', 'Cultural activities'],
        cta: 'Register',
        href: '/get-involved',
        badge: 'Weekly',
      },
      {
        name: 'Summer Heritage Camps',
        ages: '6–14 yrs',
        schedule: 'June–August (2-week sessions)',
        description:
          'Immersive two-week camps combining outdoor adventure with heritage arts, yoga, cooking, and storytelling. Kids return knowing more about India and themselves.',
        highlights: ['Heritage arts projects', 'Outdoor yoga & nature walks', 'Sattvic cooking workshops', 'Cultural storytelling nights'],
        cta: 'Register Interest',
        href: '/get-involved',
        badge: 'Seasonal',
      },
    ],
  },
  {
    id: 'yoga',
    icon: '🧘',
    title: 'Yoga & Wellness',
    subtitle: 'Swasthya Kendra',
    color: 'from-saffron/10 to-turmeric/20',
    accent: 'text-saffron-dark',
    border: 'border-saffron/20',
    tagColor: 'bg-saffron/10 text-saffron-dark',
    imageId: '1599901860904-17e6ed7083a0',
    imageAlt: 'Yoga class inside studio with multiple people',
    programs: [
      {
        name: 'Hatha Yoga (All Levels)',
        ages: '16+ yrs',
        schedule: 'Mon/Wed/Fri 6:30am, Tue/Thu 6pm, Sat 8am',
        description:
          'Traditional Hatha yoga rooted in Patanjali\'s eight limbs — not a fitness class, but a complete practice integrating asana, pranayama, and dhyana. All skill levels welcome.',
        highlights: ['Traditional Hatha sequencing', 'Pranayama included', 'Sanskrit terminology', 'Community practice'],
        cta: 'Join Class',
        href: '/contact',
        badge: 'Popular',
      },
      {
        name: '200-hr RYT-200 Teacher Training',
        ages: '21+ yrs',
        schedule: 'Weekend intensive (6 months)',
        description:
          'Yoga Alliance registered 200-hour teacher training program. Graduates receive their RYT-200 certification and are equipped to teach authentic, tradition-rooted yoga classes.',
        highlights: ['Yoga Alliance accredited', 'Anatomy & physiology', 'Teaching practicum', 'Philosophy & Sanskrit'],
        cta: 'Apply Now',
        href: '/contact',
        badge: 'RYT-200 Certified',
      },
      {
        name: 'Guided Meditation & Dhyana',
        ages: 'All ages',
        schedule: 'Daily 7am (30 min), Sundays 9am (1 hr)',
        description:
          'Silent and guided meditation sessions drawing from Vedantic and Buddhist traditions. Beginners welcome — no prior meditation experience needed.',
        highlights: ['Mantra meditation', 'Visualization practices', 'Silence & breath work', 'Accessible for beginners'],
        cta: 'Join Free',
        href: '/contact',
        badge: 'Free Sessions',
      },
      {
        name: 'Ayurveda Consultations',
        ages: 'All ages',
        schedule: 'By appointment (Saturdays)',
        description:
          'One-on-one Ayurvedic consultations with certified practitioners. Includes dosha assessment, lifestyle recommendations, herbal protocols, and dietary guidance.',
        highlights: ['Dosha assessment', 'Personalized diet plans', 'Herbal recommendations', 'Seasonal wellness guidance'],
        cta: 'Book Appointment',
        href: '/contact',
        badge: 'By Appointment',
      },
    ],
  },
  {
    id: 'arts',
    icon: '💃',
    title: 'Heritage Arts & Athletics',
    subtitle: 'Kala & Vyayama',
    color: 'from-teak/10 to-turmeric/30',
    accent: 'text-teak',
    border: 'border-teak/20',
    tagColor: 'bg-turmeric text-teak',
    imageId: '1578632767115-351597cf2477',
    imageAlt: 'Indian classical dance performance',
    programs: [
      {
        name: 'Bharatanatyam',
        ages: '5+ yrs',
        schedule: 'Tue/Thu evenings, Sat mornings',
        description:
          'Classical South Indian temple dance — one of the oldest dance forms in the world. Students learn Adavus, Jathis, Varnams, and Padams through a structured progression ending in Arangetram.',
        highlights: ['Natya Shastra foundations', 'Rhythm & footwork', 'Abhinaya (expression)', 'Annual Arangetram recital'],
        cta: 'Enroll',
        href: '/contact',
        badge: 'All Levels',
      },
      {
        name: 'Kalaripayattu',
        ages: '8–40 yrs',
        schedule: 'Mon/Wed/Fri 5:30pm',
        description:
          'The ancient martial art of Kerala — considered the mother of all martial arts. Training includes body conditioning, weapons practice, and the healing Marma therapy principles.',
        highlights: ['Body conditioning', 'Weapon training (sticks, swords)', 'Marma healing principles', 'Flexibility & strength'],
        cta: 'Enroll',
        href: '/contact',
        badge: 'Ancient Art',
      },
      {
        name: 'Mallakhamba',
        ages: '7–25 yrs',
        schedule: 'Tue/Thu/Sat',
        description:
          'Traditional Indian pole and rope gymnastics — a demanding yet deeply rewarding discipline that develops extraordinary strength, flexibility, and focus.',
        highlights: ['Pole gymnastics', 'Rope Mallakhamba', 'Competitions & showcases', 'Core strength & focus'],
        cta: 'Enroll',
        href: '/contact',
        badge: 'Traditional Sport',
      },
      {
        name: 'Carnatic Music Academy',
        ages: '6+ yrs',
        schedule: 'Weekday evenings & Saturdays',
        description:
          'Voice, veena, mridangam, flute, and violin — South Indian classical music training from beginner to advanced. Annual concerts and grading examinations.',
        highlights: ['Multiple instruments', 'Vocal training (Swaras)', 'Annual grade exams', 'Ensemble performances'],
        cta: 'Enroll',
        href: '/contact',
        badge: 'Classical Music',
      },
    ],
  },
  {
    id: 'senior',
    icon: '🌅',
    title: 'Senior Oasis',
    subtitle: 'Vriddha Seva',
    color: 'from-green/10 to-green/5',
    accent: 'text-green-dark',
    border: 'border-green/20',
    tagColor: 'bg-green/10 text-green-dark',
    imageId: '1529156069898-49953e39b3ac',
    imageAlt: 'Group of diverse happy people',
    programs: [
      {
        name: 'Discover Our Roots',
        ages: '55+ yrs',
        schedule: 'Thursdays, 10am–12pm',
        description:
          'A heritage storytelling and cultural preservation program where elders share and document their memories of India — language, food, traditions, and family histories — for future generations.',
        highlights: ['Oral history recording', 'Language preservation', 'Traditional recipe documentation', 'Intergenerational dialogue'],
        cta: 'Join Free',
        href: '/contact',
        badge: 'Free',
      },
      {
        name: 'Vedanta Study Circle',
        ages: '40+ yrs',
        schedule: 'Sundays, 4pm–6pm',
        description:
          'A facilitated study group exploring Vedanta philosophy through the Upanishads, Bhagavad Gita, and works of Swami Vivekananda. Open discussion, no prerequisites.',
        highlights: ['Bhagavad Gita study', 'Upanishadic philosophy', 'Swami Vivekananda readings', 'Open discussion format'],
        cta: 'Join Circle',
        href: '/contact',
        badge: 'Weekly',
      },
      {
        name: 'Senior Wellness & Yoga',
        ages: '60+ yrs',
        schedule: 'Mon/Wed/Fri, 9am–10am',
        description:
          'Chair yoga, gentle stretching, pranayama, and health screenings tailored for seniors. Free transportation coordination available within 10 miles of program location.',
        highlights: ['Chair yoga', 'Blood pressure screenings', 'Diabetes prevention info', 'Social hour included'],
        cta: 'Register',
        href: '/contact',
        badge: 'Transportation Available',
      },
    ],
  },
  {
    id: 'gaushala',
    icon: '🐄',
    title: 'Gaushala Programs',
    subtitle: 'Gau Seva',
    color: 'from-teak/10 to-turmeric/20',
    accent: 'text-teak',
    border: 'border-teak/30',
    tagColor: 'bg-teak/10 text-teak',
    imageId: '1548767797-d8c844163c4c',
    imageAlt: 'Cow in green field',
    programs: [
      {
        name: '2498 Challenge',
        ages: 'All ages',
        schedule: 'Ongoing campaign',
        description:
          'A community fundraising campaign to fund the Gaushala sanctuary. We need 2,498 people to each contribute $108 to reach our $270,000 Gaushala construction goal.',
        highlights: ['$108 per person', 'Community challenge format', 'Progress tracker', 'Named recognition at $108+'],
        cta: 'Join the Challenge',
        href: '/programs/gaushala',
        badge: 'Fundraising Campaign',
      },
      {
        name: 'Nourish to Flourish',
        ages: 'All ages',
        schedule: 'Monthly',
        description:
          'Sponsor a sanctified feeding ceremony (Go Puja) for the cows on your special occasion — birthday, anniversary, festival day. Your $251 contribution includes personalized puja and a commemorative certificate.',
        highlights: ['$251 per occasion', 'Puja performed in your name', 'Commemorative certificate', 'Virtual attendance option'],
        cta: 'Book an Occasion',
        href: '/programs/gaushala',
        badge: 'Ceremony Sponsorship',
      },
      {
        name: 'My Cow My Support',
        ages: 'All ages',
        schedule: 'Monthly recurring',
        description:
          'Adopt a cow with a monthly recurring contribution. Choose from Gau Mitra ($21/mo), Gau Seva ($51/mo), or Gau Raksha ($108/mo). Receive regular updates, photos, and a named tag for your sponsored cow.',
        highlights: ['Monthly giving from $21', 'Sponsored cow updates & photos', 'Named tag on cow', 'Visit priority'],
        cta: 'Adopt a Cow',
        href: '/programs/gaushala',
        badge: 'Monthly Giving',
      },
    ],
  },
  {
    id: 'culinary',
    icon: '🥘',
    title: 'Culinary & Nutrition',
    subtitle: 'Anna Yoga',
    color: 'from-saffron/10 to-turmeric/30',
    accent: 'text-saffron-dark',
    border: 'border-saffron/20',
    tagColor: 'bg-turmeric text-teak',
    imageId: '1547592180-85f173990554',
    imageAlt: 'Indian food cooking',
    programs: [
      {
        name: 'Sattvic Cooking Classes',
        ages: '14+ yrs',
        schedule: 'Saturday afternoons',
        description:
          'Learn the ancient science of Sattvic cooking — foods prepared without onion and garlic, aligned with Ayurvedic principles for clarity of mind and purity of body. Classes cover seasonal menus, spice science, and meal planning.',
        highlights: ['Ayurvedic food principles', 'Seasonal menus', 'Spice science & health', 'No onion/garlic recipes'],
        cta: 'Register',
        href: '/contact',
        badge: 'Hands-On',
      },
      {
        name: 'A2 Milk CSA Subscription',
        ages: 'Families',
        schedule: 'Weekly delivery/pickup',
        description:
          'Community-supported agriculture subscription for fresh A2 milk and dairy products from our Gaushala cows. Subscribers receive weekly deliveries of milk, ghee, and yogurt from our ethically raised desi cows.',
        highlights: ['Pure A2 milk', 'Gaushala-sourced ghee', 'Weekly subscription', 'Home delivery available'],
        cta: 'Subscribe',
        href: '/programs/gaushala',
        badge: 'Weekly CSA',
      },
    ],
  },
]

const outcomes = [
  {
    icon: '🌱',
    title: 'Identity',
    description:
      'Children who attend CHCC programs develop a strong, confident cultural identity — knowing who they are and where they come from, without feeling different or divided.',
    color: 'bg-green/10 border-green/20',
    accent: 'text-green',
  },
  {
    icon: '❤️',
    title: 'Health',
    description:
      'Yoga, Ayurveda, Sattvic food, and mindfulness practices give our community powerful, time-tested tools for physical and mental wellbeing that complement modern medicine.',
    color: 'bg-saffron/10 border-saffron/20',
    accent: 'text-saffron-dark',
  },
  {
    icon: '🤝',
    title: 'Community',
    description:
      'Through festivals, study circles, Sewa initiatives, and daily programming, CHCC becomes the connective tissue that turns a diverse population into a true community.',
    color: 'bg-teak/10 border-teak/20',
    accent: 'text-teak',
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551292831-023188e78222?auto=format&fit=crop&w=1920&q=80"
            alt="Colorful cultural dance performance with people"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 text-center pt-24 pb-16">
          <div className="font-devanagari text-5xl text-saffron mb-4">ॐ</div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Programs for <span className="text-saffron">Every Soul</span>
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            From toddlers to seniors, from yoga to martial arts, from classical dance to cow care — CHCC&apos;s programs are as diverse as the community they serve.
          </p>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Our Program Philosophy
            </h2>
            <p className="section-subtitle mx-auto">
              Every CHCC program is designed to achieve one or more of three essential outcomes for our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className={`rounded-2xl border-2 p-8 text-center ${outcome.color}`}>
                <div className="text-5xl mb-4">{outcome.icon}</div>
                <h3 className={`text-2xl font-heading font-bold mb-3 ${outcome.accent}`}>{outcome.title}</h3>
                <p className="text-muted leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      {programCategories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-pad ${catIdx % 2 === 0 ? 'bg-ivory' : 'bg-cream'}`}
        >
          <div className="container-pad">
            {/* Category Header */}
            <div className="mb-10">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src={`https://images.unsplash.com/photo-${category.imageId}?auto=format&fit=crop&w=1200&q=80`}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40" />
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5 text-white/80">
                      {category.subtitle}
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.programs.map((program) => (
                <div
                  key={program.name}
                  className={`rounded-2xl bg-gradient-to-br ${category.color} border ${category.border} p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${category.tagColor}`}>
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{program.name}</h3>

                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {program.ages}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {program.schedule}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">{program.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-charcoal">
                        <CheckCircle size={12} className={category.accent} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={program.href}
                    className={`flex items-center gap-1 text-sm font-bold ${category.accent} hover:gap-2 transition-all`}
                  >
                    {program.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Philosophy */}
      <section className="section-pad bg-gradient-to-br from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">💛</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Our Pricing Philosophy
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              At CHCC, we believe that cost should never be a barrier to community participation. Our pricing follows a tiered model — those who can pay full price help subsidize those who cannot.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  tier: 'Community Rate',
                  desc: 'Full-price access for those who can support the full cost',
                  color: 'bg-white/10',
                },
                {
                  tier: 'Sliding Scale',
                  desc: 'Need-based reduced pricing — just ask, no questions asked',
                  color: 'bg-saffron/20',
                },
                {
                  tier: 'Full Scholarship',
                  desc: 'Available for youth from families with documented financial need',
                  color: 'bg-green/20',
                },
              ].map((t) => (
                <div key={t.tier} className={`${t.color} rounded-2xl p-5 border border-white/10`}>
                  <div className="font-semibold text-white mb-2">{t.tier}</div>
                  <div className="text-white/60 text-sm">{t.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-3 rounded-full shadow-warm hover:shadow-xl transition-all"
              >
                Inquire About Programs
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
