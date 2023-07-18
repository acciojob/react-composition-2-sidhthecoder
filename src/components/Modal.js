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

  return (
    show && (
        <div className="modal-dialog">
          <button className="modal-close" onClick={handleClose}>
          Close
          </button>
          {children}
        </div>
    )
  );
}

export default Modal;
