import React from 'react';
import './BuyNowModal.css';

function BuyNowModal({ course, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Purchase Successful 🎉</h2>
        <p>You've successfully purchased <strong>{course.title}</strong>.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default BuyNowModal;
