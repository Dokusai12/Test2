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
      <section className="bg-blue-50 py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Find Top Tutors Near You
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Enter an instructor's name to search and book your next lesson
          </p>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            role="search"
            aria-label="Search instructors by name"
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <input
              type="search"
              className="w-full sm:w-auto px-4 py-3 rounded border border-gray-300 focus:ring-blue-400 focus:outline-none text-lg"
              placeholder="Search by instructor name"
              aria-label="Search instructors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
              aria-label="Filter instructors"
              tabIndex={-1}
              style={{ display: "none" }}
            >
              Search
            </button>
          </form>
        </div>
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