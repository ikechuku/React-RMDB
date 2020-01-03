import React from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <img
          className="rmdb-logo"
          src="/images/reactMovie_logo.png"
          alt="rmdb-logo"
        />
        <img
          className="rmdb-tmdb-logo"
          src="/images/tmdb_logo.png"
          alt="tmdg-logo"
        />
      </div>
    </div>
  );
};

export default Header;
