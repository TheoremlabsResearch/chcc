'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Linkedin, ArrowRight, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Events', href: '/events' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
]

const programLinks = [
  { label: 'Aum School', href: '/programs/aum-school' },
  { label: 'Yoga & Wellness', href: '/programs#yoga' },
  { label: 'Heritage Arts', href: '/programs#arts' },
  { label: 'Gaushala Programs', href: '/programs/gaushala' },
  { label: 'Senior Oasis', href: '/programs#senior' },
  { label: 'Sewa Initiatives', href: '/get-involved#volunteer' },
  { label: 'Culinary Classes', href: '/programs#culinary' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About CHCC */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-saffron-dark rounded-full flex items-center justify-center">
                <span className="font-devanagari text-white text-lg font-bold leading-none">ॐ</span>
              </div>
              <div>
                <div className="text-lg font-heading font-bold text-white leading-tight">CHCC</div>
                <div className="text-xs text-gray-400 leading-tight">Charlotte Hindu Community Center</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building Charlotte&apos;s first dedicated Hindu community center — a 5-acre campus rooted in Heritage, Wellness, and Harmony. Serving 8,400+ community members and counting.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="text-saffron mt-0.5 flex-shrink-0" />
                <span>Charlotte, NC (Site Selection in Progress)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={15} className="text-saffron flex-shrink-0" />
                <a href="mailto:info@chcc.org" className="hover:text-saffron transition-colors">info@chcc.org</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="text-saffron flex-shrink-0" />
                <a href="tel:+17045550123" className="hover:text-saffron transition-colors">(704) 555-0123</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/chcc_charlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/CHCCCharlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com/@CHCCCharlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://linkedin.com/company/chcc-charlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-heading font-bold text-white mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-saffron transition-colors duration-200 group"
                  >
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-saffron" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-base font-heading font-bold text-white mb-5 pb-2 border-b border-white/10">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-saffron transition-colors duration-200 group"
                  >
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-saffron" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect / Newsletter */}
          <div>
            <h3 className="text-base font-heading font-bold text-white mb-5 pb-2 border-b border-white/10">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Join 2,000+ subscribers for event updates, program announcements, and community stories.
            </p>
            {subscribed ? (
              <div className="bg-green/20 border border-green/30 rounded-xl p-4 text-sm text-green-light">
                ✓ Thank you for subscribing! We&apos;ll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-saffron hover:bg-saffron-dark text-white font-semibold py-2.5 rounded-xl text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={15} />
                </button>
              </form>
            )}

            {/* Tax Note */}
            <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-saffron font-semibold">Tax Deductible</span> — CHCC is a registered 501(c)(3) nonprofit. EIN: 88-XXXXXXX. All donations are tax-deductible to the extent permitted by law.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span>© 2025 Charlotte Hindu Community Center. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-saffron transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-saffron transition-colors">Terms of Use</Link>
              <Link href="/contact" className="hover:text-saffron transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart size={12} className="text-saffron fill-current" />
              <span>for the Charlotte community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
