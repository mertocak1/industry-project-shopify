import NavBarListItem from "../NavBarListItem/NavBarListItem";
import "./NavBarList.scss";

export default function NavBarList() {
  return (
    <ul className="navbar-list">
      <NavBarListItem text="WOMEN'S" />
      <NavBarListItem text="MEN'S" />
      <NavBarListItem text="ACCESSORIES" />
      <NavBarListItem text="SALE" />
    </ul>
  );
}
