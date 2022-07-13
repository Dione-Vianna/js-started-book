import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Books } from '../pages/Books';
import { Header } from '../pages/Header';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

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
          <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}
