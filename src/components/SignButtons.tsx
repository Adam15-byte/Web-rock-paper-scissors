import React from "react";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";
import Scissors from "../assets/icon-scissors.svg";
import "./SignButtons.css";

interface Props {
  type: "paper" | "rock" | "scissors";
}

const SignButtons = (props: Props) => {
  const { type } = props;

  if (type === "paper") {
    return (
      <div className="paper-border">
        <div className="icon-white-bg">
          <img src={Paper} alt="Paper" className="paper icon-img" />
        </div>
      </div>
    );
  }
  if (type === "rock") {
    return (
      <div className="rock-border">
        <div className="icon-white-bg">
          <img src={Rock} alt="Rock" className="rock icon-img" />
        </div>
      </div>
    );
  }
  return (
    <div className="scissors-border">
      <div className="icon-white-bg">
        <img src={Scissors} alt="Scissors" className="scissors icon-img" />
      </div>
    </div>
  );
};

export default SignButtons;
