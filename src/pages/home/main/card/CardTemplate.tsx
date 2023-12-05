import React from "react";
import "./index.css";

interface CardProps {
  title: string;
  text: string;
  svg: React.ReactNode;
}

const CardTemplate: React.FC<CardProps> = ({
  title,
  text,
  svg: SvgComponent,
}) => {
  return (
    <div className="main__cards">
      {SvgComponent}
      <div className="card__text-elements">
        <span className="card__title">{title}</span>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
};
export default CardTemplate;
