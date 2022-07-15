import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';

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
  const { state } = useContext(ThemeContext);
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
            <div
              className={style.content}
              style={{
                border:
                  state.theme === 'light' ? '4px solid #000' : '4px solid #fff',
                color: state.theme === 'light' ? '#fff' : '#000',
              }}
            >
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
