import React from 'react';
import { diceImages } from './dice_images';

const DiceButton = function(setChoice, count, value, image) {
  return (
    <button
      onClick={() => setChoice(count, value, image)}>
      <img className='diceIconSmall' src={diceImages[image]} />
    </button>
  )
}

export default DiceButton;
