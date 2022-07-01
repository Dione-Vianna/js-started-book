import style from './style.module.css';

export function Login() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h2>Login</h2>
        <input type="email" placeholder="Entre com email" />
        <input type="password" placeholder="Entre com senha" />
        <button type="button">Entrar</button>
        <a href="/">
          <p>Não tem uma conta?</p>
        </a>
      </form>
    </div>
  );
}

// Default export vs Named Exports
