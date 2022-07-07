import style from './header.module.css';

export function Header() {
  function Logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <button>Home</button>
      </h1>
      <h1 className={style.title}>
        <button>Books</button>
      </h1>

      <footer className={style.footer}>
        <button onClick={Logout}>Sair</button>
      </footer>
    </div>
  );
}
