import React, { useState } from "react";
import "../components/design/game.css";

function App() {
  const quizzes = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
      answer: "William Shakespeare",
    },
  ];

  const [boxVisible, setBoxVisible] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizzes.length).fill(null)); // Track selected answers

  const handleBoxClick = () => {
    setBoxVisible(false);
  };

  const handleOptionClick = (index, option) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = option; // Set the selected option for the question
      return newAnswers;
    });
  };

  return (
    <div className="App h-screen flex items-center justify-center">
      {boxVisible ? (
        <div className="gift-box" onClick={handleBoxClick}>
          🎁 Tap Me!
        </div>
      ) : (
        <div className="quiz-cards">
          {quizzes.map((quiz, index) => (
            <div className="quiz-card" key={index}>
              <h3>{quiz.question}</h3>
              <div className="options">
                {quiz.options.map((option, i) => (
                  <button
                    key={i}
                    className={`option-button ${selectedAnswers[index] === option ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(index, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedAnswers[index] && (
                <p className="answer">
                  Answer: {selectedAnswers[index] === quiz.answer ? quiz.answer : "Incorrect! The correct answer is " + quiz.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
