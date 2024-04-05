import "./NavBarListItem.scss";

export default function NavBarListItem(props) {
  const { text } = props;
  return (
    <li className="navbar-list-item">
      <a className="navbar-list-item__link" href="">
        {text}
      </a>
    </li>
  );
}
