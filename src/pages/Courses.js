import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../data/courses';
import { CartContext } from '../context/CartContext';
import BuyNowModal from '../components/BuyNowModal';
import { motion } from 'framer-motion';
import './Courses.css';

function Courses() {
  const { addToCart } = useContext(CartContext);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleBuyNow = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <motion.div
      className="courses-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Our Coding Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="price">₹{course.price}</p>
            <div className="buttons" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => addToCart(course)}>Add to Cart</button>
              <button onClick={() => handleBuyNow(course)} className="buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <BuyNowModal course={selectedCourse} onClose={closeModal} />
      )}
    </motion.div>
  );
}

export default Courses;
