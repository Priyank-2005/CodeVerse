import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from '../data/quizzes';
import { motion } from 'framer-motion';
import './Quizzes.css';

function Quizzes() {
  return (
    <motion.div
      className="quizzes-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Interactive Quizzes</h2>
      <p>Boost your learning with these quick quizzes.</p>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <Link to={`/quizzes/${quiz.id}`} key={quiz.id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Quizzes;
