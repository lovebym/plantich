import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'

import plant from './schemaTypes/plant'
import condition from './schemaTypes/condition'

export default defineConfig({
  name: 'default',
  title: 'plantich',
  projectId: 'b9a148km',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [plant, condition],
  },
})

