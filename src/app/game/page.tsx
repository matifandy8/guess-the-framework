"use client";
import { useEffect, useState } from "react";
import { gameData } from "../data/questions";
import styles from "./styles.module.css";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer > 0 && !answered) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !answered) {
      setAnswered(true);
    }
  }, [timer, answered]);

  const questions = gameData.questions;

  const lastQuestion = currentIndex === questions.length - 1;

  const handleGuess = (option: string) => {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
      setAnswered(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setAnswered(false);
    setTimer(10);
  };

  const handleResetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setTimer(10);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game</h1>
      <span className={styles.timer}>Time: {timer}</span>
      <span className={styles.score}>
        {score} Question corrects out of {questions.length}
      </span>
      <p className={styles.question}>{questions[currentIndex].question}</p>
      <div className={styles.options}>
        {questions[currentIndex].options.map((option) => (
          <button
            key={option}
            className={`${styles.option} ${
              answered
                ? option === questions[currentIndex].answer
                  ? styles.correct
                  : styles.wrong
                : ""
            }`}
            onClick={() => handleGuess(option)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
      {answered && (
        <button
          className={lastQuestion ? styles.tryagainButton : styles.nextButton}
          onClick={lastQuestion ? handleResetGame : handleNext}
        >
          {lastQuestion ? "Try Again" : "Next"}
        </button>
      )}
    </div>
  );
}
