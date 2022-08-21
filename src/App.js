import React, { useState } from 'react';
import './style.css';
import { isEven } from './utils/isEven';
import { isPrime}  from './utils/isPrime';

function Title(props) {
  const text = props.text;
  return <h1>{text}</h1>;
}

export default function App() {
  const [count, setCount] = useState(5);
  const handleClick = () => {
    console.log('click');
    setCount((prevCount) => prevCount + 1);
  };
  const handleReset = () => {
    setCount((prevCount) => 0);
  };

  const handleReduce = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <Title text="INF3551"></Title>
      <button
        style={{ color: count < 5 ? 'red' : count < 10 ? 'blue' : 'green' }}
        onClick={handleClick}
      >
        Incrementar
      </button>
      <p>Valor del contador: {count}</p>
      <button onClick={handleReset}>Reset</button>
      {count < 10 && <h3>El valor del contador es menor a 10</h3>}

      <button onClick={handleReduce}>reducir contador</button>
      <p>El numero {count} es... {isEven(count) ? 'par':'impar' } y {isPrime(count) ? 'primo':'normal'}</p>

    </div>
  );
}
