"use client";
import { useState } from "react";
import { gameData } from "../data/questions";
import styles from "./styles.module.css";

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const questions = gameData.questions;

  const handleGuess = (option: string) => {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
      alert("Correct!");
      setShowNextButton(true);
    } else {
      alert("Wrong!");
      setShowNextButton(true);
    }
    if (currentIndex === questions.length - 1) {
      alert(`Game over! Your score is ${score}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game</h1>
      <span className={styles.score}>
        {score} Question corrects out of {questions.length}
      </span>
      <p className={styles.question}>
        {questions[currentIndex].type === "framework"
          ? "Framework"
          : "CSS Library"}
      </p>
      <p className={styles.question}>{questions[currentIndex].question}</p>
      <div className={styles.options}>
        {questions[currentIndex].options.map((option) => (
          <button
            key={option}
            className={styles.option}
            onClick={() => handleGuess(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {showNextButton === true && (
        <button
          className={styles.nextButton}
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
            setShowNextButton(false);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
