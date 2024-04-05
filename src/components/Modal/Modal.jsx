import { useState } from "react";
import "./Modal.scss";
import ReactModal from "react-modal";
import close from "../../assets/icons/close.svg";
import SizeButton from "../Button/Button";

export default function Modal({ isOpen, setShowModal }) {
  return (
    <section>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        contentLabel="onRequestClose Example"
        onRequestClose={() => setShowModal(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__flexbox">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="modal__close"
          >
            X
          </button>

          <h2 className="modal__header">
            STYLISH <span className="modal__header-light">BOT</span>
          </h2>

          <h2 className="modal__header">What is the Question?</h2>
          <input
            className="modal__input"
            type="text"
            placeholder="When will the Stevie Sweater restock?"
          />
          <h2 className="modal__header">What is your Answer</h2>
          <textarea
            className="modal__textarea"
            placeholder="The DreamWeave Sweater will restock on April 18th. Would you like an email to remind you on that day?"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <SizeButton size={"Confirm"} style={"modal"} />
        </div>
      </ReactModal>
    </section>
  );
}
