import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Leaf,
  Sunrise,
  Star,
  Quote,
  ChevronRight,
  Mail,
} from 'lucide-react'
import ImpactCounter from '@/components/ImpactCounter'
import NewsletterForm from '@/components/NewsletterForm'

const pillars = [
  {
    icon: '🕉️',
    title: 'Pray & Wellness',
    subtitle: 'Dhyan & Swasthya',
    description:
      'Nourish mind, body, and spirit through traditional practices rooted in Vedic wisdom.',
    programs: ['Yoga & Meditation', 'Ayurveda Clinic', 'Mandir & Prayer', 'Pranayama'],
    color: 'from-saffron/20 to-turmeric/40',
    accent: 'text-saffron-dark',
    border: 'border-saffron/30',
  },
  {
    icon: '📚',
    title: 'Learn',
    subtitle: 'Vidya',
    description:
      'Pass the torch of knowledge to the next generation — from Vedic math to heritage arts.',
    programs: ['Aum School', 'Pathashala', 'Vedanta Study', 'Heritage Arts'],
    color: 'from-green/10 to-green/20',
    accent: 'text-green',
    border: 'border-green/30',
  },
  {
    icon: '🪔',
    title: 'Gather',
    subtitle: 'Sangha',
    description:
      'Build community through joyful connection, festivals, and intergenerational belonging.',
    programs: ['Festivals & Melas', 'Potlucks & Socials', 'Networking Events', 'Senior Circles'],
    color: 'from-teak/10 to-turmeric/30',
    accent: 'text-teak',
    border: 'border-teak/30',
  },
  {
    icon: '🤲',
    title: 'Serve',
    subtitle: 'Sewa',
    description:
      'Embody dharma through selfless action — giving back to Charlotte and the world.',
    programs: ['Food Drives', 'Disaster Relief', 'Mentorship', 'Community Cleanups'],
    color: 'from-green/15 to-green/5',
    accent: 'text-green-dark',
    border: 'border-green/20',
  },
]

const programs = [
  {
    title: 'Aum School',
    description:
      'A holistic K–8 program weaving Vedic math, Sanskrit, yoga, STEM+Dharma, and character education into one joyful curriculum.',
    icon: '🎒',
    tag: 'Education',
    tagColor: 'bg-green/10 text-green',
    href: '/programs/aum-school',
    highlight: 'Enrolling Now',
    imageId: '1503454537195-1dcabb73ffb9',
    imageAlt: 'Happy children learning in class',
  },
  {
    title: 'Yoga & Wellness',
    description:
      'Hatha yoga for all levels, 200-hr RYT-200 teacher training, mindfulness meditation, and Ayurvedic consultations.',
    icon: '🧘',
    tag: 'Wellness',
    tagColor: 'bg-saffron/10 text-saffron-dark',
    href: '/programs#yoga',
    highlight: 'Classes Weekly',
    imageId: '1545389336-cf090694435e',
    imageAlt: 'Outdoor group yoga class',
  },
  {
    title: 'Gaushala',
    description:
      'Charlotte\'s only desi cow sanctuary — home to Gir, Tharparkar, and Sahiwal breeds. Meet, feed, and support the sanctuary.',
    icon: '🐄',
    tag: 'Sanctuary',
    tagColor: 'bg-teak/10 text-teak',
    href: '/programs/gaushala',
    highlight: 'Visit & Volunteer',
    imageId: '1548767797-d8c844163c4c',
    imageAlt: 'Cow in green field',
  },
  {
    title: 'Heritage Arts',
    description:
      'Bharatanatyam, Kalaripayattu, Mallakhamba, Indian classical music — preserving the living traditions of Bharat.',
    icon: '💃',
    tag: 'Arts & Culture',
    tagColor: 'bg-turmeric text-teak',
    href: '/programs#arts',
    highlight: 'Auditions Open',
    imageId: '1578632767115-351597cf2477',
    imageAlt: 'Indian classical dance performance',
  },
  {
    title: 'Senior Oasis',
    description:
      'A welcoming sanctuary for elders — Vedanta study circles, health screenings, social gatherings, and heritage storytelling.',
    icon: '🌅',
    tag: 'Senior Programs',
    tagColor: 'bg-green/10 text-green',
    href: '/programs#senior',
    highlight: 'Free to Join',
    imageId: '1529156069898-49953e39b3ac',
    imageAlt: 'Group of diverse happy people',
  },
  {
    title: 'Sewa Initiative',
    description:
      'From monthly food drives donating 3,200+ lbs annually to disaster relief and youth mentorship across Charlotte.',
    icon: '🤝',
    tag: 'Community Service',
    tagColor: 'bg-charcoal/10 text-charcoal',
    href: '/programs#sewa',
    highlight: 'Volunteer Now',
    imageId: '1559027615-cd4628902d4a',
    imageAlt: 'Volunteers smiling together',
  },
]

const testimonials = [
  {
    quote:
      'CHCC\'s park yoga events have been life-changing for our family. My kids now ask to meditate before bedtime. This community is building something truly special.',
    name: 'Ananya R.',
    role: 'South Charlotte Resident & Mother of 3',
    initials: 'AR',
  },
  {
    quote:
      'As a senior who moved here from Mumbai, I was searching for belonging. CHCC\'s Vedanta circle became my home. The warmth here is unlike anything I\'ve experienced.',
    name: 'Ramesh C.',
    role: 'Senior Member, Vedanta Study Circle',
    initials: 'RC',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603988363-55a79df9aa8e?auto=format&fit=crop&w=1920&q=80"
            alt="Community yoga outdoor group class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        {/* Mandala rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[600, 500, 400, 300].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-white/5"
              style={{ width: size, height: size, opacity: 0.3 - i * 0.05 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* OM Symbol */}
          <div className="font-devanagari text-6xl md:text-8xl text-saffron mb-6 text-shadow-lg leading-none opacity-90">
            ॐ
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 text-shadow-lg leading-tight">
            Where Heritage<br />
            <span className="text-saffron">Meets Harmony</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Charlotte&apos;s first dedicated Hindu Community Center — a 5-acre campus uniting generations through yoga, education, culture, and selfless service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/donate"
              className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
            >
              <Heart size={20} className="fill-current" />
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
            >
              Join Our Community
              <ChevronRight size={20} />
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron inline-block" />
              501(c)(3) Nonprofit
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron inline-block" />
              127+ Events Hosted
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron inline-block" />
              8,400+ Community Members Served
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── IMPACT METRICS ─────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-charcoal to-green-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-saffron text-sm font-semibold uppercase tracking-widest mb-10">
            The Community Is Already Here
          </p>
          <ImpactCounter dark={true} />
        </div>
      </section>

      {/* ── FOUR PILLARS ───────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-turmeric text-teak text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Leaf size={14} />
              Our Four Pillars
            </div>
            <h2 className="section-title mb-4">
              Something for Everyone —<br />
              <span className="text-saffron">Built on Four Pillars</span>
            </h2>
            <p className="section-subtitle mx-auto">
              CHCC is designed around four timeless principles that together create a complete, holistic community experience for every generation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.border} p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${pillar.accent}`}>
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-1.5">
                  {pillar.programs.map((prog) => (
                    <li key={prog} className="flex items-center gap-2 text-sm text-charcoal">
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.accent.replace('text-', 'bg-')} inline-block flex-shrink-0`} />
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHCC ────────────────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">
              This Is Not Your<br />
              <span className="gradient-text">Typical Community Center</span>
            </h2>
            <p className="section-subtitle mx-auto">
              CHCC fills a critical gap in Charlotte — and does it in a way that serves everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-turmeric/40 to-saffron/10 border border-saffron/20">
              <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Sunrise size={28} className="text-saffron" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                Rooted in Tradition, Open to All
              </h3>
              <p className="text-muted leading-relaxed">
                Our programs are inspired by 5,000-year-old Vedic wisdom but designed to welcome Charlotte&apos;s full diversity — Indian and non-Indian alike. You don&apos;t need to be Hindu to belong here.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green/10 to-green/5 border border-green/20">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Users size={28} className="text-green" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                Intergenerational by Design
              </h3>
              <p className="text-muted leading-relaxed">
                From toddler storytime to senior Vedanta circles, from Aum School for children to 200-hr yoga teacher training for adults — CHCC is built for every stage of life and every generation under one roof.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teak/10 to-turmeric/30 border border-teak/20">
              <div className="w-16 h-16 bg-teak/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <BookOpen size={28} className="text-teak" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                Charlotte Needs This Now
              </h3>
              <p className="text-muted leading-relaxed">
                With 80,000+ Indian-Americans and zero dedicated Hindu community centers, Charlotte is the largest such city in the eastern US without this resource. We are building it — together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-turmeric text-teak text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Star size={14} />
              Our Programs
            </div>
            <h2 className="section-title mb-4">
              Find Your Place at <span className="text-saffron">CHCC</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Six flagship programs serving every age, interest, and aspiration — rooted in heritage and thriving in Charlotte today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group card hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-${program.imageId}?auto=format&fit=crop&w=800&q=80`}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{program.icon}</div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.tagColor}`}>
                        {program.tag}
                      </span>
                      <span className="text-xs font-semibold text-saffron">{program.highlight}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-2 group-hover:text-saffron transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{program.description}</p>
                  <div className="flex items-center gap-1 text-saffron text-sm font-semibold">
                    Learn more
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programs" className="btn-outline">
              Explore All Programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY IN ACTION ─────────────────────────────────── */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Users size={14} />
              Community in Action
            </div>
            <h2 className="section-title mb-4">
              The Community Is <span className="text-green">Already Here</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Before a single brick is laid, CHCC has already brought thousands of people together. Here&apos;s proof.
            </p>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { event: 'Diwali Celebration', attendees: '1,200+', year: '2024' },
              { event: 'Holi Festival', attendees: '800+', year: '2024' },
              { event: 'Navratri', attendees: '600+', year: '2024' },
              { event: 'Park Yoga Series', attendees: '900+', year: 'Ongoing' },
            ].map((item) => (
              <div
                key={item.event}
                className="bg-ivory border border-light rounded-2xl p-5 text-center hover:shadow-card transition-shadow"
              >
                <div className="text-2xl font-heading font-bold text-saffron mb-1">{item.attendees}</div>
                <div className="text-sm font-semibold text-charcoal mb-1">{item.event}</div>
                <div className="text-xs text-muted">{item.year}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-turmeric/20 border border-saffron/20 rounded-2xl p-8 relative"
              >
                <Quote size={32} className="text-saffron/30 absolute top-6 right-6" />
                <p className="text-charcoal leading-relaxed mb-6 italic text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────────────────── */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-3">Life at CHCC</h2>
          <p className="text-muted text-center mb-10">A glimpse of our community in action</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: '1558618666-fcd25c85cd64', alt: 'Holi festival people covered in colors' },
              { id: '1548767797-d8c844163c4c', alt: 'Gaushala cows' },
              { id: '1578632767115-351597cf2477', alt: 'Classical dance performance' },
              { id: '1503454537195-1dcabb73ffb9', alt: 'Children in Aum School' },
              { id: '1547592180-85f173990554', alt: 'Community kitchen cooking together' },
              { id: '1559027615-cd4628902d4a', alt: 'Sewa volunteers smiling' },
              { id: '1551292831-023188e78222', alt: 'Colorful cultural dance performance' },
              { id: '1529156069898-49953e39b3ac', alt: 'Diverse community gathering' },
            ].map(({ id, alt }) => (
              <div key={id} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`}
                  alt={alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN BANNER ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-saffron-dark via-saffron to-saffron-light relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full border border-white/10" />

        <div className="container-pad relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-devanagari text-4xl text-white/40 mb-4">ॐ</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 text-shadow">
              Help Us Build Charlotte&apos;s<br />Hindu Community Center
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We&apos;re raising $2 million to break ground on our 5-acre campus. With your support, we can make this a reality for 80,000+ Indian-Americans in the Charlotte area.
            </p>

            {/* Progress Bar */}
            <div className="bg-white/20 rounded-full h-4 mb-3 overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-1000"
                style={{ width: '22.5%' }}
              />
            </div>
            <div className="flex items-center justify-between text-white/90 text-sm mb-8">
              <span className="font-bold text-white text-base">$450,000 raised</span>
              <span>Goal: $2,000,000</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-white text-saffron-dark hover:bg-ivory font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center text-lg"
              >
                <Heart size={20} className="fill-current" />
                Donate Today
              </Link>
              <Link
                href="/get-involved"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center text-lg"
              >
                Become a Volunteer
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP ───────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <Mail size={24} className="text-saffron" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-3">
              Stay in the Loop
            </h2>
            <p className="text-muted mb-8">
              Get event updates, program announcements, and community stories delivered to your inbox. Join 2,000+ subscribers.
            </p>
            <NewsletterForm />
            <p className="text-xs text-muted mt-4">
              No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

