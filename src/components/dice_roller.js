import React, { useState } from 'react';
import './dice_roller.css';
import { diceImages } from './dice_images';


function DiceRoller() {
  const [diceCount, setDiceCount] = useState(2);
  const [diceValue, setDiceValue] = useState(6);
  const [diceImage, setDiceImage] = useState('2d6');
  const [rollValue, setRollValue] = useState(0);
  const [rollSummary, setRollSummary] = useState('');

  const [explodes, setExplodes] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  // const diceImages = {
  //   '1d6': icon1d6,
  //   '2d6': icon1d6,
  // };

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

  const dropDownMenu = (
    <div>
      <button
        className='dice-option'
        onClick={() => setDiceRoller(1, 6, '1d6')}>
          <img className='dice-icon' src={diceImages['1d6']} />
      </button>
      <button
        className='dice-option'
        onClick={() => setDiceRoller(2, 6, '2d6')}>
        <img className='dice-icon' src={diceImages['2d6']} />
      </button>
    </div>
  )

  let bool = explodes ? 'on' : 'off';

  return (
    <div>
      <div className='dice-roller'>
        <div
          className='roll-btn'
          onClick={() => rollDice()}>
          ROLL
        </div>
        <div className='dice-selection'>
          <img className='dice-icon' src={diceImages[diceImage]} />
        </div>
        <div
          className='dice-explodes'
          onClick={() => setExplodes(!explodes)}>
          {bool}
        </div>
        <div className='dice-summary'>
          <h3 className='dice-rolls'>{rollSummary}</h3>
          <h2 className='dice-total'>{rollValue}</h2>
        </div>
      </div>

      {dropDownMenu}
    </div>
  );
}

export default DiceRoller;
