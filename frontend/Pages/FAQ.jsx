import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'What areas do you service?', answer: 'We service Henderson, Colorado and surrounding areas within a 30-mile radius including Denver metro area. Contact us to confirm service availability in your area.' },
    { question: 'How much does cleaning cost?', answer: 'Our pricing varies based on service type, property size, and frequency. We offer competitive rates starting at $89 for basic residential cleaning. Get a free quote for accurate pricing.' },
    { question: 'Do you bring your own cleaning supplies?', answer: 'Yes, we bring all professional-grade cleaning supplies and equipment. We use eco-friendly products that are safe for your family and pets.' },
    { question: 'Are you insured and bonded?', answer: 'Absolutely. We are fully licensed, insured, and bonded for your peace of mind. All our cleaners undergo background checks.' },
    { question: 'What is your cancellation policy?', answer: 'We require 24 hours notice for cancellations. Cancellations made less than 24 hours before the scheduled service may incur a fee.' },
    { question: 'How do I pay for services?', answer: 'We accept credit cards, debit cards, and bank transfers. Payment is processed securely online after service completion.' },
  ]

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-[Montserrat]">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Find answers to common questions about our services.</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-bold text-gray-900 font-[Montserrat]">{faq.question}</span>
                  <span className={`text-emerald-600 text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">Still have questions? We are happy to help.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
