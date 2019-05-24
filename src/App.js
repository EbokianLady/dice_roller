import React from 'react';
import DiceRoller from './components/dice_roller';
import './App.css';

class App extends React.Component {
  render () {
    const custom = { fillColor:'#686', lineColor:'#333' };
    const custom2 = {
      fillColor:'#535',
      lineColor:'#388',
      rollBtnBorder: '#838',
      rollBtnFill: '#204',
      rollBtnText: '#F6F'
    };
    return (
      <>
        <DiceRoller />
        <DiceRoller options={custom2} />
      </>
    )
  }
}

export default App;
