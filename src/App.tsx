import "./App.css";
import logo from "./assets/images/logo.svg";
import bgTriangle from "./assets/images/bg-triangle.svg";
import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import scissors from "./assets/images/icon-scissors.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" height={85} />
        </div>
        <div className="score">
          <p className="score-text">Score</p>
          <p className="score-value">12</p>
        </div>
      </header>
      <main>
        <div className="game-content">
          <img className="bg-game" src={bgTriangle} alt="bg-triangle" />
          <button className="btn-round btn-paper border-gradient">
            <img className="paper" src={paper} alt="paper-icon" />
          </button>
          <button className="btn-round btn-scissors">
            <img className="scissors" src={scissors} alt="scissors-icon" />
          </button>
          <button className="btn-round btn-rock">
            <img className="rock" src={rock} alt="rock-icon" />
          </button>
        </div>
        <button className="btn-outline">Rules</button>
      </main>
    </div>
  );
}

export default App;
