import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/about">Про мене</Link>
      <Link to="/my-city">Моє місто</Link>
      <Link to="/my-future">Моє майбутнє</Link>
    </nav>
  </header>
);

export default Header;
