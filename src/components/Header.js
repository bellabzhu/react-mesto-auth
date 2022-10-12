import { Link } from 'react-router-dom';

function Header () {
  return (
    <header className="header">
      <Link to='/'>
        <div className="header__logo" aria-label="Logo"></div>
      </Link>
    </header>
  )
}

export default Header;