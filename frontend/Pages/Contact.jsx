import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', formData)
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message')
    }
    setLoading(false)
  }

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
              Contact
              <span className="w-8 h-px bg-teal-300"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 font-[Montserrat]">Get in Touch</h1>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Have questions or ready to schedule? We're here to help.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[Montserrat]">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input type="text" placeholder="John" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input type="tel" placeholder="+1 (720) 000-0000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                        <input type="text" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="input-field" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                      <textarea placeholder="Tell us about your cleaning needs..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="input-field" rows="6" required />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg !rounded-lg">
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 font-[Montserrat]">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Address</p>
                        <p className="text-gray-500 text-sm">6500 E 88th Ave, Lot 278<br />Henderson, CO 80640, US</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Phone</p>
                        <a href="tel:+17206018355" className="text-gray-500 text-sm hover:text-[var(--color-primary)] transition-colors">+1 720 601 8355</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[var(--color-primary-lighter)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Working Hours</p>
                        <p className="text-gray-500 text-sm">Mon - Sat: 7:00 AM - 6:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="font-semibold text-gray-900 text-sm mb-4 font-[Montserrat]">Follow Us</p>
                    <div className="flex gap-3">
                      {[
                        { name: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                        { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                        { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                      ].map((social) => (
                        <a key={social.name} href="#" aria-label={social.name} className="w-10 h-10 bg-[var(--color-primary-lighter)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-lg font-bold mb-3 font-[Montserrat]">Need a Quote?</h3>
                  <p className="text-teal-100 text-sm mb-5">Get a free estimate for your cleaning service today.</p>
                  <a href="/booking" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-dark)] font-bold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-all text-sm shadow-md">
                    Get Free Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.5!2d-104.75!3d39.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHenderson%2C+CO+80640!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sanma LLC Location"
        />
      </section>

      <Footer />
    </>
  )
}
