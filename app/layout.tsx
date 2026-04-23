import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import PixelFacebook from "@/components/PixelFacebook";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sintonia Solutions | Tráfego Pago com Método",
  description: "Pare de anunciar no improviso. Mentoria particular e acompanhamento de 90 dias com Paulo Cesar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-NLKW4DNQ" />
      <body className="bg-[#0c0c0c] text-white antialiased">
        <PixelFacebook />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
