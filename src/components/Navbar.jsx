"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-opacity-70 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="dark:text-white md:text-xl text-sm font-semibold flex flex-row gap-1 w-min items-center p-1">
            <Image
              src={Logo}
              alt="Vijetha softwares private Limited Logo"
              className="w-10 h-10 mr-2 mix-blend-screen"
            />
            Vijetha Softwares
          </span>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="dark:text-white"
            aria-label="Menu"
            title="Menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="dark:text-white dark:hover:text-gray-300">
              Services
            </span>
          </Link>
          <Link href="/">
            <span className="dark:text-white dark:hover:text-gray-300">
              Portfolio
            </span>
          </Link>
          <Link href="/">
            <span className="dark:text-white dark:hover:text-gray-300">
              Products
            </span>
          </Link>
          <Link href="/">
            <span className="dark:text-white dark:hover:text-gray-300">
              Testimonials
            </span>
          </Link>
          <Link href="/">
            <span className="bg-gradient-to-r from-red-400 to-amber-500 bg-clip-text text-transparent">
              Schedule a Call
            </span>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg text-center">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="dark:text-white dark:hover:text-gray-300">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="dark:text-white dark:hover:text-gray-300">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="dark:text-white dark:hover:text-gray-300">
                    Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="dark:text-white dark:hover:text-gray-300">
                  Testimonials
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="bg-gradient-to-r from-red-400 to-amber-500 bg-clip-text text-transparent background-animate">
                  Schedule a Call
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
