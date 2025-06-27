import React, { useState, useMemo } from "react";
import Seo from "../components/Seo";
import InstructorCard from "../components/InstructorCard";
import SkeletonCard from "../components/SkeletonCard";
import instructors from "../data/instructors.json";

export default function Home() {
  const [search, setSearch] = useState("");
  // Case-insensitive filter by name
  const filtered = useMemo(() => {
    if (!search.trim()) return instructors;
    return instructors.filter((inst) =>
      inst.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search]);

  // Show skeletons if instructors array is empty (futureproof)
  const isLoading = instructors.length === 0;

  return (
    <div>
      <Seo
        title="Learnr – Find Top Tutors Near You"
        description="Book lessons with top-rated instructors and tutors in your area. Search, compare, and learn with the best."
      />
      {/* Hero Section */}
      <section className="bg-white py-10 md:py-16 px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4">
    Find your next instructor.
  </h1>
  <input
    className="w-full sm:w-auto px-4 py-3 rounded border border-gray-300 focus:ring-orange-400 focus:outline-none text-lg"
    placeholder="What do you want to learn?"
  />
  <button className="bg-orange-600 text-white px-6 py-3 rounded font-semibold hover:bg-orange-700 transition">
    Search
  </button>
</section>
      {/* Instructor Grid */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Instructors</h2>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          style={{ minWidth: 250 }}
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filtered.length > 0
            ? filtered.map((inst) => (
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
              ))
            : (
              <div className="col-span-full text-center text-gray-500 py-10">
                No instructors found.
              </div>
            )}
        </div>
      </section>
    </div>
  );
}