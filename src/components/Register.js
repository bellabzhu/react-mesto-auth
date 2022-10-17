import { Link } from "react-router-dom";

function Register (props) {

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form">
      <input className="login__input login__input_value_email" type="text" placeholder="Email" name="email" required minLength="4" maxLength="40" />
      <input className="login__input login__input_value_pass" type="text" placeholder="Password" name="password" required minLength="4" maxLength="40" />
        <button className="button button-enter" type="submit">Зарегистрироваться</button>
        <Link to="/sign-in" className="login__substring">Уже зарегистрированы? Войти</Link>
      </form>
    </section>
  )
}

export default Register;