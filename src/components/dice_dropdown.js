import React from 'react';
import { diceImages } from './dice_images';

const DiceDropdown = function (setDiceRoller, setCustomDiceRoller, fillColor='#FFF', lineColor='#000') {
  return (
    <div
      className='dropdownMenu'>
      {DiceButton(setDiceRoller, 1, 4, '1d4', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 6, '1d6', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 2, 6, '2d6', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 8, '1d8', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 10, '1d10', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 100, '2d10', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 12, '1d12', fillColor, lineColor)}
      {DiceButton(setDiceRoller, 1, 20, '1d20', fillColor, lineColor)}
      <button
        onClick={() => setCustomDiceRoller()}>
        <div className='diceIconSmall' >
          {diceImages['custom'](fillColor, lineColor)}
        </div>
      </button>
    </div>
  )
}

const DiceButton = function (setChoice, count, value, image, fillColor, lineColor) {
  return (
    <button
      onClick={() => setChoice(count, value, image)}>
      <div className='diceIconSmall' >
        {diceImages[image](fillColor, lineColor)}
      </div>
    </button>
  )
}

export default DiceDropdown;
