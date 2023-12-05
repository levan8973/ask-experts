import React from "react";
import "./index.css";

interface CommentsProps {
  text: string;
  title: string;
  image: string;
  svg?: React.ReactNode;
}

const CommentsTemplate: React.FC<CommentsProps> = ({
  text,
  title,
  image,
  svg: svgComponent,
}) => {
  return (
    <div className="comments__item">
      <p className="comments__text">{text}</p>
      <span className="comments__title">{title}</span>
      <img className="comments__img" src={image} alt="Comments Image" />
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index}>{svgComponent}</div>
      ))}
    </div>
  );
};

export default CommentsTemplate;
