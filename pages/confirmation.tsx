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
      <div className="bg-white shadow-lg rounded-xl py-10 px-6 border border-orange-100">
  <div className="flex items-center justify-center mb-6">
    <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="32" fill="#f97316" fillOpacity="0.12" />
      <path d="M19 33l8 8 18-18" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
  <h1 className="text-3xl font-bold mb-4 text-orange-700">Booking Confirmed</h1>
  <p className="text-lg text-gray-700 mb-4">Thank you for booking with Learnr.</p>
  <span className="block mt-2 text-orange-500 text-base">
    You’ll receive an email confirmation shortly.
  </span>
  <Link href="/">
    <a className="inline-block rounded bg-orange-600 text-white px-6 py-2 font-semibold hover:bg-orange-700 transition mt-2">
      Back to Home
    </a>
  </Link>
  <Link href="/bookings">
    <a className="inline-block mt-4 text-orange-600 underline font-medium">
      View your bookings
    </a>
  </Link>
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