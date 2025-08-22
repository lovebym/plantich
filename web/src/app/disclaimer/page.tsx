export default function DisclaimerPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-6">
            Medical Disclaimer
          </h1>
          <p className="text-xl text-herbal font-sans max-w-2xl mx-auto leading-relaxed">
            Important information about the educational nature of our content and your health.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Primary Disclaimer */}
            <div className="apothecary-card p-8 bg-red-50 border-red-200">
              <h2 className="font-serif text-2xl text-red-800 mb-6">⚠️ Important Notice</h2>
              <p className="text-red-700 font-sans leading-relaxed mb-4">
                <strong>The information provided on Plantich is for educational purposes only and is not intended as medical advice.</strong> The content is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-red-700 font-sans leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </div>

            {/* Educational Purpose */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Educational Purpose</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                Plantich serves as an educational platform that bridges ancient herbal wisdom with modern understanding. Our content is designed to:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                <li>Share traditional knowledge about medicinal plants</li>
                <li>Provide information about historical uses of herbs</li>
                <li>Present current scientific research where available</li>
                <li>Encourage informed discussions about natural remedies</li>
                <li>Promote understanding of botanical medicine</li>
              </ul>
            </div>

            {/* Not Medical Advice */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Not Medical Advice</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                The information on this website should not be used to:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                <li>Self-diagnose medical conditions</li>
                <li>Replace professional medical treatment</li>
                <li>Discontinue prescribed medications</li>
                <li>Make decisions about surgery or other medical procedures</li>
                <li>Treat serious or life-threatening conditions</li>
              </ul>
            </div>

            {/* Individual Variation */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Individual Variation</h2>
              <p className="text-ink font-sans leading-relaxed">
                Every individual is unique, and responses to herbal remedies can vary significantly. Factors such as age, health status, medications, allergies, and individual biochemistry all play important roles in how herbs may affect you. What works for one person may not work for another, and some herbs may cause adverse reactions in certain individuals.
              </p>
            </div>

            {/* Drug Interactions */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Drug Interactions</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                Herbal remedies can interact with prescription medications, over-the-counter drugs, and other supplements. These interactions can:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                <li>Reduce the effectiveness of medications</li>
                <li>Increase side effects</li>
                <li>Cause unexpected reactions</li>
                <li>Affect blood clotting, blood pressure, or blood sugar</li>
              </ul>
              <p className="text-ink font-sans leading-relaxed mt-4">
                Always consult with your healthcare provider before combining herbs with any medications.
              </p>
            </div>

            {/* Pregnancy and Children */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Special Populations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">Pregnancy and Breastfeeding</h3>
                  <p className="text-ink font-sans leading-relaxed">
                    Many herbs are contraindicated during pregnancy and breastfeeding. Some herbs can cause miscarriage, premature labor, or affect the developing fetus. Always consult with your obstetrician or midwife before using any herbal remedies during pregnancy or while breastfeeding.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">Children</h3>
                  <p className="text-ink font-sans leading-relaxed">
                    Children have different metabolic rates and sensitivities than adults. Herbal remedies should be used with extreme caution in children and only under the guidance of a qualified healthcare provider.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">Elderly</h3>
                  <p className="text-ink font-sans leading-relaxed">
                    Older adults may be more sensitive to herbal effects and may have multiple health conditions and medications. Extra caution should be exercised when considering herbal remedies for elderly individuals.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality and Safety */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Quality and Safety</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                The quality, purity, and safety of herbal products can vary significantly. Important considerations include:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                <li>Source and growing conditions of the herbs</li>
                <li>Processing and manufacturing standards</li>
                <li>Contamination with pesticides, heavy metals, or other substances</li>
                <li>Accuracy of labeling and dosage information</li>
                <li>Storage conditions and expiration dates</li>
              </ul>
            </div>

            {/* Research Limitations */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Research Limitations</h2>
              <p className="text-ink font-sans leading-relaxed">
                While some herbs have been extensively studied, many traditional uses lack comprehensive scientific validation. Research on herbal medicine is ongoing, and new information emerges regularly. We strive to present both traditional knowledge and current research, but acknowledge that our understanding is constantly evolving.
              </p>
            </div>

            {/* When to Seek Medical Care */}
            <div className="apothecary-card p-8 bg-yellow-50 border-yellow-200">
              <h2 className="font-serif text-2xl text-yellow-800 mb-4">When to Seek Medical Care</h2>
              <p className="text-yellow-700 font-sans leading-relaxed mb-4">
                Seek immediate medical attention if you experience:
              </p>
              <ul className="list-disc list-inside text-yellow-700 font-sans leading-relaxed space-y-2 ml-4">
                <li>Severe allergic reactions (difficulty breathing, swelling, hives)</li>
                <li>Unusual bleeding or bruising</li>
                <li>Severe stomach pain or digestive issues</li>
                <li>Changes in heart rate or blood pressure</li>
                <li>Unexplained symptoms or worsening of existing conditions</li>
                <li>Any other concerning symptoms</li>
              </ul>
            </div>

            {/* Professional Consultation */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Professional Consultation</h2>
              <p className="text-ink font-sans leading-relaxed mb-4">
                We recommend consulting with qualified healthcare professionals, including:
              </p>
              <ul className="list-disc list-inside text-ink font-sans leading-relaxed space-y-2 ml-4">
                <li>Your primary care physician</li>
                <li>Licensed herbalists or naturopathic doctors</li>
                <li>Pharmacists (for drug interaction information)</li>
                <li>Specialists for specific health conditions</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">Questions and Concerns</h2>
              <p className="text-ink font-sans leading-relaxed">
                If you have questions about this disclaimer or concerns about specific herbal remedies, please contact us at <span className="text-herbal">legal@plantich.com</span>. We are committed to providing accurate, helpful information while maintaining the highest standards of safety and responsibility.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-clay/30">
              <p className="text-sm text-herbal font-sans">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
