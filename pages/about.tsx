import React from "react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Learnr</h1>
      <p className="mb-4 text-lg">
        Learnr is on a mission to make finding great tutors easy and accessible for everyone.
        Whether you're preparing for exams, looking to learn a new skill, or just need a little extra help, our platform connects you with top-rated instructors in your local area or online.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Our Mission</h2>
      <p className="mb-4">
        We believe that education should be personal, flexible, and inspiring. Our handpicked instructors are dedicated to helping you reach your goals, one lesson at a time.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <ul className="mb-4">
        <li>Email: <a href="mailto:info@learnr.com" className="text-blue-600 hover:underline">info@learnr.com</a></li>
        <li>Phone: <a href="tel:+44123456789" className="text-blue-600 hover:underline">+44 1234 567 89</a></li>
      </ul>
      <p>
        We love to hear from our users! Get in touch with feedback, questions, or partnership opportunities.
      </p>
    </div>
  );
}