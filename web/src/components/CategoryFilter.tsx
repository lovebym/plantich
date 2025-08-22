"use client";

import { useState } from "react";

export interface Category {
  title: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
}

const categories: Category[] = [
  {
    title: "Mental Health",
    slug: "mental-health",
    icon: "🧠",
    description: "Anxiety, depression, stress, focus",
    color: "bg-blue-50 border-blue-200 text-blue-800"
  },
  {
    title: "Skin & Hair",
    slug: "skin-hair",
    icon: "✨",
    description: "Acne, eczema, hair loss, aging",
    color: "bg-pink-50 border-pink-200 text-pink-800"
  },
  {
    title: "Digestion",
    slug: "digestion",
    icon: "🌿",
    description: "Bloating, IBS, constipation, acid reflux",
    color: "bg-green-50 border-green-200 text-green-800"
  },
  {
    title: "Immunity",
    slug: "immunity",
    icon: "🛡️",
    description: "Cold, flu, infections, immune support",
    color: "bg-purple-50 border-purple-200 text-purple-800"
  },
  {
    title: "Hormones",
    slug: "hormones",
    icon: "⚖️",
    description: "PMS, menopause, thyroid, libido",
    color: "bg-red-50 border-red-200 text-red-800"
  },
  {
    title: "Pain & Inflammation",
    slug: "pain-inflammation",
    icon: "🔥",
    description: "Joint pain, headaches, muscle soreness",
    color: "bg-orange-50 border-orange-200 text-orange-800"
  },
  {
    title: "Energy & Fatigue",
    slug: "energy",
    icon: "⚡",
    description: "Fatigue, burnout, low energy, adrenal support",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800"
  },
  {
    title: "Detox & Liver",
    slug: "detox",
    icon: "🌱",
    description: "Liver support, detoxification, cleansing",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800"
  }
];

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategoryChange: (category: string) => void;
  showAll?: boolean;
}

export default function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange, 
  showAll = true 
}: CategoryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-serif text-center mb-8 text-text-black">
          Browse by Category
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.slug
                  ? `${category.color} shadow-lg`
                  : 'bg-background border-clay-warm hover:border-moss'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className="font-medium text-sm mb-1">{category.title}</h4>
              <p className="text-xs text-gray-600 leading-tight">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {!showAll && categories.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-moss hover:text-moss/80 font-medium transition-colors"
            >
              {isExpanded ? 'Show less' : `Show ${categories.length - 6} more categories`}
            </button>
          </div>
        )}

        {!showAll && isExpanded && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {categories.slice(6).map((category) => (
              <button
                key={category.slug}
                onClick={() => onCategoryChange(category.slug)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.slug
                    ? `${category.color} shadow-lg`
                    : 'bg-background border-clay-warm hover:border-moss'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-medium text-sm mb-1">{category.title}</h4>
                <p className="text-xs text-gray-600 leading-tight">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
