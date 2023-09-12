// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Credit from "../pages/Credit"

const Header = () => {
  return (
    <header>
      <div className="intro">
        <h1>flip IT</h1>
        <p>
          flip the cards <br /> match the colors
        </p>
      </div>
      <div className="mode">
        <button type="button" id="easy">
          Easy
        </button>
        <button type="button" id="medium">
          Medium
        </button>
        <button type="button" id="hard">
          Hard
        </button>
      </div>
      <div className="stats">
        <div id="click-count">Click Count:</div>
        <div id="timer">Time:</div>
      </div>
      <div className="links">
        <a href="https://github.com/fa-rimi">
          <p>GitHub</p>
        </a>
        <Routes>
            <Route path="/flippedIT/credits" element={<Credit/>}/>
        </Routes>
        <a href="#">credits</a>
      </div>
    </header>
  );
};

export default Header;
