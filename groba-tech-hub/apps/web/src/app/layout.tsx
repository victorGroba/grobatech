import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groba Tech | Parceira Estratégica de Tecnologia e Automação",
  description: "Transforme a tecnologia no motor de vendas da sua empresa. Especialistas em Automação com IA, Desenvolvimento de Sistemas Sob Medida e Presença Digital de Alta Conversão.",
  keywords: ["tecnologia", "automação", "inteligência artificial", "desenvolvimento de sistemas", "CRM", "Next.js", "tráfego pago", "agentes de IA", "Groba Tech", "transformação digital"],
  openGraph: {
    title: "Groba Tech | Parceira Estratégica de Tecnologia",
    description: "Escale sua empresa com Tecnologia e Automação Inteligente. A Groba Tech desenvolve sistemas, automatiza seu atendimento com IA e escala seus resultados.",
    url: "https://grobatech.com", // Adjust if domain is different
    siteName: "Groba Tech",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen bg-[#05050A] text-white`}>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
