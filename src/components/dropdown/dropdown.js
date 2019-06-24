import React from 'react';
import diceIcons from '../dice_icons';
import './dropdown.css';

const DiceDropdown = function (setDiceRoller, setCustomDiceRoller, { dice, dropdownPanel }) {
  return (
    <div
      className='dropdownMenu'
      style={dropdownPanel} >
      {DiceButton(setDiceRoller, 1, 4, '1d4', dice)}
      {DiceButton(setDiceRoller, 1, 6, '1d6', dice)}
      {DiceButton(setDiceRoller, 2, 6, '2d6', dice)}
      {DiceButton(setDiceRoller, 1, 8, '1d8', dice)}
      {DiceButton(setDiceRoller, 1, 10, '1d10', dice)}
      {DiceButton(setDiceRoller, 1, 100, '2d10', dice)}
      {DiceButton(setDiceRoller, 1, 12, '1d12', dice)}
      {DiceButton(setDiceRoller, 1, 20, '1d20', dice)}
      <button
        className='diceButton'
        onClick={() => setCustomDiceRoller()}>
        <div className='diceIconSmall' >
          {diceIcons(dice, 'custom')}
        </div>
      </button>
    </div>
  )
}

const DiceButton = function (setChoice, count, value, image, diceStyle) {
  return (
    <button
      className='diceButton'
      onClick={() => setChoice(count, value, image)}>
      <div className='diceIconSmall' >
        {diceIcons(diceStyle, image)}
      </div>
    </button>
  )
}

export default DiceDropdown;
