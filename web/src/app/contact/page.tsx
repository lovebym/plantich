export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-ink mb-6">Contact Us</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed">
            Connect with the Plantich community
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink font-sans mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent font-sans"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink font-sans mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent font-sans"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink font-sans mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent font-sans"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="content">Content Suggestion</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink font-sans mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-clay rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal focus:border-transparent font-sans"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-herbal text-white py-4 px-6 rounded-lg font-medium hover:bg-ink transition-colors duration-300 font-sans"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-herbal font-sans">
              We typically respond within 24-48 hours during weekdays.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 px-6 bg-clay">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ink mb-8">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apothecary-card p-8">
              <h3 className="text-xl font-serif text-ink mb-4">General Inquiries</h3>
              <p className="text-ink font-sans mb-2">For questions about our platform</p>
              <p className="text-herbal font-sans">hello@plantich.com</p>
            </div>
            <div className="apothecary-card p-8">
              <h3 className="text-xl font-serif text-ink mb-4">Partnerships</h3>
              <p className="text-ink font-sans mb-2">For collaboration opportunities</p>
              <p className="text-herbal font-sans">partners@plantich.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
