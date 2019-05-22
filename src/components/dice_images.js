import React from 'react';
import * as svg from './dice_svg_icons/dice_svg_icons';

const none = function() {
  return (
    <div></div>
  )
}

export const diceImages = {
  '1d4': svg.icon1d4,
  '1d6': svg.icon1d6,
  '2d6': svg.icon2d6,
  '1d8': svg.icon1d8,
  '1d10': svg.icon1d10,
  '2d10': svg.icon1d10,
  '1d12': svg.icon1d12,
  '1d20': svg.icon1d20,
  'custom': svg.custom,
  'none': none,
};
