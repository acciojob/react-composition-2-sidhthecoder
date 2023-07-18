import React from 'react'

const Modal = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='modal-overlay'onClick={onClose}>
        <div className="modal-content">
          <button className="modal-close">Close</button>
          <p className="modal-p">{children}</p>
        </div>
    </div>
  )
}

export default Modal