import React, { useState } from 'react';

function DiceRoller() {
  const [diceCount, setDiceCount] = useState(2);
  const [diceValue, setDiceValue] = useState(6);
  const [rollValue, setRollValue] = useState(0);
  const [rollSummary, setRollSummary] = useState('');

  const [explodes, setExplodes] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const setDiceRoller = function(count, value) {
    setDiceCount(count);
    setDiceValue(value);
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

    setRollSummary(str.slice(3));
    setRollValue(total);
  };

  const dropDownMenu = (
    <div>
      <button
        className='dice-option'
        onClick={() => setDiceRoller(1, 4)}>
          1d4
      </button>
      <button
        className='dice-option'
        onClick={() => setDiceRoller(1, 6)}>
          1d6
      </button>
      <button
        className='dice-option'
        onClick={() => setDiceRoller(2, 6)}>
          2d6
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
          {diceCount}D{diceValue}
        </div>
        <button onClick={() => setExplodes(!explodes)}>
          {bool}
        </button>
        <div className='dice-summary'>
          <h3>{rollSummary}</h3>
          <h4>=</h4>
          <h2>{rollValue}</h2>
        </div>
      </div>

      {dropDownMenu}
    </div>
  );
}

export default DiceRoller;
