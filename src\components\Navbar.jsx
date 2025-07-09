import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link to="/trips" className="text-gray-600 hover:text-gray-900">
            Trips
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-gray-600 hover:text-gray-900">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;