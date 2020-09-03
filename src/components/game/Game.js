import React, { Component } from "react";
import Team from "../team/Team";

import Scoreboard from "../scoreboard/Scoreboard";
import shotSound from "./Audio/Ball+Hit+Cheer.mp3";
import scoreSound from "./Audio/woodbat.mp3";
// import logoSrc from "../../App";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };
    this.shotSound = new Audio(shotSound);
    this.scoreSound = new Audio(scoreSound);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;
      setTimeout(() => {
        this.scoreSound.play();
      }, 500);
    }
    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };
  render() {
    return (
      <div className="Game">
        <Scoreboard
          homeTeamStats={this.state.homeTeamStats}
          visitingTeamStats={this.state.visitingTeamStats}
        />
        <h2>Welcome to {this.props.venue}</h2>
        <div className="stats">
          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />

          <div className="versus">
            <h1>VS</h1>
            <div>
              <strong>Resets: </strong> {this.state.resetCount}
              <button onClick={this.resetGame}>Reset Game</button>
            </div>
          </div>
          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shoot("visiting")}
          />
        </div>
      </div>
    );
  }
}

export default Game;
