"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Listed Books", href: "/listedBooks" },
    { name: "Pages to Read", href: "/pagesToRead" },
  ];

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-3 shadow"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-base font-semibold ${
                      pathname === item.href
                        ? "text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-2xl font-bold">
            Book Vibe
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-semibold transition-colors ${
                    pathname === item.href
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          <button className="btn btn-active btn-success text-base">
            Sign In
          </button>

          <button className="btn btn-info text-base">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
