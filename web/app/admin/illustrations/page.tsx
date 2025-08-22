'use client';

import { useState, useEffect } from 'react';
import { getAllPlantPrompts, getPlantPrompt } from '@/lib/image-generation';

interface PlantPrompt {
  slug: string;
  prompt: string;
}

export default function IllustrationsAdmin() {
  const [plants, setPlants] = useState<PlantPrompt[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<string>('');
  const [copiedPrompt, setCopiedPrompt] = useState<string>('');

  useEffect(() => {
    const allPrompts = getAllPlantPrompts();
    setPlants(allPrompts);
  }, []);

  const copyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(prompt);
      setTimeout(() => setCopiedPrompt(''), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  const selectedPlantPrompt = selectedPlant ? getPlantPrompt(selectedPlant) : null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Botanical Illustration Generator
          </h1>
          <p className="text-gray-600">
            Generate consistent Nordic flora-style illustrations for all plants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plant List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Available Plants</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {plants.map((plant) => (
                <button
                  key={plant.slug}
                  onClick={() => setSelectedPlant(plant.slug)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedPlant === plant.slug
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900 capitalize">
                    {plant.slug.replace('-', ' ')}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Click to view prompt
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Display */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Generation Prompt</h2>
            
            {selectedPlantPrompt ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 capitalize">
                    {selectedPlant.replace('-', ' ')}
                  </h3>
                  <button
                    onClick={() => copyPrompt(selectedPlantPrompt)}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    {copiedPrompt === selectedPlantPrompt ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {selectedPlantPrompt}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Next Steps:</h4>
                  <ol className="text-sm text-blue-800 space-y-1">
                    <li>1. Copy the prompt above</li>
                    <li>2. Use it in your AI image generator (DALL-E, Midjourney, etc.)</li>
                    <li>3. Download the generated PNG image</li>
                    <li>4. Convert to SVG using Vectorizer.AI or Illustrator</li>
                    <li>5. Save as <code className="bg-blue-100 px-1 rounded">/public/assets/plants/{selectedPlant}.svg</code></li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                Select a plant from the list to view its generation prompt
              </div>
            )}
          </div>
        </div>

        {/* Batch Generation */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Batch Generation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {plants.slice(0, 9).map((plant) => (
              <div key={plant.slug} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 capitalize">
                    {plant.slug.replace('-', ' ')}
                  </h3>
                  <button
                    onClick={() => copyPrompt(plant.prompt)}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {plant.prompt.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
