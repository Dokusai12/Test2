import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import BookingModal from "../../components/BookingModal";
import instructorsData from "../../data/instructors.json";

type Availability = { day: string; times: string[] };
type Instructor = {
  id: string;
  name: string;
  photo: string;
  bio: string;
  rating: number;
  price: number;
  availability: Availability[];
};

type Props = {
  instructor: Instructor;
};

const InstructorProfile: React.FC<Props> = ({ instructor }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={instructor.photo}
            alt={instructor.name}
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{instructor.name}</h1>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-medium">{instructor.rating.toFixed(1)}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-700 text-base">£{instructor.price} / lesson</span>
          </div>
          <p className="mb-3 text-gray-700">{instructor.bio}</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-2 rounded bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            Book Lesson
          </button>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Availability</h2>
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-2 text-gray-600">Day</th>
              <th className="p-2 text-gray-600">Times</th>
            </tr>
          </thead>
          <tbody>
            {instructor.availability.map((slot) => (
              <tr key={slot.day}>
                <td className="p-2 font-medium">{slot.day}</td>
                <td className="p-2">{slot.times.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BookingModal
        open={showModal}
        onClose={() => setShowModal(false)}
        instructorName={instructor.name}
        availableTimes={instructor.availability}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (instructorsData as Instructor[]).map((inst) => ({
    params: { id: inst.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const instructor = (instructorsData as Instructor[]).find((i) => i.id === params?.id);
  if (!instructor) return { notFound: true };
  return { props: { instructor } };
};

export default InstructorProfile;