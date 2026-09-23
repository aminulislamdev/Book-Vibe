
import BooksDetails from '@/app/shared/BooksDetails';
import type { TBook } from '@/app/types/BooksCard';

interface IBookDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<TBook[]> => {
  const res = await fetch(
    'http://localhost:3000/data/booksData.json'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }

  const bookData: TBook[] = await res.json();

  return bookData;
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPage) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
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
