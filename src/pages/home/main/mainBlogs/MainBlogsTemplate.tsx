import React from "react";
import "./index.css";

interface MainBlogsProps {
  title: string;
  text: string;
  image: string;
}

const MainBlogsTemplate: React.FC<MainBlogsProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <div className="main__blogs-item">
      <img className="main__blogs-img" src={image} alt="blogs photo" />
      <div className="main__blogs-elements">
        <span className="main__blogs-title">{title}</span>
        <p className="main__blogs-text">{text}</p>
      </div>
    </div>
  );
};

export default MainBlogsTemplate;
