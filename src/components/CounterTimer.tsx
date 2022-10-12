import { useState } from 'react';
import { Timer } from '../hooks/timer';

export const CounterTimer = () => {
  const [init, setInit] = useState(false);
  return (
    <div>
      <span> {Timer(10, init)} </span>
      {/* <button onClick={() => setInit(true)}>Init timer</button> */}
    </div>
  );
};
