import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="page-content header">
            <a href="/" className="header__link">
            <img
                className="logo header__logo"
                src={logo}
                alt="Логотип Место"
            />
            </a>
      </header>
  )};
  
  export default Header



