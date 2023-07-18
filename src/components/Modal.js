import React from 'react';

function Modal({ show, onClose, children }) {
  const handleClose = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
  );
}

export default Modal;
