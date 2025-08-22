"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    clarity: (...args: any[]) => void;
  }
}

export function sendGAEvent(action: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  (window as any).gtag?.("event", action, params);
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Tracka sidvisningar när route ändras
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId || typeof window === "undefined") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    (window as any).gtag?.("config", gaId, { page_path: url });
  }, [pathname, searchParams]);

  return null;
}
