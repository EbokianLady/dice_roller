import React from 'react';
import DiceRoller from './components/dice_roller';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <>
        <DiceRoller option='earth' />
        {/* <DiceRoller /> */}
      </>
    )
  }
}

export default App;
