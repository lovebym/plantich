export function JsonLd({ json }: { json: any }){
  if(!json) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />;
}
