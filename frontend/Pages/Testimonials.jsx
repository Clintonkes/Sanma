import { useState, useEffect, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Homeowner', content: 'Sanma cleaned my home today - they did a terrific job. They even moved the furniture to be sure the floors were cleaned - they really paid attention to detail. Thank you!', rating: 5 },
  { id: 2, name: 'Michael Chen', role: 'Business Owner', content: 'We would like to thank Sanma for an outstanding effort on this recently completed project. The work was completed on time and exceeded our expectations.', rating: 5 },
  { id: 3, name: 'Emily Rodriguez', role: 'Property Manager', content: 'After our construction project, Sanma cleaned it all up perfectly. They got rid of all the dust and debris. Saved us so much time and stress!', rating: 5 },
  { id: 4, name: 'David Thompson', role: 'Office Manager', content: "Reliable, trustworthy, and excellent quality. We've been using them for monthly maintenance and couldn't be happier with the consistent results.", rating: 4 },
  { id: 5, name: 'Lisa Williams', role: 'Homeowner', content: 'The move-out cleaning they provided was incredible. Our landlord was impressed, and we got our full deposit back! Highly recommend their services.', rating: 5 },
  { id: 6, name: 'Robert Kim', role: 'Restaurant Owner', content: 'Professional team, great communication, and fantastic results. They showed up on time and left our space spotless. Five stars all around!', rating: 5 },
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
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">What Our Clients Say</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Do not just take our word for it - hear from our satisfied customers.</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section
        className="py-24 bg-gray-50"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${j < t.rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold font-[Montserrat]">{t.name[0]}</span>
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
                  i === currentPage ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/booking" className="btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Join Our Happy Customers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
