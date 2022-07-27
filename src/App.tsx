import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import Triangle from "./assets/bg-triangle.svg";
import Paper from "./assets/icon-paper.svg";
import Rock from "./assets/icon-rock.svg";
import Scissors from "./assets/icon-scissors.svg";
import SignButtons from "./components/SignButtons";
import RulesModal from "./components/rulesModal/RulesModal";

type Choice = "paper" | "rock" | "scissors";
type Outcome = "user" | "house" | "draw";

function App() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [score, setScore] = useState(0);
  const [houseChoice, setHouseChoice] = useState<Choice | null>(null);
  const [counter, setCounter] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
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

  const determineOutcome = () => {
    if (userChoice && houseChoice) {
      if (userChoice === "paper" && houseChoice === "rock") {
        setOutcome("user");
        setScore((prevState) => prevState + 1);
      }
      if (userChoice === "paper" && houseChoice === "scissors") {
        setOutcome("house");
        if (score > 0) setScore((prevState) => prevState - 1);
      }
      if (userChoice === "paper" && houseChoice === "paper") setOutcome("draw");
      if (userChoice === "rock" && houseChoice === "rock") setOutcome("draw");
      if (userChoice === "rock" && houseChoice === "scissors") {
        setOutcome("user");
        setScore((prevState) => prevState + 1);
      }
      if (userChoice === "rock" && houseChoice === "paper") {
        setOutcome("house");
        if (score > 0) setScore((prevState) => prevState - 1);
      }
      if (userChoice === "scissors" && houseChoice === "rock") {
        setOutcome("house");
        if (score > 0) setScore((prevState) => prevState - 1);
      }
      if (userChoice === "scissors" && houseChoice === "scissors")
        setOutcome("draw");
      if (userChoice === "scissors" && houseChoice === "paper") {
        setOutcome("user");
        setScore((prevState) => prevState + 1);
      }
    }
  };

  const handleNewGameButton = () => {
    setHouseChoice(null);
    setUserChoice(null);
    setCounter(0);
    setOutcome(null);
  };

  useEffect(() => {
    if (!counter) {
      determineOutcome();
      return;
    }
    const count = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(count);
  }, [counter]);

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
                  <SignButtons
                    pressable={false}
                    type={userChoice}
                    winning={outcome === "user" ? true : false}
                  />
                </div>
              </div>
              <div className="middle-ground">
                {counter > 0 ? (
                  <h2>{counter}</h2>
                ) : (
                  <>
                    <h2>{outcome === "user" && "You win"} </h2>
                    <h2>{outcome === "house" && "You lose"} </h2>
                    <h2>{outcome === "draw" && "It'a a draw"} </h2>
                    <button
                      onClick={handleNewGameButton}
                      className="new-game-btn"
                    >
                      New game
                    </button>
                  </>
                )}
              </div>
              <div className="right-compare">
                <div className="centering-div">
                  <h1>The house picked</h1>
                  {counter === 0 && houseChoice ? (
                    <SignButtons
                      pressable={false}
                      type={houseChoice}
                      winning={outcome === "house" ? true : false}
                    />
                  ) : (
                    <div className="grey-cicle" />
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
                  winning={false}
                />
                <SignButtons
                  pressable={true}
                  type="scissors"
                  onClick={handleButtonClick}
                  winning={false}
                />
              </div>
              <div className="lower-row">
                <SignButtons
                  pressable={true}
                  type="rock"
                  onClick={handleButtonClick}
                  winning={false}
                />
              </div>
              <img id="triangle" src={Triangle} alt="" />
            </>
          )}
        </div>
      </div>

      <button className="rules">Rules</button>
    </div>
  );
}

export default App;
