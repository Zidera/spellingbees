import * as React from 'react';
import { generateLetters } from '../../Features/generateLetters';
import Buttons from '../Buttons/Buttons';
import Input from '../Input/Input';
import './Gameboard.css'

const GameBoard: React.FC = () => {
  const letters = generateLetters();

  return (
    <div className='gameboard'>
      <Input />
      <div className='honeycomb'>
        {letters.map((letter) => (
          <div key={letter} className='hexagon'><span>{letter.toUpperCase()}</span></div>
          
        ))}
      </div>
      <Buttons/>
    </div>

  );

};

export default GameBoard; 

