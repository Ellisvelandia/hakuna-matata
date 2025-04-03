"use client";

import Head from 'next/head';

type SEOProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
};

export default function SEO({
  title = "Hakuna Matata Clínica Veterinaria - Atención Veterinaria 24/7 en Girardot",
  description = "Nuestra clínica veterinaria ofrece atención compasiva las 24 horas, servicios médicos excepcionales y cuidado individualizado para cada mascota.",
  canonicalUrl = "https://hakunamatatavet.com",
  ogType = "website",
  ogImage = "/images/og-image.jpg"
}: SEOProps) {
  const fullTitle = title.includes("Hakuna Matata") 
    ? title 
    : `${title} | Hakuna Matata Clínica Veterinaria`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}

