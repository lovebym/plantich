import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Title', 
      type: 'string', 
      validation: r => r.required() 
    }),
    defineField({ 
      name: 'slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 }, 
      validation: r => r.required() 
    }),
    defineField({ 
      name: 'description', 
      title: 'Description', 
      type: 'text' 
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mind', value: 'mind' },
          { title: 'Body', value: 'body' },
          { title: 'Spirit', value: 'spirit' }
        ]
      }
    }),
    defineField({
      name: 'plants',
      title: 'Related Plants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'plant' }] }]
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
  ]
});
