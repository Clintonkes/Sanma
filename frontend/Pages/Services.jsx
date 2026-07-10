import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Our comprehensive home cleaning service covers every room from top to bottom. We dust, vacuum, mop, and sanitize all surfaces, leaving your home fresh, clean, and healthy for you and your family.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    id: 2,
    title: "Laundry Services",
    description: "Let us take the hassle out of laundry. We handle washing, drying, folding, and ironing your clothes with the utmost care, using gentle detergents that are safe for all fabric types.",
    img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    )
  },
  {
    id: 3,
    title: "Washing Up",
    description: "Our dishwashing and kitchen cleaning service ensures your dishes, cookware, and countertops are thoroughly cleaned and sanitized. We leave your kitchen sparkling and organized after every visit.",
    img: "https://images.unsplash.com/photo-1644056347416-8180f2548fc1?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    )
  },
  {
    id: 5,
    title: "Carpet Cleaning",
    description: "Our deep carpet cleaning service removes embedded dirt, stains, and allergens using hot water extraction and eco-friendly solutions. Your carpets will look refreshed and last longer.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" /></svg>
    )
  },
  {
    id: 6,
    title: "Roof Cleaning",
    description: "Our roof cleaning service removes moss, algae, dirt, and debris safely without damaging your shingles. We protect your roof's integrity while restoring its original appearance.",
    img: "https://images.unsplash.com/photo-1640653488366-f7771cd7292d?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    id: 7,
    title: "Office Cleaning",
    description: "Our commercial office cleaning keeps your workplace spotless and professional. We sanitize desks, empty trash, vacuum carpets, and clean common areas so your team can focus on work.",
    img: "https://images.unsplash.com/photo-1437326300822-01d8f13c024f?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  }
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="relative bg-[var(--color-accent)] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/95 via-[var(--color-primary-dark)]/80 to-[var(--color-accent)]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm mb-4">
              <span className="w-8 h-px bg-teal-300"></span>
              Services
              <span className="w-8 h-px bg-teal-300"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 font-[Montserrat]">Professional Cleaning Solutions</h1>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Comprehensive cleaning solutions tailored to your specific needs.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                What We Do
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
              </div>
              <h2 className="section-title mt-3">Our Cleaning Services</h2>
              <p className="section-subtitle">From routine maintenance to deep cleaning, we've got you covered.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {i % 2 === 0 ? (
                    <>
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-[Montserrat]">{service.title}</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/booking" className="btn-primary">Book This Service</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                          <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                        </div>
                      </div>
                      <div className="lg:order-1">
                        <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-[Montserrat]">{service.title}</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/booking" className="btn-primary">Book This Service</Link>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-[Montserrat]">Not Sure Which Service You Need?</h2>
            <p className="text-blue-200 mb-8 text-lg">Contact us and we'll help you find the perfect cleaning solution.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] font-bold py-3.5 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
