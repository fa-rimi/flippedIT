// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = ({ onStartGame, clickCount, timer }) => {
  return (
    <header>
      <div className="intro">
        <h1>flip IT</h1>
        <p>flip the cards <br /> match the colors</p>
      </div>
      <div className="mode">
        <button type="button" id="easy" onClick={() => onStartGame('easy')}>
          Easy
        </button>
        <button type="button" id="medium" onClick={() => onStartGame('medium')}>
          Medium
        </button>
        <button type="button" id="hard" onClick={() => onStartGame('hard')}>
          Hard
        </button>
        <button
          type="button"
          id="harder"
          onClick={() => onStartGame('harder')}
        >
          Harder
        </button>
      </div>
      <div className="stats">
        <div id="click-count">Click Count: {clickCount}</div>
        <div id="timer">Time: {timer}</div>
      </div>
      <div className="links">
        <a href="https://github.com/fa-rimi">
          <img src="images/logos/icons8-github-48.png" alt="" />
        </a>
        <a href="credits/credit.html">credits</a>
      </div>
    </header>
  );
};

export default Header;
