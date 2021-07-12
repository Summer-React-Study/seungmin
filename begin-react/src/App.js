import React, { useState, useRef } from 'react';
import FruitList from './FruitList';
import Inputs from './Inputs';

import './App.css';

function App() {
  console.log(Inputs);
  const initialFruit = [
    {
      id: 1,
      name: 'apple',
      sweetness: 'C'
    },
    {
      id: 2,
      name: 'peach',
      sweetness: 'A'
    },
    {
      id: 3,
      name: 'banana',
      sweetness: 'B'
    },
  ];
  const [fruits, setFruits] = useState(initialFruit);
  const _nextId = useRef(initialFruit.length);

  const onCreate = (name, sweetness) => {
    _nextId.current += 1;
    const newFruit = {
      id: _nextId.current,
      name,
      sweetness,
    }
    const nextFruits = [
      ...fruits,
      newFruit,
    ];

    setFruits(nextFruits);
    console.log("App:", fruits);
  }

  return (
    <div className="App">
      <Inputs onCreate={onCreate} />
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
