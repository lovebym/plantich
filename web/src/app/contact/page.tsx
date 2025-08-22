'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-herbal font-sans max-w-2xl mx-auto leading-relaxed">
            Have questions about herbal remedies? Want to share your plant wisdom? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-ink mb-8">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-sans">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-sans text-ink mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-sans text-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-sans text-ink mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="herbal-advice">Herbal Advice</option>
                    <option value="content-suggestion">Content Suggestion</option>
                    <option value="partnership">Partnership</option>
                    <option value="technical">Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sans text-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-herbal text-white hover:bg-ink disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl text-ink mb-8">Connect With Us</h2>
              
              <div className="space-y-8">
                <div className="apothecary-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-2">Email</h3>
                      <p className="text-herbal font-sans">hello@plantich.com</p>
                      <p className="text-sm text-ink font-sans mt-2">
                        We typically respond within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="apothecary-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌿</div>
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-2">Herbal Consultations</h3>
                      <p className="text-herbal font-sans">consultations@plantich.com</p>
                      <p className="text-sm text-ink font-sans mt-2">
                        For specific herbal advice and personalized recommendations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="apothecary-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-2">Partnerships</h3>
                      <p className="text-herbal font-sans">partnerships@plantich.com</p>
                      <p className="text-sm text-ink font-sans mt-2">
                        For collaborations, content partnerships, and business inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl text-ink mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-clay/30 pb-4">
                    <h4 className="font-serif text-lg text-ink mb-2">
                      Can you provide medical advice?
                    </h4>
                    <p className="text-sm text-herbal font-sans">
                      We provide educational information about herbal remedies but cannot offer 
                      medical advice. Always consult with healthcare professionals for medical concerns.
                    </p>
                  </div>

                  <div className="border-b border-clay/30 pb-4">
                    <h4 className="font-serif text-lg text-ink mb-2">
                      How do you source your information?
                    </h4>
                    <p className="text-sm text-herbal font-sans">
                      Our content draws from traditional herbal knowledge, scientific research, 
                      and clinical studies. We cite sources and prioritize evidence-based information.
                    </p>
                  </div>

                  <div className="border-b border-clay/30 pb-4">
                    <h4 className="font-serif text-lg text-ink mb-2">
                      Can I suggest a plant or remedy?
                    </h4>
                    <p className="text-sm text-herbal font-sans">
                      Absolutely! We welcome suggestions for new plants and remedies to add to 
                      our collection. Please use the form above or email us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-clay py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-ink mb-4">Stay Connected</h2>
          <p className="text-herbal font-sans mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest herbal wisdom, seasonal remedies, 
            and updates from the Plantich apothecary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 border border-clay rounded-lg bg-white text-ink font-sans focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent"
            />
            <button className="px-8 py-3 bg-herbal text-white hover:bg-ink transition-colors duration-300 text-sm tracking-wider uppercase font-sans rounded-md shadow-soft">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
