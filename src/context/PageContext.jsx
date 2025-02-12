import { createContext, useContext, useState } from 'react';
import { PAGES } from '../constants/pages';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const isUserLogin = localStorage.getItem("accessToken");
  const [currentPage, setCurrentPage] = useState(isUserLogin ? PAGES.LOGIN : PAGES.REGISTER);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext); 