import React from "react";
import CardTemplate from "./CardTemplate";
import { CardData } from "./CardData";
import { ReactComponent as CurvedLineTwo } from "../../../../icon/CurvedLineTwo.svg";
import "./index.css";
const CardDisplay: React.FC = () => {
  return (
    <div className="main__help">
      <CurvedLineTwo />
      <div className="main__card-text">
        <h2 className="main__heading">
          I can help you in these particular areas.
        </h2>
        <div className="main__texts-elements">
          <p className="main__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p className="main__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </div>
      </div>
      <div className="main__container-card">
        {CardData.map((card, index) => (
          <CardTemplate
            key={index}
            svg={card.svg}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
