import logo from "../assets/images/logo.svg";

function Header({ score }: { score: number }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" height={85} />
      </div>
      <div className="score">
        <p className="score-text">Score</p>
        <p className="score-value">{score}</p>
      </div>
    </header>
  );
}

export default Header;
