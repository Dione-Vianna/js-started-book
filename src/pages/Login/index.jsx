import style from './login.module.css'

export function Login() {
  function handleSubmit() {
    localStorage.setItem('user', 'login com sucesso')
    window.location.reload()
  }

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h2 className={style.h2}>Login</h2>
        <input
          className={style.input}
          type="email"
          placeholder="Entre com email"
        />
        <input
          className={style.input}
          type="password"
          placeholder="Entre com senha"
        />
        <button className={style.button} type="button" onClick={handleSubmit}>
          Entrar
        </button>
        <a className={style.a} href="/">
          <p className={style.p}>Não tem uma conta?</p>
        </a>
      </form>
    </div>
  )
}

// Default export vs Named Exports
