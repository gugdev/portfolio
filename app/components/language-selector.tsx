"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type LanguageSelectorProps = {
  language: "pt-BR" | "en";
};

export function LanguageSelector({ language }: LanguageSelectorProps) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = language === "en";

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const chooseLanguage = (href: "/" | "/en") => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="languageSelector" ref={rootRef}>
      <span className="languageSelectorLabel">{isEnglish ? "Language" : "Idioma"}</span>
      <div className="languageSelectorControl">
        <button
          className="languageSelectorButton"
          type="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-label={isEnglish ? "Change language" : "Trocar idioma"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="languageSelectorCode">{isEnglish ? "EN" : "PT"}</span>
          <span>{isEnglish ? "English" : "Português"}</span>
          <span className="languageSelectorArrow" aria-hidden="true">⌄</span>
        </button>
        {isOpen && (
          <div className="languageMenu" role="menu" aria-label={isEnglish ? "Languages" : "Idiomas"}>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={!isEnglish}
              className={!isEnglish ? "isActive" : undefined}
              onClick={() => chooseLanguage("/")}
            >
              <span>PT</span>
              <strong>Português</strong>
              {!isEnglish && <i aria-hidden="true">✓</i>}
            </button>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={isEnglish}
              className={isEnglish ? "isActive" : undefined}
              onClick={() => chooseLanguage("/en")}
            >
              <span>EN</span>
              <strong>English</strong>
              {isEnglish && <i aria-hidden="true">✓</i>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
