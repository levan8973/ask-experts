import React from "react";
import "./index.css";
import Navigation from "../../navigation/Navigation";
import Button from "../Button";

import { ReactComponent as Logo } from "../../icon/Logo.svg";

const Header: React.FC = () => {
  const btnText: string = "Get your free guide now";

  return (
    <header>
      <nav className="header">
        <Logo />
        <div className="header__nav-btn">
          <Navigation />
          <Button className="btn" text={btnText} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
