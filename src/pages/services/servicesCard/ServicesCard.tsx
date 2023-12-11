import React from "react";
import CardTemplate from "../../home/main/card/CardTemplate";
import { CardDataServices } from "../../home/main/card/CardData";
import "./index.css";

const ServicesCard: React.FC = () => {
  return (
    <div className="services__card">
      <h2 className="services__card-heading">
        I can help you in these particular areas.
      </h2>
      <div className="services__card-elements">
        {CardDataServices.map((card, index) => (
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

export default ServicesCard;
