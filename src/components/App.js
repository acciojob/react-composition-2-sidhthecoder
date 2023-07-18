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
      <button onClick={handleOpenModal}>Show Modal</button>
      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <p>This is the content of the modal.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
