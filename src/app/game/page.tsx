"use client";
import { useEffect, useState, useCallback } from "react";
import { gameData } from "../data/questions";
import styles from "./styles.module.css";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [message, setMessage] = useState("");

  const questions = gameData.questions;
  const lastQuestion = currentIndex === questions.length - 1;
  const answered = message !== "";

  useEffect(() => {
    if (timer > 0 && !answered) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !answered) {
      setMessage("Time's up!");
    }
  }, [timer, answered]);

  const handleGuess = useCallback(
    (option: string) => {
      setTimer(0);
      const isCorrect = option === questions[currentIndex].answer;
      setMessage(isCorrect ? "Correct answer!" : "Wrong answer!");
      if (isCorrect) setScore((prev) => prev + 1);
    },
    [currentIndex, questions]
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
    setMessage("");
    setTimer(10);
  }, []);

  const handleResetGame = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setMessage("");
    setTimer(10);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.timer}>Time: 0:{timer} Seconds</span>
        <span className={styles.score}>
          Score: {score} / {questions.length}
        </span>
      </div>
      <p className={styles.question}>{questions[currentIndex].question}</p>
      <div className={styles.options}>
        {questions[currentIndex].options.map((option) => (
          <button
            key={option}
            className={`${styles.option} ${
              answered && option === questions[currentIndex].answer
                ? styles.correct
                : answered
                ? styles.wrong
                : ""
            }`}
            onClick={() => handleGuess(option)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {answered && <p className={styles.message}>{message}</p>}
        {answered && !lastQuestion && (
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
      {lastQuestion && (
        <dialog className={styles.dialog} open>
          <h1>Game Over</h1>
          <p>
            Your final score is {score} / {questions.length}
          </p>
          <button onClick={handleResetGame} className={styles.tryAgainButton}>
            Play Again
          </button>
        </dialog>
      )}
    </div>
  );
}
