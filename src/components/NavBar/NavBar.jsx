import NavBarList from "../NavBarList/NavBarList";
import NavIcon from "../NavIcon/NavIcon";
import "./NavBar.scss";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import cart from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo-link" href="">
            <h2 className="navbar__logo">STYLISH</h2>
          </Link>
          <NavBarList />
        </div>
        <div className="navbar__right">
          <NavIcon link={search} alt="search-icon" />
          <NavIcon link={profile} alt="profile-icon" />
          <NavIcon link={cart} alt="cart-icon" />
        </div>
      </nav>
    </>
  );
}
