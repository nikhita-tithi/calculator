import React from "react";
import "./calculator.css";

const Buttons = props => {
  const blueElements = [];
  if (
    props.value === "/" ||
    props.value === "x" ||
    props.value === "-" ||
    props.value === "+" ||
    props.value === "="
  ) {
    blueElements.push(props.value);
  }

  if (props.value === "=") {
    return (
      <button
        className="equals"
        onClick={props.onClick}
        value={props.value.toString()}
      >
        {props.value.toString()}
      </button>
    );
  }

  if (props.value === "+/-") {
    return (
      <button
        className="plusminus"
        onClick={props.onClick}
        value={props.value.toString()}
      >
        {props.value.toString()}
      </button>
    );
  }

  return (
    <button
      className={blueElements.includes(props.value) ? "but" : "button"}
      onClick={props.onClick}
      value={props.value.toString()}
    >
      {props.value.toString() === "/" ? "÷" : props.value.toString()}
    </button>
  );
};

export default Buttons;
