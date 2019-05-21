import React, { useState } from 'react';

function DiceRoller() {
  const [diceCount, setDiceCount] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
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
      <p>{diceCount} D {diceValue}</p>
      <button onClick={() => rollDice()}>
        ROLL
      </button>
      <p>{rollSummary} = {rollValue}</p>

      <p>Explodes is {bool}</p>
      <button onClick={() => setExplodes(!explodes)}>
        Click me
      </button>

      {dropDownMenu}
    </div>
  );
}

export default DiceRoller;
