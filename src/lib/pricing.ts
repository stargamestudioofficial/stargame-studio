// Pricing rules for art and design commissions.
export const BASE_PRICE_USD = 10;
export const BULK_PRICE_USD = 5; // per design when ordering more than BULK_MIN designs
export const BULK_MIN = 5;
export const PROMO_CODES: Record<string, number> = { SG2026: 0.2 };

// Approximate conversion rates from USD (display only; final charge is in USD).
export const RATES = { USD: 1, TTD: 6.78, EUR: 0.92, PHP: 58 } as const;
export type Currency = keyof typeof RATES;

export function sanitizeQty(qty: number) {
  if (!Number.isFinite(qty)) return 0;
  return Math.max(0, Math.floor(qty));
}

export function sanitizeAmount(amount: number) {
  if (!Number.isFinite(amount)) return 0;
  return Math.max(0, Math.round(amount * 100) / 100);
}

export function unitPrice(qty: number) {
  return sanitizeQty(qty) > BULK_MIN ? BULK_PRICE_USD : BASE_PRICE_USD;
}

export function promoDiscount(code: string) {
  return PROMO_CODES[code.trim().toUpperCase()] ?? 0;
}

export function totalUSD(qty: number, code = "") {
  const q = sanitizeQty(qty);
  const subtotal = q * unitPrice(q);
  return Math.round(subtotal * (1 - promoDiscount(code)) * 100) / 100;
}

export function customTotalUSD(amount: number, code = "") {
  const base = sanitizeAmount(amount);
  return Math.round(base * (1 - promoDiscount(code)) * 100) / 100;
}

export function convert(usd: number, c: Currency) {
  return Math.round(sanitizeAmount(usd) * RATES[c] * 100) / 100;
}
