import React, { useState } from 'react';

const Quiz = ({ data, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onSubmit(selectedOption); // Pass selected answer back
  };

  return (
    <div className="quiz-container">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;