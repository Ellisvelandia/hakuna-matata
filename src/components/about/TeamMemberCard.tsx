"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

/**
 * Reusable team member card component for the about pages
 */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 sm:h-72">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[#ff9800] font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
