import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

/**
 * SEO component for consistent metadata across pages
 */
const SEO: React.FC<SEOProps> = ({
  title = "Hakuna Matata Clínica Veterinaria - Atención Veterinaria 24/7 en Girardot",
  description = "Nuestra clínica veterinaria ofrece atención compasiva las 24 horas, servicios médicos excepcionales y cuidado individualizado para cada mascota.",
  canonicalUrl = "https://hakunamatatavet.com",
  ogType = "website",
  ogImage = "/images/og-image.jpg"
}) => {
  const fullTitle = title.includes("Hakuna Matata") 
    ? title 
    : `${title} | Hakuna Matata Clínica Veterinaria`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
