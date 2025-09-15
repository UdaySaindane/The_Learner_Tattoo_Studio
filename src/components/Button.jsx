import React from "react";

function Button({ text, type = "button", onClick, className = "" }) {
  return (
    <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
