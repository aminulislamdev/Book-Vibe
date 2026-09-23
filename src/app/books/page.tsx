
import type { TBook } from '@/app/types/BooksCard';
import BookCard from '../homePage/BookCard';

const Books = async () => {
  const res = await fetch('http://localhost:3000/data/booksData.json');

  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }

  const bookData: TBook[] = await res.json();

  return (
    <section className='container mx-auto mt-5'>
      <h2 className='text-center font-bold text-[40px] mb-10'>Explore All Books </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookData.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;