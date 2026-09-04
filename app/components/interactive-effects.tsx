"use client";

import { useEffect } from "react";

export function InteractiveEffects({ language = "pt-BR" }: { language?: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const previousLanguage = root.lang;
    root.lang = language;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion) {
      reveals.forEach((element) => element.classList.add("isVisible"));
      return;
    }

    root.classList.add("motionReady");
    let pointerFrame = 0;
    let scrollFrame = 0;

    const updatePointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--mouse-x", `${event.clientX}px`);
        root.style.setProperty("--mouse-y", `${event.clientY}px`);
      });
    };

    const updateScroll = () => {
      window.cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        const progress = distance > 0 ? window.scrollY / distance : 0;
        root.style.setProperty("--scroll-progress", String(progress));
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    reveals.forEach((element) => observer.observe(element));

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project"));
    const cardHandlers = new Map<HTMLElement, (event: PointerEvent) => void>();

    cards.forEach((card) => {
      const handler = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--card-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--card-y", `${event.clientY - bounds.top}px`);
      };
      cardHandlers.set(card, handler);
      card.addEventListener("pointermove", handler, { passive: true });
    });

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(pointerFrame);
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      cardHandlers.forEach((handler, card) => card.removeEventListener("pointermove", handler));
      root.classList.remove("motionReady");
      root.lang = previousLanguage;
    };
  }, [language]);

  return (
    <>
      <div className="cursorGlow" aria-hidden="true" />
      <div className="scrollProgress" aria-hidden="true" />
    </>
  );
}
