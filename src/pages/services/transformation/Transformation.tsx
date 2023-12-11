import React from "react";
import "./index.css";
import { ReactComponent as Talk } from "../../../icon/Talk.svg";
import { ReactComponent as Meeting } from "../../../icon/Meeting.svg";
import { ReactComponent as Online } from "../../../icon/Online.svg";
import { ReactComponent as Message } from "../../../icon/Message.svg";
import GirlShort from "../../../img/GirlShort.png";

const Transformation: React.FC = () => {
  return (
    <div className="transform">
      <div className="transform__elements-text">
        <span className="transform__span">How does it work?</span>
        <h2 className="transform__heading">
          Are you ready to transform your life?
        </h2>
        <p className="transform__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
      </div>
      <div className="transform__items">
        <div className="transform__all-methods">
          <div className="transfrom__methods">
            <Talk />
            <div>
              <span className="transform__item-title">Talk to me first</span>
              <p className="transform__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="transfrom__methods">
            <Meeting />
            <div>
              <span className="transform__item-title">Schedule a meeting</span>
              <p className="transform__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="transfrom__methods">
            <Online />
            <div>
              <span className="transform__item-title">Online consultation</span>
              <p className="transform__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="transfrom__methods">
            <Message />
            <div>
              <span className="transform__item-title">
                Ready to start? Let’s talk!
              </span>
              <p className="transform__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <img src={GirlShort} alt="wooman photo" />
      </div>
    </div>
  );
};

export default Transformation;
