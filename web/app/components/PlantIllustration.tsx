'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getPlantPrompt } from '@/lib/image-generation';

interface PlantIllustrationProps {
  slug: string;
  title: string;
  className?: string;
  priority?: boolean;
}

export default function PlantIllustration({ 
  slug, 
  title, 
  className = '', 
  priority = false 
}: PlantIllustrationProps) {
  const [imageError, setImageError] = useState(false);
  const prompt = getPlantPrompt(slug);
  
  // Fallback to a placeholder if no illustration exists
  if (imageError || !prompt) {
    return (
      <div className={`bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
            <span className="text-2xl">🌿</span>
          </div>
          <h3 className="font-medium text-gray-700">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Botanical illustration</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg bg-white shadow-sm border ${className}`}>
      <Image
        src={`/assets/plants/${slug}.svg`}
        alt={`Botanical illustration of ${title}`}
        width={600}
        height={800}
        className="w-full h-auto object-contain"
        priority={priority}
        onError={() => setImageError(true)}
      />
      
      {/* Optional: Add a subtle overlay with plant info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
        <p className="text-white text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}

// Component for decorative background illustrations
export function DecorativePlantBackground({ 
  slug, 
  className = '' 
}: { 
  slug: string; 
  className?: string; 
}) {
  return (
    <div 
      className={`absolute inset-0 opacity-5 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(/assets/plants/${slug}.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
      }}
    />
  );
}

// Component for small icon-style illustrations
export function PlantIcon({ 
  slug, 
  size = 'md' 
}: { 
  slug: string; 
  size?: 'sm' | 'md' | 'lg'; 
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <Image
        src={`/assets/plants/${slug}-icon.svg`}
        alt={`${slug} icon`}
        fill
        className="object-contain"
      />
    </div>
  );
}
