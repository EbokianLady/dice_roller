import React, { useState } from 'react';

function DiceRoller() {
  const [diceCount, setCount] = useState(0);
  const [diceValue, setValue] = useState(0);
  const [explodes, setExplodes] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const setDiceRoller = function(count, value) {
    setCount(count);
    setValue(value);
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
      <p>Explodes is {bool}</p>
      <button onClick={() => setExplodes(!explodes)}>
        Click me
      </button>

      {dropDownMenu}
    </div>
  );
}

export default DiceRoller;
