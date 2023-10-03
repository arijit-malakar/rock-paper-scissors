import { useState } from "react";
import "./App.css";
import bgTriangle from "./assets/images/bg-triangle.svg";
import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";
import Header from "./components/Header";
import { calculateScore, generateHouseOutcome } from "./utils/helper";
import GameButton from "./components/GameButton";
import Modal from "./components/Modal";

function App() {
  const options = ["rock", "paper", "scissors"];
  const [showModal, setShowModal] = useState(false);
  const [hand, setHand] = useState("");
  const [houseHand, setHouseHand] = useState("");
  const [score, setScore] = useState(0);
  const [gameResult, setGameResult] = useState("");
  const isPlaying = hand ? true : false;

  function handleSelectedHand(value: string) {
    const newHouseHand = generateHouseOutcome(options);

    let newScore = score;

    const { score: scoreToUpdate, result } = calculateScore(
      value,
      newHouseHand
    );
    newScore += scoreToUpdate;

    setHand(value);
    setHouseHand(newHouseHand);
    setScore(newScore);
    setGameResult(result);
  }

  function handlePlayAgain() {
    setHand("");
    setHouseHand("");
    setGameResult("");
  }

  return (
    <div>
      <Header score={score} />
      <main>
        <div className="game-content">
          {!isPlaying ? (
            <>
              <img className="bg-game" src={bgTriangle} alt="bg-triangle" />
              {options.map((option: string) => (
                <GameButton
                  name={option}
                  key={option}
                  onClick={() => handleSelectedHand(option)}
                >
                  <img
                    className={option}
                    src={
                      option === "paper"
                        ? paper
                        : option === "rock"
                        ? rock
                        : scissors
                    }
                    alt={`${option}-icon`}
                  />
                </GameButton>
              ))}
            </>
          ) : (
            <div className="game-status">
              {[hand, houseHand].map((player, index) => (
                <div className="hand-selected" key={index}>
                  <p>{index === 0 ? "You picked" : "The house picked"}</p>
                  <GameButton
                    name={player}
                    large
                    win={
                      gameResult === "win" && index === 0
                        ? true
                        : gameResult === "lose" && index === 1
                    }
                  >
                    <img
                      className={player}
                      src={
                        player === "paper"
                          ? paper
                          : player === "rock"
                          ? rock
                          : scissors
                      }
                      alt={`${player}-icon`}
                    />
                  </GameButton>
                </div>
              ))}
              <div className="game-result">
                <p className="result-text">You {gameResult}</p>
                <button
                  className={`btn-primary ${gameResult}`}
                  onClick={handlePlayAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
        <button className="btn-outline" onClick={() => setShowModal(true)}>
          Rules
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </main>
    </div>
  );
}

export default App;
