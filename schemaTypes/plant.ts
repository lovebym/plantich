// schemaTypes/plant.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'latinName',
      title: 'Latin Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uses',
      title: 'Uses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of uses and benefits',
    }),
    defineField({
      name: 'conditions',
      title: 'Related Conditions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'condition'}]}],
      description: 'Conditions this plant helps with',
    }),
    defineField({
      name: 'researchLinks',
      title: 'Research Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
      description: 'Optional affiliate link for purchasing',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Mind', value: 'mind'},
          {title: 'Body', value: 'body'},
          {title: 'Spirit', value: 'spirit'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'latinName',
      media: 'image',
    },
  },
})

