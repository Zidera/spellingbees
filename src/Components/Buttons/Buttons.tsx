import * as React from 'react';
import './Buttons.css'

const Buttons: React.FC = () =>{
  return (
    <div className='three-buttons'>
      <button>Delete</button>
      <button>Shuffle</button>
      <button>Enter</button>  
    </div>
    
  )
}

export default Buttons