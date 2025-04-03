import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Hakuna Matata Clínica Veterinaria - Atención Veterinaria 24/7 en Girardot",
  description: "Nuestra clínica veterinaria ofrece atención compasiva las 24 horas, servicios médicos excepcionales y cuidado individualizado para cada mascota.",
  keywords: "veterinaria, clínica veterinaria, mascotas, perros, gatos, Girardot, atención 24 horas, emergencias veterinarias",
  authors: [{ name: "Hakuna Matata Clínica Veterinaria" }],
  creator: "Hakuna Matata Clínica Veterinaria",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://hakunamatatavet.com",
    title: "Hakuna Matata Clínica Veterinaria - Atención Veterinaria 24/7 en Girardot",
    description: "Nuestra clínica veterinaria ofrece atención compasiva las 24 horas, servicios médicos excepcionales y cuidado individualizado para cada mascota.",
    siteName: "Hakuna Matata Clínica Veterinaria",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
