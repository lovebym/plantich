export const plantBySlug = `*[_type == 'plant' && slug.current == $slug][0]{
  _id, title, 'slug': slug.current, seo, faq, performance, excerpt
}`;

export const remedyBySlug = `*[_type == 'remedy' && slug.current == $slug][0]{
  _id, title, 'slug': slug.current, seo, faq, performance, excerpt
}`;
