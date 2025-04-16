import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from '../data/quizzes';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './QuizDetail.css';

function QuizDetail() {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);
    const correct = quiz.questions[current].correctAnswer;
    if (option === correct) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (current + 1 < quiz.questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (!quiz) return <p>Quiz not found</p>;

  return (
    <motion.div
      className="quiz-detail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{quiz.title}</h2>
      {showResult ? (
        <div className="quiz-result">
          <Confetti />
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} / {quiz.questions.length}</p>
        </div>
      ) : (
        <div className="question-box">
          <h4>Q{current + 1}: {quiz.questions[current].question}</h4>
          <div className="options">
            {quiz.questions[current].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selected === option ? 'selected' : ''}`}
                onClick={() => handleAnswer(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default QuizDetail;
