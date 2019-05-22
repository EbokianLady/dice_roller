import React, { useState } from 'react';
import DiceForm from './dice_form';
import DiceDropdown from './dice_dropdown';
import { diceImages } from './dice_images';
import explodesOn from '../images/explodes.png';
import explodesOff from '../images/explodes-off.png';
import './dice_roller.css';

function DiceRoller({ fillColor, lineColor }) {
  const [customCount, setCustomCount] = useState(2);
  const [customValue, setCustomValue] = useState(6);
  const [diceCount, setDiceCount] = useState(2);
  const [diceValue, setDiceValue] = useState(6);
  const [diceImage, setDiceImage] = useState('2d6');
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
    DiceDropdown(setDiceRoller, setCustomDiceRoller, fillColor, lineColor) :
    <div></div>
  )

  const customFormMenu = (
    customForm ?
    DiceForm(setDropdown, diceCount, diceValue, setCount, setValue, fillColor, lineColor) :
    <div></div>
  )

  const summaryDisplay = (
    summary ?
    <div className='diceSummary'>{rollSummary}</div> :
    <div></div>
  )

  const explodesIcon = (
    explodes ? explodesOn : explodesOff
  )

  return (
    <div className='diceRoller'>
      <div className='controlPanel'>
        <div
          className='rollButton'
          onClick={() => rollDice()}>
          ROLL
        </div>
        <div className='diceTotal'
          onMouseOver={() => setSummaryConditional()}
          onMouseOut={() => setSummary(false)}>
          {rollValue}
          {summaryDisplay}
        </div>
      </div>

      <div className='diceSelection'>
        <div
          onClick={() => setDropdown(true)}>
          <div className='diceIcon' >
            {diceImages[diceImage](fillColor, lineColor)}
          </div>
        </div>
        {dropdownMenu}
        {customFormMenu}
        <div
          className='diceExplodes'
          onClick={() => setExplodes(!explodes)}>
          <img className='explodesIcon' src={explodesIcon} alt='' />
        </div>
      </div>
    </div>
  );
}

export default DiceRoller;
