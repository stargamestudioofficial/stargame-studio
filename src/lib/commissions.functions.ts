import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SHEET_ID = "1y-roLReTlpyUzPgQh86GfDt80V1tigo2oJl5RuFLgdo";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  discord: z.string().trim().max(100).optional().default(""),
  service: z.string().trim().min(1).max(100),
  designs: z.coerce.number().int().min(1).max(500),
  budget: z.string().trim().max(100).optional().default(""),
  details: z.string().trim().min(5).max(3000),
});

// Prefix cells that look like formulas so the sheet stores them as plain text.
const safe = (v: string) => (/^[=+\-@]/.test(v) ? `'${v}` : v);

export const submitCommission = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const lovable = process.env["LOVABLE_API_KEY"];
    const conn = process.env["GOOGLE_SHEETS_API_KEY"];
    if (!lovable || !conn) return { ok: false as const, error: "Requests are not set up yet." };
    const row = [new Date().toISOString().replace("T", " ").slice(0, 16), data.name, data.email, data.discord, data.service, String(data.designs), data.budget, data.details, "New"].map(safe);
    const res = await fetch(
      `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SHEET_ID}/values/Requests!A:I:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      { method: "POST", headers: { Authorization: `Bearer ${lovable}`, "X-Connection-Api-Key": conn, "Content-Type": "application/json" }, body: JSON.stringify({ values: [row] }) },
    );
    if (!res.ok) {
      console.error(`Sheets append failed [${res.status}]: ${await res.text()}`);
      return { ok: false as const, error: "We couldn't save your request. Please email us instead." };
    }
    return { ok: true as const };
  });
