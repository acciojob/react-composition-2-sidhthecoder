import React, { useState } from 'react';
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  const[show,setShow]=useState(false);
  return (
    <div>
      <button className='btn' onClick={()=>setShow(true)}>Show Modal</button>
      <Modal visible={show} onClose={()=>setShow(false)} children={<p className='model-p'>This is the content of the modal.</p>}/>
    </div>
  )
}

export default App