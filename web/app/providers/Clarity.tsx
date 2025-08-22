'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Clarity(){
  const [ok, setOk] = useState(false);
  const pid = process.env.NEXT_PUBLIC_CLARITY_ID;
  useEffect(()=>{ try { const c = JSON.parse(localStorage.getItem('consent')||'{}'); setOk(!!c.analytics); } catch {} },[]);
  if(!ok || !pid) return null;
  return (
    <Script id="clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${pid}");
      `}
    </Script>
  );
}
