import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn__prymary", "btn__outline"];
const SIZES = ["btn__medium", "btn__large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn__mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
