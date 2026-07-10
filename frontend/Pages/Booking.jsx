import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '', service_type: '',
    preferred_date: '', preferred_time: '', address: '', special_instructions: ''
  })
  const [loading, setLoading] = useState(false)

  const serviceTypes = [
    "Residential Cleaning", "Commercial Cleaning", "Deep Cleaning",
    "Move-in/Move-out Cleaning", "Post-construction Cleaning", "Recurring Maintenance"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/bookings', formData)
      toast.success('Booking submitted successfully! We will contact you shortly.')
      setFormData({
        full_name: '', email: '', phone: '', service_type: '',
        preferred_date: '', preferred_time: '', address: '', special_instructions: ''
      })
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.')
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
              Booking
              <span className="w-8 h-px bg-teal-300"></span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-4 font-[Montserrat]">Request Your Cleaning Service</h1>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" placeholder="John Smith" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" placeholder="+1 (720) 000-0000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type *</label>
                    <select value={formData.service_type} onChange={(e) => setFormData({...formData, service_type: e.target.value})} className="input-field" required>
                      <option value="">Select a service</option>
                      {serviceTypes.map((service, i) => (
                        <option key={i} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                    <input type="date" min={new Date().toISOString().split('T')[0]} value={formData.preferred_date} onChange={(e) => setFormData({...formData, preferred_date: e.target.value})} className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                    <select value={formData.preferred_time} onChange={(e) => setFormData({...formData, preferred_time: e.target.value})} className="input-field" required>
                      <option value="">Select a time</option>
                      <option>Morning (8AM - 12PM)</option>
                      <option>Afternoon (12PM - 5PM)</option>
                      <option>Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Address *</label>
                  <input type="text" placeholder="123 Main St, Henderson, CO 80640" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions</label>
                  <textarea placeholder="Any specific requirements or areas to focus on..." value={formData.special_instructions} onChange={(e) => setFormData({...formData, special_instructions: e.target.value})} className="input-field" rows="4" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg !rounded-lg">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      Submit Booking Request
                    </span>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
