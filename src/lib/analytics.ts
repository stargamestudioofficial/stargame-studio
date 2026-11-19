// Google Analytics 4 (GA4) helper for Stargame Studio.
// Set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in your environment / Lovable Secrets to enable live reporting.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID: string =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_GA_MEASUREMENT_ID) || "";

let initialized = false;

export function initGA4() {
  if (typeof window === "undefined" || initialized || !GA_MEASUREMENT_ID) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  if (!document.getElementById("sg-ga4-script")) {
    const script = document.createElement("script");
    script.id = "sg-ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", name, params);
  }
}
