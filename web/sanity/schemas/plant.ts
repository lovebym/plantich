import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({ 
      name: 'commonName', 
      title: 'Common name', 
      type: 'string', 
      validation: r => r.required() 
    }),
    defineField({ 
      name: 'latinName', 
      title: 'Latin name', 
      type: 'string', 
      validation: r => r.required() 
    }),
    defineField({ 
      name: 'slug', 
      type: 'slug', 
      options: { source: 'commonName', maxLength: 96 }, 
      validation: r => r.required() 
    }),

    defineField({ 
      name: 'essence', 
      title: 'Essence (1–2 sentences)', 
      type: 'text' 
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    }),

    // Benefits
    defineField({ 
      name: 'benefits', 
      title: 'Key Benefits', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),

    // Preparation & Use
    defineField({
      name: 'preparation',
      title: 'Preparation & Use',
      type: 'object',
      fields: [
        { 
          name: 'tea', 
          title: 'Tea', 
          type: 'object', 
          fields: [
            { name: 'grams', type: 'string', title: 'Grams/teaspoons' },
            { name: 'waterMl', type: 'string', title: 'Water (ml)' },
            { name: 'minutes', type: 'string', title: 'Steep minutes' },
            { name: 'perDay', type: 'string', title: 'Cups per day' },
            { name: 'notes', type: 'text', title: 'Notes' },
          ]
        },
        { 
          name: 'tincture', 
          title: 'Tincture', 
          type: 'object', 
          fields: [
            { name: 'ratio', type: 'string', title: 'Ratio (e.g. 1:5 40%)' },
            { name: 'drops', type: 'string', title: 'Drops' },
            { name: 'timesPerDay', type: 'string', title: 'Times per day' },
            { name: 'notes', type: 'text', title: 'Notes' },
          ]
        },
        { 
          name: 'capsule', 
          title: 'Capsule', 
          type: 'object', 
          fields: [
            { name: 'mg', type: 'string', title: 'mg' },
            { name: 'timesPerDay', type: 'string', title: 'Times per day' },
          ]
        },
        { name: 'topical', title: 'Topical', type: 'text' },
        { name: 'duration', title: 'Suggested duration / cycling', type: 'string' },
      ]
    }),

    // Safety
    defineField({ 
      name: 'safety', 
      title: 'Safety & Contraindications', 
      type: 'array', 
      of: [{ type: 'string' }] 
    }),

    // Synergy
    defineField({
      name: 'pairs',
      title: 'Pairs Well With',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'plant', type: 'reference', to: [{ type: 'plant' }] },
          { name: 'why', type: 'string', title: 'Why' }
        ]
      }]
    }),

    // Traditional uses → länk till conditions
    defineField({
      name: 'traditionalUses',
      title: 'Traditional Uses (Conditions)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'condition' }] }]
    }),

    // Energetics (valfritt)
    defineField({
      name: 'energetics',
      title: 'Energetics',
      type: 'object',
      fields: [
        { name: 'taste', type: 'array', of: [{ type: 'string' }] },
        { name: 'temperature', type: 'string' },
        { name: 'actions', type: 'array', of: [{ type: 'string' }] },
      ]
    }),

    // Research
    defineField({
      name: 'research',
      title: 'Research & Sources',
      type: 'array',
      of: [{ 
        type: 'object', 
        fields: [
          { name: 'title', type: 'string' },
          { name: 'url', type: 'url' },
          { name: 'note', type: 'string' },
        ]
      }]
    }),

    // SEO
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
  ]
});
