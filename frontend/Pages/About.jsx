import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function About() {
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
              About
              <span className="w-8 h-px bg-teal-300"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 font-[Montserrat]">About Sanma LLC</h1>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Learn about our story, values, and commitment to excellence in cleaning.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                  <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                  Who We Are
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-[Montserrat] leading-tight">
                  More Than a Decade of Excellence
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Founded with a commitment to excellence, Sanma LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in Henderson, Colorado, and surrounding areas. Our continuous pursuit for perfection has resulted in consistent growth each year.
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of residential and commercial cleaning service they deserve. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                <Link to="/booking" className="btn-primary">
                  Request a Free Estimate
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80" alt="Sanma LLC cleaning team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--color-primary)] text-white rounded-2xl p-5 shadow-xl hidden lg:block">
                  <p className="text-3xl font-bold font-[Montserrat]">500+</p>
                  <p className="text-teal-100 text-sm">Happy Clients</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                Our Values
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
              </div>
              <h2 className="section-title mt-3">Built on Trust & Quality</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="scroll-animate-left">
              <div className="card p-8 h-full rounded-2xl">
                <div className="w-14 h-14 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-[Montserrat]">Exceptional Cleaning Services</h3>
                <p className="text-gray-500 leading-relaxed">
                  We are dedicated to delivering an exceptional level of cleaning that goes beyond surface-level cleanliness. Every corner, every surface, every detail matters to us. Our commitment to perfection drives everything we do.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="card p-8 h-full rounded-2xl">
                <div className="w-14 h-14 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-[Montserrat]">Friendly & Professional Team</h3>
                <p className="text-gray-500 leading-relaxed">
                  Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless. We treat every home and office as if it were our own, with care and respect.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                  <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                  Our Vision & Mission
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-[Montserrat] leading-tight">Cleaner Spaces, Happier Places</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="lg:col-span-2 space-y-6">
                <div className="card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-[Montserrat]">Our Vision</h3>
                  <p className="text-gray-500 leading-relaxed">
                    To be the most trusted and respected cleaning service provider in Colorado, known for our unwavering commitment to quality, integrity, and customer satisfaction. We envision a world where every space we touch inspires health, comfort, and peace of mind.
                  </p>
                </div>
                <div className="card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-[Montserrat]">Our Mission</h3>
                  <p className="text-gray-500 leading-relaxed">
                    To deliver exceptional cleaning services that exceed expectations through attention to detail, eco-friendly practices, and a team of dedicated professionals. We strive to make every home and business we serve a cleaner, healthier, and more enjoyable environment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-[Montserrat]">Get a Free Estimate</h2>
            <p className="text-blue-200 mb-8 text-lg">Contact us today and we'll provide a free, no-obligation quote for your cleaning needs.</p>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] font-bold py-3.5 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
              Send a Request
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
