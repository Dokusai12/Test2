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
    <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-orange-100">
className="mt-auto w-full text-center rounded bg-orange-600 text-white px-4 py-2 font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      aria-label={`View profile for ${instructor.name}`}
    >
      View Profile
    </Link>
  </div>
);

export default InstructorCard;