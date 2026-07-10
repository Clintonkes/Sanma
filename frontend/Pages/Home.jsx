import Navbar from '../components/Navbar'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const serviceCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas. We make your home feel fresh and inviting.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Cleaning',
    description: 'Professional office and commercial space cleaning. Keep your workplace spotless and presentable for employees and clients alike.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Deep Cleaning',
    description: 'Intensive deep cleaning for those hard-to-reach areas. Perfect for move-ins, move-outs, seasonal refreshes, or post-renovation cleanup.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Recurring Services',
    description: 'Weekly, bi-weekly, or monthly cleaning plans tailored to your needs. Consistent quality you can count on, every time.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Move-In / Move-Out',
    description: 'Thorough cleaning for property transitions. Ensure your old or new space is immaculate for the next chapter.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Specialty Cleaning',
    description: 'Custom cleaning solutions for unique spaces and situations. Just ask — we are here to help with whatever you need.',
  },
]

const reasons = [
  {
    title: 'Trained Professionals',
    desc: 'Our staff is thoroughly trained and background-checked for your security.',
  },
  {
    title: 'Eco-Friendly Products',
    desc: 'We use safe, effective cleaning products that are gentle on your family and the environment.',
  },
  {
    title: 'Local & Reliable',
    desc: 'Proudly serving the Henderson community with dependable, on-time service.',
  },
]

const stats = [
  { value: '100%', label: 'Satisfaction' },
  { value: '24/7', label: 'Availability' },
  { value: 'Fast', label: 'Response' },
  { value: 'Local', label: 'Henderson, CO' },
]

const contacts = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    content: (
      <a href="tel:+17206018355" className="text-emerald-600 font-semibold hover:underline">
        +1 (720) 601-8355
      </a>
    ),
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Address',
    content: (
      <p className="text-gray-600">
        6500 E 88th Ave, Lot 278<br />
        Henderson, CO 80640
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hours',
    content: (
      <p className="text-gray-600">
        Mon – Sat: 8:00 AM – 6:00 PM<br />
        Sun: By Appointment
      </p>
    ),
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 rounded-l-[100px] -translate-y-20" />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Professional Cleaning Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 font-[Montserrat]">
              Spotless Spaces,<br />
              <span className="text-emerald-600">Happy Places</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Reliable, thorough, and professional cleaning services for homes and
              businesses across Henderson, Colorado. We bring the shine back to your space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-emerald-700 transition shadow-xl shadow-emerald-600/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Request a Free Estimate
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl text-base font-bold hover:border-emerald-600 hover:text-emerald-600 transition"
              >
                Our Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Our Cleaning Services</h2>
            <p className="text-gray-600 text-lg">
              From routine maintenance to deep cleans, we handle it all with professionalism and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((s, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[Montserrat]">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-[Montserrat]">Why Choose Sanma LLC?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are a locally owned and operated cleaning company serving Henderson, Colorado, and
                surrounding areas. Our team is dedicated to delivering exceptional results with every visit.
              </p>
              <div className="space-y-5">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{r.title}</h4>
                      <p className="text-gray-600">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl rotate-3" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center p-6 bg-emerald-50 rounded-xl">
                      <p className="text-4xl font-extrabold text-emerald-600 mb-1 font-[Montserrat]">{s.value}</p>
                      <p className="text-sm font-medium text-gray-700">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-extrabold text-white mb-4 font-[Montserrat]">Ready for a Cleaner Space?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free estimate. We are ready to make your home or business shine.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Get In Touch</h2>
            <p className="text-gray-600 text-lg">Have questions or ready to book? Reach out — we are here to help.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contacts.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-emerald-200 transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 text-emerald-600">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-[Montserrat]">{c.title}</h3>
                {c.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
