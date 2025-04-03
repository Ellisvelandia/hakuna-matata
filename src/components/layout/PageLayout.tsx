"use client";

import { type ReactNode } from "react";
import Image from "next/image";

type PageLayoutProps = {
  title: string;
  backgroundImage?: string;
  children: ReactNode;
};

/**
 * Reusable page layout component with a consistent header style
 * @param props Component properties
 * @returns JSX.Element
 */
export default function PageLayout({
  title,
  backgroundImage = "https://ext.same-assets.com/965708439/608452770.jpeg",
  children,
}: PageLayoutProps) {
  return (
    <section className="min-h-screen">
      {/* Page Header */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Page Content */}
      <main className="container mx-auto py-12 px-4">{children}</main>
    </section>
  );
}
