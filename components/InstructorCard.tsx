import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type Instructor = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  price: number;
};

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="flex min-w-[250px] flex-col items-center rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full border-4 border-orange-100">
        <Image
          src={instructor.photo}
          alt={instructor.name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <h3 className="mb-1 text-center text-lg font-semibold">{instructor.name}</h3>
      <p className="text-sm text-gray-500">{instructor.rating.toFixed(1)} ★</p>
      <p className="mb-3 text-sm text-gray-500">£{instructor.price.toFixed(2)} / hr</p>

      <Link
        href={`/instructors/${instructor.id}`}
        className="w-full rounded bg-orange-600 px-4 py-2 text-center font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        View Profile
      </Link>
    </div>
  );
};

export default InstructorCard;