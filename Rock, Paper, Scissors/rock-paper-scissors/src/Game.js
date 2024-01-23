import React, { useState } from "react";
import styles from './Styles/Game.module.css';

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 className= {styles.mainHeader}>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            className={styles.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div className={styles.choiceStyle}>
            <span className={styles.emojiStyles}>{playerChoice.emoji}</span>
            <p className={styles.nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div className={styles.choiceStyle}>
            <span className={styles.emojiStyles}>{codeyChoice.emoji}</span>
            <p className={styles.nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 className={styles.resultStyle}>{result}</h2>
          <button onClick={resetGame} className={styles.button}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
