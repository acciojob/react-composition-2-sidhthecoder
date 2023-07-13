import React from 'react';
import '../styles/App.css'
const Modal = ({ show, onClose}) => {
  

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
      <p>This is the content of the modal.</p>
    </div>
  );
};

export default Modal;