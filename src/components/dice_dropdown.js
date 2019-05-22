import React from 'react';
import { diceImages } from './dice_images';
import DiceButton from './dice_button';

const DiceDropdown = function (setDiceRoller, setCustomDiceRoller) {
  return (
    <div
      className='dropdownMenu'>
      {DiceButton(setDiceRoller, 1, 4, '1d4')}
      {DiceButton(setDiceRoller, 1, 6, '1d6')}
      {DiceButton(setDiceRoller, 2, 6, '2d6')}
      {DiceButton(setDiceRoller, 1, 8, '1d8')}
      {DiceButton(setDiceRoller, 1, 10, '1d10')}
      {DiceButton(setDiceRoller, 1, 100, '2d10')}
      {DiceButton(setDiceRoller, 1, 12, '1d12')}
      {DiceButton(setDiceRoller, 1, 20, '1d20')}
      <button
        onClick={() => setCustomDiceRoller()}>
        <img className='diceIconSmall' src={diceImages['custom']} />
      </button>
    </div>
  )
}

export default DiceDropdown;
