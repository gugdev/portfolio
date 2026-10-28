import Image from "next/image";

type ProjectPreviewProps = {
  title: string;
  image: { src: string; alt: string } | null;
  previewUrl: string | null;
  language: "pt-BR" | "en";
};

export function ProjectPreview({ title, image, previewUrl, language }: ProjectPreviewProps) {
  const isEnglish = language === "en";

  if (!image && !previewUrl) return null;

  return (
    <figure className={`projectMedia${previewUrl ? " hasProjectLink" : ""}`}>
      <div className="previewChrome" aria-hidden="true">
        <span /><span /><span />
        <strong>{title}</strong>
      </div>

      <div className="previewStage">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1440}
            height={900}
            sizes="(max-width: 800px) calc(100vw - 30px), 930px"
            quality={90}
          />
        ) : null}

        {previewUrl && (
          <a
            className="previewLaunch"
            href={previewUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${isEnglish ? "View project" : "Ver projeto"}: ${title}`}
          >
            <span>
              <strong>{isEnglish ? "View project" : "Ver projeto"}</strong>
              <small>{isEnglish ? "Opens in a new tab" : "Abre em uma nova aba"}</small>
            </span>
            <i aria-hidden="true">↗</i>
          </a>
        )}
      </div>
    </figure>
  );
}
