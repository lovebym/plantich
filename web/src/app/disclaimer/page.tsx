export default function DisclaimerPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-ink mb-6">Medical Disclaimer</h1>
          <p className="text-xl text-herbal font-sans leading-relaxed">
            Important health and safety information
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="apothecary-card p-8 border-l-4 border-herbal">
              <h2 className="text-2xl font-serif text-ink mb-4">⚠️ Important Notice</h2>
              <p className="text-ink font-sans leading-relaxed font-medium">
                The information provided on Plantich is for educational and informational purposes only. 
                It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Medical Advice Disclaimer</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                Always seek the advice of your physician or other qualified health provider with any 
                questions you may have regarding a medical condition. Never disregard professional 
                medical advice or delay in seeking it because of something you have read on Plantich.
              </p>
              <p className="text-ink font-sans leading-relaxed">
                If you think you may have a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">No Doctor-Patient Relationship</h2>
              <p className="text-ink font-sans leading-relaxed">
                The use of information on this site or materials linked from this site is at the user&apos;s 
                own risk. The content of this site is not intended to be a substitute for professional 
                medical advice, diagnosis, or treatment. Reliance on any information provided by Plantich 
                is solely at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Herb and Supplement Safety</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                Herbal supplements and natural remedies can interact with medications and may not be 
                appropriate for everyone. Some herbs can be harmful if used incorrectly or in combination 
                with certain medications.
              </p>
              <p className="text-ink font-sans leading-relaxed">
                Before using any herbal remedy or supplement, especially if you are pregnant, nursing, 
                have a medical condition, or are taking medications, consult with a qualified healthcare professional.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Individual Results May Vary</h2>
              <p className="text-ink font-sans leading-relaxed">
                Individual results may vary. The effectiveness of herbs and natural remedies can depend 
                on many factors including individual health conditions, genetics, lifestyle, and proper usage. 
                What works for one person may not work for another.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Quality and Sourcing</h2>
              <p className="text-ink font-sans leading-relaxed">
                While we strive to provide accurate information about herbs and their traditional uses, 
                we cannot guarantee the quality, purity, or safety of any products mentioned or linked to 
                on our site. Always purchase herbs and supplements from reputable sources and verify 
                their quality and authenticity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Pregnancy and Nursing</h2>
              <p className="text-ink font-sans leading-relaxed">
                Many herbs are not safe during pregnancy or while nursing. If you are pregnant, planning 
                to become pregnant, or nursing, consult with your healthcare provider before using any 
                herbal remedies or supplements.
              </p>
            </div>

            <div className="apothecary-card p-8 bg-herbal/5">
              <h2 className="text-2xl font-serif text-ink mb-4">Our Commitment</h2>
              <p className="text-ink font-sans leading-relaxed">
                Plantich is committed to providing accurate, well-researched information about plants 
                and their traditional uses. We encourage you to use this information as a starting point 
                for your own research and to always consult with qualified healthcare professionals 
                for personalized medical advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mb-4">Contact Us</h2>
              <p className="text-ink font-sans leading-relaxed">
                If you have any questions about this disclaimer or our content, please contact us at 
                hello@plantich.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
