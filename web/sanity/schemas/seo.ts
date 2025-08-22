export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', title: 'SEO Title' },
    { name: 'description', type: 'text', title: 'Meta Description' },
    { name: 'slugOverride', type: 'string', title: 'Slug override (optional)' },
    { name: 'jsonLd', type: 'text', title: 'JSON-LD override (optional)' },
    { name: 'lastAiRefresh', type: 'datetime', title: 'Last AI refresh', readOnly: true },
  ],
};
