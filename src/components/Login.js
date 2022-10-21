import Header from './Header';
import { useState, useEffect} from 'react';

function Login (props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [])

  const handleEmailChange = (e) => {
    console.log(email)
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    console.log(password)
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <>
      <Header headerText={props.headerText} headerLink={props.headerLink}/>
      <section className="login">
        <h2 className="login__title">Вход</h2>
        <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input login__input_value_email" onChange={handleEmailChange} type="email" placeholder="Email" name="email" required minLength="4" maxLength="40" />
        <input className="login__input login__input_value_pass" onChange={handlePassChange} type="password" placeholder="Password" name="password" required minLength="4" maxLength="40" />
          <button className="button button-enter" type="submit">Войти</button>
        </form>
      </section>
    </>
  )
}

export default Login;