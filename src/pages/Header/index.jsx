import style from './header.module.css';

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
        <h3>Bem Vindo</h3>
      </div>

      <h1 className={style.title}>
        <button className={style.button}>Home</button>
      </h1>
      <h1 className={style.title}>
        <button className={style.button}>Books</button>
      </h1>

      <footer className={style.footer}>
        <button className={style.button} onClick={Logout}>
          Sair
        </button>
      </footer>
    </div>
  );
}
