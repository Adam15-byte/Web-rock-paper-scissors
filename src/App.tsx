import React from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Triangle from "./assets/bg-triangle.svg";
import Paper from "./assets/icon-paper.svg";
import Rock from "./assets/icon-rock.svg";
import Scissors from "./assets/icon-scissors.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logo-score-container">
          <img className="logo" src={Logo} alt="logo" />
          <div className="score-container">
            <span className="score-text">Score</span>
            <span className="score-number">12</span>
          </div>
        </div>
        <div className="buttons-container">
          <div className="upper-row">
            <div className="paper-border">
              <div className="icon-white-bg">
                <img src={Paper} alt="Paper" className="paper" />
              </div>
            </div>
            <div className="scissors-border">
              <div className="icon-white-bg">
                <img src={Scissors} alt="Scissors" className="scissors" />
              </div>
            </div>
          </div>
          <div className="lower-row">
            <div className="rock-border">
              <div className="icon-white-bg">
                <img src={Rock} alt="Rock" className="rock" />
              </div>
            </div>
          </div>
          <img id="triangle" src={Triangle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
