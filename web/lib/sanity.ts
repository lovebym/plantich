import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'b9a148km',
  dataset: 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: false, // Set to false for fresh data
})
