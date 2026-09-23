import Image from 'next/image';
import type { TBook } from '@/app/types/BooksCard';
import ReadButton from '../bookdetails/ReadButton';
import WishListButton from '../bookdetails/WishListButton';

interface IBookDetails {
  book: TBook;
}

const BookDetails = ({ book }: IBookDetails) => {
  return (
    <div className="bg-white flex items-center justify-center p-8 font-sans container mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-15 items-start">

        {/* Book Cover */}
        <div className="bg-gray-100 rounded-lg p-12 flex justify-center items-center h-full min-h-150">
          <Image
            src={book.image}
            alt={book.bookName}
            width={320}
            height={480}
            className="w-full max-w-[320px] shadow-2xl rounded-r-md rounded-l-sm transform transition hover:scale-105 duration-300"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col pt-4">

          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            {book.bookName}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            By : {book.author}
          </p>

          <hr className="border-gray-200 mb-6" />

          <div className="mb-6">
            <span className="text-gray-600 font-medium">
              {book.category}
            </span>
          </div>

          <hr className="border-gray-200 mb-6" />

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-2">
              Review :
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {book.review}
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-bold text-gray-900 mr-1">
              Tag
            </span>

            {book.tags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border-gray-200 mb-6" />

          <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm mb-8">
            <span className="text-gray-500 font-medium">
              Number of Pages:
            </span>
            <span className="font-bold text-gray-900">
              {book.totalPages}
            </span>

            <span className="text-gray-500 font-medium">
              Publisher:
            </span>
            <span className="font-bold text-gray-900">
              {book.publisher}
            </span>

            <span className="text-gray-500 font-medium">
              Year of Publishing:
            </span>
            <span className="font-bold text-gray-900">
              {book.yearOfPublishing}
            </span>

            <span className="text-gray-500 font-medium">
              Rating:
            </span>
            <span className="font-bold text-gray-900">
              {book.rating}
            </span>
          </div>

          <div className="flex gap-4">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;