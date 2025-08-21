// schemaTypes/plant.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name (English)',
      type: 'string',
    }),
    defineField({
      name: 'latinName',
      title: 'Latin Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
    }),
    defineField({
      name: 'swedishDescription',
      title: 'Beskrivning (Svenska)',
      type: 'text',
    }),
    defineField({
      name: 'uses',
      title: 'Uses (English)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'swedishUses',
      title: 'Användningsområden (Svenska)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'conditions',
      title: 'Helps With (Conditions)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'condition' }] }],
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
    }),
  ],
})

