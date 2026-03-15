import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events — Upcoming & Past Community Events',
  description:
    'Stay up to date with CHCC events: Holi 2026, Monthly Park Yoga, Vedanta Study Circle, Gaushala Interest Meeting, Aum School Open House, and our complete activity report.',
}

const upcomingEvents = [
  {
    title: 'Holi — Festival of Colors Celebration',
    date: 'Saturday, March 21, 2026',
    time: '10:00 AM – 4:00 PM',
    location: 'Freedom Park, Charlotte',
    description:
      'Join 800+ community members for Charlotte\'s biggest Holi celebration — organic gulal colors, dhol drumming, folk dance performances, Sattvic food, and cultural activities for all ages. Free admission; donations welcome.',
    category: 'Festival',
    categoryColor: 'bg-saffron/10 text-saffron-dark',
    featured: true,
    attendees: '800+ expected',
    icon: '🎨',
    imageId: '1558618666-fcd25c85cd64',
    imageAlt: 'Holi festival people covered in colors joyful',
  },
  {
    title: 'Monthly Park Yoga — Every Saturday',
    date: 'Every Saturday, March–November 2026',
    time: '8:00 AM – 9:30 AM',
    location: 'Park locations rotate — South Charlotte, NoDa, and Ballantyne',
    description:
      'Free, all-levels outdoor yoga led by certified CHCC instructors. Traditional Hatha sequences followed by 15 minutes of guided meditation. Mats available to borrow. No registration required for first visit.',
    category: 'Wellness',
    categoryColor: 'bg-green/10 text-green',
    featured: false,
    attendees: '40–80 per session',
    icon: '🧘',
    imageId: '1545389336-cf090694435e',
    imageAlt: 'Outdoor yoga group class',
  },
  {
    title: 'Vedanta Study Circle — March Session',
    date: 'Sunday, March 22, 2026',
    time: '4:00 PM – 6:00 PM',
    location: 'Johnson & Wales University Community Room (or virtual)',
    description:
      'Monthly deep-dive into Vedantic philosophy. March session: Chapters 3–4 of the Bhagavad Gita — Karma Yoga and Jnana Yoga. Led by facilitator Dr. Ramesh Iyer. Open discussion format, all levels welcome.',
    category: 'Education',
    categoryColor: 'bg-teak/10 text-teak',
    featured: false,
    attendees: '25–40 per session',
    icon: '📚',
    imageId: '1602621585530-8c34d41e22e0',
    imageAlt: 'People doing Garba Navratri dance circle',
  },
  {
    title: 'Gaushala Interest Meeting & Info Session',
    date: 'Saturday, April 11, 2026',
    time: '2:00 PM – 4:00 PM',
    location: 'CHCC Office + Virtual Webinar',
    description:
      'Learn everything about the upcoming Gaushala sanctuary. Meet the Gaushala team, see the architectural renderings, and learn how to support the 2498 Challenge. Adoption packages and campaign details presented.',
    category: 'Community',
    categoryColor: 'bg-charcoal/10 text-charcoal',
    featured: false,
    attendees: '50+ expected',
    icon: '🐄',
    imageId: '1548767797-d8c844163c4c',
    imageAlt: 'Cow in green field',
  },
  {
    title: 'Aum School Open House & Admissions Fair',
    date: 'Saturday, April 25, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'Aum School Campus (Details shared upon RSVP)',
    description:
      'Tour the school, meet teachers, see student work, and learn about curriculum, schedules, and tuition. Scholarship information available. Current students will give campus tours and demonstrate Vedic Math and Bharatanatyam.',
    category: 'Education',
    categoryColor: 'bg-saffron/10 text-saffron-dark',
    featured: false,
    attendees: '100+ expected',
    icon: '🏫',
    imageId: '1503454537195-1dcabb73ffb9',
    imageAlt: 'Children in class learning',
  },
]

const pastFestivals = [
  { event: 'Diwali — Festival of Lights', date: 'November 2024', attendees: '1,200+', venue: 'Carowinds Parking Grounds', highlight: 'Largest CHCC event to date' },
  { event: 'Holi — Festival of Colors', date: 'March 2024', attendees: '800+', venue: 'Freedom Park', highlight: '3,000 lbs organic gulal distributed' },
  { event: 'Navratri & Garba Night', date: 'October 2024', attendees: '600+', venue: 'Convention Center Ballroom', highlight: 'Live dhol & folk performers from Gujarat' },
  { event: 'Janmashtami Celebration', date: 'August 2024', attendees: '300+', venue: 'Local Temple Grounds', highlight: 'Midnight puja, Dahi Handi, classical dance' },
  { event: 'Ugadi & Telugu New Year', date: 'April 2024', attendees: '250+', venue: 'Community Hall', highlight: 'Regional food fair and cultural show' },
  { event: 'Makar Sankranti Kite Festival', date: 'January 2025', attendees: '400+', venue: 'Romare Bearden Park', highlight: 'Family kite-flying, sesame sweets, folk music' },
]

const activityReport = [
  {
    pillar: 'Pray & Wellness',
    icon: '🕉️',
    color: 'border-saffron/30 bg-saffron/5',
    accent: 'text-saffron-dark',
    activities: [
      { name: 'Saturday Park Yoga Series', count: '52 sessions', impact: '2,600+ participants over the year' },
      { name: 'Guided Meditation Circles', count: '24 sessions', impact: '480 participants, 6 facilitators' },
      { name: 'Ayurveda Health Camp', count: '4 camps', impact: '320 free consultations provided' },
      { name: 'Pranayama Workshops', count: '12 workshops', impact: '300+ participants, 3 instructors' },
      { name: 'Diwali Puja & Celebration', count: '1 major event', impact: '1,200 attendees, 15 volunteers' },
    ],
  },
  {
    pillar: 'Learn',
    icon: '📚',
    color: 'border-green/30 bg-green/5',
    accent: 'text-green',
    activities: [
      { name: 'Aum School Pilot Program', count: '1 cohort (Sept–May)', impact: '28 students, 4 teachers, 95% satisfaction rate' },
      { name: 'Pathashala Sunday School', count: '40 sessions', impact: '85 children, ages 6–16' },
      { name: 'Vedanta Study Circle', count: '12 monthly sessions', impact: '35 regular attendees, 2 texts completed' },
      { name: 'Sanskrit Intensive Workshop', count: '6-week program', impact: '42 participants, beginner to intermediate' },
      { name: 'Heritage Arts Showcase', count: '2 annual shows', impact: '600 audience members, 80 student performers' },
    ],
  },
  {
    pillar: 'Gather',
    icon: '🪔',
    color: 'border-teak/30 bg-turmeric/10',
    accent: 'text-teak',
    activities: [
      { name: 'Holi Festival', count: '1 major event', impact: '800+ attendees, 120 volunteers' },
      { name: 'Monthly Community Potlucks', count: '12 events', impact: '200 avg attendees, 50+ families' },
      { name: 'Navratri Garba Night', count: '1 event (9 nights)', impact: '600 attendees, 8 professional performers' },
      { name: 'Professional Networking Mixer', count: '4 quarterly events', impact: '320 professionals, 18 companies represented' },
      { name: 'Senior Heritage Circles', count: '24 sessions', impact: '45 seniors, oral histories documented' },
    ],
  },
  {
    pillar: 'Serve (Sewa)',
    icon: '🤲',
    color: 'border-green-dark/30 bg-green/5',
    accent: 'text-green-dark',
    activities: [
      { name: 'Monthly Food Drive & Langar', count: '12 drives', impact: '3,200 lbs donated to Second Harvest' },
      { name: 'Charlotte Disaster Relief (Hurricane Helene)', count: '1 major drive', impact: '800 relief kits assembled, $12,000 raised' },
      { name: 'Youth Mentorship Program', count: 'Year-round', impact: '45 youth paired with 30 professional mentors' },
      { name: 'Community Cleanup Days', count: '8 events', impact: '1,200 volunteer hours, 5 parks cleaned' },
      { name: 'Thanksgiving Langar', count: '1 event', impact: '400 meals served to community & shelters' },
    ],
  },
]

const partnerNetwork = [
  'Sri Venkateswara Temple', 'Hindu Center of Charlotte', 'Atma Center',
  'Second Harvest Food Bank', 'Charlotte Mecklenburg Schools', 'UNC Charlotte',
  'Charlotte Chamber of Commerce', 'City of Charlotte', 'Carowinds',
  'Romare Bearden Park Foundation', 'Indian American Cultural Association',
  'Charlotte Latin School', 'The Arts & Science Council',
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt="Holi festival people covered in colors joyful"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container-pad relative z-10 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Calendar size={14} />
            Events & Activity Report
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Community in Action
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            127+ events. 8,400+ attendees. Proof that the CHCC community is vibrant, growing, and ready for a permanent home.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Upcoming Events
            </h2>
            <p className="section-subtitle mx-auto">
              Mark your calendar. All events are free or donation-based unless noted.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className={`bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow ${
                  event.featured ? 'ring-2 ring-saffron' : ''
                }`}
              >
                {event.featured && (
                  <div className="bg-saffron text-white text-xs font-bold px-4 py-1.5 text-center">
                    ⭐ Featured Event
                  </div>
                )}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${event.imageId}?auto=format&fit=crop&w=900&q=80`}
                    alt={event.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-shrink-0 text-5xl">{event.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${event.categoryColor} mb-2 inline-block`}>
                            {event.category}
                          </span>
                          <h3 className="text-xl font-heading font-bold text-charcoal">{event.title}</h3>
                        </div>
                        <div className="text-right text-sm text-muted whitespace-nowrap hidden md:block">
                          <div className="flex items-center gap-1 justify-end">
                            <Users size={13} />
                            {event.attendees}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-saffron" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-saffron" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-saffron" />
                          {event.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-4">{event.description}</p>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-warm transition-all hover:-translate-y-0.5"
                      >
                        RSVP / Learn More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Past Events Highlights
            </h2>
            <p className="section-subtitle mx-auto">
              A testament to what our community has already built — without a permanent home.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-card overflow-hidden text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-charcoal to-green-dark text-white">
                  <th className="text-left px-5 py-3 font-semibold">Event</th>
                  <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Date</th>
                  <th className="text-left px-5 py-3 font-semibold">Attendees</th>
                  <th className="text-left px-5 py-3 font-semibold hidden lg:table-cell">Venue</th>
                  <th className="text-left px-5 py-3 font-semibold hidden lg:table-cell">Highlight</th>
                </tr>
              </thead>
              <tbody>
                {pastFestivals.map((row, idx) => (
                  <tr key={row.event} className={idx % 2 === 0 ? 'bg-white' : 'bg-ivory'}>
                    <td className="px-5 py-4 font-semibold text-charcoal">{row.event}</td>
                    <td className="px-5 py-4 text-muted hidden md:table-cell">{row.date}</td>
                    <td className="px-5 py-4">
                      <span className="font-bold text-saffron">{row.attendees}</span>
                    </td>
                    <td className="px-5 py-4 text-muted hidden lg:table-cell">{row.venue}</td>
                    <td className="px-5 py-4 text-muted hidden lg:table-cell">{row.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Activity Report */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-bold px-4 py-2 rounded-full mb-5">
              <CheckCircle size={14} />
              Full Activity Report 2024–2025
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              What We&apos;ve Accomplished Together
            </h2>
            <p className="section-subtitle mx-auto">
              Organized by our Four Pillars — every activity demonstrates the community&apos;s readiness for a permanent home.
            </p>
          </div>

          <div className="space-y-6">
            {activityReport.map((pillar) => (
              <div key={pillar.pillar} className={`rounded-2xl border-2 overflow-hidden ${pillar.color}`}>
                <div className="flex items-center gap-4 p-6 border-b border-current/10">
                  <span className="text-4xl">{pillar.icon}</span>
                  <h3 className={`text-xl font-heading font-bold ${pillar.accent}`}>{pillar.pillar}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pillar.activities.map((activity) => (
                      <div key={activity.name} className="bg-white/70 rounded-xl p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="font-semibold text-charcoal text-sm">{activity.name}</div>
                          <span className={`text-xs font-bold ${pillar.accent} whitespace-nowrap`}>{activity.count}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-xs text-muted">
                          <CheckCircle size={12} className={`${pillar.accent} mt-0.5 flex-shrink-0`} />
                          {activity.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-green-dark">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-3">2024–2025 Impact Summary</h2>
            <p className="text-white/60">All before a permanent building. Imagine what&apos;s possible with one.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '127+', label: 'Total Events', sublabel: 'Across all Four Pillars' },
              { number: '8,400+', label: 'Community Members', sublabel: 'Unique attendees reached' },
              { number: '1,200+', label: 'Sewa Hours', sublabel: 'Volunteer hours logged' },
              { number: '3,200 lbs', label: 'Food Donated', sublabel: 'To Second Harvest Food Bank' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-saffron mb-1">{stat.number}</div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-white/50 text-xs mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-3">
              Our Partner Network
            </h2>
            <p className="text-muted">Organizations that have collaborated with CHCC to bring events to life.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerNetwork.map((partner) => (
              <div
                key={partner}
                className="px-4 py-2.5 bg-white border border-light rounded-xl text-sm font-medium text-muted hover:border-saffron/40 hover:text-charcoal transition-all shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
