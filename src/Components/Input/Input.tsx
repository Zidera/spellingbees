import  React, { useState } from 'react';
import { checkingWord } from '../../Features/checkingWord';
import './input.css'



const Input : React.FC = (props) => {
  const [value,setInput] = useState('')

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    checkingWord(event, value.toUpperCase());
    
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  return (
    <div className='input-messages'>
      <p className="invisible" id="short">Too Short</p>
      <p className="invisible" id="missing">Missing main Letter</p>
      <p className="invisible" id="dexist">Doesn't exist</p>
      <p className="invisible" id="nice">Nice!!!</p>
      <input 
        autoFocus 
        type="text" 
        className='word-input' 
        onChange={handleChange} 
        onKeyUp={handleKeyUp} 
        value={value} />
    </div>
  );
}

export default Input;
