import React from "react";

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <h1>SCOREBOARD</h1>
      <div className="scoreboardStats">
        <div className="teamStats">
          <h3>HOME</h3>
          <h3>{props.homeTeamStats.score}</h3>
        </div>

        <div className="teamStats">
          <h3>VISITORS</h3>
          <h3>{props.visitingTeamStats.score}</h3>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
