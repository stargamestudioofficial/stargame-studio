import { Globe } from "lucide-react";
import { LANGS, useI18n, type LangCode } from "@/lib/i18n";

export function LanguagePicker({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <label className={`inline-flex items-center gap-1.5 rounded-md border border-border bg-card/95 px-2.5 py-1 text-sm text-foreground shadow-sm ${className}`}>
      <Globe className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
      <span className="sr-only">{t("nav.language")}</span>
      <select
        className="cursor-pointer bg-transparent pr-1 text-sm text-foreground outline-none"
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        aria-label={t("nav.language")}
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code} className="bg-card text-foreground">
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
