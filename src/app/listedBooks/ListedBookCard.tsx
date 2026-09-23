'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, User, FileText } from 'lucide-react';

import type { TBook } from '@/app/types/BooksCard';

interface BookCardProps {
  book: TBook;
  onViewDetails?: (id: string | number) => void;
}

const BookCard = ({ book, onViewDetails }: BookCardProps) => {
  return (
    <div className="w-full mx-auto p-4 container">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">

        {/* Book Image */}
        <div className="shrink-0 flex justify-center items-start">
          <div className="w-32 md:w-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
            <Image
              src={book.image}
              alt={book.bookName}
              width={200}
              height={300}
              className="w-full h-auto object-cover rounded shadow-sm"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>

            {/* Title & Author */}
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
              {book.bookName}
            </h2>

            <p className="text-gray-600 mb-4">
              By:{' '}
              <span className="font-medium text-gray-800">
                {book.author}
              </span>
            </p>

            {/* Tags & Year */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">

              <span className="font-bold text-gray-800">
                Tag
              </span>

              {book.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}

              <div className="flex items-center text-gray-600 gap-1 ml-1">
                <MapPin size={16} />

                <span>
                  Year of Publishing: {book.yearOfPublishing}
                </span>
              </div>
            </div>

            {/* Publisher & Pages */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-6">

              <div className="flex items-center gap-2">
                <User size={16} />

                <span>
                  Publisher: {book.publisher}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FileText size={16} />

                <span>
                  Page {book.totalPages}
                </span>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 w-full mb-4"></div>

          {/* Footer */}
          <div className="flex flex-wrap items-center gap-3">

            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Category: {book.category}
            </span>

            <span className="px-4 py-1.5 bg-orange-100 text-orange-500 rounded-full text-sm font-medium">
              Rating: {book.rating}
            </span>

            <button
              onClick={() => onViewDetails?.(book.bookId)}
              className="px-6 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors ml-auto md:ml-0"
            >
              View Details
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;