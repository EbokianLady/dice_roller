import React from 'react';
import DiceRoller from './components/dice_roller';
import './App.css';

class App extends React.Component {

  render () {
    return (
      <DiceRoller fillColor='#686' lineColor='#333' />
    )
  }
}

export default App;
