import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight font-[Montserrat]">Sanma LLC</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-emerald-600 transition">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/booking"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Now
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-600 font-medium hover:text-emerald-600 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
