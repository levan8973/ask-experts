import React from "react";
import "./index.css";
import { ReactComponent as CurvedLine } from "../../../../icon/CurvedLine.svg";
import { ReactComponent as Aim } from "../../../../icon/Aim.svg";
import HeaderPhoto from "../../../../img/headerPhoto.png";
import Button from "../../../../Component/Button";

const HeaderContent: React.FC = () => {
  const contentBtn = "Get your free guide now";
  return (
    <section className="header__content">
      <div className="content__elements">
        <CurvedLine />
        <div className="mini__card">
          <Aim />
          <div className="mini__card-content">
            <span className="mini-card__percents">100%</span>
            <span className="mini-card__text">Success rate this year</span>
          </div>
        </div>
      </div>
      <div className="content__main">
        <div className="content__text-items">
          <span className="content__transparent-text">
            Proven strategies backed by science for success.
          </span>
          <h2 className="content__heading">Live life at the full potential</h2>
          <p className="content__text">
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <Button className="btn" text={contentBtn} />
        </div>
        <img className="header__img" src={HeaderPhoto} alt="" />
      </div>
    </section>
  );
};

export default HeaderContent;
