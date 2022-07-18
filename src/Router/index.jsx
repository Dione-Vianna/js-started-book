import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';

import { Home, Books, Header, CreateBook, About, EditBook } from '../pages';

import {
  LoginLayout,
  LoginPage,
  RegistrationPage,
  CustomThemeProvider,
} from '../pages/Login';

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
        <CustomThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/registration"
                element={
                  <>
                    <LoginLayout>
                      <RegistrationPage />
                    </LoginLayout>
                  </>
                }
              />

              <Route
                path="*"
                element={
                  <>
                    <LoginLayout>
                      <LoginPage />
                    </LoginLayout>
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
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
