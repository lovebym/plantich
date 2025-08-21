export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-ink mb-6">Terms of Service</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">1. Acceptance of Terms</h2>
              <p className="text-ink font-sans leading-relaxed">
                By accessing and using Plantich, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">2. Educational Purpose</h2>
              <p className="text-ink font-sans leading-relaxed">
                The information provided on Plantich is for educational and informational purposes only. 
                It is not intended as medical advice, diagnosis, or treatment. Always seek the advice 
                of your physician or other qualified health provider with any questions you may have 
                regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">3. Use License</h2>
              <p className="text-ink font-sans leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Plantich 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed mt-4 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">4. Disclaimer</h2>
              <p className="text-ink font-sans leading-relaxed">
                The materials on Plantich are provided on an &apos;as is&apos; basis. Plantich makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including 
                without limitation, implied warranties or conditions of merchantability, fitness for 
                a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">5. Limitations</h2>
              <p className="text-ink font-sans leading-relaxed">
                In no event shall Plantich or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on Plantich, even if Plantich 
                or a Plantich authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">6. Affiliate Links</h2>
              <p className="text-ink font-sans leading-relaxed">
                Plantich may contain affiliate links to products and services. If you purchase through 
                these links, we may earn a commission at no additional cost to you. We only recommend 
                products we believe in and use ourselves.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">7. Revisions</h2>
              <p className="text-ink font-sans leading-relaxed">
                Plantich may revise these terms of service at any time without notice. By using this 
                site, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">8. Contact Information</h2>
              <p className="text-ink font-sans leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                legal@plantich.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
