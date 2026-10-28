"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPreviewProps = {
  title: string;
  image: { src: string; alt: string } | null;
  previewUrl: string | null;
  language: "pt-BR" | "en";
};

export function ProjectPreview({ title, image, previewUrl, language }: ProjectPreviewProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const isEnglish = language === "en";

  if (!image && !previewUrl) return null;

  return (
    <figure className={`projectMedia${previewUrl ? " hasInteractivePreview" : ""}`}>
      <div className="previewChrome" aria-hidden="true">
        <span /><span /><span />
        <strong>{isInteractive ? (isEnglish ? "Interactive preview" : "Prévia interativa") : title}</strong>
      </div>

      <div className="previewStage">
        {isInteractive && previewUrl ? (
          <iframe
            src={previewUrl}
            title={`${isEnglish ? "Interactive preview of" : "Prévia interativa de"} ${title}`}
            loading="lazy"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
            referrerPolicy="no-referrer"
          />
        ) : image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1440}
            height={900}
            sizes="(max-width: 800px) calc(100vw - 30px), 930px"
            quality={90}
          />
        ) : null}

        {previewUrl && !isInteractive && (
          <button className="previewLaunch" type="button" onClick={() => setIsInteractive(true)}>
            <span>{isEnglish ? "Use this project here" : "Mexer neste projeto aqui"}</span>
            <i aria-hidden="true">↗</i>
          </button>
        )}
      </div>

      {previewUrl && isInteractive && (
        <figcaption className="previewControls">
          <button type="button" onClick={() => setIsInteractive(false)}>
            {isEnglish ? "Back to image" : "Voltar para a imagem"}
          </button>
          <a href={previewUrl} target="_blank" rel="noreferrer">
            {isEnglish ? "Open full screen" : "Abrir em tela cheia"} ↗
          </a>
        </figcaption>
      )}
    </figure>
  );
}
