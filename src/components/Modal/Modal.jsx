import { useState } from "react";
import "./Modal.scss";
import ReactModal from "react-modal";
import SizeButton from "../Button/Button";

export default function Modal({ isOpen, setShowModal, onSubmit }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ question, answer });
    setShowModal(false);
  };

  return (
    <section>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        contentLabel="Chatbot Modal"
        onRequestClose={() => setShowModal(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <form className="modal__flexbox" onSubmit={handleSubmit}>
          <button type="button" onClick={() => setShowModal(false)} className="modal__close">X</button>
          <div>
            <label htmlFor="question" className="modal__label">What is the Question?</label>
            <input
              id="question"
              className="modal__input"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="When will the Stevie Sweater restock?"
            />
          </div>
          <div>
            <label htmlFor="answer" className="modal__label">What is your Answer</label>
            <textarea
              id="answer"
              className="modal__textarea"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="The DreamWeave Sweater will restock on April 18th. Would you like an email to remind you on that day?"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <SizeButton size={"Confirm"} style={"modal"} type="submit" />
        </form>
      </ReactModal>
    </section>
  );
}
