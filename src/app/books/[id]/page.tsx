import BooksDetails from '@/app/shared/BooksDetails';
import type { TBook } from '@/app/types/BooksCard';

interface IBookDetailsPage {
  params: Promise<{
    id: string
  }>
}

const getBooks = async () => {
   const res = await fetch('http://localhost:3000/data/booksData.json');
  
    if (!res.ok) {
      throw new Error('Failed to fetch books data');
    }
  
    const bookData: TBook[] = await res.json();
    return bookData
}

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {

  const { id } = await params
  const booksData = await getBooks()
  const book = booksData.find((book: TBook) => String(book.bookId) === String(id))
  
  return (
    <div>
      <BooksDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;