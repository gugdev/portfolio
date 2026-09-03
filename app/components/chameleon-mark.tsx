type ChameleonMarkProps = {
  className?: string;
  decorative?: boolean;
};

export function ChameleonMark({ className, decorative = false }: ChameleonMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Símbolo de Gustavo Alencar: um camaleão abstrato"}
    >
      {!decorative && <title>Camaleão de Gustavo Alencar</title>}
      <path
        d="M51 35c-7 2-11 8-14 15-3 8-9 14-17 14-8 0-13-5-12-12 1-7 8-11 14-8 5 2 6 9 2 12-4 3-10 2-12-1"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49 36c7-6 17-8 25-4 5 2 9 7 10 12-4 4-9 6-15 5l-7-1-14 25M62 48l17 25M51 62h20"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="75.5" cy="39.5" r="2.5" fill="currentColor" />
    </svg>
  );
}
