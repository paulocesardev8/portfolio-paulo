import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import PixelFacebook from "@/components/PixelFacebook";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sintonia Solutions | Tráfego Pago com Método",
  description: "Pare de anunciar no improviso. Mentoria particular e acompanhamento de 90 dias com Paulo Cesar.",
  metadataBase: new URL("https://sintoniasolutions.com.br"),
  openGraph: {
    title: "Sintonia Solutions | Tráfego Pago com Método",
    description: "Pare de anunciar no improviso. Mentoria particular e acompanhamento de 90 dias com Paulo Cesar.",
    url: "https://sintoniasolutions.com.br",
    siteName: "Sintonia Solutions",
    images: [
      {
        url: "/sintonia.png",
        width: 1200,
        height: 630,
        alt: "Sintonia Solutions - Mentoria de Tráfego Pago",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sintonia Solutions | Tráfego Pago com Método",
    description: "Pare de anunciar no improviso. Mentoria particular e acompanhamento de 90 dias com Paulo Cesar.",
    images: ["/sintonia.png"],
  },
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
