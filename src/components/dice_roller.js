import React, { useState } from 'react';
import DiceForm from './custom_form/custom_form';
import DiceDropdown from './dropdown/dropdown';
import diceIcons from './dice_icons';
import explodesOn from '../svg_icons/explode_many';
import explodesOff from '../svg_icons/explode_off';
import './dice_roller.css';
import defaultPalette from '../color_palettes/color_palettes';

function DiceRoller({ option = 'classic', preview = '1d6' }) {
  let palette = defaultPalette[option];
  let [count, value] = preview.split('d').map(el => parseInt(el));

  const [customCount, setCustomCount] = useState(count);
  const [customValue, setCustomValue] = useState(value);
  const [diceCount, setDiceCount] = useState(count);
  const [diceValue, setDiceValue] = useState(value);
  const [diceImage, setDiceImage] = useState(preview);
  const [rollValue, setRollValue] = useState(0);
  const [rollSummary, setRollSummary] = useState('');

  const [customForm, setCustomForm] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [explodes, setExplodes] = useState(false);
  const [summary, setSummary] = useState(false);


  const setDiceRoller = function(count, value, image) {
    setDiceCount(count);
    setDiceValue(value);
    setDiceImage(image);
    setRollValue(0);
    setRollSummary('');
    setCustomForm(false);
    setDropdown(false);
  };

  const setCustomDiceRoller = function() {
    setDiceCount(customCount);
    setDiceValue(customValue);
    setDiceImage('none');
    setRollValue(0);
    setRollSummary('');
    setCustomForm(true);
    setDropdown(false);
  };

  const setSummaryConditional = function () {
    if (rollSummary !== '') setSummary(true);
  };

  const setCount = function(count) {
    setCustomCount(parseInt(count));
    setDiceCount(parseInt(count));
  };

  const setValue = function (value) {
    setCustomValue(parseInt(value));
    setDiceValue(parseInt(value));
  };

  const rollDice = function() {
    let str = '';
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
      let result = rollSingleDie();
      str += ` + ${result[0]}`;
      total += result[1];
    }

    setRollSummary(str.slice(3));
    setRollValue(total);
  };

  const rollSingleDie = function() {
    let total = Math.floor(Math.random() * (diceValue)) + 1;
    let str;
    let bonus;

    if (explodes && total === diceValue) {
      bonus = Math.floor(Math.random() * (diceValue)) + 1;
      str = `(${total} + ${bonus})`;
      total += bonus;
    } else {
      str = `${total}`;
    }

    return [str, total];
  };

  const dropdownMenu = (
    dropdown ?
    DiceDropdown(setDiceRoller, setCustomDiceRoller, palette) :
    <div></div>
  )

  const customFormMenu = (
    customForm ?
    DiceForm(setDropdown, diceCount, diceValue, setCount, setValue, palette) :
    <div></div>
  )

  const summaryDisplay = (
    summary ?
    <div className='diceSummary'
      style={{...palette.textFields, borderLeft: 'none'}}>
      {rollSummary}
    </div> :
    <div></div>
  )

  const explodesIcon = (
    explodes ? explodesOn(palette.explodeOn) : explodesOff(palette.explodeOff)
  )

  return (
    <div
      className='diceRoller'
      style={palette.backPanel}>
      <div className='leftPanel'>
        <div style={palette.rollBtn}
          className='rollButton'
          onClick={() => rollDice()}>
          ROLL
        </div>
        <div className='diceTotal'
          style={palette.textFields}
          onMouseOver={() => setSummaryConditional()}
          onMouseOut={() => setSummary(false)}>
          {rollValue}
          {summaryDisplay}
        </div>
      </div>

      <div className='rightPanel'>
        <div
          onClick={() => setDropdown(true)}>
          <div className='diceIcon' >
            {diceIcons(palette.dice, diceImage)}
          </div>
        </div>
        {dropdownMenu}
        {customFormMenu}
        <div
          className='diceExplodes'
          onClick={() => setExplodes(!explodes)}>
          {explodesIcon}
        </div>
      </div>
    </div>
  );
}

export default DiceRoller;
