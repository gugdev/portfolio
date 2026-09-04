import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Alencar | IA e Engenharia de Software",
  description:
    "Portfólio de Gustavo Alencar Matos: inteligência artificial aplicada, automação, software e experiências digitais.",
  metadataBase: new URL("https://gustavo-alencar.vercel.app"),
  openGraph: {
    title: "Gustavo Alencar | IA e Engenharia de Software",
    description:
      "Projetos de IA aplicada, automação, front-end, back-end e desenvolvimento de produtos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
