"use client";

import { useState, useRef, useEffect } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for the mobile menu and its scope
  const menuRef = useRef(null);
  const scope = useRef(null);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="w-full lg:w-10/12 m-auto px-2">
      <div>
        {/* Mobile menu icon */}
        <div ref={menuRef}>
          <div ref={scope}>
            <div className="block md:hidden">
              <button
                className="text-black text-xl cursor-pointer"
                onClick={toggleMenu}
              >
                <HiOutlineMenuAlt3 />
                <FontAwesomeIcon icon={faBars} className="bar" />
              </button>
            </div>

            {/* Right slide menu */}
            <div
              className={`nav fixed top-0 right-0 h-screen w-64 bg-[#201f22] p-4 transition-transform transform ${
                isMenuOpen
                  ? 'translate-x-0 transition-all duration-500'
                  : 'translate-x-full'
              } hidden`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#ffffff] font-semibold text-lg flex">
                  <Link href="/">
                    <img src="/logo_1.png" alt="logo" width={80} height={80} />
                  </Link>
                </span>
                <button
                  className="text-black text-xl cursor-pointer absolute top-4 right-4 hover:text-amber-200"
                  onClick={closeMenu}
                >
                  <IoCloseOutline />
                </button>
              </div>

              <ul className="flex flex-col pt-12 space-y-4 ">
                <Link href="/services">
                  <li className="hover:text-[#eb5a00] capitalize underline underline-offset-4">
                    SERVICES
                  </li>
                </Link>

                <Link href="/about">
                  <li className="hover:text-[#eb5a00] capitalize underline underline-offset-4">
                    ABOUT
                  </li>
                </Link>

                <Link href="/portfolio">
                  <li className="hover:text-[#eb5a00] capitalize underline underline-offset-4">
                    PORTFOLIO
                  </li>
                </Link>

                {/* Uncomment the following lines for additional links */}
                {/* 
                <Link href="/blog">
                  <li className="hover:text-[#eb5a00] capitalize underline underline-offset-4">
                    BLOG
                  </li>
                </Link>
                */}

                <Link href="/contact">
                  <li className="hover:text-[#eb5a00] capitalize underline underline-offset-4">
                    CONTACT
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
