import style from './header.module.css';

import { BiBookBookmark, BiHomeAlt, BiEdit } from 'react-icons/bi';

import { FcKindle, FcHome, FcInspection } from 'react-icons/fc';

import { Link } from 'react-router-dom';

export function Header() {
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
          alt="logo"
        />
        <h3>Books-Home</h3>
      </div>

      <div className={style.content}>
        <Link to="/" className={style.nav}>
          <FcHome className={style.icon} />
          Home
        </Link>
      </div>
      <div className={style.hr} />

      <div className={style.content}>
        <Link to="books" className={style.nav}>
          <FcKindle className={style.icon} />
          Books
        </Link>
      </div>
      <div className={style.hr} />

      <div className={style.content}>
        <Link to="/create" className={style.nav}>
          <FcInspection className={style.icon} />
          Create
        </Link>
      </div>
      <div className={style.hr} />

      <footer className={style.footer}>
        <button className={style.button} onClick={Logout}>
          Sair
        </button>
      </footer>
    </div>
  );
}
