import React from 'react';
import DiceRoller from './components/dice_roller';
import './App.css';

class App extends React.Component {
  render () {
    const customOptions = {
      backPanel: {
        border: '1.5px solid #4b010f',
        backgroundColor: '#220108',
        color: '#CCC',
      },
      dropdownPanel: {
        border: '1.5px solid #4b010f',
        backgroundColor: '#3b2124',
        color: '#4b010f',
      },
      dice: {
        lineColor: '#8e011a',
        fillColor: '#4b010f',
      },
      explodeOff: {
        fillColor: '#3b2124',
        lineColor: '#c79257',
      },
      explodeOn: {
        fillColor: '#3b2124',
        lineColor: '#c79257'
      },
      textFields: {
        border: '1.5px solid #c79257',
        backgroundColor: '#3b2124',
        color: '#c79257',
      },
      rollBtn: {
        border: '1.5px solid #4b010f',
        backgroundColor: '#8e011a',
        color: '#4b010f',
      },
    };

    return (
      <>
        <DiceRoller options={customOptions} />
        {/* <DiceRoller /> */}
      </>
    )
  }
}

export default App;
