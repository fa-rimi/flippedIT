// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Credit from "../pages/Credit";

// Import Components & Config
import modes from "../config/modes";

// Import Style
import { buttonDimension } from "../assets/buttonStyles";

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
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            id={mode.id}
            className={`${buttonDimension}`}>
            {mode.label}
          </button>
        ))}
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
          <Route path="/flippedIT/credits" element={<Credit />} />
        </Routes>
        <a href="#">credits</a>
      </div>
    </header>
  );
};

export default Header;
