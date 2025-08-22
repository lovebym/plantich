/**
 * Analytics utilities for Plantich
 * Custom events and tracking functions
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function sendGAEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  
  window.gtag?.("event", action, {
    ...params,
    event_category: 'plantich',
    event_label: params?.plant_name || params?.remedy_name || 'general'
  });
}

// Predefined events for Plantich
export const analyticsEvents = {
  // Plant interactions
  viewPlant: (plantName: string, plantSlug: string) => 
    sendGAEvent('view_plant', { plant_name: plantName, plant_slug: plantSlug }),
  
  searchPlant: (query: string) => 
    sendGAEvent('search_plant', { search_term: query }),
  
  copyPlantInfo: (plantName: string) => 
    sendGAEvent('copy_plant_info', { plant_name: plantName }),
  
  // Remedy interactions
  viewRemedy: (remedyName: string, remedySlug: string) => 
    sendGAEvent('view_remedy', { remedy_name: remedyName, remedy_slug: remedySlug }),
  
  searchRemedy: (query: string) => 
    sendGAEvent('search_remedy', { search_term: query }),
  
  // User interactions
  addToFavorites: (itemName: string, itemType: 'plant' | 'remedy') => 
    sendGAEvent('add_to_favorites', { item_name: itemName, item_type: itemType }),
  
  clickAffiliateLink: (plantName: string, affiliateUrl: string) => 
    sendGAEvent('click_affiliate', { plant_name: plantName, affiliate_url: affiliateUrl }),
  
  // Navigation
  navigateToCategory: (category: string) => 
    sendGAEvent('navigate_category', { category }),
  
  // Form interactions
  submitContactForm: () => 
    sendGAEvent('submit_contact_form'),
  
  subscribeNewsletter: () => 
    sendGAEvent('subscribe_newsletter'),
  
  // Error tracking
  reportError: (errorType: string, errorMessage: string) => 
    sendGAEvent('report_error', { error_type: errorType, error_message: errorMessage })
};

// Enhanced page tracking
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window === "undefined") return;
  
  window.gtag?.("config", 'G-6C8DN7WVNX', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.origin + pagePath
  });
  
  // Also send as event for better tracking
  window.gtag?.("event", "page_view", {
    page_title: pageTitle || document.title,
    page_location: window.location.origin + pagePath,
    page_path: pagePath
  });
}
