import React, { useState, useEffect } from 'react';

import { Login } from '../pages/Login';
import { Books } from '../pages/Books';
import { Header } from '../pages/Header';

import style from './route.module.css';

export function Route() {
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
          <Books />
        </div>
      )}
    </div>
  );
}
