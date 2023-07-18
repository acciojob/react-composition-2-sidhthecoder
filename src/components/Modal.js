import React, { useEffect } from 'react';

function Modal({ show, onClose, children }) {
  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.modal-dialog')) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
