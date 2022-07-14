import React, { useState, useEffect } from 'react';

import {
  Home,
  Books,
  Login,
  Header,
  CreateBook,
  About,
  EditBook,
} from '../pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './route.module.css';

export function Router() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem('user');

    if (isLogin) {
      setLogin(true);
    }
  }, []);

  return (
    <div>
      {!login ? (
        <Login />
      ) : (
        <div className={style.container}>
          <BrowserRouter>
            <Header />
            <div className={style.content}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="books" element={<Books />} />
                <Route path="create" element={<CreateBook />} />
                <Route path="about" element={<About />} />
                <Route path="edit/:id" element={<EditBook />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}
