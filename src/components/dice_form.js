import React from 'react';
import { diceImages } from './dice_images';

const DiceForm = function(setDropdown, count, value, setCount, setValue, fillColor, lineColor) {
  return (
    <div className='customForm'>
      <div onClick={() => setDropdown(true)}>
        <div className='diceIconMed' >
          {diceImages['custom'](fillColor, lineColor)}
        </div>
      </div>
      <div className='inputFields'>
        <input
          value={count}
          onChange={e => { setCount(e.target.value) }}>
        </input>
        D
        <input
          value={value}
          onChange={e => { setValue(e.target.value) }}>
        </input>
      </div>
    </div>
  )
}

export default DiceForm;
