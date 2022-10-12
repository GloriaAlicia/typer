import { useEffect, useState } from 'react';

export const Timer = (initTime: number, start: boolean) => {
  const [time, setTime] = useState(initTime);

  //init
  const resetTimer = () => {
    if (start && time <= 0) {
      setTime(initTime);
    }
  };
  //stop
  useEffect(() => {
    time >= 0 && setTimeout(() => setTime((state) => state - 1), 1000);
  }, [time]);

  return time;
};
