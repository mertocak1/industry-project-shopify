import hero from "../../assets/images/hero.svg";
import "./Hero.scss";

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <h1 className="hero__header">Shop New Arrivals</h1>
        <img className="hero__img" src={hero} alt="hero" />
      </div>
    </main>
  );
}
