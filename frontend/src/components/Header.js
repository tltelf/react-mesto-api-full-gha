import logo from "../images/header__logo.svg";
import { Link } from "react-router-dom";

function Header({
  title,
  link,
  userData,
  onSignOut,
  loggedIn,
  clearFormValues,
}) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__container">
        <p className="header__user-email">{userData}</p>
        <Link
          to={link}
          onClick={loggedIn ? onSignOut : clearFormValues}
          className={`header__title ${loggedIn ? "header__title_logged" : ""}`}
        >
          {title}
        </Link>
      </div>
    </header>
  );
}

export default Header;
