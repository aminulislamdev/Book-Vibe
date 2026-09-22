import Image from 'next/image';
import { CiStar } from 'react-icons/ci';

import type { TBook } from '@/app/types/BooksCard';

const BookCard = ({ book }: { book: TBook }) => {
  return (
    <div className=" border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">

      {/* Image Container */}
      <div className="bg-gray-100 rounded-xl flex justify-center items-center py-10 mb-8 h-65 relative overflow-hidden">

        <div className="relative w-30 h-45 shadow-2xl">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-cover rounded-sm"
          />
        </div>

      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <div className="mb-4">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1 line-clamp-1">
          {book.bookName}
        </h3>

        <p className="text-gray-600 font-medium">
          By : {book.author}
        </p>
      </div>

      {/* Dashed Separator */}
      <div className="border-t-2 border-dashed border-gray-200 mb-4"></div>

      {/* Footer */}
      <div className="flex justify-between items-center text-gray-700">
        <span className="font-medium">
          {book.category}
        </span>

        <div className="flex items-center gap-1 font-medium">
          <span>{book.rating.toFixed(2)}</span>

          <CiStar
            className="w-5 h-5 text-gray-400"
            strokeWidth={1.5}
          />
        </div>
      </div>

    </div>
  );
};

export default BookCard;