import Header from './Header';
import InfoToolTip from './InfoTooltip';

function Login (props) {

  return (
    <>
      <InfoToolTip
        sucess={true}
        isOpen={true}
        onClose={props.onClose}
        />
      <Header headerText={props.headerText} headerLink={props.headerLink}/>
      <section className="login">
        <h2 className="login__title">Вход</h2>
        <form className="login__form">
        <input className="login__input login__input_value_email" type="text" placeholder="Email" name="email" required minLength="4" maxLength="40" />
        <input className="login__input login__input_value_pass" type="text" placeholder="Password" name="password" required minLength="4" maxLength="40" />
          <button className="button button-enter" type="submit">Войти</button>
        </form>
      </section>
    </>
  )
}

export default Login;