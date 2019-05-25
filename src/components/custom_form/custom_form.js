import React from 'react';
import diceIcons from '../dice_icons';
import './custom_form.css';

const DiceForm = function(setDropdown, count, value, setCount, setValue, palette) {
  return (
    <div className='customForm'>
      <div onClick={() => setDropdown(true)}>
        <div className='diceIconMed' >
          {diceIcons(palette.dice, 'custom')}
        </div>
      </div>
      <div
        className='inputFields'
        style={{color: palette.dice[0].lineColor}}>
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
