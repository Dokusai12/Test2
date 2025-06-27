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
        <Link href="/" className="font-bold text-lg text-orange-600 hover:text-orange-700">
...
className={`transition-colors px-2 py-1 rounded hover:bg-orange-100 hover:text-orange-700 focus:outline-none focus:ring focus:ring-orange-300 ${
pathname === link.href ? "font-semibold text-orange-600" : "text-gray-700"
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