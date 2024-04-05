import React from "react";
import "./Button.scss";

export default function SizeButton(props) {
  const { size, style } = props;

  if (style === "add") {
    return (
      <button className={`size-button size-button--add-button`}>{size}</button>
    );
  }

  return (
    <button className={`size-button ${style ? style : ""}`}>{size}</button>
  );
}
