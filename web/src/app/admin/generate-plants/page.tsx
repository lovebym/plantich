'use client';
import { useState, useEffect } from 'react';

export default function GeneratePlantsPage() {
  const [plants, setPlants] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [batchLoading, setBatchLoading] = useState(false);
  const [results, setResults] = useState<{
    summary: {
      created: number;
      alreadyExists: number;
      errors: number;
    };
  } | null>(null);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch('/api/ai/generate-plants');
      const data = await response.json();
      if (data.plants) {
        setPlants(data.plants);
      }
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const generatePlant = async (plantName: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/generate-plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plantName }),
      });
      const data = await response.json();
      if (data.plant) {
        alert(`Generated: ${plantName}`);
      }
    } catch (error) {
      console.error('Error generating plant:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateAllPlants = async () => {
    setBatchLoading(true);
    try {
      const response = await fetch('/api/ai/generate-all-plants', {
        method: 'POST',
      });
      const data = await response.json();
      setResults(data);
      alert(`Generated ${data.summary.created} plants! ${data.summary.alreadyExists} already existed.`);
    } catch (error) {
      console.error('Error generating all plants:', error);
      alert('Error generating plants');
    } finally {
      setBatchLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-ink mb-8">
          Generate Plants Automatically
        </h1>
        
        {/* Batch Generation */}
        <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
          <h2 className="text-2xl font-serif text-ink mb-4">Batch Generation</h2>
          <p className="text-herbal mb-4">
            Generate all {plants.length} most searched plants at once with AI-powered content.
          </p>
          <button
            onClick={generateAllPlants}
            disabled={batchLoading}
            className="px-6 py-3 bg-ink text-white rounded-md hover:bg-herbal transition-colors disabled:opacity-50"
          >
            {batchLoading ? 'Generating All Plants...' : 'Generate All Plants'}
          </button>
          
          {results && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-800">Results:</h3>
              <p className="text-green-700">
                Created: {results.summary.created} | Already existed: {results.summary.alreadyExists} | Errors: {results.summary.errors}
              </p>
            </div>
          )}
        </div>

        {/* Individual Plants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.map((plantName) => (
            <div key={plantName} className="bg-white rounded-xl p-4 shadow-soft">
              <h3 className="font-medium text-ink mb-2">{plantName}</h3>
              <button
                onClick={() => generatePlant(plantName)}
                disabled={loading}
                className="px-4 py-2 bg-herbal text-white rounded-md hover:bg-ink transition-colors"
              >
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
