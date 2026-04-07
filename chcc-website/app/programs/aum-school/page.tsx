import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Clock, CheckCircle, Star, Heart, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aum School — Holistic K-8 Education Rooted in Vedic Wisdom',
  description:
    'Aum School is CHCC\'s flagship K-8 program weaving Vedic Math, Sanskrit, Yoga, STEM+Dharma, and Character Education into one joyful, heritage-rooted curriculum.',
}

const curriculum = [
  {
    subject: 'Vedic Mathematics',
    icon: '🔢',
    description:
      'Based on 16 Vedic Sutras, our math curriculum develops extraordinary calculation speed, pattern recognition, and number sense — while grounding students in an ancient mathematical tradition.',
    grades: 'K–8',
    outcomes: ['Mental arithmetic mastery', 'Pattern thinking', 'Algebraic foundations', 'Global math olympiad prep'],
    color: 'bg-saffron/10 border-saffron/20',
    accent: 'text-saffron-dark',
  },
  {
    subject: 'Sanskrit Language',
    icon: '🔡',
    description:
      'Sanskrit — the mother of languages and the language of the Vedas. Students learn Devanagari script, conversational phrases, and unlock the roots of over 40% of English words.',
    grades: 'K–8',
    outcomes: ['Devanagari script mastery', 'Shloka recitation', 'Vocabulary roots (Latin/Greek)', 'Language brain development'],
    color: 'bg-green/10 border-green/20',
    accent: 'text-green',
  },
  {
    subject: 'Yoga & Pranayama',
    icon: '🧘',
    description:
      'Daily yoga and breathing practices — not as physical fitness, but as a complete mind-body curriculum. Students develop self-regulation, focus, and body awareness that supports all other learning.',
    grades: 'K–8',
    outcomes: ['Self-regulation skills', 'Focus & attention', 'Body awareness', 'Stress management tools'],
    color: 'bg-turmeric border-saffron/20',
    accent: 'text-teak',
  },
  {
    subject: 'STEM + Dharma',
    icon: '🔬',
    description:
      'Our STEM curriculum is integrated with Vedic science — from Aryabhata\'s astronomy to ancient metallurgy. Students see science as a living tradition, not just textbook facts.',
    grades: '3–8',
    outcomes: ['Science fair preparation', 'Vedic astronomy', 'Ancient engineering (step-wells, temples)', 'Computational thinking'],
    color: 'bg-teak/10 border-teak/20',
    accent: 'text-teak',
  },
  {
    subject: 'Character Education',
    icon: '⭐',
    description:
      'Values-based education drawing from the Panchatantra, Hitopadesha, Ramayana, and Mahabharata. Students explore ethical decision-making through timeless stories.',
    grades: 'K–8',
    outcomes: ['Ethical reasoning', 'Conflict resolution', 'Service leadership', 'Cultural pride & identity'],
    color: 'bg-green/10 border-green/20',
    accent: 'text-green-dark',
  },
  {
    subject: 'Heritage Arts',
    icon: '🎨',
    description:
      'Introduction to Bharatanatyam, Indian classical music, Warli painting, pottery, and textile arts. Students express their culture through creative disciplines.',
    grades: 'K–8',
    outcomes: ['Bharatanatyam basics', 'Indian music appreciation', 'Traditional visual arts', 'Annual cultural showcase'],
    color: 'bg-saffron/10 border-saffron/20',
    accent: 'text-saffron',
  },
]

const ageGroups = [
  {
    group: 'Nursery & Kindergarten',
    grades: 'Ages 3–6 (Pre-K, K)',
    schedule: 'Mon–Fri, 8:30am–12:30pm',
    focus: 'Sensory learning, Sanskrit sounds, Yoga stories, Vedic counting, creative play',
    ratio: '1:8 teacher-student ratio',
    icon: '🌸',
  },
  {
    group: 'Primary School',
    grades: 'Grades 1–3 (Ages 6–9)',
    schedule: 'Mon–Fri, 8:00am–3:00pm',
    focus: 'Foundational literacy & numeracy, Vedic Math Level 1, Sanskrit script, yoga postures, character stories',
    ratio: '1:12 teacher-student ratio',
    icon: '🌱',
  },
  {
    group: 'Middle School',
    grades: 'Grades 4–6 (Ages 9–12)',
    schedule: 'Mon–Fri, 8:00am–3:30pm',
    focus: 'Advanced Vedic Math, Sanskrit grammar, STEM+Dharma projects, Bharatanatyam, debate & writing',
    ratio: '1:15 teacher-student ratio',
    icon: '🌳',
  },
  {
    group: 'Upper School',
    grades: 'Grades 7–8 (Ages 12–14)',
    schedule: 'Mon–Fri, 8:00am–4:00pm',
    focus: 'Leadership, Bhagavad Gita study, advanced STEM, community service hours, college prep',
    ratio: '1:15 teacher-student ratio',
    icon: '🌟',
  },
]

const enrichment = [
  { name: 'School Garden', desc: 'Students grow their own herbs and vegetables using traditional Indian farming wisdom', icon: '🌿' },
  { name: 'Field Trips', desc: 'Monthly visits to Gaushala, temples, science centers, and cultural institutions', icon: '🚌' },
  { name: 'Sewa Projects', desc: 'Age-appropriate community service projects integrated into the curriculum', icon: '🤝' },
  { name: 'Cultural Festivals', desc: 'School celebrates all major Hindu festivals with educational context and performances', icon: '🪔' },
  { name: 'Guest Speakers', desc: 'Scientists, artists, spiritual leaders, and professionals from the community', icon: '🎤' },
  { name: 'Annual Showcase', desc: 'Year-end recital showcasing Sanskrit, dance, music, and academic achievements', icon: '🎭' },
]

export default function AumSchoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/program-aum-school.jpg"
            alt="Indian-American children learning Sanskrit in a bright classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-saffron/20 border border-saffron/30 text-saffron text-sm font-bold px-4 py-2 rounded-full mb-6">
              <BookOpen size={14} />
              CHCC Flagship Program
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Aum School
              <span className="block text-saffron text-3xl md:text-4xl mt-2">
                Where Ancient Wisdom Meets Modern Excellence
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl">
              Charlotte&apos;s only K–8 school that seamlessly integrates Vedic Mathematics, Sanskrit, daily yoga, STEM+Dharma, and character education into a single, joyful learning environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#tour"
                className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Schedule a Tour
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/get-involved"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="bg-saffron py-6">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Grade Levels', value: 'Pre-K – 8th' },
              { label: 'Age Range', value: '3–14 Years' },
              { label: 'Class Size', value: '≤ 15 Students' },
              { label: 'Scholarship Seats', value: '20% Reserved' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-heading font-bold text-xl">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Aum School */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                Why Aum School Is Different
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Not supplementary — it IS the school',
                    desc: 'Unlike weekend Pathashala or summer camps, Aum School is a full-day, year-round accredited school. Heritage education is not an add-on; it is the foundation.',
                  },
                  {
                    title: 'Rooted in India, excelling in America',
                    desc: 'Our graduates score in the top percentiles on standardized tests because Vedic Math and Sanskrit build extraordinary cognitive skills — while they also know their culture deeply.',
                  },
                  {
                    title: 'Whole-child development',
                    desc: 'Academic, physical, spiritual, and artistic development happens simultaneously. Yoga and pranayama in the morning improve focus for the afternoon\'s STEM projects.',
                  },
                  {
                    title: 'Community as curriculum',
                    desc: 'Monthly Gaushala visits, temple field trips, sewa projects, and guest speakers make the entire CHCC community an extension of the classroom.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-saffron mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-charcoal">{item.title}</div>
                      <div className="text-sm text-muted mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-turmeric/40 to-saffron/10 border border-saffron/20 rounded-3xl p-8">
              <div className="font-devanagari text-5xl text-saffron mb-6 text-center">
                सा विद्या या विमुक्तये
              </div>
              <p className="text-center text-muted italic mb-6">
                &ldquo;That which liberates is education.&rdquo; — Vishnu Purana
              </p>
              <div className="space-y-3">
                {[
                  'Strong academic outcomes (top-percentile test scores)',
                  'Cultural identity and self-confidence',
                  'Bilingual (English + Sanskrit) foundation',
                  'Leadership and service orientation',
                  'Yoga-trained focus and emotional regulation',
                ].map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 text-sm text-charcoal">
                    <Star size={13} className="text-saffron fill-current" />
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Our Curriculum
            </h2>
            <p className="section-subtitle mx-auto">
              Six integrated subject areas form the Aum School curriculum — each rooted in ancient wisdom, each preparing students for modern excellence.
            </p>
          </div>
          <div className="mb-10 rounded-2xl overflow-hidden shadow-card">
            <img
              src="/images/facility-education1.jpg"
              alt="Modern educational space at Aum School with natural light"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((subject) => (
              <div
                key={subject.subject}
                className={`rounded-2xl border-2 p-6 ${subject.color} hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{subject.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-charcoal">{subject.subject}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/60 ${subject.accent}`}>
                    Gr. {subject.grades}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">{subject.description}</p>
                <div className="space-y-1.5">
                  {subject.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-xs text-charcoal">
                      <CheckCircle size={11} className={subject.accent} />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Age Groups & Schedules
            </h2>
            <p className="section-subtitle mx-auto">
              Each stage of development receives a developmentally appropriate curriculum with dedicated teachers.
            </p>
          </div>

          <div className="space-y-4">
            {ageGroups.map((group) => (
              <div key={group.group} className="bg-white rounded-2xl shadow-card p-6 flex flex-col md:flex-row gap-5 hover:shadow-card-hover transition-shadow">
                <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                  <div className="text-4xl">{group.icon}</div>
                  <div>
                    <div className="font-heading font-bold text-charcoal">{group.group}</div>
                    <div className="text-sm text-muted">{group.grades}</div>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <div className="text-xs font-semibold text-muted uppercase mb-1 flex items-center gap-1">
                      <Clock size={11} /> Schedule
                    </div>
                    <div className="text-sm text-charcoal">{group.schedule}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs font-semibold text-muted uppercase mb-1 flex items-center gap-1">
                      <BookOpen size={11} /> Focus Areas
                    </div>
                    <div className="text-sm text-charcoal">{group.focus}</div>
                  </div>
                </div>
                <div className="md:w-40 flex-shrink-0 flex items-center">
                  <div className="text-xs text-center w-full px-3 py-2 bg-turmeric/30 rounded-xl text-teak font-medium">
                    {group.ratio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Enrichment Activities
            </h2>
            <p className="section-subtitle mx-auto">
              Learning at Aum School doesn&apos;t stop at academics. Our enrichment programs make the whole community the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {enrichment.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-charcoal mb-2">{item.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Scholarships */}
      <section className="section-pad bg-gradient-to-br from-turmeric/40 to-ivory">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                Tuition & Scholarships
              </h2>
              <p className="text-muted">
                We are committed to making Aum School accessible regardless of financial circumstance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="font-heading font-bold text-charcoal text-lg mb-4">Annual Tuition (2026–27)</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { level: 'Pre-K / Kindergarten', amount: '$6,500' },
                    { level: 'Grades 1–3', amount: '$7,200' },
                    { level: 'Grades 4–6', amount: '$7,800' },
                    { level: 'Grades 7–8', amount: '$8,400' },
                    { level: 'Sibling Discount', amount: '10% off 2nd child' },
                    { level: 'CHCC Member Discount', amount: '5% discount' },
                  ].map((row) => (
                    <div key={row.level} className="flex justify-between items-center py-1.5 border-b border-light">
                      <span className="text-muted">{row.level}</span>
                      <span className="font-semibold text-charcoal">{row.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-4">
                  * Tuition covers all curriculum materials, yoga mats, field trips, and annual cultural showcase. Lunch program available separately.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="font-heading font-bold text-charcoal text-lg mb-4">Scholarship Program</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green/10 border border-green/20 rounded-xl">
                    <div className="font-semibold text-green mb-1">Need-Based Scholarships</div>
                    <p className="text-xs text-muted">20% of all seats reserved for families with demonstrated financial need. Full and partial scholarships available. Confidential application process.</p>
                  </div>
                  <div className="p-4 bg-saffron/10 border border-saffron/20 rounded-xl">
                    <div className="font-semibold text-saffron-dark mb-1">Merit Scholarships</div>
                    <p className="text-xs text-muted">Academic excellence, heritage arts achievement, or extraordinary community service. Awarded annually at the CHCC scholarship ceremony.</p>
                  </div>
                  <div className="p-4 bg-turmeric/30 border border-saffron/20 rounded-xl">
                    <div className="font-semibold text-teak mb-1">Payment Plans</div>
                    <p className="text-xs text-muted">Monthly and quarterly payment plans available at no additional cost. Contact our admissions office for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Tour CTA */}
      <section id="tour" className="section-pad bg-gradient-to-r from-green-dark to-charcoal">
        <div className="container-pad">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-5xl mb-6">🏫</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Schedule a Campus Tour
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The best way to experience Aum School is to see it in action. Schedule a tour with our admissions team — available weekday mornings and select Saturdays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Users size={18} />
                Book a Tour
              </Link>
              <a
                href="mailto:aumschool@chcc.org"
                className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                <Mail size={18} />
                Email Admissions
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Currently accepting applications for 2026–2027 school year. Limited seats available.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
