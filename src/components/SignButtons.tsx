import React from "react";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";
import Scissors from "../assets/icon-scissors.svg";
import "./SignButtons.css";

type Choice = "paper" | "rock" | "scissors";

interface Props {
  type: "paper" | "rock" | "scissors";
  onClick?: (arg: Choice) => void;
  pressable: boolean;
}

const SignButtons = (props: Props) => {
  const { type, onClick, pressable } = props;
  const paper: Choice = "paper";
  const rock: Choice = "rock";
  const scissors: Choice = "scissors";

  if (type === "paper") {
    return (
      <div
        className={pressable ? "paper-border pressable" : "paper-border"}
        onClick={() => {
          if (onClick) {
            onClick(paper);
          }
        }}
      >
        <div className="icon-white-bg">
          <img src={Paper} alt="Paper" className="paper icon-img" />
        </div>
      </div>
    );
  }
  if (type === "rock") {
    return (
      <div
        className={pressable ? "rock-border pressable" : "rock-border"}
        onClick={() => {
          if (onClick) {
            onClick(rock);
          }
        }}
      >
        <div className="icon-white-bg">
          <img src={Rock} alt="Rock" className="rock icon-img" />
        </div>
      </div>
    );
  }
  return (
    <div
      className={pressable ? "scissors-border pressable" : "scissors-border"}
      onClick={() => {
        if (onClick) {
          onClick(scissors);
        }
      }}
    >
      <div className="icon-white-bg">
        <img src={Scissors} alt="Scissors" className="scissors icon-img" />
      </div>
    </div>
  );
};

export default SignButtons;
