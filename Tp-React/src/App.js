import React, { useState } from 'react';
import './App.css';
import Guy from './components/Guy';
import NewGuy from './components/NewGuy';

const RandomGuy = [
  {
    id: "",
    name: "",
    age: "",
  }
]

const App = () => {
  const [guy, setGuy] = useState(RandomGuy);

  const addGuyHandler = (guy) => {
    setGuy(
      (prevGuy) => {
      return [guy, ...prevGuy];
      }
    );

  };


  return (
    <div className='App-header'>
      <NewGuy onAddGuy={addGuyHandler} />
      <Guy items={guy} />
    </div>
  );
};

export default App;
