import React from "react";
import "./App.css";
import Game from "./components/game/Game";

import Tifa from "./Images/Tifa.jpg;
import Cloud from "./Images/Cloud.jpg";
import Barrett from "./Images/Barrett.jpg";
import Cid from "./Images/Cid.jpg";

function App() {
  const tifa = {
    name: "Tifa",
    logoSrc: Tifa,
  };

  const cloud = {
    name: "Cloud",
    logoSrc: Cloud,
  };

  const barrett = {
    name: "Barrett",
    logoSrc: Barrett,
  };

  const cid = {
    name: "Cid",
    logoSrc: Cid,
  };
  return (
    <div className="App">
      <Game venue="Life Stream" homeTeam={Tifa} visitingTeam={Barrett} />
      <Game venue="Midgar Arena" homeTeam={Cloud} visitingTeam={Cid} />
    </div>
  );
}

export default App;
