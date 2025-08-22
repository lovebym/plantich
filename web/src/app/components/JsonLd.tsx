export function JsonLd({ json }: { json: unknown }){
  if(!json) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />;
}
