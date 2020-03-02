import React, { useState, useEffect } from "react";
import axios from "axios";

function LeaderList({ leader }) {
  console.log(leader);
  return (
    <div
      style={{
        borderBottom: "1px solid purple",
        display: "grid",
        gridTemplateColumns: "50% auto auto",
        width: "650px",
        margin: "0 auto",
        padding: "8px 0",
        fontFamily: "Major Mono Display"
      }}
    >
      <span
        style={{
          textAlign: "left",
          marginLeft: "15px",
          fontWeight: "bold"
        }}
      >
        {leader.username}
      </span>
      <span style={{ textAlign: "center" }}>{leader.honey}</span>
      <span style={{ textAlign: "center" }}>{leader.xp}</span>
    </div>
  );
}

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get("https://space-ryders-be.herokuapp.com/api/adv/say/")
      // .get("https://mudierthegame.herokuapp.com/api/adv/leaderboard")
      //.get("https://lambda-mud-test.herokuapp.com/")
      .then(res => {
        console.log("res:", res.data.topPlayers);
        setLeaders(res.data.topPlayers);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% auto auto",
          width: "650px",
          margin: "20px auto",
          padding: "5px 0",
          fontWeight: "bold",
          fontSize: "20px",
          color: "purple",
          background: "black"
        }}
      >
        <span style={{ textAlign: "left", marginLeft: "15px" }}>SUCKER</span>
        <span style={{ textAlign: "center" }}>DUN</span>
        <span style={{ textAlign: "center" }}>XP</span>
      </div>
      {leaders.map((leader, index) => {
        return <LeaderList leader={leader} key={index} />;
      })}
    </div>
  );
}

export default Leaderboard;
