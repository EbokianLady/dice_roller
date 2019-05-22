import React, { useState } from 'react';
import DiceForm from './dice_form';
import DiceDropdown from './dice_dropdown';
import { diceImages } from './dice_images';
import explodesOn from '../images/explodes.png';
import explodesOff from '../images/explodes-off.png';
import './dice_roller.css';

import icon1d10, { ReactComponent as React1d10 } from '../images/1d10.svg';


function umbrella(fillColor="#444444", lineColor="999999") {
  return (
    <svg width="100%" height="100%" viewBox="0 0 144 144" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" style={{fillRule:'evenodd', clipRule:'evenodd', strokeLinejoin:'round',strokeMiterLimit:'1.41421'}}>
      <g id="_1d10" serifid="1d10">
        <path style={{ fill: fillColor }}
        d="M88.459,3.402c-7.712,0.146 -69.12,30.303 -72.275,32.95c-2.9,2.433 -10.558,14.115 -15.226,20.433c-1.478,2 -0.831,6.544 -0.734,7.651c0.475,5.473 42.995,67.291 47.087,72.669c2.578,3.388 6.929,4.601 12.11,2.935c6.909,-2.223 68.705,-24.813 72.166,-27.164c2.83,-1.924 10.693,-18.698 11.967,-23.372c0.165,-0.605 1.041,-5.53 -0.237,-8.473c-1.918,-4.413 -43.435,-71.299 -47.504,-75.266c-3.597,-3.507 -6.74,-2.375 -7.354,-2.363Z" />
        <path style={{fill: lineColor}}
        d="M88.459,3.402c-7.712,0.146 -69.12,30.303 -72.275,32.95c-2.9,2.433 -10.558,14.115 -15.226,20.433c-1.478,2 -0.831,6.544 -0.734,7.651c0.475,5.473 42.995,67.291 47.087,72.669c2.578,3.388 6.929,4.601 12.11,2.935c6.909,-2.223 68.705,-24.813 72.166,-27.164c2.83,-1.924 10.693,-18.698 11.967,-23.372c0.165,-0.605 1.041,-5.53 -0.237,-8.473c-1.918,-4.413 -43.435,-71.299 -47.504,-75.266c-3.597,-3.507 -6.74,-2.375 -7.354,-2.363Zm-24.839,129.899c4.49,-2.017 49.47,-17.579 57.055,-20.717c3.096,-1.281 6.312,-3.089 2.419,-5.295c-4.983,-2.824 -15.179,-7.848 -20.253,-8.935c-6.33,-1.356 -24.115,0.603 -38.304,1.025c-9.221,0.274 -10.755,4.833 -10.877,9.22c-0.41,14.83 -0.275,16.371 -0.247,21.453c0.04,7.331 5.506,5.362 10.207,3.249Zm-53.071,-61.301c4.044,5.677 29.262,46.029 33.611,52.99c3.404,5.448 7.077,12.575 7.126,1.403c0.025,-5.727 -1.068,-19.621 -2.516,-25.337c-1.59,-6.275 -30.599,-35.322 -35.34,-36.788c-12.282,-3.796 -5.871,3.534 -2.881,7.732Zm84.014,-52.705c0.7,4.541 9.855,59.32 10.76,67.782c0.24,2.25 1.678,5.864 4.866,8.652c3.452,3.02 8.636,6.962 12.534,9.046c8.275,4.424 8.183,-0.454 9.216,-1.676c2.733,-3.234 4.978,-8.856 6.412,-13.843c1.778,-6.187 -1.494,-11.121 -3.911,-14.541c-4.573,-6.469 -29.755,-46.179 -36.305,-56.669c-5.29,-8.473 -4.613,-5.499 -3.572,1.249Zm-12.699,-5.805c-3.469,3.011 -53.106,39.847 -59.388,45.586c-1.671,1.526 -3.774,3.54 -1.008,6.748c7.746,8.981 28.391,28.489 31.373,29.352c3.7,1.07 25.866,0.436 39.994,-0.623c6.419,-0.482 8.631,-7.832 8.253,-12.002c-1.34,-14.775 -8.034,-55.606 -9.547,-67.88c-0.896,-7.276 -5.786,-4.56 -9.677,-1.181Zm-7.738,3.402c-5.483,4.302 -54.746,41.235 -56.762,42.061c-6.617,2.712 -15.709,3.503 -8.66,-5.458c4.035,-5.13 6.568,-9.741 11.422,-13.089c6.85,-4.724 47.412,-23.18 51.874,-25.351c11.131,-5.414 9.378,-3.853 2.126,1.837Z" />
      </g>
    </svg>
  )
};

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
          <img className='diceIcon' src={diceImages[diceImage]} alt='' />
        </div>
        {dropdownMenu}
        {customFormMenu}
        <div
          className='diceExplodes'
          onClick={() => setExplodes(!explodes)}>
          <img className='explodesIcon' src={explodesIcon} alt='' />
        </div>
      </div>
      <div>
        {/* <img src={icon1d10} alt=''/> */}
        <React1d10 className='icon1d10'/>
        {umbrella()}
      </div>
    </div>
  );
}

export default DiceRoller;
