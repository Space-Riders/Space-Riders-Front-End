import React from "react";
import mship from '../../assets/mship1.png';

function Player() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        width: "40px",
        margin: "5px",
        position: "absolute",
        left: "49%",
        top: "49%",
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img 
      src={mship}
      alt="mship"
      />
    </div>
  );
}

export default Player;
