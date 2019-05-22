import React, { useState } from 'react';
import DiceForm from './dice_form';
import DiceDropdown from './dice_dropdown';
import { diceImages } from './dice_images';
import './dice_roller.css';

function DiceRoller() {
  const [diceCount, setDiceCount] = useState(2);
  const [diceValue, setDiceValue] = useState(6);
  const [customCount, setCustomCount] = useState(2);
  const [customValue, setCustomValue] = useState(6);
  const [diceImage, setDiceImage] = useState('2d6');
  const [rollValue, setRollValue] = useState(0);
  const [rollSummary, setRollSummary] = useState('');

  const [explodes, setExplodes] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [summary, setSummary] = useState(false);
  const [customForm, setCustomForm] = useState(false);

  let bool = explodes ? 'on' : 'off';

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
    // setDiceImage('custom');
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
    DiceDropdown(setDiceRoller, setCustomDiceRoller) :
    <div></div>
  )

  const customFormMenu = (
    customForm ?
    DiceForm(setDropdown, diceCount, diceValue, setCount, setValue) :
    <div></div>
  )

  const summaryDisplay = (
    summary ?
    <div className='diceSummary'>{rollSummary}</div> :
    <div></div>
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
          <img className='diceIcon' src={diceImages[diceImage]} />
        </div>
        {dropdownMenu}
        {customFormMenu}
      </div>

      <div
        className='diceExplodes'
        onClick={() => setExplodes(!explodes)}>
        {bool}
      </div>
    </div>
  );
}

export default DiceRoller;
