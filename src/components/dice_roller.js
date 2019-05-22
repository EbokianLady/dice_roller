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
  const [summary, setSummary] = useState(false);

  let bool = explodes ? 'on' : 'off';
  let dropdownStyle = dropdown ? {} : {display: 'none'};
  let summaryStyle = summary ? {} : {display: 'none'};

  const setDiceRoller = function(count, value, image) {
    setDiceCount(count);
    setDiceValue(value);
    setDiceImage(image);
    setRollValue(0);
    setRollSummary('');
  };

  const setSummaryConditional = function () {
    if (rollSummary !== '') setSummary(true);
  };

  const rollDice = function() {
    let str = '';
    let total = 0;
    let random;

    for (let i = 0; i < diceCount; i++) {
      let result = rollSingleDie();
      str += ` + ${result[0]}`;
      total += result[1];
    }

    setRollSummary(str.slice(3));
    setRollValue(total);
  };

  const rollSingleDie = function() {
    let total = Math.floor(Math.random() * (diceValue)) + 1;
    let str;
    let bonus;

    if (explodes && total === diceValue) {
      bonus = Math.floor(Math.random() * (diceValue)) + 1;
      str = `(${total} + ${bonus})`;
      total += bonus;
    } else {
      str = `${total}`;
    }

    return [str, total];
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
        <div className='diceTotal'
          onMouseOver={() => setSummaryConditional()}
          onMouseOut={() => setSummary(false)}>
          {rollValue}
          <div
            className='diceSummary'
            style={summaryStyle}>
            {rollSummary}
          </div>
        </div>
      </div>

      <div className='diceSelection'
        onClick={() => setDropdown(!dropdown)}>
        <img className='diceIcon' src={diceImages[diceImage]} />
        {dropdownMenu}
      </div>

      <div
        className='diceExplodes'
        onClick={() => setExplodes(!explodes)}>
        {bool}
      </div>

    </div>
  );
}

export default DiceRoller;
