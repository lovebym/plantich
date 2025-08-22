export function FaqSchema({ faq }: { faq: {q:string,a:string}[] }){
  if(!faq?.length) return null;
  const json = {
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity: faq.map(x=>({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
}
