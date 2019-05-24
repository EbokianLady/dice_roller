import React from 'react';
import { diceImages } from './dice_images';

const DiceDropdown = function (setDiceRoller, setCustomDiceRoller, diceStyle) {
  const { fillColor, lineColor } = diceStyle.fillColor;
  return (
    <div
      className='dropdownMenu'>
      {DiceButton(setDiceRoller, 1, 4, '1d4', diceStyle)}
      {DiceButton(setDiceRoller, 1, 6, '1d6', diceStyle)}
      {DiceButton(setDiceRoller, 2, 6, '2d6', diceStyle)}
      {DiceButton(setDiceRoller, 1, 8, '1d8', diceStyle)}
      {DiceButton(setDiceRoller, 1, 10, '1d10', diceStyle)}
      {DiceButton(setDiceRoller, 1, 100, '2d10', diceStyle)}
      {DiceButton(setDiceRoller, 1, 12, '1d12', diceStyle)}
      {DiceButton(setDiceRoller, 1, 20, '1d20', diceStyle)}
      <button
        onClick={() => setCustomDiceRoller()}>
        <div className='diceIconSmall' >
          {diceImages['custom'](fillColor, lineColor)}
        </div>
      </button>
    </div>
  )
}

const DiceButton = function (setChoice, count, value, image, diceStyle) {
  const { fillColor, lineColor } = diceStyle.fillColor;
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
