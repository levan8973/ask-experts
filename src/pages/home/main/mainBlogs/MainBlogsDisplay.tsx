import React from "react";
import MainBlogsTemplate from "./MainBlogsTemplate";
import Button from "../../../../Component/Button";
import { MainBlogsData } from "./MainBlogsData";
import "./index.css";

const MainBlogsDisplay: React.FC = () => {
  const btnMainBlogs = "Read more blogs";
  return (
    <div className="main__blogs">
      <h2 className="main__blogs-heading">
        Hear out what my clients say about me.
      </h2>
      <div className="main__blogs-container">
        {MainBlogsData.map((blog, index) => (
          <MainBlogsTemplate
            key={index}
            title={blog.title}
            text={blog.text}
            image={blog.image}
          />
        ))}
      </div>
      <Button className="main__blogs-btn" text={btnMainBlogs} />
    </div>
  );
};
export default MainBlogsDisplay;
