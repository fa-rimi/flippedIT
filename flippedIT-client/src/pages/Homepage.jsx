// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header.jsx";
import GameBoard from "../components/GameBoard";
import { appContainer } from "../assets/appStyles.js";

const Homepage = () => {
  return (
    <div className={`${appContainer}`}>
      <Header className="w-5/12"/>
      <GameBoard className="w-7/12"/>
    </div>
  );
};

export default Homepage;
