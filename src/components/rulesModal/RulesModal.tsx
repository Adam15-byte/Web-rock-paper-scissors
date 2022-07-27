import React from "react";
import "./RulesModal.css";
import Rules from "../../assets/image-rules.svg";
import Close from "../../assets/icon-close.svg";

const RulesModal = () => {
  return (
    <div className="container">
      <div className="white-container">
        <h1>Rules</h1>
        <img src={Rules} alt="" className="rules-image" />
        <img src={Close} alt="" className="close-icon" />
      </div>
    </div>
  );
};

export default RulesModal;
