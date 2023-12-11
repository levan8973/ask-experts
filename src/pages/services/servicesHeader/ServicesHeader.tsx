import React from "react";
import "./index.css";
import ServicesHeaderPhoto from "../../../img/ServicesHeaderPhoto.jpg";

const ServicesHeader: React.FC = () => {
  return (
    <div className="services-header">
      <div className="services-header__content">
        <div className="services-header__elements">
          <span className="services-header__span">
            I can help you in these patricular areas.
          </span>
          <h2 className="services-header__heading">
            I help people to discover their true potential
          </h2>
        </div>
        <p className="services-header__text">
          I help people to discover their true potential and live a fulfilling
          life... Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </p>
      </div>
      <img src={ServicesHeaderPhoto} alt="services header photo" />
    </div>
  );
};
export default ServicesHeader;
