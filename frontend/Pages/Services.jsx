import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'Home Cleaning',
    description: 'Our comprehensive home cleaning service covers every room from top to bottom. We dust, vacuum, mop, and sanitize all surfaces, leaving your home fresh, clean, and healthy for you and your family.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Laundry Services',
    description: 'Let us take the hassle out of laundry. We handle washing, drying, folding, and ironing your clothes with the utmost care, using gentle detergents that are safe for all fabric types.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Washing Up',
    description: 'Our dishwashing and kitchen cleaning service ensures your dishes, cookware, and countertops are thoroughly cleaned and sanitized. We leave your kitchen sparkling and organized after every visit.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Carpet Cleaning',
    description: 'Our deep carpet cleaning service removes embedded dirt, stains, and allergens using hot water extraction and eco-friendly solutions. Your carpets will look refreshed and last longer.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Roof Cleaning',
    description: "Our roof cleaning service removes moss, algae, dirt, and debris safely without damaging your shingles. We protect your roof's integrity while restoring its original appearance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Office Cleaning',
    description: 'Our commercial office cleaning keeps your workplace spotless and professional. We sanitize desks, empty trash, vacuum carpets, and clean common areas so your team can focus on work.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Professional Cleaning Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive cleaning solutions tailored to your specific needs.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Our Cleaning Services</h2>
            <p className="text-gray-600 text-lg">From routine maintenance to deep cleaning, we have got you covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[Montserrat]">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <Link to="/booking" className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition">
                  Book This Service
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
          <h2 className="text-4xl font-extrabold text-white mb-4 font-[Montserrat]">Not Sure Which Service You Need?</h2>
          <p className="text-emerald-100 text-lg mb-8">Contact us and we will help you find the perfect cleaning solution.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-2xl">
            Contact Us
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
