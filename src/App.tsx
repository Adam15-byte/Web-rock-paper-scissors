import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Triangle from "./assets/bg-triangle.svg";
import Paper from "./assets/icon-paper.svg";
import Rock from "./assets/icon-rock.svg";
import Scissors from "./assets/icon-scissors.svg";
import SignButtons from "./components/SignButtons";

type Choice = "paper" | "rock" | "scissors";

function App() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [userWon, setUserWon] = useState<boolean | null>(null);
  const [score, setScore] = useState(12);
  const [houseChoice, setHouseChoice] = useState<Choice | null>(null);
  const [counter, setCounter] = useState(0);
  const rollHousePick = () => {
    const randomVal = Math.random() * 3;
    if (Math.floor(randomVal) === 0) {
      setHouseChoice("paper");
    }
    if (Math.floor(randomVal) === 1) {
      setHouseChoice("rock");
    }
    if (Math.floor(randomVal) === 2) {
      setHouseChoice("scissors");
    }
  };
  const handleButtonClick = (input: Choice) => {
    setUserChoice((prevState) => input);
    rollHousePick();
    setCounter((prevState) => 3);
  };

  useEffect(() => {
    if (!counter) return;
    const count = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(count);
  }, [counter]);

  console.log(`Rolled house choice is ${houseChoice}`);
  return (
    <div className="App">
      <div className="container">
        <div className="logo-score-container">
          <img className="logo" src={Logo} alt="logo" />
          <div className="score-container">
            <span className="score-text">Score</span>
            <span className="score-number">{score}</span>
          </div>
        </div>
        <div className="buttons-container">
          {userChoice ? (
            <div className="compare-container">
              <div className="left-compare">
                <div className="centering-div">
                  <h1>You picked</h1>
                  <SignButtons pressable={false} type={userChoice} />
                </div>
              </div>
              <div className="middle-ground">
                <h2>{counter}</h2>
              </div>
              <div className="right-compare">
                <div className="centering-div">
                  <h1>The house picked</h1>
                  {houseChoice && (
                    <SignButtons pressable={false} type={houseChoice} />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="upper-row">
                <SignButtons
                  pressable={true}
                  type="paper"
                  onClick={handleButtonClick}
                />
                <SignButtons
                  pressable={true}
                  type="scissors"
                  onClick={handleButtonClick}
                />
              </div>
              <div className="lower-row">
                <SignButtons
                  pressable={true}
                  type="rock"
                  onClick={handleButtonClick}
                />
              </div>
              <img id="triangle" src={Triangle} alt="" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
