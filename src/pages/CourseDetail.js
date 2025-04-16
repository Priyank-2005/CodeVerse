import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import { CartContext } from '../context/CartContext';
import BuyNowModal from '../components/BuyNowModal';
import { motion } from 'framer-motion';
import './CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) return <p>Course not found!</p>;

  return (
    <motion.div
      className="course-detail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="detail-image" />
      <p className="price"><strong>Price:</strong> ₹{course.price}</p>

      <div className="extra-info">
        <p><strong>Duration:</strong> {course.duration || '4 weeks'}</p>
        <p><strong>Difficulty:</strong> {course.level || 'Beginner'}</p>
        <p><strong>Instructor:</strong> {course.instructor || 'CodeVerse Team'}</p>
      </div>

      <div className="learning-section">
        <h4>What you'll learn</h4>
        <ul>
          {course.outcomes?.length > 0 ? (
            course.outcomes.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>Understand the fundamentals and build real-world projects.</li>
          )}
        </ul>
      </div>

      <div className="detail-buttons">
        <button onClick={() => addToCart(course)}>Add to Cart</button>
        <button onClick={() => setShowModal(true)} className="buy-now">Buy Now</button>
      </div>

      {showModal && <BuyNowModal course={course} onClose={() => setShowModal(false)} />}
    </motion.div>
  );
}

export default CourseDetail;
