import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}/>
       
      
    </div>
  );
};

export default App;