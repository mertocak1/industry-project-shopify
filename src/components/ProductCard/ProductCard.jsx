import "./ProductCard.scss";

export default function ProductCard(props) {
  const { img } = props;

  return (
    <div className="product-card">
      {img ? <img src={img} alt={alt} /> : null}
    </div>
  );
}
