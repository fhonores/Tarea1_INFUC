// (Pseudo) Coders: José Luis Zúñiga - Felipe Honores
// Vintage style only for fun...


import React, { useState } from 'react';
import './style.css';
import { isEven } from './utils/isEven';
import { isPrime}  from './utils/isPrime';


export default function App() {
  const [count, setCount] = useState(1);
  const [prime, setPrime] = useState("");

  const handleClick = () => {
    setCount((current) => current + 1);
  };

  const handleReset = () => {
    setCount((current) => 1);
  };

  const handleReduce = () => {
    setCount((current) => current - 1);
  };

 


  return (
    <div>
      <h1> INF3551 - Actividad 1</h1>
      
      <p style={{ color: count & 1  ? 'red' : count & 2 ? 'yellow':'green'}}>Valor del contador: {count} </p>

      <button onClick={handleClick}>Incrementar </button> &nbsp;
      <button onClick={handleReduce}>Reducir</button> &nbsp;
      <button onClick={handleReset}>Reset</button>
      {count < 10 && <h3>El valor del contador es menor a 10</h3>}

  
      <p>El número {count} es... {isEven(count) ? 'par':'impar' } y {isPrime(count) ? 'primo':'compuesto'}</p>
    
    </div>


  );
}
