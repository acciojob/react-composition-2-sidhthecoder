import React from 'react';
import '../styles/App.css'

function Modal({ show, onClose, children }) {
  const handleClose = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
      <p>This is the content of the modal.</p>
      <div className="modal-dialog">
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;