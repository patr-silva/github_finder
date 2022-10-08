import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='flex items-baseline mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex align-middle px-2 mx-2 space-y-1 mt-5'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2 '>
          <div className='flex justify-end spac-x-2'>
            <Link
              to='/'
              className='rounded hover:bg-gray-100 px-6 py-3 text-gray-700 font-medium'
            >
              Home
            </Link>

            <Link
              to='/about'
              className='rounded hover:bg-gray-100 px-6 py-3 text-gray-700 font-medium'
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
