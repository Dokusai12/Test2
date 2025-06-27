import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-blue-600 hover:text-blue-700">
          Learnr
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${
                  pathname === link.href ? "font-semibold text-blue-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;