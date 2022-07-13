import React, { useState, useEffect } from 'react';

import { Login } from '../pages/Login';
import { Books } from '../pages/Books';
import { Header } from '../pages/Header';

import { Home } from '../pages/Home';

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="books" element={<Books />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}
