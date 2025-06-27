import Link from "next/link";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
  <h1 className="text-5xl font-extrabold text-orange-700 mb-3">404</h1>
  <p className="text-lg text-gray-600 mb-6">Sorry, the page you’re looking for was not found.</p>
  <Link href="/">
    <a className="inline-block rounded bg-orange-600 text-white px-6 py-2 font-semibold hover:bg-orange-700 transition mb-2">
      Return Home
    </a>
  </Link>
</div>
    </div>
  );
}