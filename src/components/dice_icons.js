import React from 'react';
import dice1d4 from '../svg_icons/dice1d4';
import dice1d6 from '../svg_icons/dice1d6';
import dice2d6 from '../svg_icons/dice2d6';
import dice1d8 from '../svg_icons/dice1d8';
import dice1d10 from '../svg_icons/dice1d10';
import dice2d10 from '../svg_icons/dice2d10';
import dice1d12 from '../svg_icons/dice1d12';
import dice1d20 from '../svg_icons/dice1d20';
import diceCustom from '../svg_icons/dice_custom';

const none = function() {
  return (
    <div></div>
  )
}

export const diceImages = {
  '1d4': dice1d4,
  '1d6': dice1d6,
  '2d6': dice2d6,
  '1d8': dice1d8,
  '1d10': dice1d10,
  '2d10': dice2d10,
  '1d12': dice1d12,
  '1d20': dice1d20,
  'custom': diceCustom,
  'none': none,
};
