import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "Homeowner", content: "Sanma cleaned my home today - they did a terrific job. They even moved the furniture to be sure the floors were cleaned - they really paid attention to detail. Thank you!", rating: 5 },
  { id: 2, name: "Michael Chen", role: "Business Owner", content: "We would like to thank Sanma for an outstanding effort on this recently completed project. The work was completed on time and exceeded our expectations.", rating: 5 },
  { id: 3, name: "Emily Rodriguez", role: "Property Manager", content: "After our construction project, Sanma cleaned it all up perfectly. They got rid of all the dust and debris. Saved us so much time and stress!", rating: 5 },
  { id: 4, name: "David Thompson", role: "Office Manager", content: "Reliable, trustworthy, and excellent quality. We've been using them for monthly maintenance and couldn't be happier with the consistent results.", rating: 4 },
  { id: 5, name: "Lisa Williams", role: "Homeowner", content: "The move-out cleaning they provided was incredible. Our landlord was impressed, and we got our full deposit back! Highly recommend their services.", rating: 5 },
  { id: 6, name: "Robert Kim", role: "Restaurant Owner", content: "Professional team, great communication, and fantastic results. They showed up on time and left our space spotless. Five stars all around!", rating: 5 }
]

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextPage = useCallback(() => {
    setCurrentPage(prev => (prev + 1) % totalPages)
  }, [totalPages])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextPage, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextPage])

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="relative bg-[var(--color-accent)] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/95 via-[var(--color-primary-dark)]/80 to-[var(--color-accent)]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm mb-4">
              <span className="w-8 h-px bg-teal-300"></span>
              Testimonials
              <span className="w-8 h-px bg-teal-300"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 font-[Montserrat]">What Our Clients Say</h1>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Don't just take our word for it - hear from our satisfied customers.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((t, i) => (
              <div key={t.id} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col" style={{ animation: `fadeInUp 0.6s ${i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1) both` }}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${j < t.rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed flex-1">"{t.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--color-primary)] font-bold font-[Montserrat]">{t.name[0]}</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-sm font-[Montserrat]">{t.name}</span>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'bg-[var(--color-primary)] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/booking" className="btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Join Our Happy Customers
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
