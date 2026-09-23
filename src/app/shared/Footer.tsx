import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white pt-16 pb-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight text-gray-900"
            >
              Book <span className="text-green-600">Vibe</span>
            </Link>

            <p className="mt-4 max-w-sm text-base leading-7 text-gray-500">
              Discover your next favorite book and build a collection
              that inspires you every day.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaFacebookF size={17} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaTwitter size={17} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaInstagram size={17} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/pages-to-read"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Pages to Read
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-gray-900">
              Categories
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Young Adult
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Identity
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Fiction
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-base text-gray-500 transition-colors duration-200 hover:text-green-600"
                >
                  Non-Fiction
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-gray-900">
              Newsletter
            </h3>

            <p className="mb-5 text-base leading-7 text-gray-500">
              Get updates about new books, recommendations and exclusive
              offers.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                required
              />

              <button
                type="submit"
                className="rounded-lg bg-green-600 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-7 text-base text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Book Vibe. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-200 hover:text-green-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors duration-200 hover:text-green-600"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;