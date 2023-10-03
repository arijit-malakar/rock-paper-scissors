export function generateHouseOutcome(options: string[]): string {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const gameRules: { [key: string]: { win: string; lose: string } } = {
  paper: {
    win: "rock",
    lose: "scissors",
  },
  rock: {
    win: "scissors",
    lose: "paper",
  },
  scissors: {
    win: "paper",
    lose: "rock",
  },
};

export function calculateScore(
  userChoice: string,
  houseChoice: string
): { score: number; result: string } {
  let score = 0;
  let result = "";

  if (userChoice === houseChoice) result = "tie";
  else if (gameRules[userChoice].win === houseChoice) {
    score = 1;
    result = "win";
  } else {
    score = -1;
    result = "lose";
  }

  return { score, result };
}
