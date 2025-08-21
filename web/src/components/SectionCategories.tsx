export default function SectionCategories() {
  const categories = [
    { title: 'Mind', description: 'Mood, clarity, focus', href: '/search?category=mind' },
    { title: 'Body', description: 'Digestion, immunity, hormones', href: '/search?category=body' },
    { title: 'Spirit', description: 'Sleep, intuition, healing', href: '/search?category=spirit' },
  ];

  return (
    <section className="bg-sand text-ink py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.href}
            className="border border-clay p-6 rounded-lg hover:bg-clay/20 transition"
          >
            <h3 className="text-2xl font-serif mb-2">{cat.title}</h3>
            <p className="text-sm font-sans text-herbal">{cat.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
