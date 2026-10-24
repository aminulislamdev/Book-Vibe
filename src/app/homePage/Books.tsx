import BookCard from './BookCard';
import type { TBook } from '@/app/types/BooksCard';
import bookData from '../../../public/data/booksData.json';

const Books = () => {
  const books: TBook[] = bookData as TBook[];

  return (
    <section className='container mx-auto'>
      <h2 className='text-center font-bold text-[40px] mb-10'> Books </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;