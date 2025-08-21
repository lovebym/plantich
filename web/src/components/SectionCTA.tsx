export default function SectionCTA() {
  return (
    <section className="bg-herbal text-white text-center py-20 px-6">
      <h2 className="text-3xl font-serif mb-4">Begin Your Plant Journey</h2>
      <p className="text-lg font-sans mb-6 max-w-xl mx-auto">
        Create your own herbal path with personalized guidance and ancient plant allies.
      </p>
      <a
        href="/search"
        className="inline-block bg-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
      >
        Enter the Apothecary
      </a>
    </section>
  );
}
