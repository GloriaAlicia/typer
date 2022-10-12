import { useEffect } from 'react';

export const checkText = (text: string, typed: string) => {
  //.slice(-1);

  useEffect(() => {
    const firstLetter = text.charAt(0);
    console.log(firstLetter);
    const check = typed.charAt(typed.length - 1);
    console.log(firstLetter === check);
  }, [text, typed]);
};
