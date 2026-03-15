'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  if (subscribed) {
    return (
      <div className="flex items-center justify-center gap-2 bg-green/10 border border-green/30 text-green font-semibold py-3 px-6 rounded-full max-w-lg mx-auto">
        ✓ Thank you for subscribing! Check your email.
      </div>
    )
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="form-input flex-1"
        required
      />
      <button
        type="submit"
        className="bg-saffron hover:bg-saffron-dark text-white font-bold px-6 py-3 rounded-full shadow-warm hover:shadow-lg transition-all duration-300 whitespace-nowrap"
      >
        Subscribe Free
      </button>
    </form>
  )
}
