import BooksDetails from '@/app/shared/BooksDetails';
import type { TBook } from '@/app/types/BooksCard';
import booksData from '../../../../public/data/booksData.json';

interface IBookDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = (): TBook[] => {
  return booksData as TBook[];
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPage) => {
  const { id } = await params;

  const books = getBooks();

  const book = books.find(
    (book: TBook) => String(book.bookId) === String(id)
  );

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Book Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The book you are looking for does not exist.
        </p>
      </div>
    );
  }

  return <BooksDetails book={book} />;
};

export default BookDetailsPage;