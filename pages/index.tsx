import React from "react";
import InstructorCard from "../components/InstructorCard";
import instructors from "../data/instructors.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Find Top Tutors Near You
          </h1>
          <p className="text-lg text-gray-700 mb-6">Enter your postcode or location to get started</p>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="w-full sm:w-auto px-4 py-3 rounded border border-gray-300 focus:ring-blue-400 focus:outline-none text-lg"
              placeholder="e.g. SW1A 1AA or London"
              aria-label="Location search"
              disabled
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-60"
              disabled
            >
              Search
            </button>
          </form>
        </div>
      </section>
      {/* Instructor Grid */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Instructors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((inst) => (
            <InstructorCard
              key={inst.id}
              instructor={{
                id: inst.id,
                name: inst.name,
                photo: inst.photo,
                rating: inst.rating,
                price: inst.price,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}