import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context';

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
  const { state, setState } = useContext(ThemeContext);

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

  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div
      style={{
        backgroundColor: state.theme === 'light' ? '#222' : '#fff',
        color: state.theme === 'light' ? '#fff' : '#222',
      }}
      className={style.container}
    >
      <div className={style.logo}>
        <FcShop className={style.icon} />
        <h4>Books-Home</h4>
        <span
          style={{
            marginLeft: 10,
            cursor: 'pointer',
          }}
          onClick={
            state.theme === 'light'
              ? () => setState({ theme: 'dark' })
              : () => setState({ theme: 'light' })
          }
        >
          {state.theme === 'light' ? '🔦' : '💡'}
        </span>
      </div>

      <div className={style.content}>
        <Link
          to="/"
          style={
            isSelected[0].home
              ? {
                  color: state.theme === 'light' ? '#fff' : '#222',

                  backgroundColor: '#00bcd4',
                }
              : {
                  color: state.theme === 'light' ? '#fff' : '#222',
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
                  color: state.theme === 'light' ? '#fff' : '#222',
                  backgroundColor: '#00bcd4',
                }
              : {
                  color: state.theme === 'light' ? '#fff' : '#222',
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
                  color: state.theme === 'light' ? '#fff' : '#222',

                  backgroundColor: '#00bcd4',
                }
              : {
                  color: state.theme === 'light' ? '#fff' : '#222',
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
                  color: state.theme === 'light' ? '#fff' : '#222',

                  backgroundColor: '#00bcd4',
                }
              : {
                  color: state.theme === 'light' ? '#fff' : '#222',
                }
          }
          onClick={() => handleClick('about')}
          className={style.nav}
        >
          <FcAbout className={style.icon} />
          About
        </Link>
        <button
          style={{
            color: state.theme === 'light' ? '#fff' : '#222',
            backgroundColor: '#00bcd4',
          }}
          className={style.button}
          onClick={Logout}
        >
          Logout
        </button>
      </footer>
    </div>
  );
}
