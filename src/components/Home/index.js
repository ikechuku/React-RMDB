import React, { Component } from "react";
import "./Home.css";
import SearchBar from "../elements/SearchBar";
import Spinner from "../elements/Spinner";
import HeroImage from "../elements/HeroImage";
import FourColGrid from "../elements/FourColGrid";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="rmdb-home">
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
      </div>
    );
  }
}

export default Home
