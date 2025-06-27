import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Contact Form Submission:", form);
    alert("Form submission is mocked. Check the console for submitted data.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-xl shadow-md p-8">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring-orange-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full border rounded px-3 py-2 focus:ring-orange-400"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 min-h-[100px] focus:ring-orange-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-orange-600 text-white px-4 py-2 font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}