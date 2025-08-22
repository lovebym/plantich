'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function AnalyticsProvider(){
  const [ok, setOk] = useState(false);
  const id = process.env.NEXT_PUBLIC_GA_ID || 'G-6C8DN7WVNX'; // Fallback to actual ID
  
  useEffect(()=>{
    try { 
      const c = JSON.parse(localStorage.getItem('consent')||'{}'); 
      setOk(!!c.analytics); 
    } catch {}
  },[]);
  
  if(!ok || !id) return null;
  
  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`} 
        strategy="afterInteractive" 
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${id}', { 
            anonymize_ip: true,
            page_title: document.title,
            page_location: window.location.href
          });
        `}
      </Script>
    </>
  );
}
