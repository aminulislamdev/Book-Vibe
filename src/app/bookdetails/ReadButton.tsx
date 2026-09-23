'use client';

import React, { useContext } from 'react';

import { TBook } from '../types/BooksCard';
import { BookContext } from '../context/BookContext';

const ReadButton = ({ book }: { book: TBook }) => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('ReadButton must be used inside BookContextProvider');
  }

  const { readBook, setReadBook } = context;

  const handleReadButton = () => {
    setReadBook([...readBook, book]);
  };

  return (
    <div>
      <button
        className="px-8 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 font-bold hover:bg-gray-50 transition-colors"
        onClick={handleReadButton}
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;