'use client';

import React, { useContext } from 'react';

import { BookContext } from '@/app/context/BookContext';

import BookCard from './ListedBookCard';
import WishListCard from './WishListCard';

const ReadBook = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('ReadBook must be used inside BookContextProvider');
  }

  const { readBook, wishList } = context;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto  px-4 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Listed Books
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Manage your read books and wishlist in one place.
          </p>
        </div>

        {/* Main Tabs */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md">

          <div className="tabs tabs-lift">

            {/* Read Book */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-lg font-semibold"
              aria-label={`Read Books(${ readBook.length })`}
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-white p-6 md:p-8">

              <div className="mb-7 flex items-center justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Read Books
                  </h3>

                  <p className="mt-2 text-base text-gray-500 md:text-lg">
                    Books you have finished reading
                  </p>
                </div>

                <span className="badge badge-neutral px-4 py-4 text-base">
                  {readBook.length} Books
                </span>
              </div>

              {readBook.length === 0 ? (
                <div className="flex min-h-56 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">
                      No books added yet
                    </p>

                    <p className="mt-2 text-base text-gray-500">
                      Your read books will appear here.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {readBook.map((book) => (
                    <BookCard
                      key={book.bookId}
                      book={book}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Wish List */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-lg font-semibold"
              aria-label={`Wish List(${ wishList.length })`}
            />

            <div className="tab-content border-base-300 bg-white p-6 md:p-8">

              <div className="mb-7 flex items-center justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Wish List
                  </h3>

                  <p className="mt-2 text-base text-gray-500 md:text-lg">
                    Books you want to read later
                  </p>
                </div>

                <span className="badge badge-outline px-4 py-4 text-base">
                  {wishList.length} Books
                </span>
              </div>

              {wishList.length === 0 ? (
                <div className="flex min-h-56 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">
                      Your wishlist is empty
                    </p>

                    <p className="mt-2 text-base text-gray-500">
                      Add books you want to read later.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {wishList.map((book) => (
                    <WishListCard
                      key={book.bookId}
                      book={book}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ReadBook;

