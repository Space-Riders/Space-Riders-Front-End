import React from "react";

function SideBar(props) {
  console.log('SIDEBAR PROPS', props)
  return (
    <div style={{ background: "#000", borderRadius: "0 10px 0 0", marginTop: '10px' }}>
      <p style={{ color: "#F89500" }}>Freedom Fighter in the room:</p>
      <ul
        style={{
          listStyleType: "none",
          padding: "0 20px 0 30px"
        }}
      >
        {props.currentRoom.players.length > 0 ? (
          props.currentRoom.players.map((player, index) => {
            return <li key={index}>{player}</li>;
          })
        ) : (
          <li
            style={{
              textAlign: "start"
            }}
          >
            None
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
