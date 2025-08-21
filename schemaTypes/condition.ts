// schemaTypes/condition.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedPlants',
      title: 'Related Plants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'plant'}]}],
      description: 'Plants that help with this condition',
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
      subtitle: 'category',
    },
  },
})
