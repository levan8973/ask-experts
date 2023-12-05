import React from "react";
import CommentsTemplate from "./CommentsTemplate";
import { CommentsData } from "./CommentsData";
import "./index.css";

const CommentsDisplay: React.FC = () => {
  return (
    <div className="main__comments">
      <h2 className="comments__heading">
        Hear out what my clients say about me.
      </h2>
      <div className="comments__container">
        {CommentsData.map((comments, index) => (
          <CommentsTemplate
            key={index}
            title={comments.title}
            text={comments.text}
            image={comments.image}
          />
        ))}
      </div>
    </div>
  );
};
export default CommentsDisplay;
