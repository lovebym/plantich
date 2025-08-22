export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-herbal font-sans max-w-2xl mx-auto leading-relaxed">
            Our commitment to transparency and your understanding of how we serve you.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">1. Acceptance of Terms</h2>
                <p className="text-ink font-sans leading-relaxed mb-4">
                  By accessing and using Plantich (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Use License */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">2. Use License</h2>
                <p className="text-ink font-sans leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Plantich&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Plantich&apos;s website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">3. Disclaimer</h2>
                <p className="text-ink font-sans leading-relaxed mb-4">
                  The materials on Plantich&apos;s website are provided on an &apos;as is&apos; basis. Plantich makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-ink font-sans leading-relaxed">
                  Further, Plantich does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>

              {/* Limitations */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">4. Limitations</h2>
                <p className="text-ink font-sans leading-relaxed">
                  In no event shall Plantich or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Plantich&apos;s website, even if Plantich or a Plantich authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">5. Accuracy of Materials</h2>
                <p className="text-ink font-sans leading-relaxed">
                  The materials appearing on Plantich&apos;s website could include technical, typographical, or photographic errors. Plantich does not warrant that any of the materials on its website are accurate, complete, or current. Plantich may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              {/* Links */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">6. Links</h2>
                <p className="text-ink font-sans leading-relaxed">
                  Plantich has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Plantich of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">7. Modifications</h2>
                <p className="text-ink font-sans leading-relaxed">
                  Plantich may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">8. Governing Law</h2>
                <p className="text-ink font-sans leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              {/* Medical Disclaimer */}
              <div className="apothecary-card p-8 bg-red-50 border-red-200">
                <h2 className="font-serif text-2xl text-red-800 mb-4">Medical Disclaimer</h2>
                <p className="text-red-700 font-sans leading-relaxed mb-4">
                  <strong>Important:</strong> The information provided on Plantich is for educational purposes only and is not intended as medical advice. The content is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-red-700 font-sans leading-relaxed">
                  Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">Contact Information</h2>
                <p className="text-ink font-sans leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-clay/20 rounded-lg">
                  <p className="text-herbal font-sans">Email: legal@plantich.com</p>
                  <p className="text-sm text-ink font-sans mt-2">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
