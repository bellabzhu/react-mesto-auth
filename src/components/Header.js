import { Link } from 'react-router-dom';

function Header (props) {

  return (
    <header className="header">
      <Link to='/'>
        <div className="header__logo" aria-label="Logo"></div>
      </Link>
      <Link to={props.headerLink} className="header__link">{props.headerText}</Link>
    </header>
  )
}

export default Header;