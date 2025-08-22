"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    clarity: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
  }
}

export function sendGAEvent(action: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("event", action, params);
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Tracka sidvisningar när route ändras
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-6C8DN7WVNX';
    if (!gaId || typeof window === "undefined") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    
    // Send pageview to GA4
    window.gtag?.("config", gaId, { 
      page_path: url,
      page_title: document.title,
      page_location: window.location.origin + url
    });
    
    // Also send as event for better tracking
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.origin + url,
      page_path: url
    });
  }, [pathname, searchParams]);

  return null;
}
