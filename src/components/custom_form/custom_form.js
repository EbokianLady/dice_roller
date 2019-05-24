import React from 'react';
import { diceImages } from '../dice_icons';
import './custom_form.css';

const DiceForm = function(setDropdown, count, value, setCount, setValue, palette) {
  return (
    <div className='customForm'>
      <div onClick={() => setDropdown(true)}>
        <div className='diceIconMed' >
          {diceImages['custom'](palette.dice)}
        </div>
      </div>
      <div
        className='inputFields'
        style={{color: palette.dice.lineColor}}>
        <input style={palette.textFields}
          value={count}
          onChange={e => { setCount(e.target.value) }}>
        </input>
        D
        <input style={palette.textFields}
          value={value}
          onChange={e => { setValue(e.target.value) }}>
        </input>
      </div>
    </div>
  )
}

export default DiceForm;
