'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, Check, User, Heart, Settings, Star } from 'lucide-react'

const volunteerInterests = [
  'Yoga & Wellness Instruction',
  'Aum School Teaching Assistant',
  'Gaushala Animal Care',
  'Event Planning & Coordination',
  'Fundraising & Development',
  'Marketing & Social Media',
  'Website & Technology',
  'Food Preparation & Langar',
  'Heritage Arts (Dance/Music)',
  'Kalaripayattu / Mallakhamba',
  'Senior Oasis Programs',
  'Sewa / Community Outreach',
  'Administrative Support',
  'Finance & Accounting',
  'Legal / HR Advisory',
  'Construction / Facilities',
  'Photography & Videography',
  'Translation Services',
  'Youth Mentorship',
  'Corporate Partnership Liaison',
]

const languageOptions = [
  'English', 'Hindi', 'Telugu', 'Tamil', 'Gujarati', 'Kannada',
  'Malayalam', 'Marathi', 'Bengali', 'Punjabi', 'Sanskrit', 'Other',
]

const availabilityOptions = [
  'Weekday mornings', 'Weekday afternoons', 'Weekday evenings',
  'Saturday mornings', 'Saturday afternoons', 'Sunday mornings',
  'Sunday afternoons', 'Flexible / As needed',
]

interface FormData {
  // Step 1
  firstName: string
  lastName: string
  email: string
  phone: string
  zip: string
  // Step 2
  interests: string[]
  // Step 3
  skills: string
  languages: string[]
  availability: string[]
  hoursPerMonth: string
  // Step 4
  ambassadorInterest: boolean
  backgroundCheck: boolean
  motivation: string
  referral: string
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zip: '',
  interests: [],
  skills: '',
  languages: [],
  availability: [],
  hoursPerMonth: '',
  ambassadorInterest: false,
  backgroundCheck: false,
  motivation: '',
  referral: '',
}

const steps = [
  { title: 'Personal Info', icon: User, description: 'Tell us who you are' },
  { title: 'Volunteer Interests', icon: Heart, description: 'Where can you contribute?' },
  { title: 'Skills & Schedule', icon: Settings, description: 'Your expertise & availability' },
  { title: 'Ambassador & Finish', icon: Star, description: 'Final details' },
]

export default function VolunteerForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: keyof FormData, item: string) => {
    const arr = formData[field] as string[]
    if (arr.includes(item)) {
      updateField(field, arr.filter((i) => i !== item))
    } else {
      updateField(field, [...arr, item])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-10 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={36} className="text-green" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
          Thank You, {formData.firstName}!
        </h3>
        <p className="text-muted mb-6 leading-relaxed">
          Your volunteer application has been received. Our community team will reach out within 3–5 business days to discuss how your skills and passion can help build CHCC.
        </p>
        <div className="bg-turmeric/30 border border-saffron/20 rounded-xl p-4 text-sm text-charcoal">
          <p className="font-semibold mb-1">What happens next?</p>
          <p className="text-muted">1. You&apos;ll receive a confirmation email.</p>
          <p className="text-muted">2. We&apos;ll match you with the right team.</p>
          <p className="text-muted">3. Join our next volunteer orientation!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden max-w-3xl mx-auto">
      {/* Progress Header */}
      <div className="bg-gradient-to-r from-charcoal to-green-dark p-6">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="flex items-center">
                <div
                  className={`flex flex-col items-center ${idx <= steps.length - 1 ? '' : ''}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      idx < currentStep
                        ? 'bg-saffron'
                        : idx === currentStep
                        ? 'bg-white'
                        : 'bg-white/20'
                    }`}
                  >
                    {idx < currentStep ? (
                      <Check size={16} className="text-white" />
                    ) : (
                      <Icon size={16} className={idx === currentStep ? 'text-charcoal' : 'text-white/60'} />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1 hidden sm:block ${
                      idx === currentStep ? 'text-white font-semibold' : 'text-white/50'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-8 sm:w-16 mx-1 sm:mx-2 transition-all duration-300 ${
                      idx < currentStep ? 'bg-saffron' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>
        <div>
          <p className="text-white font-semibold">{steps[currentStep].description}</p>
          <p className="text-white/60 text-sm">Step {currentStep + 1} of {steps.length}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {/* Step 1: Personal Info */}
        {currentStep === 0 && (
          <div className="space-y-5">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="Priya"
                  required
                />
              </div>
              <div>
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  placeholder="Sharma"
                  required
                />
              </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="(704) 555-0100"
                />
              </div>
              <div>
                <label className="form-label">Zip Code *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.zip}
                  onChange={(e) => updateField('zip', e.target.value)}
                  placeholder="28277"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Volunteer Interests */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Volunteer Interests</h3>
            <p className="text-muted text-sm mb-6">Select all areas where you&apos;d like to contribute. You can choose multiple!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {volunteerInterests.map((interest) => {
                const selected = formData.interests.includes(interest)
                return (
                  <button
                    key={interest}
                    type="button"
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left text-sm transition-all duration-200 ${
                      selected
                        ? 'border-saffron bg-turmeric/20 text-charcoal'
                        : 'border-light bg-white text-muted hover:border-saffron/40 hover:bg-ivory'
                    }`}
                    onClick={() => toggleArrayItem('interests', interest)}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selected ? 'border-saffron bg-saffron' : 'border-light'
                      }`}
                    >
                      {selected && <Check size={12} className="text-white" />}
                    </div>
                    <span className={selected ? 'text-charcoal font-medium' : ''}>{interest}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 3: Skills & Schedule */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Skills & Schedule</h3>
            <div>
              <label className="form-label">Special Skills or Expertise</label>
              <textarea
                className="form-input h-28 resize-none"
                value={formData.skills}
                onChange={(e) => updateField('skills', e.target.value)}
                placeholder="e.g., Certified yoga instructor, event management 10+ years, software engineer, CPA, bilingual Hindi/English..."
              />
            </div>
            <div>
              <label className="form-label">Languages Spoken</label>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((lang) => {
                  const selected = formData.languages.includes(lang)
                  return (
                    <button
                      key={lang}
                      type="button"
                      className={`px-3 py-1.5 rounded-full text-sm border-2 transition-all ${
                        selected
                          ? 'border-green bg-green/10 text-green font-medium'
                          : 'border-light text-muted hover:border-green/40'
                      }`}
                      onClick={() => toggleArrayItem('languages', lang)}
                    >
                      {lang}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <label className="form-label">Availability</label>
              <div className="grid grid-cols-2 gap-2">
                {availabilityOptions.map((time) => {
                  const selected = formData.availability.includes(time)
                  return (
                    <button
                      key={time}
                      type="button"
                      className={`p-2.5 rounded-xl border-2 text-sm text-left transition-all ${
                        selected
                          ? 'border-saffron bg-turmeric/20 text-charcoal font-medium'
                          : 'border-light text-muted hover:border-saffron/40'
                      }`}
                      onClick={() => toggleArrayItem('availability', time)}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <label className="form-label">Hours Available Per Month</label>
              <select
                className="form-input"
                value={formData.hoursPerMonth}
                onChange={(e) => updateField('hoursPerMonth', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="1-5">1–5 hours</option>
                <option value="5-10">5–10 hours</option>
                <option value="10-20">10–20 hours</option>
                <option value="20+">20+ hours</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Ambassador & Finish */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">Final Details</h3>

            {/* Ambassador Interest */}
            <div className="p-5 bg-turmeric/20 border border-saffron/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-charcoal mb-1">CHCC Ambassador Program</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Ambassadors are community leaders who host small gatherings, spread awareness, and actively recruit members. This is a 6-month commitment requiring ~4 hours/month.
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-all flex-shrink-0 ${
                    formData.ambassadorInterest ? 'bg-saffron' : 'bg-light'
                  }`}
                  onClick={() => updateField('ambassadorInterest', !formData.ambassadorInterest)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transition-transform m-0.5 ${
                      formData.ambassadorInterest ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              {formData.ambassadorInterest && (
                <p className="text-green text-sm font-semibold mt-3">
                  ✓ Great! We&apos;ll include Ambassador orientation details in your welcome email.
                </p>
              )}
            </div>

            {/* Background Check */}
            <div className="flex items-start gap-3 p-4 bg-white border border-light rounded-xl">
              <button
                type="button"
                className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all ${
                  formData.backgroundCheck ? 'border-green bg-green' : 'border-light'
                }`}
                onClick={() => updateField('backgroundCheck', !formData.backgroundCheck)}
              >
                {formData.backgroundCheck && <Check size={12} className="text-white" />}
              </button>
              <div>
                <p className="text-sm font-semibold text-charcoal">Background Check Consent</p>
                <p className="text-xs text-muted mt-0.5">
                  I agree to a background check if working with minors (Aum School, Youth programs). This is processed free of charge by CHCC.
                </p>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <label className="form-label">Why do you want to volunteer with CHCC? *</label>
              <textarea
                className="form-input h-28 resize-none"
                value={formData.motivation}
                onChange={(e) => updateField('motivation', e.target.value)}
                placeholder="Share what draws you to CHCC's mission and what you hope to contribute and experience..."
                required
              />
            </div>

            {/* Referral */}
            <div>
              <label className="form-label">How did you hear about CHCC?</label>
              <select
                className="form-input"
                value={formData.referral}
                onChange={(e) => updateField('referral', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="friend">Friend or family member</option>
                <option value="temple">Local temple</option>
                <option value="event">CHCC event</option>
                <option value="social">Social media</option>
                <option value="web">Web search</option>
                <option value="newspaper">Newspaper / media</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-light">
          {currentStep > 0 ? (
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-light text-charcoal font-semibold rounded-full hover:border-charcoal transition-colors"
              onClick={() => setCurrentStep((s) => s - 1)}
            >
              <ChevronLeft size={16} />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-2.5 rounded-full shadow-warm transition-all hover:-translate-y-0.5"
              onClick={() => setCurrentStep((s) => s + 1)}
            >
              Continue
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 bg-green hover:bg-green-dark text-white font-bold px-8 py-2.5 rounded-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
            >
              <Check size={16} />
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
