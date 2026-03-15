'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'

interface NavItem {
  label: string
  href?: string
  children?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Vision & Mission', href: '/about#mission', description: 'Our purpose and guiding principles' },
      { label: 'Our Story', href: '/about#story', description: 'How CHCC came to be' },
      { label: 'Leadership', href: '/about#leadership', description: 'The team behind CHCC' },
      { label: 'Partnerships', href: '/about#partnerships', description: 'Our community allies' },
    ],
  },
  {
    label: 'Facilities',
    children: [
      { label: 'Master Plan', href: '/facilities#master-plan', description: '5-acre campus vision' },
      { label: 'Gaushala', href: '/facilities#gaushala', description: 'Desi cow sanctuary' },
      { label: 'Wellness Wing', href: '/facilities#wellness', description: 'Yoga, Ayurveda & more' },
      { label: 'Cultural & Education', href: '/facilities#cultural', description: 'Aum School & arts' },
    ],
  },
  {
    label: 'Programs',
    children: [
      { label: 'Aum School', href: '/programs/aum-school', description: 'Vedic education for youth' },
      { label: 'Yoga & Wellness', href: '/programs#yoga', description: 'Hatha, meditation, Ayurveda' },
      { label: 'Heritage Arts', href: '/programs#arts', description: 'Dance, music, martial arts' },
      { label: 'Gaushala Programs', href: '/programs/gaushala', description: 'Cow sanctuary & campaigns' },
      { label: 'Senior Oasis', href: '/programs#senior', description: 'Programs for elders' },
    ],
  },
  { label: 'Events', href: '/events' },
  {
    label: 'Get Involved',
    children: [
      { label: 'Volunteer', href: '/get-involved#volunteer', description: 'Give your time & talent' },
      { label: 'Ambassador Program', href: '/get-involved#ambassador', description: 'Lead in your community' },
      { label: 'Membership', href: '/get-involved#membership', description: 'Join the CHCC family' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-saffron to-saffron-dark rounded-full flex items-center justify-center shadow-warm group-hover:scale-105 transition-transform">
              <span className="font-devanagari text-white text-lg md:text-xl font-bold leading-none">ॐ</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-heading font-bold text-charcoal leading-tight">
                CHCC
              </div>
              <div className="text-xs text-muted leading-tight hidden md:block">
                Charlotte Hindu Community Center
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      activeDropdown === item.label
                        ? 'text-saffron bg-turmeric/30'
                        : 'text-charcoal hover:text-saffron hover:bg-ivory'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-3 py-2 text-sm font-semibold text-charcoal hover:text-saffron hover:bg-ivory rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-card-hover border border-light py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex flex-col px-4 py-3 hover:bg-ivory transition-colors duration-150 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="text-sm font-semibold text-charcoal group-hover:text-saffron transition-colors">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-xs text-muted mt-0.5">{child.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Donate + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Donate Button - ALWAYS visible */}
            <Link
              href="/donate"
              className="flex items-center gap-1.5 bg-saffron hover:bg-saffron-dark text-white text-sm font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-warm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => setMobileOpen(false)}
            >
              <Heart size={14} className="fill-current" />
              <span>Donate</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-ivory transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-charcoal hover:bg-ivory rounded-xl transition-colors"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`text-muted transition-transform duration-200 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-turmeric pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2.5 px-2 text-sm text-charcoal hover:text-saffron transition-colors"
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileExpanded(null)
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-4 py-3 text-base font-semibold text-charcoal hover:bg-ivory hover:text-saffron rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Bottom CTA */}
            <div className="pt-6 mt-4 border-t border-light space-y-3">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 w-full bg-saffron hover:bg-saffron-dark text-white font-bold py-3.5 rounded-full shadow-warm transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <Heart size={16} className="fill-current" />
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="flex items-center justify-center w-full border-2 border-green text-green font-semibold py-3.5 rounded-full hover:bg-green hover:text-white transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
