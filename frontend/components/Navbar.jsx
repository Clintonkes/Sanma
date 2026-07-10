import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="hidden lg:block bg-[var(--color-accent)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+17206018355" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
              <svg className="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 720 601 8355
            </a>
            <span className="flex items-center gap-1.5 text-blue-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Henderson, CO
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-200 text-xs">Mon - Sat: 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 lg:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-11 h-11 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span className="text-white font-bold text-xl font-[Montserrat]">S</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 block leading-tight font-[Montserrat]">Sanma</span>
                  <span className="text-[11px] text-gray-400 block leading-tight tracking-wider uppercase">Professional Cleaning</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">Home</Link>
              <Link to="/about" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">About</Link>
              <Link to="/services" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">Services</Link>
              <Link to="/testimonials" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">Testimonials</Link>
              <Link to="/faq" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">FAQ</Link>
              <Link to="/contact" className="nav-link text-gray-700 hover:text-[var(--color-primary)] font-semibold text-sm transition-colors">Contact</Link>
              <Link to="/booking" className="btn-primary text-sm py-2.5 px-6 ml-2">
                <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Now
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+17206018355" className="p-2 text-[var(--color-primary)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg" style={{ animation: 'slideDown 0.3s ease-out' }}>
            <div className="px-4 pt-3 pb-5 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">About</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">Services</Link>
              <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">Testimonials</Link>
              <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">FAQ</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-[var(--color-primary)] font-semibold rounded-lg hover:bg-teal-50 transition-colors">Contact</Link>
              <Link to="/booking" onClick={() => setIsOpen(false)} className="block btn-primary text-center mt-3 py-3">
                <svg className="w-4 h-4 mr-1.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Now
              </Link>
              <a href="tel:+17206018355" className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 text-[var(--color-primary)] font-semibold text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +1 720 601 8355
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
