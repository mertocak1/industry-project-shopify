import "./Product.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar/NavBar";

export default function Product() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar />
      <main className="product-section">
        <div className="product-section__name-wrapper">
          <p className="product-section__name">Breadcrumbs | Breadcrumbs</p>
        </div>
        <div className="product-section__content-wrapper">
          <ProductCard />
          <div className="product-section__details-wrapper">
            <div>
              <h2 className="product-section__product-name">Product Name</h2>
              <h3 className="product-section__product-subheader">$00.00</h3>
            </div>
            <div>
              <h3 className="product-section__product-subheader">
                Colour: "Selected"
              </h3>
            </div>
            <div className="product-section__details-size">
              <h3 className="product-section__product-subheader">Size :</h3>
              <div className="product-section__size-buttons">
                <Button onClick={() => setShowModal(true)} size={"XS"} />
                <Button size={"S"} />
                <Button size={"M"} />
                <Button size={"L"} />
                <Button size={"XL"} />
              </div>
              <div className="product-section__add-button">
                <Button size={"ADD TO CART"} style={"add"} />
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={showModal} setShowModal={setShowModal} />
      </main>
    </>
  );
}
