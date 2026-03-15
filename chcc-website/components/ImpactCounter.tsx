'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  sublabel?: string
  dark?: boolean
}

function Counter({ end, suffix = '', prefix = '', duration = 2000, label, sublabel, dark = false }: CounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [started, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl font-heading font-bold mb-2 ${dark ? 'text-white' : 'text-charcoal'}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={`text-base font-semibold mb-1 ${dark ? 'text-saffron' : 'text-saffron'}`}>
        {label}
      </div>
      {sublabel && (
        <div className={`text-sm ${dark ? 'text-gray-400' : 'text-muted'}`}>
          {sublabel}
        </div>
      )}
    </div>
  )
}

interface ImpactCounterProps {
  dark?: boolean
}

export default function ImpactCounter({ dark = true }: ImpactCounterProps) {
  const metrics = [
    { end: 127, suffix: '+', label: 'Events Hosted', sublabel: 'Across Charlotte metro' },
    { end: 8400, suffix: '+', label: 'Attendees Served', sublabel: 'Community members reached' },
    { end: 1200, suffix: '+', label: 'Sewa Hours', sublabel: 'Volunteer service given' },
    { end: 3200, label: 'lbs Food Donated', sublabel: 'Through food drives & langars' },
  ]

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${dark ? '' : ''}`}>
      {metrics.map((metric) => (
        <Counter
          key={metric.label}
          end={metric.end}
          suffix={metric.suffix}
          label={metric.label}
          sublabel={metric.sublabel}
          dark={dark}
        />
      ))}
    </div>
  )
}
