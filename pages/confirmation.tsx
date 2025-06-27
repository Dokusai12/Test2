import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function Confirmation() {
  const router = useRouter();
  const { instructor, time } = router.query;

  return (
    <div className="max-w-lg mx-auto px-4 py-14 text-center">
      <div className="bg-white shadow-lg rounded-xl py-10 px-6">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Booking Confirmed</h1>
        <div className="text-lg mb-6">
          {instructor && time ? (
            <>
              Your lesson with <span className="font-semibold">{instructor}</span> at{" "}
              <span className="font-semibold">{time}</span> has been booked!
              <br />
              <span className="block mt-2 text-green-500">(Mock confirmation)</span>
            </>
          ) : (
            <>Booking details not found.</>
          )}
        </div>
        <Link
          href="/"
          className="inline-block rounded bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}