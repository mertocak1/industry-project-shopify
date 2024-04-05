import React from "react";
import "./Button.scss";

export default function SizeButton(props) {
  const { size, style, onClick } = props;

  if (style === "add") {
    return (
      <button className={`size-button size-button--add-button`}>{size}</button>
    );
  }
  if (style === "modal") {
    return (
      <button
        onClick={onClick}
        className={`size-button size-button--modal-button`}
      >
        {size}
      </button>
    );
  }
  if (style === "chatbot") {
    return (
      <button
        onClick={onClick}
        className={`size-button size-button--chatbot-button`}
      >
        {size}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`size-button ${style ? style : ""}`}>
      {size}
    </button>
  );
}
