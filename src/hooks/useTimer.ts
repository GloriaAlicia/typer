import { useEffect, useState } from 'react';

export const useTimer = (initTime: number) => {
  const [time, setTime] = useState(initTime);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime((state) => state - 1), 1000);
  }, [time]);

  return {
    time,
    setTime,
  };
};
