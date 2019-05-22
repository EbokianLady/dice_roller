import React, { useState } from 'react';
import './dice_roller.css';
import DiceButton from './dice_button';
import { diceImages } from './dice_images';

function DiceRoller() {
  const [diceCount, setDiceCount] = useState(2);
  const [diceValue, setDiceValue] = useState(6);
  const [diceImage, setDiceImage] = useState('2d6');
  const [rollValue, setRollValue] = useState(0);
  const [rollSummary, setRollSummary] = useState('');

  const [explodes, setExplodes] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  let bool = explodes ? 'on' : 'off';
  let dropdownStyle = dropdown ? {} : {display: 'none'};

  const setDiceRoller = function(count, value, image) {
    setDiceCount(count);
    setDiceValue(value);
    setDiceImage(image);
  };

  const rollDice = function() {
    let str = '';
    let total = 0;
    let random;

    for (let i = 0; i < diceCount; i++) {
      random = Math.floor(Math.random() * (diceValue)) + 1;
      str += ` + ${random}`;
      total += random;
    }

    str += ' =';

    setRollSummary(str.slice(3));
    setRollValue(total);
  };

  const dropdownMenu = (
    <div
      className='dropdownMenu'
      style={dropdownStyle}>
        {DiceButton(setDiceRoller, 1, 4, '1d4')}
        {DiceButton(setDiceRoller, 1, 6, '1d6')}
        {DiceButton(setDiceRoller, 2, 6, '2d6')}
        {DiceButton(setDiceRoller, 1, 8, '1d8')}
        {DiceButton(setDiceRoller, 1, 10, '1d10')}
        {DiceButton(setDiceRoller, 1, 100, '2d10')}
        {DiceButton(setDiceRoller, 1, 12, '1d12')}
        {DiceButton(setDiceRoller, 1, 20, '1d20')}
    </div>
  )


  return (
    <div className='diceRoller'>
      <div className='controlPanel'>
        <div
          className='rollButton'
          onClick={() => rollDice()}>
          ROLL
        </div>
        <div className='diceTotal'>
          {rollValue}
        </div>
      </div>

      <div className='diceSelection'
        onClick={() => setDropdown(!dropdown)}>
        <img className='diceIcon' src={diceImages[diceImage]} />
        {dropdownMenu}
      </div>

      {/* <div
        className='diceExplodes'
        onClick={() => setExplodes(!explodes)}>
        {bool}
      </div> */}

    </div>
  );
}

export default DiceRoller;
