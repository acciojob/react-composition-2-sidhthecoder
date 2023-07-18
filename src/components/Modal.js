import React from 'react'

const Modal = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'onClick={onClose}>
        <div className="model-content">
          <button className="model-close">Close</button>
          {children}
        </div>
    </div>
  )
}

export default Modal