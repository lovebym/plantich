// schemaTypes/condition.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'condition',
  title: 'Health Condition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Condition (English)',
      type: 'string',
    }),
    defineField({
      name: 'swedishName',
      title: 'Åkomma (Svenska)',
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
      name: 'plants',
      title: 'Helpful Plants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'plant' }] }],
    }),
  ],
})
