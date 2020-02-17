//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [nextQuarter, setNextQuarter] = useState(1);

  function handleScore(teamName, scoreType) {
    const touchdown = 7;
    const fieldgoal = 3;

    if (teamName.toLowerCase() === "lions") {
      if (scoreType === "touchdown") {
        setHomeScore(homeScore + touchdown);
      }
      if(scoreType === "fieldgoal") {
        setHomeScore(homeScore + fieldgoal);
      }
    }
    if (teamName.toLowerCase() === "tigers"){
      if (scoreType === "touchdown") {
        setAwayScore(awayScore + touchdown);
      }
      if (scoreType === "fieldgoal"){
        setAwayScore(awayScore + fieldgoal);
      }
    }
  }

  return (
    <div className="container">

      <section className="scoreboard">

        <div className="topRow">

          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>

          <div className="timer">00:03</div>

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>

        </div>

        <BottomRow />

      </section>


      <section className="buttons">

        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => handleScore("Lions", "touchdown")}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handleScore("Lions", "fieldgoal")}>Home Field Goal</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handleScore("Tigers", "touchdown")}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handleScore("Tigers", "fieldgoal")}>Away Field Goal</button>
        </div>

      </section>

    </div>


  );
}

export default App;
