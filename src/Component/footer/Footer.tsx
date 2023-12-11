import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as Logo } from "../../icon/Logo.svg";
import "./index.css";

interface FooterProps {
  onSubscribe?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
  const PhoneNumber = "+123 456 789";
  const EmailCompani = "ask@expendet.ni";
  const FooterBtn = "Subscribe";
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubscribe(email);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer__email">
        <div className="email__elements-texts">
          <span className="email__text-bold">
            Get notified when I publish new articles
          </span>
          <span className="email__text-normal">
            Stay up to date with the latest news, announcements, and articles.
          </span>
        </div>
        <form className="email__form" onSubmit={handleFormSubmit}>
          <input
            className="email__input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          <Button className="email__btn" text={FooterBtn} />
        </form>
      </div>
      <div className="footer__container">
        <div className="footer__elements">
          <Logo />
          <p className="footer__text">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="footer__list-container width">
          <span className="footer__title-list">Pages</span>
          <ul className="footer__list">
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/extra">
                Extra Salespage
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/free">
                Free guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__list-container">
          <span className="footer__title-list">Contact</span>
          <ul className="footer__list">
            <li>
              <Link className="nav__link" to="/">
                {PhoneNumber}
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/services">
                {EmailCompani}
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/about">
                Instagram
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/extra">
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
