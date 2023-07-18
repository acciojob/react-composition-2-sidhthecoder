import React from 'react'

const Model = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'onClick={onClose}>
        <div className="model-content">
          <button className="model-close">Close</button>
          <p className="model-p">{children}</p>
        </div>
    </div>
  )
}

export default Model