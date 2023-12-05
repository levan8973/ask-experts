import React from "react";
import "./index.css";
import GuidePhoto from "../../../../img/GuidePhoto.png";
import FreeGuide from "../../../../img/FreeGuide.png";
import Button from "../../../../Component/Button";

const MainGuide = () => {
  const btnMainGuide = "Get your free guide now";
  return (
    <div className="main__guide">
      <div className="main__guide-elements">
        <h2 className="main__guide-heading">
          Don’t miss out on my ‘Live life at the full potential’ free guide
        </h2>
        <p className="main__guide-text-top">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
        <p className="main__guide-text-bottom">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <Button className="main__guide-btn" text={btnMainGuide} />
      </div>
      <div className="main__guide-container-img">
        <div className="main__guide-container">
          <img src={FreeGuide} alt="" />
        </div>
        <img src={GuidePhoto} alt="guide photo" />
      </div>
    </div>
  );
};
export default MainGuide;
