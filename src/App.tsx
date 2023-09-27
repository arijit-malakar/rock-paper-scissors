import { useState } from "react";
import "./App.css";
import bgTriangle from "./assets/images/bg-triangle.svg";
import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";
import Header from "./components/Header";
import { generateHouseOutcome } from "./utils/helper";

function App() {
  const options = ["rock", "paper", "scissors"];
  const [hand, setHand] = useState("");
  const [houseHand, setHouseHand] = useState("");
  const [score, setScore] = useState(0);
  const isPlaying = hand ? true : false;

  function handleSelectedHand(value: string) {
    const newHouseHand = generateHouseOutcome(options);

    let newScore = score;
    switch (value) {
      case "paper":
        if (newHouseHand === "rock") newScore += 1;
        if (newHouseHand === "scissors") newScore -= 1;
        break;
      case "rock":
        if (newHouseHand === "paper") newScore -= 1;
        if (newHouseHand === "scissors") newScore += 1;
        break;
      case "scissors":
        if (newHouseHand === "paper") newScore += 1;
        if (newHouseHand === "rock") newScore -= 1;
        break;
      default:
        break;
    }

    setHand(value);
    setHouseHand(newHouseHand);
    setScore(newScore);
  }

  return (
    <div>
      <Header score={score} />
      <main>
        <div className="game-content">
          {!isPlaying ? (
            <>
              <img className="bg-game" src={bgTriangle} alt="bg-triangle" />
              <button
                onClick={() => handleSelectedHand("paper")}
                className="btn-round btn-paper border-gradient"
              >
                <img className="paper" src={paper} alt="paper-icon" />
              </button>
              <button
                onClick={() => handleSelectedHand("scissors")}
                className="btn-round btn-scissors"
              >
                <img className="scissors" src={scissors} alt="scissors-icon" />
              </button>
              <button
                onClick={() => handleSelectedHand("rock")}
                className="btn-round btn-rock"
              >
                <img className="rock" src={rock} alt="rock-icon" />
              </button>
            </>
          ) : (
            <>
              <p>User selected: {hand}</p>
              <p>The house selected: {houseHand}</p>
              <p>Score: {score}</p>
              <button onClick={() => setHand("")}>Play Again</button>
            </>
          )}
        </div>
        <button className="btn-outline">Rules</button>
      </main>
    </div>
  );
}

export default App;
