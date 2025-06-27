import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 mt-10">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
      <div>© {new Date().getFullYear()} Learnr. All rights reserved.</div>
      <div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-orange-500 transition-colors ml-2"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;