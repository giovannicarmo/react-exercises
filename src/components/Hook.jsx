import React, { useState, useEffect } from 'react';

export default props => {
  const [counter, setCounter] = useState(100);
  const [status, setEvenOrOdd] = useState('Even');

  useEffect(() => {
    counter % 2 === 0 ? setEvenOrOdd('Even') : setEvenOrOdd('Odd');
  });

  return (
    <div>
      <h1>{counter}</h1>
      <h3>{status}</h3>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
};
