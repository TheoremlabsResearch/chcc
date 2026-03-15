import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#F47C36',
          dark: '#D4621E',
          light: '#FAA46A',
        },
        green: {
          DEFAULT: '#4A7C59',
          dark: '#3A6347',
          light: '#6BA07A',
        },
        teak: '#8B5A2B',
        cream: '#FDFBF7',
        ivory: '#F5F0E8',
        turmeric: '#F9E4C8',
        sandalwood: '#C4956A',
        charcoal: '#2D2D2D',
        muted: '#6B7280',
        light: '#E5E7EB',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'Noto Serif Devanagari', 'serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.5' }],
        'sm':   ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem',     { lineHeight: '1.75' }],
        'lg':   ['1.125rem', { lineHeight: '1.75' }],
        'xl':   ['1.25rem',  { lineHeight: '1.75' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.4' }],
        '3xl':  ['1.875rem', { lineHeight: '1.3' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.2' }],
        '5xl':  ['3rem',     { lineHeight: '1.1' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.05' }],
        '7xl':  ['4.5rem',   { lineHeight: '1.0' }],
        '8xl':  ['6rem',     { lineHeight: '1.0' }],
      },
      backgroundImage: {
        'gradient-saffron': 'linear-gradient(135deg, #F47C36 0%, #D4621E 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(45,45,45,0.7) 0%, rgba(45,45,45,0.4) 50%, rgba(74,124,89,0.6) 100%)',
        'gradient-green': 'linear-gradient(135deg, #4A7C59 0%, #2D2D2D 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F9E4C8 0%, #F5F0E8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'progress': 'progress 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '22.5%' },
        },
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(244, 124, 54, 0.15)',
        'card': '0 2px 16px rgba(45, 45, 45, 0.08)',
        'card-hover': '0 8px 32px rgba(45, 45, 45, 0.16)',
      },
    },
  },
  plugins: [],
}

export default config
