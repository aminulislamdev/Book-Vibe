'use client';

import React, {
  createContext,
  ReactNode,
  useState,
} from 'react';

import { TBook } from '../types/BooksCard';

type TBookContext = {
  readBook: TBook[];
  setReadBook: React.Dispatch<React.SetStateAction<TBook[]>>;

  wishList: TBook[];
  setWishList: React.Dispatch<React.SetStateAction<TBook[]>>;
};

export const BookContext = createContext<TBookContext | undefined>(
  undefined
);

const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<TBook[]>([]);

  const [wishList, setWishList] = useState<TBook[]>([]);

  const Shared: TBookContext = {
    readBook,
    setReadBook,
    wishList,
    setWishList,
  };

  return (
    <BookContext.Provider value={Shared}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;