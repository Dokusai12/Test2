import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Seo from "../components/Seo";
import instructors from "../data/instructors.json";

export default function Confirmation() {
  const router = useRouter();
  const { instructor, time } = router.query;

  // Find instructor by name for a link back to their profile
  const instructorObj =
    typeof instructor === "string"
      ? instructors.find((i) => i.name === instructor)
      : null;

  return (
    <div className="max-w-lg mx-auto px-4 py-14 text-center">
      <Seo
        title="Booking Confirmed – Learnr"
        description="Your lesson booking is confirmed. See details and review your instructor."
      />
      <div className="bg-white shadow-lg rounded-xl py-10 px-6 border border-green-100">
        <svg
          className="mx-auto mb-4"
          width={48}
          height={48}
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="24" fill="#22c55e" fillOpacity="0.12" />
          <path
            d="M16 24l6 6 10-10"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-3xl font-bold mb-4 text-green-700">Booking Confirmed</h1>
        <div className="text-lg mb-6">
          {instructor && time ? (
            <>
              Your lesson with{" "}
              <span className="font-semibold">{instructor}</span> at{" "}
              <span className="font-semibold">{time}</span> has been booked!
              <br />
              {instructorObj && (
                <Link
                  href={`/instructors/${instructorObj.id}`}
                  className="inline-block mt-4 text-blue-600 underline font-medium"
                  aria-label={`View ${instructorObj.name}'s profile`}
                >
                  View instructor again
                </Link>
              )}
              <span className="block mt-2 text-green-500 text-base">
                (Mock confirmation)
              </span>
            </>
          ) : (
            <>Booking details not found.</>
          )}
        </div>
        <Link
          href="/"
          className="inline-block rounded bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition mt-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}