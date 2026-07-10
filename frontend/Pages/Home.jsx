import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const serviceCards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: "Residential Cleaning",
    desc: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces to keep your living space spotless."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    title: "Commercial Cleaning",
    desc: "Professional office cleaning, desk sanitization, floor care, and common area maintenance for a productive workplace."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Deep Cleaning",
    desc: "Thorough deep clean of neglected areas, appliances, baseboards, and hard-to-reach spots for a truly refreshed home."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
    title: "Move In/Out Cleaning",
    desc: "Comprehensive cleaning for property transitions, leaving every space spotless and ready for the next chapter."
  },
]

const testimonials = [
  { name: "Sarah Johnson", role: "Homeowner", content: "Sanma cleaned my home today and they did a terrific job. They really paid attention to detail. My house has never looked this good!", rating: 5 },
  { name: "Michael Chen", role: "Business Owner", content: "Best cleaning service I've ever used. They pay attention to every detail and our office has never looked better. Highly recommend!", rating: 5 },
  { name: "Emily Rodriguez", role: "Property Manager", content: "After our renovation project, Sanma cleaned it all up perfectly. Saved us so much time and stress. Professional and thorough!", rating: 5 },
]

const stats = [
  { num: "500+", label: "Happy Customers" },
  { num: "1K+", label: "Projects Completed" },
  { num: "6+", label: "Service Categories" },
  { num: "100%", label: "Satisfaction Rate" },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextTestimonial])

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Professional cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 w-full">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/10 text-teal-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Trusted Cleaning Professionals
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.1] font-[Montserrat]">
                Professional Cleaning That Keeps Your Spaces{' '}
                <span className="text-teal-300">Spotless</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg lg:text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
                Reliable and efficient cleaning services for your home or business in Henderson, Colorado. We make your space shine so you can focus on what matters.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center text-lg !py-4 !px-8 !rounded-lg shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Request a Free Estimate
                </Link>
                <Link to="/services" className="glass text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all text-center text-lg">
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
          <div className="scroll-cue text-white/60">
            <svg className="w-6 h-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                    alt="Professional cleaning team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-white rounded-2xl p-6 shadow-xl hidden lg:block">
                  <p className="text-3xl font-bold font-[Montserrat]">10+</p>
                  <p className="text-teal-100 text-sm">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scroll-animate-right">
              <div>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                  <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                  About Sanma LLC
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-[Montserrat] leading-tight">
                  We Clean to the Highest Standards
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Sanma LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in Henderson, Colorado and surrounding areas. Our continuous pursuit for perfection has resulted in consistent growth.
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of cleaning service they deserve. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking" className="btn-primary">
                    Request a Free Estimate
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link to="/about" className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                What We Do
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
              </div>
              <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
              <p className="section-subtitle">Comprehensive cleaning solutions tailored to your specific needs.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-8 text-center card-hover border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-[var(--color-primary-lighter)] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-[Montserrat]">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.desc}</p>
                  <Link to="/booking" className="text-[var(--color-primary)] font-semibold text-sm hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1">
                    Book Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-secondary">
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div>
                  <p className="text-3xl lg:text-4xl font-extrabold text-white font-[Montserrat]">{stat.num}</p>
                  <p className="text-teal-200 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                  <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                  Why Choose Us
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 font-[Montserrat] leading-tight">
                  We Take Pride in Our Work
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "Professional Staff", desc: "Our team is trained, experienced, and committed to delivering exceptional cleaning results every time." },
                    { title: "Eco-Friendly Products", desc: "We use hospital-grade, eco-friendly cleaning products that are safe for your family, pets, and the environment." },
                    { title: "Certified Cleaners", desc: "All our cleaners are fully certified, background-checked, and trained in the latest cleaning techniques." },
                    { title: "Fair Prices", desc: "Competitive pricing with no hidden fees. Get premium cleaning services at rates that work for your budget." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                        <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-[Montserrat]">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
                    alt="Professional cleaning equipment and supplies"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-5 shadow-xl hidden lg:flex items-center gap-3 border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">100% Satisfaction</p>
                    <p className="text-xs text-gray-400">Guaranteed results</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
                Testimonials
                <span className="w-8 h-px bg-[var(--color-primary)]"></span>
              </div>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
              <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers.</p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg border border-gray-100">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-8 text-lg italic leading-relaxed max-w-2xl mx-auto">"{t.content}"</p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center">
                          <span className="text-[var(--color-primary)] font-bold text-lg font-[Montserrat]">{t.name[0]}</span>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 font-[Montserrat]">{t.name}</p>
                          <p className="text-gray-400 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentTestimonial(i); setIsAutoPlaying(false) }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? 'bg-[var(--color-primary)] w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/testimonials" className="btn-secondary">View All Reviews</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-primary-dark)] to-[var(--color-accent)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-[Montserrat]">Ready for a Spotless Space?</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Get your free estimate today and experience the Sanma difference. We'll make your space shine like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all text-lg shadow-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Get Your Free Estimate
              </Link>
              <a href="tel:+17206018355" className="glass text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all text-lg inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
