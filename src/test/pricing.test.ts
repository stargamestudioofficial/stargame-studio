import { describe, expect, it } from "vitest";
import { convert, customTotalUSD, promoDiscount, sanitizeAmount, sanitizeQty, totalUSD, unitPrice } from "@/lib/pricing";

describe("pricing", () => {
  it("charges $10 per design up to 5 and $5 per design for 6+", () => {
    expect(unitPrice(1)).toBe(10);
    expect(unitPrice(5)).toBe(10);
    expect(unitPrice(6)).toBe(5);
    expect(totalUSD(5)).toBe(50);
    expect(totalUSD(6)).toBe(30);
  });

  it("applies promo codes case-insensitively", () => {
    expect(promoDiscount("sg2026")).toBe(0.2);
    expect(totalUSD(10, "SG2026")).toBe(40);
    expect(customTotalUSD(100, "sg2026")).toBe(80);
  });

  it("clamps negative, decimal, and invalid inputs safely", () => {
    expect(sanitizeQty(-4)).toBe(0);
    expect(sanitizeQty(2.9)).toBe(2);
    expect(sanitizeAmount(-50)).toBe(0);
    expect(customTotalUSD(-25)).toBe(0);
    expect(convert(10, "TTD")).toBe(67.8);
  });
});
