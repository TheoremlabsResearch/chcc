'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, ArrowRight } from 'lucide-react'

const departments = [
  {
    name: 'General Inquiries',
    email: 'info@chcc.org',
    phone: '(704) 555-0123',
    icon: '💬',
    description: 'Questions about CHCC, our mission, upcoming events, or general community information.',
  },
  {
    name: 'Aum School Admissions',
    email: 'aumschool@chcc.org',
    phone: '(704) 555-0124',
    icon: '📚',
    description: 'School tours, enrollment inquiries, tuition, scholarships, and curriculum information.',
  },
  {
    name: 'Gaushala &amp; Programs',
    email: 'gaushala@chcc.org',
    phone: '(704) 555-0125',
    icon: '🐄',
    description: 'Gaushala visits, cow adoption, A2 milk CSA, and other program registrations.',
  },
  {
    name: 'Donations &amp; Development',
    email: 'development@chcc.org',
    phone: '(704) 555-0126',
    icon: '💝',
    description: 'Donations, planned giving, corporate partnerships, stock gifts, and DAF inquiries.',
  },
  {
    name: 'Volunteer &amp; Ambassador',
    email: 'volunteer@chcc.org',
    phone: '(704) 555-0127',
    icon: '🤝',
    description: 'Volunteer opportunities, ambassador program applications, and coordination.',
  },
  {
    name: 'Events &amp; Rentals',
    email: 'events@chcc.org',
    phone: '(704) 555-0128',
    icon: '🎉',
    description: 'Event registration, venue inquiries for community events, and facility rentals.',
  },
]

const officeHours = [
  { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM ET' },
  { days: 'Saturday', hours: '8:00 AM – 2:00 PM ET' },
  { days: 'Sunday', hours: 'Closed (Pathashala & programs only)' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-dark to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[600, 450, 300].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-white"
              style={{ width: size, height: size, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          ))}
        </div>
        <div className="container-pad relative z-10 text-center">
          <div className="font-devanagari text-4xl text-saffron mb-4">ॐ</div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-5">
            Get in Touch
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions, want to volunteer, or are ready to donate — our team is here to help.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white rounded-2xl shadow-card p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-saffron" />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-1">Email Us</h3>
              <a href="mailto:info@chcc.org" className="text-saffron font-semibold hover:underline">
                info@chcc.org
              </a>
              <p className="text-xs text-muted mt-2">Response within 24–48 hours</p>
            </div>
            <div className="bg-white rounded-2xl shadow-card p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-green" />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-1">Call Us</h3>
              <a href="tel:+17045550123" className="text-green font-semibold hover:underline">
                (704) 555-0123
              </a>
              <p className="text-xs text-muted mt-2">Mon–Fri, 9am–6pm ET</p>
            </div>
            <div className="bg-white rounded-2xl shadow-card p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-teak/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-teak" />
              </div>
              <h3 className="font-heading font-bold text-charcoal mb-1">Location</h3>
              <p className="text-teak font-semibold">Charlotte, NC</p>
              <p className="text-xs text-muted mt-2">Site selection in progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                  <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-green" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    Message Received!
                  </h3>
                  <p className="text-muted mb-6">
                    Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>! Our team will respond to <span className="text-saffron">{formData.email}</span> within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', department: '', subject: '', message: '' }) }}
                    className="text-saffron font-semibold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 md:p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Priya Patel"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="priya@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Phone (optional)</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="(704) 555-0100"
                      />
                    </div>
                    <div>
                      <label className="form-label">Department</label>
                      <select
                        className="form-input"
                        value={formData.department}
                        onChange={(e) => updateField('department', e.target.value)}
                      >
                        <option value="">Select department...</option>
                        <option>General Inquiries</option>
                        <option>Aum School Admissions</option>
                        <option>Gaushala &amp; Programs</option>
                        <option>Donations &amp; Development</option>
                        <option>Volunteer &amp; Ambassador</option>
                        <option>Events &amp; Rentals</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-input h-36 resize-none"
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder="Share your question, inquiry, or any details that will help us respond better..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-full shadow-warm hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                  <p className="text-xs text-muted text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-saffron" />
                  <h3 className="font-heading font-bold text-charcoal">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((item) => (
                    <div key={item.days} className="flex justify-between text-sm border-b border-light pb-2">
                      <span className="font-semibold text-charcoal">{item.days}</span>
                      <span className="text-muted">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3">
                  * All major Hindu festivals observed. Check events page for holiday schedule.
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-turmeric/40 to-ivory border border-saffron/20 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-charcoal mb-4">Quick Answers</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Volunteer applications', href: '/get-involved' },
                    { label: 'Donation information', href: '/donate' },
                    { label: 'Aum School enrollment', href: '/programs/aum-school' },
                    { label: 'Gaushala visits', href: '/programs/gaushala' },
                    { label: 'Event calendar', href: '/events' },
                    { label: 'Membership sign-up', href: '/get-involved#membership' },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-muted hover:text-saffron transition-colors group py-1"
                    >
                      <ArrowRight size={13} className="text-saffron opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency / Urgent */}
              <div className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-saffron">
                <h4 className="font-semibold text-charcoal mb-2 text-sm">Urgent Inquiries</h4>
                <p className="text-xs text-muted leading-relaxed">
                  For time-sensitive matters (event day issues, media inquiries, or urgent donations over $10,000), please call us directly at <a href="tel:+17045550123" className="text-saffron font-semibold">(704) 555-0123</a> or text us at the same number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-pad bg-ivory">
        <div className="container-pad">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-3">
              Department-Specific Contacts
            </h2>
            <p className="text-muted">Reach the right team directly for faster responses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-white rounded-2xl shadow-card p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h3 className="font-semibold text-charcoal mb-1">{dept.name}</h3>
                <p className="text-xs text-muted mb-3 leading-relaxed">{dept.description}</p>
                <div className="space-y-1">
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-sm text-saffron hover:underline">
                    <Mail size={13} />
                    {dept.email}
                  </a>
                  <a href={`tel:${dept.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-sm text-muted hover:text-saffron transition-colors">
                    <Phone size={13} />
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Our Future Home — Charlotte, NC
            </h2>
            <p className="text-muted mb-6">
              We are currently in site selection for our 5-acre campus. We plan to remain within the South Charlotte / Ballantyne / Steele Creek corridor to serve the largest concentration of our community members.
            </p>
            <div className="bg-gradient-to-br from-green/10 to-ivory border-2 border-dashed border-green/30 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Site Selection In Progress</h3>
              <p className="text-muted mb-4">
                Our target area includes South Charlotte, Ballantyne, Lake Norman, and Huntersville corridors.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['South Charlotte', 'Ballantyne', 'Steele Creek', 'Huntersville', 'Lake Norman', 'SouthPark'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-white border border-green/20 rounded-full text-sm text-green font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
