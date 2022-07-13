import style from './header.module.css';

export function Header() {
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <div className={style.container}>
      <a href="/">Home</a>

      <a href="/books">Books</a>

      <footer>
        <button className={style.footer} onClick={Logout}>
          Sair
        </button>
      </footer>
    </div>
  );
}
