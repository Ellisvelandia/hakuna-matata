"use client";

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface PageLayoutProps {
  title: string;
  backgroundImage?: string;
  children: ReactNode;
}

/**
 * Reusable page layout component with a consistent header style
 * @param title - The page title displayed in the header
 * @param backgroundImage - Optional background image URL (defaults to a standard image)
 * @param children - The page content
 */
const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  backgroundImage = "https://ext.same-assets.com/965708439/608452770.jpeg", 
  children 
}) => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white">{title}</h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto py-12 px-4">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
