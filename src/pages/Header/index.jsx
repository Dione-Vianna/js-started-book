<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import style from './header.module.css';

import {
  FcShop,
  FcKindle,
  FcHome,
  FcInspection,
  FcAbout,
} from 'react-icons/fc';

import { Link } from 'react-router-dom';

export function Header() {
  const [isSelected, setIsSelected] = useState([
    {
      home: false,
      books: false,
      create: false,
      about: false,
    },
  ]);

  function handleClick(ref) {
    setIsSelected((prevState) => {
      let newState = { ...prevState };
      for (let key in newState[0]) {
        newState[0][key] = false;
      }
      newState[0][ref] = true;
      return newState;
    });
  }

=======
import style from './header.module.css';

import { Link } from 'react-router-dom';

export function Header() {
>>>>>>> aula-sexta
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
<<<<<<< HEAD
    <div className={style.container}>
      <div className={style.logo}>
        <FcShop className={style.icon} />
        <h4>Books-Home</h4>
      </div>

      <div className={style.content}>
        <Link
          to="/"
          style={
            isSelected[0].home
              ? {
                  color: '#fff',
                  backgroundColor: '#00bcd4',
                }
              : {
                  color: '#fff',
                }
          }
          onClick={() => handleClick('home')}
          className={style.nav}
        >
          <FcHome className={style.icon} />
          Home
        </Link>
      </div>
      <div className={style.hr} />

      <div className={style.content}>
        <Link
          to="books"
          style={
            isSelected[0].books === true
              ? {
                  color: '#fff',
                  backgroundColor: '#00bcd4',
                }
              : {
                  color: '#fff',
                }
          }
          onClick={() => handleClick('books')}
          className={style.nav}
        >
          <FcKindle className={style.icon} />
          Books
        </Link>
      </div>
      <div className={style.hr} />

      <div className={style.content}>
        <Link
          to="/create"
          style={
            isSelected[0].create === true
              ? {
                  color: '#fff',
                  backgroundColor: '#00bcd4',
                }
              : {
                  color: '#fff',
                }
          }
          onClick={() => handleClick('create')}
          className={style.nav}
        >
          <FcInspection className={style.icon} />
          Create
        </Link>
      </div>
      <div className={style.hr} />

      <footer className={style.footer}>
        <Link
          to="/about"
          style={
            isSelected[0].about === true
              ? {
                  color: '#fff',
                  backgroundColor: '#00bcd4',
                }
              : {
                  color: '#fff',
                }
          }
          onClick={() => handleClick('about')}
          className={style.nav}
        >
          <FcAbout className={style.icon} />
          About
        </Link>
        <button className={style.button} onClick={Logout}>
          Logout

        </button>
=======
    <div className={style.header}>
      <h1 className={style.title}>Bem Vindo</h1>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/create_book">
        <button>Create</button>
      </Link>

      <footer className={style.footer}>
        <button onClick={Logout}>Sair</button>
>>>>>>> aula-sexta
      </footer>
    </div>
  );
}
