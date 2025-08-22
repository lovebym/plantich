'use client';
import { useEffect, useState } from 'react';

type Consent = { analytics?: boolean };

export default function ConsentBanner(){
  const [show, setShow] = useState(false);
  useEffect(()=>{ setShow(!localStorage.getItem('consent')); },[]);
  if(!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-xl border p-3 bg-white shadow">
      <p>Vi använder cookies för analys och förbättring. Godkänn?</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={()=>{ localStorage.setItem('consent', JSON.stringify({analytics:true} as Consent)); location.reload(); }}
          className="px-3 py-2 rounded bg-black text-white"
        >Godkänn</button>
        <button
          onClick={()=>{ localStorage.setItem('consent', JSON.stringify({analytics:false} as Consent)); setShow(false); }}
          className="px-3 py-2 rounded border"
        >Neka</button>
      </div>
    </div>
  );
}
