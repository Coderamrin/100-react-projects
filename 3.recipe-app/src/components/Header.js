import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-5">
      <a href="/" className="text-3xl font-bold">
        Recipe
      </a>
      <nav>
        <Link to="/" className="mx-4 hover:text-gray-500">
          Home
        </Link>
        <a href="/" className="mx-4 hover:text-gray-500">
          About
        </a>
        <a href="/" className="mx-4 hover:text-gray-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
