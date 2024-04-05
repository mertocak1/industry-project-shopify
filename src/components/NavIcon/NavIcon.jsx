import "./NavIcon.scss";

export default function NavIcon(props) {
  const { link, alt } = props;

  return (
    <a href="#">
      <img className="nav-icon" src={link} alt={alt} />
    </a>
  );
}
