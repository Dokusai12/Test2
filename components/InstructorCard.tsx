import React from "react";
import Link from "next/link";
import Image from "next/image";

// Data model for a single instructor
export type Instructor = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  price: number;
};

type Props = {
  instructor: Instructor;
};

const InstructorCard: React.FC<Props> = ({ instructor }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col items-center group"
      style={{ minWidth: 250 }}
    >
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-orange-100">
        <Image
          src={instructor.photo}
          alt={`Photo of ${instructor.name}`}
          width={96}
          height={96}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Details */}
      <h3 className="text-lg font-semibold text-center mb-1">
        {instructor.name}
      </h3>
      <p className="text-sm text-gray-500">{instructor.rating.toFixed(1)} ★</p>
      <p className="text-sm text-gray-500 mb-3">{`£${instructor.price} / hr`}</p>

      {/* CTA */}
      <Link
        href={`/instructors/${instructor.id}`}
        className="mt-auto w-full text-center rounded bg-orange-600 text-white px-4 py-2 font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        aria-label={`View profile for ${instructor.name}`}
      >
        View Profile
      </Link>
    </div>
  );
};

export default InstructorCard;