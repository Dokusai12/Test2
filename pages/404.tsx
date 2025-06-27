import Link from "next/link";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <Seo
        title="404 – Page Not Found | Learnr"
        description="Sorry, the page you requested could not be found."
      />
      <div className="max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition mb-2"
          aria-label="Back to home"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}