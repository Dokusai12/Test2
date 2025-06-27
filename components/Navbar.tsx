import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-orange-600 transition-colors hover:text-orange-700">
          Learnr
        </Link>

        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded px-2 py-1 transition-colors focus:outline-none focus:ring focus:ring-orange-300 hover:bg-orange-100 hover:text-orange-700 ${
                  pathname === link.href ? 'font-semibold text-orange-600' : 'text-gray-700'
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