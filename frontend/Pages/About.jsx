import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function About() {
  const reasons = [
    { title: 'Trained Professionals', desc: 'Our staff is thoroughly trained and background-checked for your security.' },
    { title: 'Eco-Friendly Products', desc: 'We use safe, effective cleaning products that are gentle on your family and the environment.' },
    { title: 'Local & Reliable', desc: 'Proudly serving the Henderson community with dependable, on-time service.' },
  ]

  const stats = [
    { value: '100%', label: 'Satisfaction' },
    { value: '24/7', label: 'Availability' },
    { value: 'Fast', label: 'Response' },
    { value: 'Local', label: 'Henderson, CO' },
  ]

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            About
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">About Sanma LLC</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Learn about our story, values, and commitment to excellence in cleaning.</p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-[Montserrat]">More Than a Decade of Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded with a commitment to excellence, Sanma LLC has built a reputation as one of the leading providers
                of residential and commercial cleaning solutions in Henderson, Colorado, and surrounding areas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our focus is to listen to our clients, understand their needs, and provide the exceptional level of
                residential and commercial cleaning service they deserve. Our professional team uses eco-friendly products
                and advanced techniques to ensure your space is not just clean, but truly spotless.
              </p>
              <Link to="/booking" className="btn-primary">
                Request a Free Estimate
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
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

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Why Choose Sanma LLC?</h2>
            <p className="text-gray-600 text-lg">We are dedicated to delivering exceptional results with every visit.</p>
          </div>
          <div className="space-y-5 max-w-3xl mx-auto">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100">
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
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-extrabold text-white mb-4 font-[Montserrat]">Get a Free Estimate</h2>
          <p className="text-emerald-100 text-lg mb-8">Contact us today and we will provide a free, no-obligation quote for your cleaning needs.</p>
          <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-2xl">
            Send a Request
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
