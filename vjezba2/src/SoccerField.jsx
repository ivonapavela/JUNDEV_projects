import React from "react";
import "./SoccerField.css"; 

import SoccerFieldImage from "./assets/soccerField.png";
import Shirt from "./assets/shirt.png";

const SoccerField = ({firstPlayers}) => {
  const shirtPositions = [
    { top: 20, left: 200 },
    { top: 150, left: 0 },
    { top: 150, left: 130 },
    { top: 150, left: 260 },
    { top: 150, left: 390 },
    { top: 300, left: 50 },
    { top: 300, left: 200 },
    { top: 300, left: 350 },
    { top: 450, left: 50 },
    { top: 450, left: 200 },
    { top: 450, left: 350 },
  ];


  return (
    <div className="soccer-field-container">
      <img src={SoccerFieldImage} alt={"Soccer field"} className="soccer-field" />
      {shirtPositions.map((position, index) => (
        <img
          key={index}
          src={Shirt}
          alt={`Shirt ${index}`}
          className="shirt"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        />
      ))}
      {firstPlayers && firstPlayers.map((player, index) => (
            <div key = {index} className = "player" style={{ top: `${shirtPositions[index].top}px`, left: `${shirtPositions[index].left}px` }}>{player}</div>
            ))}
    </div>
  );
};

export default SoccerField;
