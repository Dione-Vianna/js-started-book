import style from './header.module.css';

export function Header() {
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div className={style.header}>
      <h1>Bem Vindo</h1>

      <a href="/">
        <button>Home</button>
      </a>

      <a href="/books">
        <button>Books</button>
      </a>

      <footer className={style.footer}>
        <button onClick={Logout}>Sair</button>
      </footer>
    </div>
  );
}
