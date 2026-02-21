import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <-- É ISSO AQUI QUE FAZ A MÁGICA ACONTECER

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Cesar | Portfolio",
  description: "Desenvolvedor Front-end e Growth Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}