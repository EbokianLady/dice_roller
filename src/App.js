import React from 'react';
import DiceRoller from './components/dice_roller';
import './App.css';
import logo from './logo.png'

class App extends React.Component {
  render () {
    return (
      <div className='display'>
        <h1>DICE R
          <img
            className='logo'
            src={logo} alt=''>
          </img>
          LLER</h1>
        <div className='sampleFrame'>
          <div className='sample'>
            <h2>Classic</h2>
            <DiceRoller key={1} />
          </div>
          <div className='sample'>
            <h2>Jewel</h2>
            <DiceRoller key={4} option='jewel' />
          </div>
          <div className='sample'>
            <h2>Galaxy</h2>
            <DiceRoller key={6} option='galaxy' />
          </div>
          <div className='sample'>
            <h2>Inverse</h2>
            <DiceRoller key={5} option='inverse' />
          </div>
          <div className='sample'>
            <h2>Blue Steel</h2>
            <DiceRoller key={2} option='blueSteel' />
          </div>
          <div className='sample'>
            <h2>Earth</h2>
            <DiceRoller key={3} option='earth' />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
