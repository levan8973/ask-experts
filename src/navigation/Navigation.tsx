import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./index.css";
// Компоненты страниц
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const Navigation: React.FC = () => {
  return (
    // <Router>
    <nav>
      <ul className="nav__list">
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
      </ul>
    </nav>
  );
  {
    /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */
  }
};

export default Navigation;
