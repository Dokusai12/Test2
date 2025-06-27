import React from "react";
import Link from "next/link";
import Image from "next/image";

type Instructor = {
  id: string;
  name: string;
  photo: string;
  rating: number;
  price: number;
};

type Props = {
  instructor: Instructor;
};

const InstructorCard: React.FC<Props> = ({ instructor }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col items-center group">
    <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-blue-100">
      <Image
        src={instructor.photo}
        alt={instructor.name}
        width={96}
        height={96}
        className="object-cover w-full h-full"
        priority
      />
    </div>
    <div className="text-lg font-semibold mb-1">{instructor.name}</div>
    <div className="flex items-center gap-1 mb-1">
      <span className="text-yellow-500 text-base">★</span>
      <span className="text-sm font-medium">{instructor.rating.toFixed(1)}</span>
    </div>
    <div className="text-gray-500 text-sm mb-3">£{instructor.price} / lesson</div>
    <Link
      href={`/instructors/${instructor.id}`}
      className="mt-auto w-full text-center rounded bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      aria-label={`View profile for ${instructor.name}`}
    >
      View Profile
    </Link>
  </div>
);

export default InstructorCard;