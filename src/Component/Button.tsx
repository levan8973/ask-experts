import React from "react";
import "./index.css";
type ButtonProps = {
  text: string;
  onClick?: () => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
