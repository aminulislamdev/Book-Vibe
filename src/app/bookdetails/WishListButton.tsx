'use client';

import React, { useContext } from 'react';

import { TBook } from '../types/BooksCard';
import { BookContext } from '../context/BookContext';

const WishListButton = ({ book }: { book: TBook }) => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error(
      'WishListButton must be used inside BookContextProvider'
    );
  }

  const { wishList, setWishList } = context;

  const handleWishListButton = () => {
    setWishList([...wishList, book]);
  };

  return (
    <div>
      <button
        className="px-8 py-3 bg-[#56b3c7] rounded-lg text-white font-bold hover:bg-[#4aa0b3] transition-colors shadow-sm"
        onClick={handleWishListButton}
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;