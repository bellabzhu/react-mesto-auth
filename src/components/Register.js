import {Link} from "react-router-dom";

function Register (props) {

  props.onRegister()

  return (
    <div>
      <h1>ТУТ РЕГИСТРАЦИЯ</h1>
      <Link to='/login'>Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register;