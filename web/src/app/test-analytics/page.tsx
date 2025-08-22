'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@/lib/analytics';
import { getAllPlantPrompts } from '@/lib/image-generation';

export default function TestAnalytics() {
  useEffect(() => {
    // Test analytics event
    sendGAEvent('test_page_view', { page: 'test-analytics' });
  }, []);

  const handleTestEvent = () => {
    sendGAEvent('test_button_click', { button: 'test-button' });
    alert('Analytics event sent! Check GA4 dashboard.');
  };

  const plantPrompts = getAllPlantPrompts();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Plantich Analytics & Illustration Test
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Analytics Test */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Analytics Test</h2>
            <p className="text-gray-600 mb-4">
              Test Google Analytics 4 integration
            </p>
            <button
              onClick={handleTestEvent}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Test Event
            </button>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                ✅ GA4 ID: G-6C8DN7WVNX configured
              </p>
            </div>
          </div>

          {/* Illustration Prompts */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Botanical Prompts</h2>
            <p className="text-gray-600 mb-4">
              {plantPrompts.length} plants ready for illustration generation
            </p>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {plantPrompts.slice(0, 5).map((plant) => (
                <div key={plant.slug} className="p-2 bg-gray-50 rounded">
                  <div className="font-medium capitalize">{plant.slug.replace('-', ' ')}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {plant.prompt.substring(0, 80)}...
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-800">
                📁 Check /prompts/ directory for all prompts
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/illustrations"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-medium">Admin Interface</div>
              <div className="text-sm text-gray-500">Manage illustrations</div>
            </a>
            <a
              href="/api/generate-illustration"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-medium">API Endpoint</div>
              <div className="text-sm text-gray-500">Get prompts via API</div>
            </a>
            <a
              href="/api/cron/refresh"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="font-medium">Cron Job</div>
              <div className="text-sm text-gray-500">Test auto-optimization</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
