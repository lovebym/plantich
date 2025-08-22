"use client";

import { useState } from "react";

const symptoms = [
  "Anxiety",
  "Stress",
  "Depression",
  "Bloating",
  "Constipation",
  "Acne",
  "Fatigue",
  "Insomnia",
  "Brain fog",
  "Low libido",
  "Hormonal imbalance",
  "ADHD",
  "Eczema",
  "Hair loss",
  "Low immunity",
];

export default function SymptomList() {
  const [query, setQuery] = useState("");

  const filtered = symptoms.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-5xl font-serif text-center mb-10">Search by symptom</h2>
      <div className="max-w-xl mx-auto mb-6">
        <input
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg"
          type="text"
          placeholder="Start typing a symptom..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {filtered.map((symptom) => (
          <li
            key={symptom}
            className="bg-[#FDFBF7] border border-[#C36B50] text-[#1C1B1A] px-4 py-3 rounded-xl text-center shadow-sm hover:scale-105 transition-transform"
          >
            {symptom}
          </li>
        ))}
      </ul>
    </section>
  );
}
