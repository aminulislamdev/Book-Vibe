import Image from 'next/image';
import { CiStar } from 'react-icons/ci';

import type { TBook } from '@/app/types/BooksCard';

const BookCard = ({ book }: { book: TBook }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

      {/* Book Image */}
      <div className="relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f5f6f8]">
        {/* Background decoration */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-100/40 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-100/40 blur-2xl" />

        <div className="relative z-10 h-44 w-28 overflow-hidden rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 transition-colors duration-200 group-hover:bg-green-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Information */}
      <div className="mb-5">
        <h3 className="mb-1.5 line-clamp-1 font-serif text-[22px] font-bold leading-tight text-gray-900">
          {book.bookName}
        </h3>

        <p className="text-sm text-gray-500">
          By <span className="font-medium text-gray-700">{book.author}</span>
        </p>
      </div>

      {/* Divider */}
      <div className="mb-4 border-t border-dashed border-gray-300" />

      {/* Bottom Information */}
      <div className="flex items-center justify-between">

        {/* Category */}
        <span className="rounded-lg bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600">
          {book.category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5">
          <span className="text-sm font-semibold text-gray-800">
            {book.rating.toFixed(2)}
          </span>

          <CiStar
            className="h-5 w-5 text-yellow-500"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;