import React, { useState } from 'react';
import Modal from './Modal';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}/>


      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <h1>Show Modal</h1>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;