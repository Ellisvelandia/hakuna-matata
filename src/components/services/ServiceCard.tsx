"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkUrl: string;
}

/**
 * Reusable service card component for displaying services
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-[#ff9800]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={linkUrl} className="text-[#ff9800] font-medium hover:underline">
          Leer más →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
