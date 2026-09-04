"use client";

import { useRouter } from "next/navigation";

type LanguageSelectorProps = {
  language: "pt-BR" | "en";
};

export function LanguageSelector({ language }: LanguageSelectorProps) {
  const router = useRouter();
  const isEnglish = language === "en";

  return (
    <label className="languageSelector">
      <span className="languageSelectorLabel">{isEnglish ? "Language" : "Idioma"}</span>
      <span className="languageSelectorControl">
        <select
          aria-label={isEnglish ? "Select language" : "Selecionar idioma"}
          value={isEnglish ? "/en" : "/"}
          onChange={(event) => router.push(event.target.value)}
        >
          <option value="/">Português</option>
          <option value="/en">English</option>
        </select>
        <span className="languageSelectorArrow" aria-hidden="true">⌄</span>
      </span>
    </label>
  );
}
